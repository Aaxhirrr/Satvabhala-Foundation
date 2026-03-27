import { Footer } from "@/components/Footer";
import { PortfolioNavbar } from "@/components/PortfolioNavbar";

const comparisonRows = [
  {
    topic: "Pattern Over Time",
    bpd: "BPD is often experienced as chronic difficulty with emotion regulation, identity, and relationships. Reactions can feel immediate, intense, and closely tied to perceived rejection, abandonment, or invalidation.",
    bipolar:
      "Bipolar disorder is more episode-based. Mood states such as mania, hypomania, or depression tend to unfold over longer stretches of time rather than changing mainly in response to interpersonal stress.",
  },
  {
    topic: "What It Can Look Like",
    bpd: "People may struggle with black-and-white thinking, fear of abandonment, unstable relationships, a shifting sense of self, impulsivity, and intense emotional pain.",
    bipolar:
      "People may experience elevated or depressed mood, changes in sleep and energy, racing thoughts, slowed thinking, or changes in motivation depending on the episode.",
  },
  {
    topic: "What Often Fuels Distress",
    bpd: "Interpersonal conflict, invalidation, feeling misunderstood, or feeling suddenly unsafe in a relationship can intensify symptoms quickly.",
    bipolar:
      "Mood episodes are often more rooted in changes within the nervous system and do not depend as strongly on a single relational trigger.",
  },
  {
    topic: "Treatment Focus",
    bpd: "Psychotherapy is the core treatment. DBT helps with emotion regulation, distress tolerance, interpersonal effectiveness, and mindfulness. Other evidence-based approaches include transference-focused psychotherapy.",
    bipolar:
      "Medication is often a central part of bipolar treatment, usually alongside therapy, psychoeducation, and long-term mood management.",
  },
];

const dysregulationAreas = [
  {
    title: "Emotional",
    description:
      "Feelings can become overwhelming quickly, making it hard to calm down once distress rises.",
  },
  {
    title: "Behavioral",
    description:
      "Impulsive actions may appear in moments of pain, fear, or desperation.",
  },
  {
    title: "Cognitive",
    description:
      "Black-and-white thinking and difficulty holding nuance can shape how situations are interpreted.",
  },
  {
    title: "Interpersonal",
    description:
      "Relationships can feel intensely meaningful, intensely painful, or suddenly unsafe.",
  },
  {
    title: "Sense of Self",
    description:
      "A person may struggle with identity, self-worth, and a stable internal picture of who they are.",
  },
];

const splittingCards = [
  {
    title: "How Splitting Can Show Up",
    points: [
      "Praising someone as flawless after a kind gesture.",
      "Feeling betrayed and cutting them off after a minor disagreement.",
      "Swinging between 'I am amazing' and 'I am worthless.'",
    ],
  },
  {
    title: "Idealization",
    points: [
      "The other person feels perfect.",
      "They feel completely safe.",
      "They can seem like the only person who truly understands.",
    ],
  },
  {
    title: "Devaluation",
    points: [
      "That same person may suddenly feel cruel.",
      "Past kindness can feel erased in the moment.",
      "The relationship can suddenly feel fake or unsafe.",
    ],
  },
];

const treatmentNotes = [
  {
    title: "Medication and BPD",
    eyebrow: "Source 4",
    description:
      "No medication is FDA-approved specifically for BPD, and none has consistently helped core symptoms. Medication may still be used carefully for severe co-occurring conditions or acute crises, but therapy remains the central treatment approach.",
  },
  {
    title: "Why Misdiagnosis Happens",
    eyebrow: "Source 5",
    description:
      "NAMI notes that BPD is one of the most commonly misdiagnosed mental health conditions. One study found that 40% of people who met criteria for BPD, but not bipolar disorder, were still misdiagnosed with Bipolar II because of overlapping traits like impulsivity, intense emotions, and suicidal thinking.",
  },
];

export default function BeyondTheDiagnosisPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-32 pb-24 bg-transparent min-h-screen">
        <div className="mx-auto max-w-7xl px-8 space-y-16">
          <section className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/75 mb-4">
              Beyond the Diagnosis
            </p>
            <h1 className="text-[40px] font-bold leading-tight text-foreground mb-5 font-headings">
              Looking Past Labels and Toward Understanding
            </h1>
            <p className="text-lg text-foreground/75 leading-8">
              This page brings together the context from Sources 2 through 5 so
              visitors can better understand what BPD can feel like, why it is
              often confused with bipolar disorder, and why accurate,
              compassionate treatment matters. The goal is not to flatten either
              diagnosis, but to make the differences easier to see without
              losing the humanity behind them.
            </p>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-primary/15 bg-primary/5 backdrop-blur-xl p-8 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80 mb-3">
                Borderline Personality Disorder
              </p>
              <h2 className="text-3xl font-bold text-foreground mb-4 font-headings">
                BPD
              </h2>
              <p className="text-foreground/80 leading-8">
                Source 2 describes BPD as dysregulation across emotional,
                behavioral, cognitive, interpersonal, and self domains. In daily
                life, that can mean intense emotional pain, black-and-white
                thinking, deep fears of abandonment, unstable relationships, and
                a rapidly shifting sense of safety or self-worth.
              </p>
            </div>

            <div className="rounded-3xl border border-secondary/25 bg-white/45 backdrop-blur-xl p-8 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/55 mb-3">
                Bipolar Disorder
              </p>
              <h2 className="text-3xl font-bold text-foreground mb-4 font-headings">
                Bipolar
              </h2>
              <p className="text-foreground/80 leading-8">
                Source 2 explains that bipolar disorder is more rooted in the
                biology of the nervous system and is often more responsive to
                medication. While both diagnoses can involve intense emotions,
                bipolar disorder is generally understood through mood episodes
                rather than the same pattern of chronic relational and identity
                instability seen in BPD.
              </p>
            </div>
          </section>

          <section>
            <div className="text-center mb-8">
              <h2 className="text-[34px] font-bold leading-tight text-foreground mb-3 font-headings">
                BPD and Bipolar, Side by Side
              </h2>
              <p className="text-base text-foreground/70 max-w-3xl mx-auto">
                This is the shorter comparison view: the same questions, two
                different patterns, one clearer picture.
              </p>
            </div>

            <div className="space-y-4">
              {comparisonRows.map((row) => (
                <div
                  key={row.topic}
                  className="grid grid-cols-1 xl:grid-cols-[220px_1fr_1fr] gap-4 rounded-3xl bg-white/35 backdrop-blur-xl border border-white/50 p-4 md:p-5 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]"
                >
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-foreground font-headings">
                      {row.topic}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75 mb-3">
                      BPD
                    </p>
                    <p className="text-sm leading-7 text-foreground/80">
                      {row.bpd}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-secondary/20 bg-white/55 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/55 mb-3">
                      Bipolar Disorder
                    </p>
                    <p className="text-sm leading-7 text-foreground/80">
                      {row.bipolar}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="text-center mb-8">
              <h2 className="text-[34px] font-bold leading-tight text-foreground mb-3 font-headings">
                The Five Areas of Dysregulation
              </h2>
              <p className="text-base text-foreground/70 max-w-3xl mx-auto">
                One of the clearest frameworks from Source 2 is that BPD can
                affect multiple systems at once, not just mood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
              {dysregulationAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 p-6 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-headings">
                    {area.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="text-center mb-8">
              <h2 className="text-[34px] font-bold leading-tight text-foreground mb-3 font-headings">
                Splitting, Idealization, and Devaluation
              </h2>
              <p className="text-base text-foreground/70 max-w-3xl mx-auto">
                Source 3 frames splitting as something that can hide inside
                ordinary moments, especially when a person is overwhelmed and
                does not yet have the tools to regulate what they are feeling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {splittingCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 p-7 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-5 font-headings">
                    {card.title}
                  </h3>
                  <ul className="space-y-3">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-foreground/80 leading-7"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-primary/60 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/50 bg-white/35 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75 mb-3">
                Source 3
              </p>
              <p className="text-foreground/80 leading-8">
                There is no universal timeline. Episodes can last minutes during
                an argument, repeat several times in one day, or stay active for
                longer when the person does not have the coping tools or support
                they need.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {treatmentNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 p-8 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75 mb-3">
                  {note.eyebrow}
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-4 font-headings">
                  {note.title}
                </h2>
                <p className="text-foreground/80 leading-8">
                  {note.description}
                </p>
              </div>
            ))}
          </section>

          <section className="rounded-3xl bg-primary/6 border border-primary/15 p-8 text-center shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80 mb-3">
              Sources 2-5
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4 font-headings">
              Understanding Should Always Come Before Judgment
            </h2>
            <p className="max-w-3xl mx-auto text-foreground/80 leading-8 mb-6">
              Labels can help people access care, but they should never erase
              nuance. If you want to review the full citations behind this page,
              they are still preserved on the Sources page exactly as part of
              the larger educational site.
            </p>
            <a
              href="/sources"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              View Full Sources
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
