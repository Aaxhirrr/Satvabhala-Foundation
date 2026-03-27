"use client";

import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const stats = [
  {
    value: "1.4%",
    label: "Past-Year U.S. Adult Prevalence",
    description:
      "NIMH's National Comorbidity Study Replication estimate for borderline personality disorder.",
    source: "Source 1",
  },
  {
    value: "1.6-5.9%",
    label: "Commonly Cited Prevalence Range",
    description:
      "A wider range often cited across educational and clinical references when discussing BPD.",
    source: "Sources 1-2",
  },
  {
    value: "40%",
    label: "Misdiagnosed as Bipolar II in One Study",
    description:
      "NAMI cites evidence that many people meeting BPD criteria were misdiagnosed with Bipolar II.",
    source: "Source 5",
  },
  {
    value: "3:1",
    label: "Current Diagnosis Ratio Often Reported",
    description:
      "This reflects diagnosis patterns, not proof that only women have BPD. Men are often underdiagnosed.",
    source: "Source 6",
  },
];

export default function StatisticsPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-32 pb-24 bg-transparent min-h-screen">
        <div className="mx-auto max-w-7xl px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-[40px] font-bold leading-tight text-foreground mb-4 font-headings">
              Key Statistics
            </h1>
            <p className="text-lg text-foreground/60 leading-8">
              These figures focus on prevalence, misdiagnosis, and public myths
              so visitors can understand both the scale of BPD and why accurate
              recognition matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)] hover:shadow-[0_8px_32px_0_rgba(20,51,28,0.12)] transition-all duration-300 group"
              >
                <div className="text-4xl font-bold text-primary mb-2 font-headings group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                  {stat.source}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
