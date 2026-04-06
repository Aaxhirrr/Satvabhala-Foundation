import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";

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
              This is a dedicated non-profit organization committed to raising
              awareness about Borderline Personality Disorder (BPD). Our mission
              is to dismantle the stigma surrounding this complex condition and
              provide a beacon of hope for those affected.
            </p>
            <p className="mb-6">
              Through education, advocacy, and community support, we strive to
              empower individuals living with BPD and their loved ones. We
              believe that with the right resources and understanding, recovery
              is not just possible, but something people deserve the chance to
              reach.
            </p>

            <div className="not-prose my-10 rounded-2xl border border-primary/15 bg-primary/5 p-6 shadow-[0_8px_24px_0_rgba(20,51,28,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80 font-sans">
                Why This Work Is Personal
              </p>
              <div className="mt-3 space-y-4 text-base leading-7 text-foreground/85 font-sans">
                <p>
                  My best friend Sidhant was a freshman at ASU when he died by
                  suicide in November 2022 after struggling with borderline
                  personality disorder.
                </p>
                <p>
                  BPD is one of the most misunderstood and stigmatized mental
                  health conditions. While it is often confused with other
                  disorders, the deeper issue is how frequently it is dismissed,
                  minimized, or left unspoken. The stigma surrounding it can
                  make people feel ashamed to open up, even when they need
                  support the most.
                </p>
                <p>
                  Sidhant felt that weight. There were things he struggled to
                  say out loud.
                </p>
                <p>
                  He deserved more understanding, more compassion, and more
                  space to be heard.
                </p>
                <p>
                  This foundation was created so that others do not have to feel
                  that same silence. To create a space where people can talk
                  about BPD openly, access support without judgment, and feel
                  seen in what they are going through.
                </p>
                <p className="font-medium text-foreground/95">
                  His story is why this work matters.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-headings">
              Our Vision
            </h2>
            <p className="mb-6">
              A world where Borderline Personality Disorder is understood with
              compassion, treated with effective evidence-based care, and where
              no one has to face the challenges of mental illness alone.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 font-headings">
              What We Do
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, science-based information about BPD.</li>
              <li>
                Connect individuals with treatment resources and support groups.
              </li>
              <li>Advocate for better mental health policies and funding.</li>
              <li>Create a supportive community for healing and growth.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
