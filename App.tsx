import { useState } from "react";

type IconName =
  | "arrow"
  | "camera"
  | "check"
  | "chevron"
  | "play"
  | "spark"
  | "target";

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

const levels = [
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

const pullUpStyles = [
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
  const [level, setLevel] = useState(0);
  const [coachStep, setCoachStep] = useState(1);
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [completedSessions, setCompletedSessions] = useState<number[]>([]);

  const scrollToCoach = () => {
    document.getElementById("coach")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0d0d] text-[#f2f0e9]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="Form AI home"
        >
          <span className="grid size-9 place-items-center rounded-full bg-[#ff5c35] text-[#0c0d0d]">
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

        <button
          onClick={scrollToCoach}
          className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-[#ff5c35] hover:text-[#ff5c35]"
        >
          Start training
        </button>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-28 lg:pt-16">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#ff5c35]">
            <span className="h-px w-10 bg-[#ff5c35]" />
            Beginner pull-up lab
          </div>

          <h1 className="font-display max-w-3xl text-[clamp(4.3rem,9vw,8.4rem)] leading-[.78] tracking-[-0.035em]">
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
              className="flex items-center gap-3 text-sm font-semibold text-white/75 hover:text-white"
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

          <div className="relative h-[35rem] overflow-hidden rounded-[2rem] bg-[#191a1a] md:h-[42rem]">
            <img
              className="h-full w-full object-cover object-[50%_35%] grayscale"
              src="https://images.unsplash.com/photo-1734980341984-f1c34eb668e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
              alt="Athlete performing a pull-up in a gym"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-black/55 p-4 backdrop-blur-xl">
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

          <div className="absolute -right-3 top-12 rounded-2xl border border-white/10 bg-[#191a1a] px-5 py-4 shadow-2xl md:-right-10">
            <p className="font-display text-3xl text-[#c9ff4a]">87%</p>
            <p className="text-xs text-white/50">form score</p>
          </div>
        </div>
      </section>

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
              <span className="font-display text-2xl text-[#ff5c35]">
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

      <section
        id="technique"
        className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#ff5c35]">
              The movement, decoded
            </p>

            <h2 className="font-display text-5xl leading-none md:text-7xl">
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
                <span className="font-display text-4xl text-white/18">
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

              <h3 className="mt-5 font-display text-4xl leading-none">
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
