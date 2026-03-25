"use client"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
    return (
        <>
            <PortfolioNavbar />
            <main className="pt-32 pb-24 bg-background min-h-screen">
                <div className="mx-auto max-w-4xl px-8">
                    <h1 className="text-[40px] font-normal leading-tight text-foreground mb-8 text-center">
                        About Us
                    </h1>

                    <div className="prose prose-lg mx-auto text-foreground opacity-80">
                        <p className="mb-6">
                            We are a dedicated non-profit organization committed to raising awareness about Borderline Personality Disorder (BPD). Our mission is to dismantle the stigma surrounding this complex condition and provide a beacon of hope for those affected.
                        </p>
                        <p className="mb-6">
                            Through education, advocacy, and community support, we strive to empower individuals living with BPD and their loved ones. We believe that with the right resources and understanding, recovery is not just possible—it is expected.
                        </p>
                        <h2 className="text-2xl font-medium text-primary mt-8 mb-4">Our Vision</h2>
                        <p className="mb-6">
                            A world where Borderline Personality Disorder is understood with compassion, treated with effective evidence-based care, and where no one has to face the challenges of mental illness alone.
                        </p>
                        <h2 className="text-2xl font-medium text-primary mt-8 mb-4">What We Do</h2>
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
