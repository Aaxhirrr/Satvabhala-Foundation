"use client"
import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import { Mail, Phone, Heart } from "lucide-react"

export default function ContactPage() {
    return (
        <>
            <PortfolioNavbar />
            <main className="pt-32 pb-24 bg-background min-h-screen">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-[40px] font-normal leading-tight text-[#111A4A] mb-4">
                            Get Help & Contact
                        </h1>
                        <p className="text-lg text-[#111A4A] opacity-60 max-w-2xl mx-auto">
                            If you or someone you know is in crisis, please seek immediate help.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                        {/* Crisis Support Card */}
                        <div className="bg-red-50 border border-red-100 p-8 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4 text-red-600">
                                <Heart className="w-6 h-6" />
                                <h2 className="text-2xl font-medium">Immediate Crisis Support</h2>
                            </div>
                            <p className="mb-4 text-[#111A4A] opacity-80">
                                If you are in danger or need immediate assistance, call emergency services (911 in the US) or use these 24/7 resources:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex flex-col">
                                    <span className="font-semibold text-[#111A4A]">988 Suicide & Crisis Lifeline</span>
                                    <span className="text-red-600">Call or Text 988</span>
                                </li>
                                <li className="flex flex-col">
                                    <span className="font-semibold text-[#111A4A]">Crisis Text Line</span>
                                    <span className="text-red-600">Text HOME to 741741</span>
                                </li>
                            </ul>
                        </div>

                        {/* General Contact Card */}
                        <div className="bg-white border border-[#e5e5e5] p-8 rounded-2xl">
                            <div className="flex items-center gap-3 mb-4 text-[#156d95]">
                                <Mail className="w-6 h-6" />
                                <h2 className="text-2xl font-medium">Contact Us</h2>
                            </div>
                            <p className="mb-4 text-[#111A4A] opacity-80">
                                For general inquiries about our organization, partnerships, or resources, please reach out to us.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-[#666666]" />
                                    <a href="mailto:contact@nonprofit.org" className="text-[#156d95] hover:underline">contact@nonprofit.org</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-[#666666]" />
                                    <span className="text-[#666666]">+1 (555) 123-4567</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
