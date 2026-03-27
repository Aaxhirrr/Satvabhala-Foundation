import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const contextCards = [
  {
    value: "1.4%",
    label: "Past-Year U.S. Adult Prevalence",
    description:
      "NIMH's National Comorbidity Study Replication estimate for borderline personality disorder.",
  },
  {
    value: "1.6-5.9%",
    label: "Commonly Cited U.S. Range",
    description:
      "A broader estimate often used to show how much BPD may be under-recognized or misdiagnosed.",
  },
  {
    value: "40%",
    label: "Misdiagnosed as Bipolar II in One Study",
    description:
      "NAMI cites evidence that many people meeting BPD criteria were misdiagnosed with bipolar II.",
  },
];

const bpdFAQs = [
  {
    question:
      "What is Borderline Personality Disorder (BPD), and how common is it?",
    answer:
      "BPD is a mental illness that affects emotion regulation, relationships, self-image, and behavior. NIMH estimates a past-year prevalence of 1.4% among U.S. adults, while other major references commonly cite a broader 1.6-5.9% range.",
  },
  {
    question: "Why is BPD so often misunderstood or misdiagnosed?",
    answer:
      "BPD is one of the most misunderstood and stigmatized conditions in mental health. It is often confused with bipolar disorder because both can involve intense emotions, impulsivity, and suicidal thinking, but BPD is defined more by chronic emotion regulation difficulties and interpersonal sensitivity than by distinct mood episodes.",
  },
  {
    question: "What does BPD look like in daily life?",
    answer:
      "BPD can involve intense emotional pain, unstable relationships, severe mood swings, fear of abandonment, chronic emptiness, identity disturbance, hopelessness, impulsive behavior, and self-harm or suicidal behavior. NewYork-Presbyterian describes dysregulation across emotional, behavioral, cognitive, interpersonal, and sense-of-self domains.",
  },
  {
    question: "What is splitting or black-and-white thinking?",
    answer:
      "Splitting is a form of black-and-white thinking where people or situations can suddenly feel all good or all bad. It can show up as idealizing someone after a kind moment, then feeling betrayed after a small disagreement, or swinging between 'I am amazing' and 'I am worthless.'",
  },
  {
    question: "How is BPD different from bipolar disorder?",
    answer:
      "Bipolar disorder is usually more episodic and often more responsive to medication, while BPD involves ongoing difficulties with emotion regulation, self-image, and relationships. BPD reactions are often tied to interpersonal stress, perceived rejection, or invalidation rather than longer mood cycles alone.",
  },
  {
    question: "What treatments are supported for BPD?",
    answer:
      "Psychotherapy is the foundation of care. Dialectical Behavior Therapy (DBT) teaches emotion regulation, distress tolerance, interpersonal effectiveness, and mindfulness skills. Other evidence-based approaches include transference-focused psychotherapy, mentalization-based therapy, and supportive psychiatric management.",
  },
  {
    question: "Is medication the main treatment for BPD?",
    answer:
      "No. Medication is not the primary treatment for BPD, and no medication is FDA-approved specifically for its core symptoms. When medication is used, it is generally for co-occurring conditions or for short-term crisis support, not as the central treatment approach.",
  },
];

const mythCards = [
  {
    myth: "Only women have BPD.",
    fact: "No. Women may be diagnosed more often, but epidemiologic data and advocacy organizations both note that men can have BPD too and are often underdiagnosed or labeled differently.",
  },
  {
    myth: "BPD is just moodiness or drama.",
    fact: "No. BPD is a serious mental illness involving dysregulation across emotions, behavior, thinking, relationships, and sense of self. The pain is real, and it deserves evidence-based care.",
  },
  {
    myth: "Medication fixes BPD on its own.",
    fact: "No. Therapy is the core treatment. Medication may sometimes help with specific co-occurring symptoms or short-term crisis care, but it is not the main intervention for BPD itself.",
  },
];

const supportCards = [
  {
    title: "What splitting can look like",
    items: [
      "Idealizing someone after a kind gesture, then feeling betrayed after a small conflict.",
      "Seeing people as completely safe or completely unsafe with very little middle ground.",
      "Moving quickly from feeling deeply connected to feeling suddenly distant or hurt.",
    ],
  },
  {
    title: "Why early understanding matters",
    items: [
      "BPD is frequently stigmatized, which can delay accurate diagnosis and treatment.",
      "Misdiagnosis can send people toward treatment plans that do not address the core problem.",
      "Clear information, compassionate care, and crisis support can be lifesaving.",
    ],
  },
];

export default function AwarenessPage() {
  return (
    <>
      <PortfolioNavbar />
      <main className="pt-32 pb-24 bg-transparent min-h-screen">
        <div className="mx-auto max-w-7xl px-8 space-y-16">
          <section className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-[40px] font-bold leading-tight text-foreground mb-4 font-headings">
                Understanding BPD
              </h1>
              <p className="text-lg text-foreground/75 leading-8 max-w-4xl mx-auto">
                Borderline Personality Disorder (BPD) affects an estimated
                1.6-5.9% of the U.S. population, yet it remains one of the most
                misunderstood, misdiagnosed, and stigmatized conditions in
                mental health. People living with BPD can experience intense
                emotional pain, unstable relationships, severe mood swings, fear
                of abandonment, splitting, and hopelessness. Accurate diagnosis
                matters because BPD is often mistaken for other conditions,
                especially bipolar disorder, and delayed care can have
                devastating consequences. Suicide risk in BPD is serious, which
                is why early recognition, proper treatment, and visible support
                matter so much.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contextCards.map((card) => (
                <div
                  key={card.label}
                  className="p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]"
                >
                  <div className="text-3xl font-bold text-primary mb-2 font-headings">
                    {card.value}
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    {card.label}
                  </h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <FAQSection title="Understanding BPD" faqs={bpdFAQs} />

          <section className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-[34px] font-bold leading-tight text-foreground mb-3 font-headings">
                Myths and Facts
              </h2>
              <p className="text-base text-foreground/70 max-w-3xl mx-auto">
                Part of awareness work is challenging the myths that make BPD
                harder to diagnose, treat, and discuss compassionately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mythCards.map((card) => (
                <div
                  key={card.myth}
                  className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50 p-6 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/75 mb-3">
                    Myth
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-4 font-headings">
                    {card.myth}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    <span className="font-semibold text-primary">Fact:</span>{" "}
                    {card.fact}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {supportCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 p-8 shadow-[0_8px_32px_0_rgba(20,51,28,0.06)]"
              >
                <h2 className="text-2xl font-bold text-foreground mb-5 font-headings">
                  {card.title}
                </h2>
                <ul className="space-y-3 text-foreground/80">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary/60 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
