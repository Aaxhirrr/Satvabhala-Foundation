"use client";
import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";
import { Mail, Heart } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-32 pb-24 bg-transparent min-h-screen">
        <div className="mx-auto max-w-7xl px-8">
          <div className="text-center mb-16">
            <h1 className="text-[40px] font-bold leading-tight text-foreground mb-4 font-headings">
              Get Help & Contact
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              If you or someone you know is in crisis, please seek immediate
              help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Crisis Support Card */}
            <div className="bg-red-500/10 backdrop-blur-xl border border-red-200/50 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(220,38,38,0.06)]">
              <div className="flex items-center gap-3 mb-4 text-red-600">
                <Heart className="w-6 h-6 fill-current" />
                <h2 className="text-2xl font-bold font-headings">
                  Immediate Crisis Support
                </h2>
              </div>
              <p className="mb-4 text-foreground/80 font-sans">
                If you are in danger or need immediate assistance, call
                emergency services (911 in the US) or use these 24/7 resources:
              </p>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="font-bold text-foreground font-sans">
                    988 Suicide & Crisis Lifeline
                  </span>
                  <a
                    href="tel:988"
                    className="text-red-600 font-bold text-lg font-sans underline underline-offset-4 decoration-2"
                  >
                    Call or Text 988
                  </a>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-foreground font-sans">
                    Crisis Text Line
                  </span>
                  <a
                    href="sms:741741?body=HOME"
                    className="text-red-600 font-bold text-lg font-sans underline underline-offset-4 decoration-2"
                  >
                    Text HOME to 741741
                  </a>
                </li>
              </ul>
            </div>

            {/* General Contact Card */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Mail className="w-6 h-6" />
                <h2 className="text-2xl font-bold font-headings">Contact Us</h2>
              </div>
              <p className="mb-4 text-foreground/80 font-sans">
                For general inquiries about our organization, partnerships, or
                resources, please reach out to us by email.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary/60" />
                  <a
                    href="mailto:contact@satvabhala.org"
                    className="text-primary font-bold hover:underline font-sans"
                  >
                    contact@satvabhala.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
