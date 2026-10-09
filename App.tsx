import React, { useState } from "react";

type IconName =
  | "arrow"
  | "camera"
  | "check"
  | "chevron"
  | "play"
  | "spark"
  | "target"
  | "github"
  | "copy"
  | "reset"
  | "filter"
  | "info";

interface LevelPlan {
  label: string;
  short: string;
  plan: string[];
}

interface StyleVariation {
  name: string;
  detail: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  cue: string;
}

function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    camera: (
      <>
        <path d="M14.5 6 13 4h-2L9.5 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4.5Z" />
        <circle cx="12" cy="12.5" r="3.5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    play: <path d="m9 7 7 5-7 5V7Z" />,
    spark: (
      <>
        <path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3Z" />
        <path d="m18 15 .7 2.3L21 18l-2.3.7L18 21l-.7-2.3L15 18l2.3-.7L18 15Z" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="m15 9 5-5" />
      </>
    ),
    github: (
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
    ),
    copy: (
      <>
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </>
    ),
    reset: (
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8m0-5v5h5" />
    ),
    filter: (
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4m0-4h.01" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const levels: LevelPlan[] = [
  {
    label: "Beginner",
    short: "New",
    plan: [
      "3 × 8 scapular pulls",
      "3 × 20 sec active hangs",
      "3 × 5 slow negatives",
    ],
  },
  {
    label: "Intermediate",
    short: "Some reps",
    plan: [
      "5 × 2 clean pull-ups",
      "3 × 5 slow negatives",
      "3 × 10 hollow rocks",
    ],
  },
  {
    label: "Advanced",
    short: "Strong",
    plan: [
      "4 sets at 60% max",
      "3 × 4 paused pull-ups",
      "3 × 8 chest-to-bar rows",
    ],
  },
];

const formSteps = [
  {
    number: "01",
    title: "Set your grip",
    text: "Hands just outside shoulder width. Wrap your thumbs and start from a controlled dead hang.",
    image:
      "https://images.unsplash.com/photo-1683889842940-ed1e5233e291?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
    alt: "Close-up of hands setting a secure grip on a pull-up bar",
  },
  {
    number: "02",
    title: "Build tension",
    text: "Pull your shoulders down, brace your core, and keep your ribs stacked over your pelvis.",
    image:
      "https://images.unsplash.com/photo-1575898311530-2af21854a893?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
    alt: "Athlete establishing a controlled hanging position",
  },
  {
    number: "03",
    title: "Drive elbows down",
    text: "Lead with your chest as your elbows travel toward your back pockets. Avoid kicking or swinging.",
    image:
      "https://images.unsplash.com/photo-1733517301619-a07a9ae9c6ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
    alt: "Athlete pulling upward with elbows driving down",
  },
  {
    number: "04",
    title: "Own the descent",
    text: "Clear the bar with your chin, then lower under control until your elbows fully extend.",
    image:
      "https://images.unsplash.com/photo-1704374810187-154ccc66798f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800",
    alt: "Athlete at the top position of a pull-up",
  },
];

const mistakes = [
  [
    "Kipping early",
    "Keep legs quiet and build strength through the full range first.",
  ],
  [
    "Shrugged shoulders",
    "Initiate by pulling shoulder blades down before bending the elbows.",
  ],
  [
    "Half reps",
    "Use assistance that lets you reach a full hang and clear the bar.",
  ],
];

const pullUpStyles: StyleVariation[] = [
  {
    name: "Chin-up",
    detail: "Palms toward you",
    level: "Beginner",
    cue: "Drive elbows down and keep your chest tall.",
  },
  {
    name: "Band-assisted",
    detail: "Supported strength",
    level: "Beginner",
    cue: "Use only enough assistance to keep every rep clean.",
  },
  {
    name: "Towel grip",
    detail: "Grip endurance",
    level: "Advanced",
    cue: "Crush the towel and keep both shoulders level.",
  },
  {
    name: "Tarzan",
    detail: "Alternating sides",
    level: "Advanced",
    cue: "Pull one shoulder toward the bar, then switch sides.",
  },
  {
    name: "Weighted",
    detail: "Added resistance",
    level: "Advanced",
    cue: "Stay rigid and add load only after eight clean reps.",
  },
  {
    name: "Side-to-side",
    detail: "Lateral control",
    level: "Intermediate",
    cue: "Travel smoothly without dropping between sides.",
  },
  {
    name: "Around the world",
    detail: "Circular path",
    level: "Advanced",
    cue: "Move slowly through an even circle around the bar.",
  },
  {
    name: "Wide grip",
    detail: "Upper-back focus",
    level: "Intermediate",
    cue: "Use a moderate width and avoid forcing your shoulders.",
  },
  {
    name: "Neutral grip",
    detail: "Palms facing",
    level: "Beginner",
    cue: "Keep wrists stacked and elbows close to your ribs.",
  },
  {
    name: "Single grip",
    detail: "One-hand emphasis",
    level: "Advanced",
    cue: "Start assisted and resist twisting through your torso.",
  },
];

const trainingDays = [
  {
    day: "MON",
    title: "Technique",
    duration: "30 min",
    detail: "Grip, active hangs, and controlled negatives",
  },
  {
    day: "WED",
    title: "Strength",
    duration: "35 min",
    detail: "Your AI session plus rows and core work",
  },
  {
    day: "SAT",
    title: "Practice",
    duration: "25 min",
    detail: "Low-fatigue reps, form recording, and review",
  },
];

const sessionStructure = [
  {
    time: "05",
    title: "Warm up",
    detail: "Wrists, shoulders, and two easy hangs",
  },
  {
    time: "10",
    title: "Skill work",
    detail: "Practice one technique cue at low fatigue",
  },
  {
    time: "15",
    title: "Strength sets",
    detail: "Complete your personalized progression",
  },
  {
    time: "05",
    title: "Review",
    detail: "Record a set and note one improvement",
  },
];

export default function App() {
  const [level, setLevel] = useState<number>(0);
  const [coachStep, setCoachStep] = useState<number>(1);
  const [gender, setGender] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [heightInches, setHeightInches] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [completedSessions, setCompletedSessions] = useState<number[]>([]);
  const [styleFilter, setStyleFilter] = useState<string>("All");
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [showGithubModal, setShowGithubModal] = useState<boolean>(false);
  const [liveScanActive, setLiveScanActive] = useState<boolean>(true);

  const scrollToCoach = () => {
    document.getElementById("coach")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleCopyGithubPrompt = () => {
    const markdownContent = `# FORM//AI: Beginner Pull-Up Lab
    
AI-assisted pull-up progression app built with React, Tailwind CSS, and interactive form analysis.

## Features
- **4-Step Technique Guide**: Interactive positions breakdown with embedded media.
- **AI Coach Generator**: Personalized session plan builder based on athlete anthropometrics.
- **Weekly Workout Tracker**: Progressive overload schedule with real-time completion state.
- **Gate 2 Build Plan**: Full curriculum deconstruction and team milestone matrix.

## Author & Project
Created for strict pull-up progression. Updated October 2026.`;

    navigator.clipboard.writeText(markdownContent);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const filteredStyles = pullUpStyles.filter((s) => {
    if (styleFilter === "All") return true;
    return s.level === styleFilter;
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0d0d] font-sans text-[#f2f0e9] selection:bg-[#ff5c35] selection:text-black">
      {/* Top Banner Notice */}
      <div className="bg-[#ff5c35] px-4 py-2 text-center text-xs font-bold uppercase tracking-widest text-[#0c0d0d]">
        🚀 Live Form Lab & Gate 2 Interactive Portal · Updated for GitHub
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <a
          href="#"
          className="flex items-center gap-3 transition hover:opacity-90"
          aria-label="Form AI home"
        >
          <span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-[#0c0d0d] shadow-lg shadow-[#ff5c35]/20">
            <Icon name="spark" className="size-5" />
          </span>

          <span className="font-display text-xl tracking-wide">
            FORM<span className="text-[#ff5c35]">//</span>AI
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a className="transition hover:text-white" href="#method">
            The method
          </a>
          <a className="transition hover:text-white" href="#technique">
            Technique
          </a>
          <a className="transition hover:text-white" href="#styles">
            Styles
          </a>
          <a className="transition hover:text-white" href="#program">
            Program
          </a>
          <a className="transition hover:text-white" href="#gate-2">
            Gate 2
          </a>
          <a className="transition hover:text-white" href="#coach">
            AI coach
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowGithubModal(true)}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold transition hover:border-white hover:bg-white/10"
            title="Export to GitHub format"
          >
            <Icon name="github" className="size-4" />
            <span className="hidden sm:inline">GitHub Code</span>
          </button>

          <button
            onClick={scrollToCoach}
            className="rounded-full border border-[#ff5c35] bg-[#ff5c35] px-5 py-2 text-sm font-semibold text-[#0c0d0d] transition hover:bg-[#ff7858]"
          >
            Start training
          </button>
        </div>
      </nav>

      {}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-28 lg:pt-16">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#ff5c35]">
            <span className="h-px w-10 bg-[#ff5c35]" />
            Beginner pull-up lab
          </div>

          <h1 className="font-display max-w-3xl text-[clamp(3.8rem,8.5vw,7.8rem)] font-extrabold leading-[.82] tracking-[-0.035em]">
            PULL UP.
            <br />
            <span className="text-[#ff5c35]">LEVEL UP.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/62 md:text-xl">
            Learn proper pull-up form with a coach that adapts to you. Get clear
            technique cues, spot mistakes, and build a plan around your current
            strength.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button
              onClick={scrollToCoach}
              className="group flex items-center gap-4 rounded-full bg-[#ff5c35] py-2 pl-6 pr-2 font-bold text-[#0c0d0d] transition hover:bg-[#ff7858]"
            >
              Build my plan
              <span className="grid size-10 place-items-center rounded-full bg-[#0c0d0d] text-white transition group-hover:translate-x-0.5">
                <Icon name="arrow" />
              </span>
            </button>

            <a
              href="#technique"
              className="flex items-center gap-3 text-sm font-semibold text-white/75 transition hover:text-white"
            >
              <span className="grid size-10 place-items-center rounded-full border border-white/20">
                <Icon name="play" className="size-4" />
              </span>
              See the 4-step form
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-8 -top-8 size-40 rounded-full bg-[#ff5c35]/20 blur-3xl" />

          <div className="relative h-[35rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#191a1a] shadow-2xl md:h-[42rem]">
            <img
              className={`h-full w-full object-cover object-[50%_35%] transition-all duration-700 ${
                liveScanActive ? "grayscale" : "grayscale-0"
              }`}
              src="https://images.unsplash.com/photo-1734980341984-f1c34eb668e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
              alt="Athlete performing a pull-up in a gym"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Toggle live scan overlay */}
            <button
              onClick={() => setLiveScanActive(!liveScanActive)}
              className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md transition hover:bg-black/80"
            >
              <span
                className={`size-2 rounded-full ${
                  liveScanActive ? "animate-pulse bg-[#c9ff4a]" : "bg-white/40"
                }`}
              />
              {liveScanActive ? "Scan Mode Active" : "Original View"}
            </button>

            {/* Live Scan Overlay Graphic */}
            {liveScanActive && (
              <div className="pointer-events-none absolute inset-x-12 top-24 bottom-24 rounded-2xl border-2 border-dashed border-[#c9ff4a]/60 bg-[#c9ff4a]/5">
                <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-md bg-[#c9ff4a] px-2 py-0.5 text-[0.65rem] font-bold text-black uppercase tracking-wider">
                  Bar Detection Lock
                </div>
                <div className="absolute bottom-6 left-6 rounded-md bg-black/70 px-2 py-1 text-[0.65rem] font-mono text-[#c9ff4a]">
                  [X: 120, Y: 340] · Shoulder Axis Aligned
                </div>
              </div>
            )}

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-black/65 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-[#c9ff4a] text-black">
                  <Icon name="camera" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[.16em] text-white/50">
                    Live form scan
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Shoulders set correctly
                  </p>
                </div>
              </div>

              <span className="grid size-8 place-items-center rounded-full bg-[#c9ff4a] text-black">
                <Icon name="check" className="size-4" />
              </span>
            </div>
          </div>

          <div className="absolute -right-3 top-12 rounded-2xl border border-white/10 bg-[#191a1a] px-5 py-4 shadow-2xl backdrop-blur-xl md:-right-10">
            <p className="font-display text-3xl font-bold text-[#c9ff4a]">87%</p>
            <p className="text-xs text-white/50">form score</p>
          </div>
        </div>
      </section>

      {}
      <section
        id="method"
        className="border-y border-white/10 bg-[#131414]"
      >
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-10">
          {[
            [
              "01",
              "Tell us your level",
              "Start from where you are—no pull-ups required.",
            ],
            [
              "02",
              "Learn the movement",
              "Simple cues turn complex form into clear actions.",
            ],
            [
              "03",
              "Adapt every week",
              "AI recommendations evolve as your strength grows.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="flex gap-5 py-8 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <span className="font-display text-2xl font-bold text-[#ff5c35]">
                {number}
              </span>

              <div>
                <h2 className="text-base font-bold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section
        id="technique"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#ff5c35]">
              The movement, decoded
            </p>

            <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
              FOUR STEPS.
              <br />
              ONE CLEAN REP.
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-white/55">
            Quality comes before quantity. Master each position and connect them
            into one controlled movement.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {formSteps.map((step) => (
            <article
              key={step.number}
              className="group bg-[#131414] p-7 transition hover:bg-[#191a1a]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-white/18">
                  {step.number}
                </span>

                <span className="grid size-9 place-items-center rounded-full border border-white/10 text-white/35 transition group-hover:border-[#ff5c35] group-hover:text-[#ff5c35]">
                  <Icon name="chevron" className="size-4" />
                </span>
              </div>

              <div className="relative my-7 h-52 overflow-hidden rounded-2xl bg-[#202222]">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <span className="absolute bottom-3 left-3 rounded-full bg-[#ff5c35] px-3 py-1 text-[.65rem] font-bold uppercase tracking-[.12em] text-black">
                  Position {step.number}
                </span>
              </div>

              <h3 className="text-lg font-bold">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        {}
        <div className="mt-6 grid overflow-hidden rounded-3xl border border-white/10 bg-[#131414] lg:grid-cols-[1.5fr_.5fr]">
          <div className="relative aspect-video min-h-72 bg-black">
            <iframe
              className="absolute inset-0 size-full"
              src="https://www.youtube-nocookie.com/embed/eGo4IYlbE5g?start=12&end=50&rel=0"
              title="Short demonstration of proper pull-up form"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-between p-7">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ff5c35] px-3 py-1.5 text-[.65rem] font-bold uppercase tracking-[.14em] text-black">
                <Icon name="play" className="size-3.5" />
                Short form demo
              </span>

              <h3 className="mt-5 font-display text-4xl font-extrabold leading-none">
                WATCH THE
                <br />
                FULL REP.
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                See the four positions connect into one smooth, controlled
                pull-up.
              </p>
            </div>

            <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
              {[
                "Shoulders down",
                "Core stays braced",
                "Controlled descent",
              ].map((cue) => (
                <div
                  key={cue}
                  className="flex items-center gap-3 text-xs font-semibold text-white/65"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-[#c9ff4a] text-black">
                    <Icon name="check" className="size-3" />
                  </span>
                  {cue}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="styles"
        className="border-y border-white/10 bg-[#131414] px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#c9ff4a]">
                Build your movement library
              </p>

              <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
                TEN WAYS TO
                <br />
                OWN THE BAR.
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              <p className="max-w-md text-base leading-7 text-white/55">
                Start with the beginner variations, then unlock new grips and
                movement patterns as your control improves.
              </p>

              {/* Filter Pills */}
              <div className="flex items-center gap-2">
                <Icon name="filter" className="size-4 text-white/40" />
                {["All", "Beginner", "Intermediate", "Advanced"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setStyleFilter(filter)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      styleFilter === filter
                        ? "bg-[#c9ff4a] text-black"
                        : "bg-white/10 text-white/60 hover:bg-white/20"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {filteredStyles.map((style, index) => (
              <article
                key={style.name}
                className="group flex min-h-64 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d0d] p-5 transition hover:-translate-y-1 hover:border-[#ff5c35]/60"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-[.65rem] font-bold uppercase tracking-wider ${
                        style.level === "Beginner"
                          ? "bg-[#c9ff4a] text-black"
                          : style.level === "Intermediate"
                            ? "bg-white/10 text-white/65"
                            : "bg-[#ff5c35] text-black"
                      }`}
                    >
                      {style.level}
                    </span>

                    <span className="font-display text-2xl font-bold text-white/15">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative my-7 h-10">
                    <span className="absolute left-0 right-0 top-0 h-1 rounded-full bg-white/25 transition-colors group-hover:bg-[#ff5c35]" />

                    <span
                      className={`absolute top-0 h-5 w-2 rounded-b-full bg-white/65 ${
                        index % 3 === 0
                          ? "left-[28%]"
                          : index % 3 === 1
                            ? "left-[38%]"
                            : "left-[20%]"
                      }`}
                    />

                    <span
                      className={`absolute top-0 h-5 w-2 rounded-b-full bg-white/65 ${
                        index % 3 === 0
                          ? "right-[28%]"
                          : index % 3 === 1
                            ? "right-[38%]"
                            : "right-[20%]"
                      }`}
                    />
                  </div>

                  <h3 className="font-display text-3xl font-extrabold leading-none">
                    {style.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[.12em] text-[#ff5c35]">
                    {style.detail}
                  </p>
                </div>

                <p className="mt-5 text-xs leading-5 text-white/45">
                  {style.cue}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-white/35">
            Advanced variations require a solid base of strict pull-ups.
            Progress gradually and use appropriate assistance.
          </p>
        </div>
      </section>

      {}
      <section
        id="coach"
        className="bg-[#c9ff4a] px-5 py-24 text-[#0c0d0d] md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[.18em]">
              <Icon name="spark" className="size-4" />
              AI training assistant
            </span>

            <h2 className="mt-7 font-display text-6xl font-extrabold leading-[.88] md:text-8xl">
              MEET YOUR
              <br />
              NEXT REP.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-black/65">
              Tell the coach what you can do today. It will build a focused
              starter session you can repeat and refine.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Personalized to your ability",
                "Technique-first progressions",
                "Easy weekly adjustments",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-black text-[#c9ff4a]">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="rounded-[2rem] bg-[#0c0d0d] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,.25)] md:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#ff5c35]">
                  Step {coachStep} of 5
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {coachStep === 1 && "How do you identify?"}
                  {coachStep === 2 && "What is your height?"}
                  {coachStep === 3 && "What is your weight?"}
                  {coachStep === 4 && "What is your training level?"}
                  {coachStep === 5 && "Your starter session is ready"}
                </h3>
              </div>

              <span className="grid size-11 place-items-center rounded-full bg-white/8 text-[#c9ff4a]">
                <Icon name="target" />
              </span>
            </div>

            <div
              className="mt-5 flex gap-2"
              aria-label={`Step ${coachStep} of 5`}
            >
              {[1, 2, 3, 4, 5].map((step) => (
                <span
                  key={step}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    step <= coachStep ? "bg-[#c9ff4a]" : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            {coachStep === 1 && (
              <div className="mt-7 grid grid-cols-3 gap-3">
                {["Woman", "Man", "Non-binary"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setGender(option)}
                    className={`rounded-2xl border p-4 text-sm font-semibold transition ${
                      gender === option
                        ? "border-[#ff5c35] bg-[#ff5c35] text-black"
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {coachStep === 2 && (
              <div className="mt-7">
                <label
                  className="mb-3 block text-sm text-white/60"
                  htmlFor="height"
                >
                  Height in feet and inches
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 focus-within:border-[#ff5c35]">
                    <input
                      id="height"
                      min="3"
                      max="8"
                      type="number"
                      value={height}
                      onChange={(event) => setHeight(event.target.value)}
                      placeholder="5"
                      className="min-w-0 flex-1 bg-transparent py-5 text-2xl font-bold outline-none placeholder:text-white/20"
                    />
                    <span className="text-sm text-white/40">ft</span>
                  </div>

                  <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 focus-within:border-[#ff5c35]">
                    <input
                      id="height-inches"
                      min="0"
                      max="11"
                      type="number"
                      value={heightInches}
                      onChange={(event) =>
                        setHeightInches(event.target.value)
                      }
                      placeholder="8"
                      className="min-w-0 flex-1 bg-transparent py-5 text-2xl font-bold outline-none placeholder:text-white/20"
                    />
                    <span className="text-sm text-white/40">in</span>
                  </div>
                </div>
              </div>
            )}

            {coachStep === 3 && (
              <div className="mt-7">
                <label
                  className="mb-3 block text-sm text-white/60"
                  htmlFor="weight"
                >
                  Weight in pounds
                </label>

                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 focus-within:border-[#ff5c35]">
                  <input
                    id="weight"
                    min="65"
                    max="660"
                    type="number"
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)}
                    placeholder="165"
                    className="min-w-0 flex-1 bg-transparent py-5 text-2xl font-bold outline-none placeholder:text-white/20"
                  />
                  <span className="text-sm text-white/40">lb</span>
                </div>
              </div>
            )}

            {coachStep === 4 && (
              <div className="mt-7 grid grid-cols-3 gap-3">
                {levels.map((item, index) => (
                  <button
                    key={item.short}
                    onClick={() => setLevel(index)}
                    className={`rounded-2xl border p-4 text-left transition ${
                      level === index
                        ? "border-[#ff5c35] bg-[#ff5c35] text-black"
                        : "border-white/10 bg-white/5 hover:border-white/30"
                    }`}
                  >
                    <span className="font-display text-2xl font-bold">
                      {item.short}
                    </span>

                    <span
                      className={`mt-1 block text-xs ${
                        level === index
                          ? "text-black/60"
                          : "text-white/45"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {}
            {coachStep === 5 && (
              <div
                className="mt-6 rounded-2xl border border-[#c9ff4a]/30 bg-[#c9ff4a]/8 p-5"
                aria-live="polite"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[#c9ff4a]">
                      Your AI session
                    </p>

                    <p className="mt-1 text-sm text-white/50">
                      3 rounds · Rest 90 sec · 2× weekly
                    </p>
                  </div>

                  <span className="rounded-full bg-[#c9ff4a] px-3 py-1 text-xs font-bold text-black">
                    Ready
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {levels[level].plan.map((exercise, index) => (
                    <div
                      key={exercise}
                      className="flex items-center gap-3 rounded-xl bg-white/5 p-3 text-sm"
                    >
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-bold text-white/60">
                        {index + 1}
                      </span>
                      {exercise}
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs leading-5 text-white/40">
                  Built for a {height || "5"} ft {heightInches || "8"} in,{" "}
                  {weight || "165"} lb {levels[level].label.toLowerCase()} athlete.
                  Stop if you feel sharp pain and record one set from the
                  side to review your form.
                </p>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              {coachStep > 1 && (
                <button
                  onClick={() => setCoachStep((step) => step - 1)}
                  className="rounded-2xl border border-white/15 px-5 py-4 font-bold text-white transition hover:border-white/35"
                >
                  Back
                </button>
              )}

              {coachStep < 5 ? (
                <button
                  onClick={() => setCoachStep((step) => step + 1)}
                  disabled={
                    (coachStep === 1 && !gender) ||
                    (coachStep === 2 && !height) ||
                    (coachStep === 3 && !weight)
                  }
                  className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-white py-4 font-bold text-black transition hover:bg-[#ff5c35] disabled:cursor-not-allowed disabled:opacity-35"
                >
                  {coachStep === 4 ? <Icon name="spark" /> : null}

                  {coachStep === 4
                    ? "Generate my starter session"
                    : "Continue"}

                  {coachStep < 4 ? <Icon name="arrow" /> : null}
                </button>
              ) : (
                <button
                  onClick={() => setCoachStep(1)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 py-4 font-bold text-white transition hover:bg-white/20"
                >
                  <Icon name="reset" className="size-4" />
                  Restart Assessment
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {}
      <section
        id="program"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#ff5c35]">
              Your weekly system
            </p>

            <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
              SHOW UP.
              <br />
              TRACK IT. GROW.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/55">
            Three focused sessions are enough to build skill without exhausting
            your grip. Check off each workout as you go.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#131414] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c9ff4a]">
                  Weekly schedule
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Three days on the bar
                </h3>
              </div>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                Week 01
              </span>
            </div>

            <div className="mt-7 space-y-3">
              {trainingDays.map((session, index) => {
                const completed = completedSessions.includes(index);

                return (
                  <button
                    key={session.day}
                    onClick={() =>
                      setCompletedSessions((current) =>
                        completed
                          ? current.filter((item) => item !== index)
                          : [...current, index],
                      )
                    }
                    className={`grid w-full grid-cols-[3rem_1fr_auto] items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      completed
                        ? "border-[#c9ff4a]/40 bg-[#c9ff4a]/8"
                        : "border-white/8 bg-white/[.03] hover:border-white/20"
                    }`}
                  >
                    <span
                      className={`grid size-12 place-items-center rounded-xl font-display text-lg font-bold ${
                        completed
                          ? "bg-[#c9ff4a] text-black"
                          : "bg-white/8 text-white/65"
                      }`}
                    >
                      {completed ? <Icon name="check" /> : session.day}
                    </span>

                    <span>
                      <span
                        className={`block font-bold ${
                          completed ? "text-white/45 line-through" : ""
                        }`}
                      >
                        {session.title}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-white/40">
                        {session.detail}
                      </span>
                    </span>

                    <span className="hidden rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/45 sm:block">
                      {session.duration}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl bg-white/5 p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Weekly progress</span>

                <span className="text-[#c9ff4a]">
                  {completedSessions.length} of 3 complete
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full bg-[#c9ff4a] transition-all duration-500 ${
                    completedSessions.length === 0
                      ? "w-0"
                      : completedSessions.length === 1
                        ? "w-1/3"
                        : completedSessions.length === 2
                          ? "w-2/3"
                          : "w-full"
                  }`}
                />
              </div>

              <p className="mt-3 text-xs text-white/35">
                {completedSessions.length === 3
                  ? "Week complete. Take a recovery day, then update your AI plan."
                  : "Tap a workout after you finish it to keep your streak moving."}
              </p>
            </div>
          </div>

          {}
          <div className="rounded-[2rem] bg-[#ff5c35] p-6 text-black md:p-8">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-black/55">
              Session structure
            </p>

            <h3 className="mt-2 font-display text-4xl font-extrabold">
              35 MINUTES. NO GUESSING.
            </h3>

            <div className="mt-7 divide-y divide-black/15 border-y border-black/15">
              {sessionStructure.map((phase, index) => (
                <div
                  key={phase.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 py-5"
                >
                  <div>
                    <span className="font-display text-3xl font-bold">
                      {phase.time}
                    </span>

                    <span className="block text-[.6rem] font-bold uppercase tracking-wider text-black/45">
                      min
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="grid size-5 place-items-center rounded-full bg-black text-[.65rem] font-bold text-[#ff5c35]">
                        {index + 1}
                      </span>

                      <h4 className="font-bold">{phase.title}</h4>
                    </div>

                    <p className="mt-2 text-sm leading-5 text-black/60">
                      {phase.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-black/10 p-4">
              <Icon
                name="target"
                className="mt-0.5 size-5 shrink-0"
              />

              <p className="text-xs leading-5 text-black/65">
                Keep two reps in reserve. The goal is repeatable technique,
                not failure. Add volume only when every rep looks the same.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {[
            ["Current focus", "Strict form"],
            ["Weekly target", "3 sessions"],
            ["Recovery", "48 hours"],
            ["Next review", "After session 3"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-[#131414] p-5"
            >
              <p className="text-xs text-white/35">{label}</p>
              <p className="mt-2 font-display text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-10 lg:grid-cols-2 lg:py-32">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#ff5c35]">
            Fast form fixes
          </p>

          <h2 className="font-display text-5xl font-extrabold leading-none md:text-7xl">
            DON'T JUST GET UP.
            <br />
            GET BETTER.
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {mistakes.map(([title, fix], index) => (
            <div
              key={title}
              className="grid grid-cols-[3rem_1fr] gap-4 py-6"
            >
              <span className="font-display text-2xl font-bold text-white/25">
                0{index + 1}
              </span>

              <div>
                <h3 className="font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  {fix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section
        id="gate-2"
        className="bg-[#f2f0e9] px-5 py-24 text-[#0c0d0d] md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 border-b border-black/15 pb-10 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#d63f1c]">
                Gate 2 · Teaching outline + build plan
              </p>

              <h2 className="font-display text-6xl font-extrabold leading-[.86] md:text-8xl">
                ONE STRICT
                <br />
                PULL-UP.
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-lg font-bold">
                Due Friday, October 9
              </p>

              <p className="mt-3 text-sm leading-6 text-black/60">
                Scope is intentionally narrow: teach a beginner to recognize
                and perform one strict pull-up, then use feedback to improve
                the next attempt.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-black/12 bg-white p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[#d63f1c]">
                    01 · Skill deconstructed
                  </p>

                  <h3 className="mt-2 font-display text-4xl font-extrabold">
                    LEARN → TRY → CHECK
                  </h3>
                </div>

                <span className="rounded-full bg-[#c9ff4a] px-3 py-1.5 text-xs font-bold">
                  6 checks
                </span>
              </div>

              <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                {[
                  [
                    "Baseline",
                    "Learner enters height, weight, gender, and level.",
                    "Required fields must be complete before continuing.",
                  ],
                  [
                    "Set the grip",
                    "Hands just outside shoulder width with thumbs wrapped.",
                    "Learner identifies the correct grip from visual choices.",
                  ],
                  [
                    "Build tension",
                    "Active shoulders, braced core, and quiet legs.",
                    "AI or guided checklist checks shoulder and body position.",
                  ],
                  [
                    "Pull cleanly",
                    "Chest rises as elbows drive down without swinging.",
                    "Before recording, the learner marks the bar; the tool confirms it is visible, then checks elbow path and excess motion.",
                  ],
                  [
                    "Finish + lower",
                    "Chin clears the bar, followed by a controlled full descent.",
                    "Tool checks top position, tempo, and full elbow extension.",
                  ],
                  [
                    "Reflect + repeat",
                    "Learner names one correction and schedules the next session.",
                    "Tracker records completion and updates the practice plan.",
                  ],
                ].map(([title, action, check], index) => (
                  <div
                    key={title}
                    className="grid gap-2 py-4 sm:grid-cols-[2rem_1fr_1fr] sm:gap-4"
                  >
                    <span className="font-display text-xl font-bold text-black/25">
                      {index + 1}
                    </span>

                    <div>
                      <h4 className="text-sm font-bold">{title}</h4>

                      <p className="mt-1 text-xs leading-5 text-black/55">
                        {action}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#f2f0e9] p-3">
                      <p className="text-[.6rem] font-bold uppercase tracking-wider text-[#d63f1c]">
                        How it checks
                      </p>

                      <p className="mt-1 text-xs leading-5 text-black/60">
                        {check}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl bg-[#0c0d0d] p-6 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#c9ff4a]">
                02 · Tool structure
              </p>

              <h3 className="mt-2 font-display text-4xl font-extrabold">
                THE LEARNER'S PATH
              </h3>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  [
                    "01",
                    "Onboard",
                    "Five short prompts collect gender, height, weight, and experience level.",
                  ],
                  [
                    "02",
                    "Learn",
                    "Four visual positions and a short video establish a correct mental model.",
                  ],
                  [
                    "03",
                    "Check",
                    "A visual choice confirms grip and setup before physical practice.",
                  ],
                  [
                    "04",
                    "Practice",
                    "The learner frames the full body, identifies the bar on screen, and records one side-view attempt only after the bar check passes.",
                  ],
                  [
                    "05",
                    "Feedback",
                    "AI returns one success, one correction, and a confidence note.",
                  ],
                  [
                    "06",
                    "Plan",
                    "A level-based session, weekly schedule, and progress tracker are generated.",
                  ],
                ].map(([number, title, detail]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl font-bold text-[#ff5c35]">
                        {number}
                      </span>

                      <h4 className="font-bold">{title}</h4>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-white/45">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#c9ff4a]/25 bg-[#c9ff4a]/10 p-4">
                <p className="text-xs font-bold text-[#c9ff4a]">
                  Interactive—not a video wearing a tool costume
                </p>

                <p className="mt-2 text-xs leading-5 text-white/55">
                  Learners answer prompts, make a visual judgment, submit an
                  attempt, receive targeted feedback, and update a trackable
                  plan.
                </p>
              </div>
            </article>
          </div>

          {}
          <article className="mt-5 rounded-3xl border border-black/12 bg-white p-6 md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#d63f1c]">
                  03 · Build plan
                </p>

                <h3 className="mt-2 font-display text-4xl font-extrabold">
                  EVERY MILESTONE HAS AN OWNER
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="w-fit rounded-full bg-[#f2f0e9] px-4 py-2 text-xs font-semibold">
                  Dates · Oct. 9–Nov. 27 + Field-Test Day (TBD)
                </span>
              </div>
            </div>

            <div className="mt-7 overflow-hidden rounded-2xl border border-black/10">
              {[
                [
                  "Oct. 9",
                  "Teaching outline and scope approved",
                  "Sarah Walton",
                  "Coordinates submission and checks rubric coverage.",
                ],
                [
                  "Oct. 12–16",
                  "Technique content and safety cues complete",
                  "Dylan Barbin",
                  "Owns the strict pull-up sequence and common errors.",
                ],
                [
                  "Oct. 19–23",
                  "Screen flow and visual learning assets complete",
                  "Mallory LaDream",
                  "Owns wireframes, images, and learner-facing clarity.",
                ],
                [
                  "Oct. 26–30",
                  "AI prompts and feedback rubric complete",
                  "Jonah Jahnke",
                  "Owns checks, response rules, and fallback feedback.",
                ],
                [
                  "Nov. 2–6",
                  "Interactive prototype integrated",
                  "Pramesh Karmacharya",
                  "Owns implementation, tracker, and shared repo integration.",
                ],
                [
                  "Nov. 9–13",
                  "Internal test and revision list complete",
                  "Sarah Walton",
                  "Runs team QA; Dylan verifies movement accuracy.",
                ],
                [
                  "Finals slot — TBD",
                  "Field test",
                  "Sarah Walton / All members",
                  "Sarah facilitates; all members observe and document findings.",
                ],
              ].map(([date, milestone, owner, output], index) => (
                <div
                  key={milestone}
                  className={`grid gap-3 p-4 md:grid-cols-[7rem_1.1fr_.8fr_1.2fr] md:items-center ${
                    index % 2 === 0 ? "bg-[#f7f6f1]" : "bg-white"
                  }`}
                >
                  <span className="font-display text-xl font-bold">{date}</span>

                  <span className="text-sm font-bold">{milestone}</span>

                  <span className="w-fit rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">
                    {owner}
                  </span>

                  <span className="text-xs leading-5 text-black/50">
                    {output}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-5">
              {[
                ["Dylan", "Content"],
                ["Mallory", "UX + visuals"],
                ["Jonah", "AI feedback"],
                ["Pramesh", "Development"],
                ["Sarah", "Testing"],
              ].map(([name, role]) => (
                <div
                  key={name}
                  className="rounded-2xl bg-[#f2f0e9] p-4"
                >
                  <p className="text-sm font-bold">{name}</p>

                  <p className="mt-1 text-xs text-black/45">
                    {role}
                  </p>

                  <p className="mt-3 text-[.65rem] font-bold uppercase tracking-wider text-[#d63f1c]">
                    Commits to shared repo
                  </p>
                </div>
              ))}
            </div>
          </article>

          {}
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <article className="rounded-3xl bg-[#ff5c35] p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-black/55">
                04 · Biggest risk + Plan B
              </p>

              <h3 className="mt-3 font-display text-4xl font-extrabold">
                FIND THE BAR BEFORE RECORDING.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-black/65">
                The most likely failure is an unclear video—poor lighting, a
                blocked body, an unmarked bar, or the wrong angle—causing the
                tool to give uncertain or inaccurate form feedback.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  [
                    "1",
                    "Frame the athlete",
                    "Keep the full body visible from a side view.",
                  ],
                  [
                    "2",
                    "Identify the bar",
                    "Tap the bar or align it inside the on-screen guide.",
                  ],
                  [
                    "3",
                    "Pass the check",
                    "Recording unlocks only when the bar stays visible.",
                  ],
                ].map(([number, title, detail]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-black/15 bg-white/20 p-4"
                  >
                    <span className="grid size-7 place-items-center rounded-full bg-black text-xs font-bold text-[#ff5c35]">
                      {number}
                    </span>

                    <p className="mt-3 text-sm font-bold">{title}</p>

                    <p className="mt-1 text-xs leading-5 text-black/55">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-black p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-[#c9ff4a]">
                  Plan B
                </p>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  If the bar cannot be detected, ask the learner to tap both
                  ends of it manually and re-record from a guided side-view
                  silhouette. If confidence remains low, switch to a four-point
                  self-check rubric with comparison images instead of
                  pretending the AI is certain.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-black/12 bg-white p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#d63f1c]">
                Bounce check
              </p>

              <h3 className="mt-3 font-display text-4xl font-extrabold">
                READY FOR REVIEW
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Narrow skill: one strict pull-up",
                  "Ordered teaching steps with checks",
                  "Interactive prompts and feedback",
                  "Named owner on every milestone",
                  "Risk includes a realistic fallback",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#c9ff4a]">
                      <Icon name="check" className="size-3.5" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {}
      {showGithubModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-md">
          <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-[#131414] p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Icon name="github" className="size-6 text-[#ff5c35]" />
                <h3 className="text-lg font-bold">GitHub Repository Export</h3>
              </div>
              <button
                onClick={() => setShowGithubModal(false)}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60 hover:bg-white/20"
              >
                ✕ Close
              </button>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/60">
              Copy the formatted project overview and README code to push to your team's GitHub repository:
            </p>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-white/80">
              <p className="text-[#c9ff4a]"># FORM//AI: Beginner Pull-Up Lab</p>
              <p className="mt-1 text-white/50">// Interactive single-file React component</p>
              <p className="mt-1 text-white/50">// Built for GitHub integration & Gate 2 milestone submission</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handleCopyGithubPrompt}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#ff5c35] py-3 text-sm font-bold text-black transition hover:bg-[#ff7858]"
              >
                <Icon name="copy" className="size-4" />
                {copiedCode ? "Copied to Clipboard!" : "Copy README & Code Spec"}
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      <footer className="border-t border-white/10 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/35 md:flex-row">
          <p className="font-display text-lg font-bold text-white">
            FORM<span className="text-[#ff5c35]">//</span>AI
          </p>

          <p>Train with intention. Progress with feedback.</p>

          <p>Built for first reps and better reps.</p>
        </div>
      </footer>
    </main>
  );
}
