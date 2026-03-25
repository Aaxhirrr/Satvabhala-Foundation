"use client"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"

const stats = [
    {
        value: "1.6%",
        label: "General Population",
        description: "Estimated prevalence of BPD in the general population."
    },
    {
        value: "20%",
        label: "Inpatient Psychiatric Population",
        description: "BPD is common in clinical settings."
    },
    {
        value: "75%",
        label: "Diagnosed in Women",
        description: "Currently, BPD is diagnosed more frequently in women, though men are likely underdiagnosed."
    },
    {
        value: "80%+",
        label: "Remission Rate",
        description: "With proper treatment, a significant majority of patients achieve remission."
    }
]

export default function StatisticsPage() {
    return (
        <>
            <PortfolioNavbar />
            <main className="pt-32 pb-24 bg-background min-h-screen">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-[40px] font-normal leading-tight text-foreground mb-4">
                            Key Statistics
                        </h1>
                        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                            Understanding the prevalence and impact of Borderline Personality Disorder through data.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all shadow-sm"
                            >
                                <div className="text-4xl font-medium text-secondary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-lg font-medium text-foreground mb-2">
                                    {stat.label}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {stat.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
