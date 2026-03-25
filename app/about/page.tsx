"use client"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
    return (
        <>
            <PortfolioNavbar />
            <main className="pt-32 pb-24 bg-transparent min-h-screen">
                <div className="mx-auto max-w-4xl px-8">
                    <h1 className="text-[40px] font-bold leading-tight text-foreground mb-12 text-center font-headings">
                        About Us
                    </h1>

                    <div className="prose prose-lg mx-auto text-foreground/90 bg-white/40 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]">
                        <p className="mb-6">
                            We are a dedicated non-profit organization committed to raising awareness about Borderline Personality Disorder (BPD). Our mission is to dismantle the stigma surrounding this complex condition and provide a beacon of hope for those affected.
                        </p>
                        <p className="mb-6">
                            Through education, advocacy, and community support, we strive to empower individuals living with BPD and their loved ones. We believe that with the right resources and understanding, recovery is not just possible—it is expected.
                        </p>
                        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-headings">Our Vision</h2>
                        <p className="mb-6">
                            A world where Borderline Personality Disorder is understood with compassion, treated with effective evidence-based care, and where no one has to face the challenges of mental illness alone.
                        </p>
                        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-headings">What We Do</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide accurate, science-based information about BPD.</li>
                            <li>Connect individuals with treatment resources and support groups.</li>
                            <li>Advocate for better mental health policies and funding.</li>
                            <li>Create a supportive community for healing and growth.</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
