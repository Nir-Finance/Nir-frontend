import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { ANON_USER_COOKIE } from "@/lib/constants";
import { db, strategies } from "@/db/client";
import { ensureUser } from "@/db/user";

export async function POST(req: NextRequest) {
  const cookie = req.cookies.get(ANON_USER_COOKIE);

  if (!cookie) {
    return NextResponse.json({ error: "Missing user cookie" }, { status: 400 });
  }

  const userId = cookie.value;
  await ensureUser(userId);

  const body = await req.json();
  const strategyId = body?.strategyId as number | undefined;
  const vaultStrategyId = body?.vaultStrategyId as number | undefined;

  if (!strategyId || !vaultStrategyId) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await db
    .update(strategies)
    .set({ vaultStrategyId })
    .where(eq(strategies.id, strategyId));

  return NextResponse.json({ ok: true });
}
