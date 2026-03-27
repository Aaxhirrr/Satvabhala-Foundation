import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";

const sources = [
  {
    label: "Source 1",
    name: "National Institute of Mental Health (NIMH)",
    url: "https://www.nimh.nih.gov/health/topics/borderline-personality-disorder",
    description:
      "Used for prevalence, treatment, and high-level diagnostic context.",
    highlights: [
      "Past-year prevalence of BPD in U.S. adults: 1.4%.",
      "Sex and race were not found to be associated with personality disorder prevalence.",
      "NIMH also describes BPD as a serious mental illness affecting emotion regulation, impulsivity, and relationships.",
    ],
  },
  {
    label: "Source 2",
    name: "NewYork-Presbyterian Health Matters",
    url: "https://healthmatters.nyp.org/understanding-difference-bipolar-borderline-personality-disorder/",
    description:
      "Used for BPD vs. bipolar distinctions, symptom patterns, and treatment approaches.",
    highlights: [
      "Describes dysregulation across emotional, behavioral, cognitive, interpersonal, and self domains.",
      "Explains black-and-white thinking and fear of abandonment in practical terms.",
      "Summarizes DBT and transference-focused psychotherapy in accessible language.",
    ],
  },
  {
    label: "Source 3",
    name: "Revive Research Institute",
    url: "https://www.reviveresearch.org/blog/borderline-personality-disorder-splitting/",
    description:
      "Used to explain splitting, idealization, devaluation, and real-world relationship patterns.",
    highlights: [
      "Frames splitting as black-and-white thinking rather than manipulation.",
      "Provides concrete examples of idealization and devaluation in everyday relationships.",
      "Notes that episodes can last minutes, repeat throughout a day, or persist longer without coping tools.",
    ],
  },
  {
    label: "Source 4",
    name: "PMC / Clinical Review on BPD Medication Use",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10786009/",
    description:
      "Used for medication context and why therapy remains the central treatment approach.",
    highlights: [
      "No medication is FDA-approved specifically for BPD core symptoms.",
      "Medication should be limited to severe comorbid conditions or acute crises when needed.",
      "Highlights the risks of polypharmacy despite weak evidence for routine use.",
    ],
  },
  {
    label: "Source 5",
    name: "NAMI: Why Borderline Personality Disorder is Misdiagnosed",
    url: "https://www.nami.org/blog/why-borderline-personality-disorder-is-misdiagnosed/",
    description:
      "Used for misdiagnosis context and public education around stigma.",
    highlights: [
      "BPD is one of the most commonly misdiagnosed mental health conditions.",
      "NAMI cites evidence that BPD is often mistaken for Bipolar II.",
      "Helps explain why inaccurate diagnosis delays the right treatment and reinforces stigma.",
    ],
  },
  {
    label: "Source 6",
    name: "Borderline in the ACT: BPD Myths and Facts",
    url: "https://www.borderlineintheact.org.au/living-with-bpd/bpd-myths-and-facts/",
    description: "Used for myth-busting, especially around gender and stigma.",
    highlights: [
      "Challenges the myth that only women have BPD.",
      "Notes the currently observed 3:1 diagnosis ratio while also explaining how diagnostic bias can shape that picture.",
      "Reinforces that people with BPD are genuinely suffering and deserve appropriate support.",
    ],
  },
];

export default function SourcesPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-32 pb-24 bg-transparent min-h-screen">
        <div className="mx-auto max-w-7xl px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-[40px] font-bold leading-tight text-foreground mb-4 font-headings">
              Sources & Citations
            </h1>
            <p className="text-lg text-foreground/60 leading-8">
              These are the main references currently informing the awareness,
              statistics, myth-busting, and treatment guidance on this site. The
              goal is to keep the information compassionate, readable, and
              grounded in credible sources.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {sources.map((source) => (
              <div
                key={source.label}
                className="p-6 md:p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)] hover:shadow-[0_8px_32px_0_rgba(20,51,28,0.12)] transition-all duration-300"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75 mb-2">
                      {source.label}
                    </p>
                    <h2 className="text-2xl font-semibold text-foreground mb-2 font-headings">
                      {source.name}
                    </h2>
                    <p className="text-muted-foreground leading-7">
                      {source.description}
                    </p>
                  </div>

                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Visit Source
                  </a>
                </div>

                <ul className="mt-6 space-y-3">
                  {source.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-foreground/80 leading-7"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary/60 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 text-sm text-muted-foreground/85 break-all">
                  {source.url}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
