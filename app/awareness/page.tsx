"use client"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"

const bpdFAQs = [
    {
        question: "What is Borderline Personality Disorder (BPD)?",
        answer: "Borderline Personality Disorder (BPD) is a mental health condition marked by intense emotional experiences, instability in relationships, and impulsivity. Individuals with BPD often struggle with self-image and fear of abandonment, but with treatment, significant improvement is possible."
    },
    {
        question: "What are the common symptoms?",
        answer: "Symptoms include intense mood swings, impulsive behaviors, relationship instability, chronic feelings of emptiness, intense anger, and recurrent suicidal behavior or self-harm. These symptoms can vary in severity and frequency."
    },
    {
        question: "How is BPD treated?",
        answer: "The most effective treatments for BPD are psychotherapies, particularly Dialectical Behavior Therapy (DBT) and Cognitive Behavioral Therapy (CBT). Medication may also be used to manage specific symptoms like depression or anxiety."
    },
    {
        question: "Can people recover from BPD?",
        answer: "Yes. Research shows that with appropriate treatment, the majority of people with BPD experience a significant reduction in symptoms and can achieve remission. Many go on to live fulfilling, stable lives."
    }
]

export default function AwarenessPage() {
    return (
        <>
            <PortfolioNavbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <FAQSection title="Understanding BPD" faqs={bpdFAQs} />
            </div>
            <Footer />
        </>
    )
}
