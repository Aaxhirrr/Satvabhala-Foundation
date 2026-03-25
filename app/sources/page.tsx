"use client"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"

const sources = [
    {
        name: "National Institute of Mental Health (NIMH)",
        url: "https://www.nimh.nih.gov/health/topics/borderline-personality-disorder",
        description: "Official government information on BPD."
    },
    {
        name: "National Alliance on Mental Illness (NAMI)",
        url: "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Borderline-Personality-Disorder",
        description: "Support and advocacy organization."
    },
    {
        name: "National Education Alliance for Borderline Personality Disorder (NEABPD)",
        url: "https://www.borderlinepersonalitydisorder.org/",
        description: "Resources for families and professionals."
    },
    {
        name: "Mayo Clinic",
        url: "https://www.mayoclinic.org/diseases-conditions/borderline-personality-disorder",
        description: "Medical overview, symptoms, and causes."
    }
]

export default function SourcesPage() {
    return (
        <>
            <PortfolioNavbar />
            <main className="pt-32 pb-24 bg-transparent min-h-screen">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-[40px] font-bold leading-tight text-foreground mb-4 font-headings">
                            Sources & Citations
                        </h1>
                        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                            Trusted resources for the information provided on this website.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {sources.map((source, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)] hover:shadow-[0_8px_32px_0_rgba(20,51,28,0.12)] transition-all duration-300">
                                <a href={source.url} target="_blank" rel="noopener noreferrer" className="group block">
                                    <h3 className="text-xl font-medium text-primary group-hover:underline mb-2">
                                        {source.name}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {source.description}
                                    </p>
                                    <div className="mt-2 text-sm text-muted-foreground/80 truncate">
                                        {source.url}
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
