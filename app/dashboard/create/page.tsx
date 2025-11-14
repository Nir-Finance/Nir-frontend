import ProgressSteps from "@/components/dashboard/ProgressSteps";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const STEPS = [
  { label: "Strategy Basics" },
  { label: "Strategy Composition" },
  { label: "Risk & Performance Preview" },
  { label: "Automation Settings" },
  { label: "Preview" },
];

export default function CreateStrategyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
        <div className="mb-4 sm:mb-8 flex flex-col gap-6 sm:gap-8 lg:flex-row lg:justify-between">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-[28px] sm:text-[32px] lg:text-4xl font-semibold text-[#E7FDFF]">
              Create New Strategy
            </h1>
            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[16px] text-[#88AEB1]">
              Build a custom DeFi strategy and share with the world
            </p>
          </div>

          <Button
            variant="ghost"
            className="rounded-full border border-[#1FE9F7]/30 bg-[#090909] px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 text-xs sm:text-sm font-semibold text-[#1FE9F7] transition hover:text-[#E2FEFF] cursor-pointer w-full sm:w-auto"
          >
            Save Draft
          </Button>
        </div>

        <div className="mb-8 sm:mb-12 overflow-x-auto">
          <ProgressSteps steps={STEPS} currentIndex={0} />
        </div>

        <section className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_24px_48px_rgba(6,24,26,0.45)] backdrop-blur-sm">
          <h2 className="mb-6 sm:mb-8 text-xs sm:text-sm text-center font-semibold uppercase tracking-[0.18em] text-[#F2F4F5]">
            Fill out the form carefully
          </h2>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-[1.5fr_1fr]">
            <label className="flex flex-col gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#89A8AA]">
                Enter Strategy Name
              </span>
              <input
                className="rounded-xl sm:rounded-2xl border border-[#EDFCFE0F] bg-[#EDFCFE0F] px-4 sm:px-5 py-3 sm:py-3.5 text-[13px] sm:text-[14px] text-[#D6D7D7] placeholder:text-[#597778] focus:border-[#1FE9F7] focus:outline-none focus:ring-0"
                placeholder="Vault Drip"
                type="text"
              />
            </label>

            <label className="flex flex-col gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#89A8AA]">
                Risk Level
              </span>
              <div className="rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] text-[#D6D7D7]">
                <Select>
                  <SelectTrigger className="bg-[#EDFCFE0F] w-full text-[#D6D7D7] placeholder:text-[#597778] border border-[#EDFCFE0F] focus:border-[#1FE9F7] focus:outline-none focus:ring-0 px-4 sm:px-5 py-4 sm:py-6">
                    <SelectValue placeholder="Risk Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#15353add] text-[#ADBEBF] border-none outline-none focus:outline-none focus:ring-0 focus:border-none cursor-pointer">
                    <SelectItem value="low" className="cursor-pointer">
                      Low Risk
                    </SelectItem>
                    <SelectItem value="medium" className="cursor-pointer">
                      Medium Risk
                    </SelectItem>
                    <SelectItem value="high" className="cursor-pointer">
                      High Risk
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </label>
          </div>

          <label className="mt-6 sm:mt-8 flex flex-col gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm uppercase tracking-[0.18em] text-[#89A8AA]">
              Description
            </span>
            <textarea
              rows={5}
              className="rounded-xl sm:rounded-2xl border border-[#EDFCFE0F] bg-[#EDFCFE0F] px-4 sm:px-5 py-3 sm:py-4 text-[14px] sm:text-[15px] text-[#CDEFF1] placeholder:text-[#597778] focus:border-[#1FE9F7] focus:outline-none focus:ring-0 resize-none"
              placeholder="Describe your strategy"
            />
          </label>

          <div className="mt-8 sm:mt-10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <Button
              variant="ghost"
              className="rounded-full border border-[#1FE9F7]/30 bg-[#090909] px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 text-xs sm:text-sm font-semibold text-[#1FE9F7] transition hover:text-[#1FE9F7]/80 hover:bg-transparent cursor-pointer w-full sm:w-auto"
            >
              Go Back
            </Button>
            <Button
              variant="default"
              className="text-xs sm:text-sm font-medium text-[#1FE9F7] join-strategy-button bg-linear-to-r from-[#045358] to-[#045358] rounded-lg px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 text-center cursor-pointer w-full sm:w-auto"
            >
              Continue
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
