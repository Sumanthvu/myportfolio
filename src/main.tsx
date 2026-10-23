import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Layers3,
  Cpu,
  Globe2,
  GitPullRequest,
  Trophy,
  GraduationCap,
  Command,
  X,
  Menu,
  Sun,
  Moon,
  Check,
  Copy,
  ShieldCheck,
  Network,
  Sparkles,
  Braces,
  Database,
  Workflow,
  ChevronRight,
} from "lucide-react";
import "./style.css";
import { caseStudies } from "./caseStudies";

const EMAIL = "sumanthveslavath07@gmail.com";
const socials = [
  { label: "GitHub", href: "https://github.com/Sumanthvu", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sumanth-v-u-47a424329/",
    icon: Linkedin,
  },
  { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
];
const projects = [
  {
    name: "RENZO",
    category: "COLLABORATIVE AI PLATFORM",
    accent: "blue",
    icon: Sparkles,
    intro: "A conversation worth building on.",
    description:
      "An AI workspace that brings real-time conversations, shared thinking, and code execution together.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    repo: "RENZO",
    live: "https://renzoai.vercel.app",
    details: [
      "Streams AI responses over Socket.IO with persistent conversation history.",
      "Supports shared chats with owner, read and write permissions, plus invitation workflows.",
      "Combines Google OAuth and JWT cookies with a JavaScript executor featuring timeouts, output limits and cleanup.",
    ],
    architecture: ["React client", "Express + Socket.IO", "Gemini / MongoDB"],
  },
  {
    name: "Yaatra AI",
    category: "AI TRAVEL COMPANION",
    accent: "green",
    icon: Globe2,
    intro: "Less planning. More possibility.",
    description:
      "Personalized journeys, from the first destination idea to a thoughtful day-by-day itinerary.",
    tags: ["React", "FastAPI", "CrewAI", "Gemini"],
    repo: "Yaatra-AI",
    live: "https://yaatra-ai.vercel.app/",
    details: [
      "Turns budget, travel style, group size and trip duration into personalized destination suggestions.",
      "Integrates a Python / FastAPI AI microservice powered by CrewAI and Gemini.",
      "Includes saved trips, OTP authentication and Axios retries for model cold starts.",
    ],
    architecture: ["React + Node.js", "FastAPI + CrewAI", "Gemini itinerary"],
  },
  {
    name: "Orca",
    category: "DECENTRALIZED EXCHANGE",
    accent: "purple",
    icon: Network,
    intro: "Liquidity, governed by math.",
    description:
      "A constant-product AMM on Solana for token swaps, liquidity provision, and on-chain execution.",
    tags: ["Rust", "Anchor", "Solana", "TypeScript"],
    repo: "Orca",
    live: "",
    details: [
      "Implements constant-product pricing with token swaps and LP token accounting.",
      "Uses PDA-controlled vaults and SPL token transfers through Anchor programs.",
      "Enforces minimum-output slippage protection and connects a Next.js interface to Solana wallets.",
    ],
    architecture: ["Next.js + wallet", "Anchor program", "PDA vaults + SPL"],
  },
  {
    name: "RepuFi",
    category: "ON-CHAIN REPUTATION",
    accent: "orange",
    icon: ShieldCheck,
    intro: "Trust should open doors.",
    description:
      "A team-built reputation lending protocol connecting GitHub signals with verifiable on-chain backing.",
    tags: ["Solidity", "Polkadot", "IPFS", "Web3"],
    repo: "RepuFi",
    live: "https://repufi.vercel.app",
    details: [
      "Evaluates 11 GitHub profile signals to generate a reputation score.",
      "Lets backers stake PAS tokens and issue non-transferable reputation badges on PassetHub testnet.",
      "Includes challenge and stake-release flows, IPFS metadata and job portal verification.",
    ],
    architecture: ["GitHub signals", "Reputation + vouch", "Soulbound badge"],
  },
];
function External({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
function SectionTitle({
  number,
  label,
  title,
  subtitle,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal className="section-heading">
      <div className="eyebrow">
        <span>{number}</span> {label}
      </div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
function ProjectVisual({ index }: { index: number }) {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState(1);
  return (
    <div className={`project-visual visual-${index}`}>
      <div className="visual-top">
        <span>
          <i /> INTERACTIVE WORKBENCH
        </span>
        <span>0{index + 1} / 04</span>
      </div>
      {index === 0 && (
        <div className="chat-demo">
          <div className="demo-sidebar">
            <Sparkles size={19} />
            <span />
            <span />
            <span />
            <div className="avatar">S</div>
          </div>
          <div className="demo-chat">
            <div className="demo-title">
              renzo
              <span>
                <i /> Shared workspace
              </span>
            </div>
            <div className="chat-bubble">
              How does real-time collaboration work?
            </div>
            <div className="ai-response">
              <Sparkles size={18} />
              <div>
                <b>Better ideas, together.</b>
                <p>
                  {step === 0
                    ? "One conversation. Multiple perspectives. Responses stream as your team thinks."
                    : "Your team stays in sync with permission-aware shared conversations."}
                </p>
                <div className="code-line">
                  <span>socket</span>.on(<em>"ai:chunk"</em>, render)
                  <i />
                </div>
              </div>
            </div>
            <button className="demo-action" onClick={() => setStep(1 - step)}>
              <span>
                {step ? "✓ Collaborator joined" : "+ Invite a collaborator"}
              </span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
      {index === 1 && (
        <div className="travel-demo">
          <div className="travel-landscape">
            <svg viewBox="0 0 600 220" aria-hidden="true">
              <circle cx="440" cy="48" r="29" fill="#e8d4a7" />
              <path d="M0 200 130 50 230 155 340 18 600 220Z" fill="#6b9182" />
              <path
                d="m270 100 70-82 80 99-70-32-30 25-15-30Z"
                fill="#dce8da"
              />
              <path
                d="M0 220 180 124 320 220 470 90 600 210v10Z"
                fill="#315e51"
              />
            </svg>
            <div>
              <small>YOUR NEXT CHAPTER</small>
              <h3>
                A little further
                <br />
                from ordinary.
              </h3>
            </div>
            <span className="travel-stamp">Yaatra AI ↗</span>
          </div>
          <div className="itinerary">
            <div>
              <span className="day">0{step + 1}</span>
              <div>
                <b>
                  {
                    [
                      "Find your destination",
                      "Make it your own",
                      "Your journey, mapped",
                    ][step]
                  }
                </b>
                <small>
                  {
                    [
                      "Interests · Budget · Travel style",
                      "Attractions · Cuisine · Experiences",
                      "Timeline · Budget · Packing list",
                    ][step]
                  }
                </small>
              </div>
            </div>
            <button
              aria-label="Next travel planning step"
              onClick={() => setStep((step + 1) % 3)}
            >
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="travel-progress">
            {[0, 1, 2].map((n) => (
              <span key={n} className={n <= step ? "done" : ""} />
            ))}
          </div>
        </div>
      )}
      {index === 2 && (
        <div className="swap-demo">
          <div className="swap-heading">
            <Network size={22} />
            <b>orca</b>
            <span>AMM EXPLORER</span>
          </div>
          <div className="swap-field">
            <label htmlFor="swap">
              You supply <span>SOL</span>
            </label>
            <input
              id="swap"
              type="number"
              min="0.1"
              max="100"
              step="0.1"
              value={amount}
              onChange={(e) =>
                setAmount(Math.min(100, Math.max(0, Number(e.target.value))))
              }
            />
          </div>
          <div className="swap-divider">↓</div>
          <div className="swap-field">
            <span>
              Simulated output <b>USDC</b>
            </span>
            <strong>{(10000 - 1000000 / (100 + amount)).toFixed(2)}</strong>
          </div>
          <div className="pool-equation">
            <span>x × y = k</span>
            <small>Illustrative reserves · no wallet needed</small>
          </div>
        </div>
      )}
      {index === 3 && (
        <div className="trust-demo">
          <div className="trust-node">
            <Github />
            <span>GitHub signals</span>
          </div>
          <div className={`trust-connector ${step ? "verified" : ""}`}>
            <span />
            <span />
            <span />
          </div>
          <button
            className={`trust-badge ${step ? "verified" : ""}`}
            onClick={() => setStep(1 - step)}
          >
            <ShieldCheck size={40} />
            <b>{step ? "VERIFIABLE TRUST" : "REPUTATION, BACKED"}</b>
            <small>
              {step
                ? "Signals → stake → soulbound badge"
                : "Explore the trust layer ↗"}
            </small>
          </button>
          <div className="trust-caption">
            <span>11 profile signals</span>
            <span>Non-transferable SBT</span>
          </div>
        </div>
      )}
      <span className="visual-caption">
        {
          [
            "STREAMING + COLLABORATION",
            "PREFERENCES → PERSONALIZED JOURNEYS",
            "TRY A DIFFERENT AMOUNT ↑",
            "SIGNALS → STAKE → TRUST",
          ][index]
        }
      </span>
    </div>
  );
}
function Hero() {
  return (
    <section className="hero classic-hero">
      <div className="hero-topline">
        <span className="eyebrow">
          <i className="status-dot" /> FULL-STACK DEVELOPER · PROBLEM SOLVER
        </span>
        <span className="location">IIIT LUCKNOW / INDIA</span>
      </div>
      <Reveal>
        <h1>
          Building software.
          <br />
          <span className="serif">Solving problems.</span>
        </h1>
      </Reveal>
      <div className="hero-bottom">
        <Reveal className="hero-copy">
          <div className="intro-name">
            <span className="tiny-line" /> HI, I'M SUMANTH V U
          </div>
          <p>
            I’m Sumanth, an IT undergraduate at IIIT Lucknow.
            <br className="desktop-break" /> I build full-stack applications,
            explore AI and Web3,
            <br className="desktop-break" /> and enjoy solving challenging
            problems.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>
            <a
              className="text-link"
              href="/Sumanth-VU-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Résumé <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="socials">
            {socials.map((s) => (
              <External key={s.label} href={s.href}>
                <s.icon size={16} />
                {s.label}
                <ArrowUpRight size={12} />
              </External>
            ))}
          </div>
        </Reveal>
        <Reveal className="hero-art">
          <div className="orbital" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orb-core">
              <Braces strokeWidth={1} />
            </div>
            <span className="orbit-label orbit-label-one">
              <Code2 size={14} /> full-stack
            </span>
            <span className="orbit-label orbit-label-two">
              <Cpu size={14} /> AI
            </span>
            <span className="orbit-label orbit-label-three">
              <Network size={14} /> Web3
            </span>
          </div>
          <div className="art-caption">
            <span>THOUGHTFUL CODE. PRACTICAL SOLUTIONS.</span>
            <span>SV / 2026</span>
          </div>
        </Reveal>
      </div>
      <div className="hero-footer">
        <span>FULL-STACK · AI · OPEN SOURCE</span>
        <a href="#about">
          SCROLL TO EXPLORE <ArrowDown size={13} />
        </a>
      </div>
    </section>
  );
}
const nodeIcons = {
  client: Code2,
  server: Workflow,
  ai: Cpu,
  data: Database,
  code: Braces,
  network: Network,
  shield: ShieldCheck,
};
function CaseStudy({ index }: { index: number }) {
  const project = projects[index];
  const study = caseStudies[index];
  const [active, setActive] = useState(0);
  const [flow, setFlow] = useState(0);
  const next = (index + 1) % projects.length;
  useEffect(() => {
    document.title = `${project.name} — Project study / Sumanth V U`;
  }, [project.name]);
  return (
    <main id="main" className={`case-page case-${project.accent}`}>
      <div className="case-breadcrumb">
        <a href="/#work">← All projects</a>
        <span>PROJECT STUDY / 0{index + 1}</span>
      </div>
      <section className="case-hero">
        <Reveal>
          <div className="eyebrow">
            <project.icon size={15} />
            {project.category}
          </div>
          <h1>
            {project.name}
            <span>.</span>
          </h1>
          <p>{study.summary}</p>
          <div className="case-hero-actions">
            <External
              href={`https://github.com/Sumanthvu/${project.repo}`}
              className="button primary"
            >
              View repository <Github size={17} />
            </External>
            {project.live && (
              <External href={project.live} className="text-link">
                Live demo <ArrowUpRight size={17} />
              </External>
            )}
          </div>
        </Reveal>
        <div className="case-facts">
          <div>
            <span>PROJECT CONTEXT</span>
            <p>{study.role}</p>
          </div>
          <div>
            <span>CORE TECHNOLOGIES</span>
            <p>{project.tags.join(" / ")}</p>
          </div>
          <div>
            <span>READING GUIDE</span>
            <a href="#architecture">Architecture ↓</a>
            <a href="#engineering">Engineering ↓</a>
          </div>
        </div>
      </section>
      <Reveal className="case-overview">
        <div>
          <span className="eyebrow">01 / THE IDEA</span>
          <h2>{study.concept}</h2>
        </div>
        <p>{study.problem}</p>
      </Reveal>
      <section className="case-architecture" id="architecture">
        <SectionTitle
          number="02"
          label="SYSTEM ARCHITECTURE"
          title={
            <>
              Follow the <span className="serif">connections.</span>
            </>
          }
          subtitle="Select a component to see its responsibility in the system."
        />
        <div className="architecture-workspace">
          <div
            className="node-map"
            aria-label={`${project.name} architecture components`}
          >
            {study.nodes.map((node, i) => {
              const Icon = nodeIcons[node.icon as keyof typeof nodeIcons];
              return (
                <div className="node-wrap" key={node.title}>
                  <button
                    className={`architecture-node ${active === i ? "active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                  >
                    <Icon size={22} />
                    <span>
                      <strong>{node.title}</strong>
                      <small>{node.subtitle}</small>
                    </span>
                    <span className="node-number">0{i + 1}</span>
                  </button>
                  {i < study.nodes.length - 1 && (
                    <div
                      className={`node-wire ${active === i ? "wire-active" : ""}`}
                    >
                      <i />
                      <ArrowDown size={13} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="node-explanation" aria-live="polite">
            <span className="eyebrow">COMPONENT / 0{active + 1}</span>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h3>{study.nodes[active].title}</h3>
              <p>{study.nodes[active].explanation}</p>
            </motion.div>
            <div className="architecture-legend">
              <i /> Simplified component map
              <br />
              <span>
                Connections describe responsibilities; they do not imply that
                every request visits every component.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="case-flow">
        <SectionTitle
          number="03"
          label="THE USER JOURNEY"
          title={
            <>
              From action <span className="serif">to result.</span>
            </>
          }
        />
        <div className="flow-tabs" role="tablist" aria-label="Workflow steps">
          {study.flow.map((_, i) => (
            <button
              role="tab"
              aria-selected={flow === i}
              aria-controls={`flow-panel-${index}`}
              id={`flow-tab-${i}`}
              key={i}
              onClick={() => setFlow(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  const next = (flow + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                  setFlow(next);
                  document.getElementById(`flow-tab-${next}`)?.focus();
                }
              }}
              tabIndex={flow === i ? 0 : -1}
            >
              <span>0{i + 1}</span>
              <i />
            </button>
          ))}
        </div>
        <div
          className="flow-panel"
          role="tabpanel"
          id={`flow-panel-${index}`}
          aria-labelledby={`flow-tab-${flow}`}
        >
          <motion.h3
            key={flow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {study.flow[flow]}
          </motion.h3>
          <button
            className="icon-button"
            aria-label="Next workflow step"
            onClick={() => setFlow((flow + 1) % 4)}
          >
            <ArrowRight />
          </button>
        </div>
      </section>
      <section id="engineering" className="case-engineering">
        <SectionTitle
          number="04"
          label="ENGINEERING NOTES"
          title={
            <>
              Under the <span className="serif">surface.</span>
            </>
          }
        />
        {study.chapters.map((chapter, i) => (
          <Reveal className="engineering-chapter" key={chapter.title}>
            <span>0{i + 1}</span>
            <h3>{chapter.title}</h3>
            <p>{chapter.text}</p>
          </Reveal>
        ))}
      </section>
      <section className="case-playground">
        <div>
          <span className="eyebrow">05 / INTERACTIVE EXPLAINER</span>
          <h2>
            Try the <span className="serif">idea.</span>
          </h2>
          <p>
            A small illustration of the project's core concept. This is an
            explanatory demo, not a live connection to the application.
          </p>
        </div>
        <ProjectVisual index={index} />
      </section>
      <section className="case-stack">
        <div>
          <span className="eyebrow">06 / TECHNOLOGY</span>
          <h2>Built with.</h2>
        </div>
        <div className="case-stack-tags">
          {study.stack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>
      <div className="case-context">
        <ShieldCheck size={19} />
        <p>{study.boundary}</p>
      </div>
      <div className="case-source">
        Technical descriptions based on the project README and supplied résumé.{" "}
        <External href={`https://github.com/Sumanthvu/${project.repo}#readme`}>
          Read the source documentation <ArrowUpRight size={13} />
        </External>
      </div>
      <a className="next-case" href={`/projects/${caseStudies[next].slug}/`}>
        <span className="eyebrow">NEXT PROJECT</span>
        <strong>{projects[next].name}</strong>
        <ArrowUpRight />
      </a>
    </main>
  );
}
function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark",
  );
  const [menu, setMenu] = useState(false);
  const [command, setCommand] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const commandDialog = useRef<HTMLDialogElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommand((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  useEffect(() => {
    if (command) commandDialog.current?.showModal();
    else commandDialog.current?.close();
  }, [command]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }
  const nav = ["About", "Work", "Experience", "Contact"];
  const route = window.location.pathname.replace(/\/$/, "");
  const caseIndex = caseStudies.findIndex(
    (study) => route === `/projects/${study.slug}`,
  );
  const isCase = caseIndex >= 0;
  return (
    <>
      <motion.div className="reading-progress" style={{ scaleX: progress }} />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header>
        <a className="wordmark" href="/" aria-label="Sumanth home">
          svu<span>.</span>
        </a>
        <nav className={menu ? "open" : ""} aria-label="Main navigation">
          {nav.map((item, i) => (
            <a
              href={`${isCase ? "/" : ""}#${item.toLowerCase()}`}
              key={item}
              onClick={() => setMenu(false)}
            >
              <small>0{i + 1}</small>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <button
            className="command-button"
            onClick={() => setCommand(true)}
            aria-label="Open command menu"
          >
            <Command size={14} />
            <span>K</span>
          </button>
          <button
            className="icon-button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button mobile-menu"
            aria-label="Toggle navigation"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {isCase ? (
        <CaseStudy index={caseIndex} />
      ) : (
        <main id="main">
          <Hero />
          <section className="about section" id="about">
            <SectionTitle
              number="01"
              label="A LITTLE CONTEXT"
              title={
                <>
                  A little about <span className="serif">me.</span>
                </>
              }
            />
            <div className="about-grid">
              <Reveal>
                <p className="large-copy">
                  I’m an Information Technology undergraduate at{" "}
                  <span>IIIT Lucknow</span>, drawn to the space where good
                  engineering meets a useful idea.
                </p>
                <p>
                  My work spans real-time applications, AI-powered workflows,
                  and decentralized systems. I care about the parts beneath the
                  surface: clear architecture, reliable APIs, and code that
                  someone else can understand.
                </p>
                <p>
                  Outside my own projects, I contribute to open source, solve
                  algorithmic problems, and help fellow developers build with
                  confidence.
                </p>
              </Reveal>
              <Reveal className="education-card">
                <GraduationCap size={28} />
                <span className="eyebrow">THE FOUNDATION</span>
                <h3>IIIT Lucknow</h3>
                <p>B.Tech · Information Technology</p>
                <div className="education-meta">
                  <span>2024 — 2028</span>
                  <strong>
                    8.8 <small>CGPA</small>
                  </strong>
                </div>
                <div className="coursework">
                  DSA · OOP · DBMS · Operating Systems · Computer Networks
                </div>
              </Reveal>
            </div>
          </section>
          <section className="section work" id="work">
            <SectionTitle
              number="02"
              label="SELECTED WORK"
              title={
                <>
                  Selected <span className="serif">projects.</span>
                </>
              }
              subtitle="Four projects. Different problems. The same drive to build something useful."
            />
            <div className="project-list">
              {projects.map((p, i) => (
                <Reveal key={p.name} className={`project project-${p.accent}`}>
                  <ProjectVisual index={i} />
                  <div className="project-content">
                    <div className="project-category">
                      <span>0{i + 1}</span>
                      <p.icon size={14} />
                      {p.category}
                    </div>
                    <h3>
                      <a
                        className="project-title-link"
                        href={`/projects/${caseStudies[i].slug}/`}
                      >
                        {p.name}
                        <ArrowUpRight size={27} />
                      </a>
                    </h3>
                    <h4>{p.intro}</h4>
                    <p>{p.description}</p>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        className="text-link"
                        href={`/projects/${caseStudies[i].slug}/`}
                      >
                        Explore project <ArrowRight size={16} />
                      </a>
                      <External
                        href={`https://github.com/Sumanthvu/${p.repo}`}
                        className="icon-button"
                      >
                        <Github size={19} />
                        <span className="sr-only">{p.name} source code</span>
                      </External>
                      {p.live && (
                        <External href={p.live} className="icon-button">
                          <ArrowUpRight size={20} />
                          <span className="sr-only">{p.name} live demo</span>
                        </External>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <External href="https://github.com/Sumanthvu" className="all-work">
              More experiments live on GitHub <Github size={16} />
              <ArrowUpRight size={17} />
            </External>
          </section>
          <section className="section problem-solving" id="practice">
            <SectionTitle
              number="03"
              label="THE PROBLEM-SOLVING SIDE"
              title={
                <>
                  Practice & <span className="serif">problem solving.</span>
                </>
              }
              subtitle="Patterns, persistence, and a lot of time thinking before typing."
            />
            <div className="rating-grid">
              {[
                {
                  platform: "LeetCode",
                  rank: "Knight",
                  rating: "1857",
                  solved: "400+",
                  href: "https://leetcode.com/u/Sumanthvu/",
                  mark: "〈/〉",
                  cls: "leetcode",
                },
                {
                  platform: "Codeforces",
                  rank: "Specialist",
                  rating: "1423",
                  solved: "600+",
                  href: "https://codeforces.com/profile/Sumanth",
                  mark: "▥",
                  cls: "codeforces",
                },
                {
                  platform: "CodeChef",
                  rank: "3 Star",
                  rating: "1638",
                  solved: "300+",
                  href: "https://www.codechef.com/users/sumanthvu",
                  mark: "♜",
                  cls: "codechef",
                },
              ].map((s) => (
                <Reveal key={s.platform}>
                  <External href={s.href} className={`rating-card ${s.cls}`}>
                    <div className="rating-top">
                      <span className="platform-mark">{s.mark}</span>
                      <ArrowUpRight size={18} />
                    </div>
                    <h3>
                      {s.platform}
                      <span>{s.rank}</span>
                    </h3>
                    <strong>
                      {s.rating}
                      <small>MAX RATING</small>
                    </strong>
                    <div className="rating-bottom">
                      <span>{s.solved} problems solved</span>
                      <ChevronRight size={15} />
                    </div>
                  </External>
                </Reveal>
              ))}
            </div>
            <p className="data-note">
              Career highs and problem counts from my résumé.
            </p>
            <Reveal className="award-strip">
              <Trophy size={26} />
              <div>
                <span className="eyebrow">BEYOND THE EDITOR</span>
                <h3>2nd place, TechSprint WinterHack 2026</h3>
                <p>Among 82 teams nationwide · GDG</p>
              </div>
              <div className="award-second">
                <b>Top 10</b>
                <p>
                  iQOO Hackathon 2026
                  <br />
                  180+ teams across India
                </p>
              </div>
            </Reveal>
          </section>
          <section className="section experience" id="experience">
            <SectionTitle
              number="04"
              label="BUILDING WITH OTHERS"
              title={
                <>
                  Experience &<br />
                  <span className="serif">contributions.</span>
                </>
              }
            />
            <div className="experience-list">
              <Reveal className="experience-row">
                <span className="experience-icon">
                  <GitPullRequest />
                </span>
                <div>
                  <div className="experience-kicker">OPEN SOURCE</div>
                  <h3>Sugar Labs · Music Blocks</h3>
                  <h4>Open Source Contributor</h4>
                  <p>
                    Automated dependency updates with Renovate, improved
                    conditional CI execution for Jest and Cypress, and reviewed
                    community pull requests.
                  </p>
                  <External
                    className="text-link"
                    href="https://github.com/sugarlabs/musicblocks/pulls?q=is%3Apr+author%3ASumanthvu"
                  >
                    Explore my contributions <ArrowUpRight size={15} />
                  </External>
                </div>
                <span className="experience-date">COMMUNITY CONTRIBUTOR</span>
              </Reveal>
              <Reveal className="experience-row">
                <span className="experience-icon">
                  <Code2 />
                </span>
                <div>
                  <div className="experience-kicker">
                    LEADERSHIP · IIIT LUCKNOW
                  </div>
                  <h3>Google Developers Group</h3>
                  <h4>Technical Lead · Web Wing</h4>
                  <p>
                    Led technical workshops for 200+ peers on scalable
                    architecture, code reviews, and distributed systems design.
                  </p>
                </div>
                <span className="experience-date">SEP 2026 — PRESENT</span>
              </Reveal>
              <Reveal className="experience-row">
                <span className="experience-icon">
                  <Network />
                </span>
                <div>
                  <div className="experience-kicker">
                    MENTORSHIP · IIIT LUCKNOW
                  </div>
                  <h3>Axios</h3>
                  <h4>Coordinator · Web3 Wing</h4>
                  <p>
                    Mentoring junior developers on CI/CD, issue tracking, and
                    the practices that turn working code into production-ready
                    software.
                  </p>
                </div>
                <span className="experience-date">AUG 2026 — PRESENT</span>
              </Reveal>
            </div>
          </section>
          <section className="section skills" id="skills">
            <SectionTitle
              number="05"
              label="TOOLS OF THE TRADE"
              title={
                <>
                  My development <span className="serif">toolkit.</span>
                </>
              }
            />
            <div className="skills-grid">
              {[
                {
                  icon: Braces,
                  title: "Languages",
                  skills:
                    "C++ / Java / Python / JavaScript / SQL / Solidity / Bash / C",
                },
                {
                  icon: Layers3,
                  title: "Web & systems",
                  skills:
                    "React / Node.js / FastAPI / REST APIs / Microservices / WebSockets / JWT & OAuth / Distributed Systems",
                },
                {
                  icon: Database,
                  title: "Data & intelligence",
                  skills:
                    "MongoDB / MySQL / PostgreSQL / Generative AI / LLMs / LangChain / Deep Learning",
                },
                {
                  icon: Globe2,
                  title: "Web3",
                  skills:
                    "Solana / Chainlink / Farcaster / Smart Contracts / IPFS / Polkadot AssetHub / Wagmi",
                },
                {
                  icon: Workflow,
                  title: "Developer workflow",
                  skills:
                    "Git / GitHub Actions / Jest / Cypress / Linux / Postman",
                },
              ].map((s, i) => (
                <Reveal className={`skill-group skill-${i}`} key={s.title}>
                  <s.icon size={24} />
                  <h3>{s.title}</h3>
                  <div>
                    {s.skills.split(" / ").map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
          <section className="contact section" id="contact">
            <Reveal>
              <div className="eyebrow">
                <i className="status-dot" /> GET IN TOUCH
              </div>
              <h2>
                Let’s <span className="serif">connect.</span>
                <a href={`mailto:${EMAIL}`} aria-label="Email Sumanth">
                  <ArrowUpRight />
                </a>
              </h2>
              <p>
                Feel free to reach out about internships,
                <br className="desktop-break" /> projects, or open-source
                collaborations.
              </p>
              <div className="email-row">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <button
                  className="icon-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
                <span role="status">{copied ? "Copied!" : ""}</span>
              </div>
              <div className="contact-bottom">
                <div className="socials">
                  {socials.slice(0, 2).map((s) => (
                    <External key={s.label} href={s.href}>
                      <s.icon size={17} />
                      {s.label}
                      <ArrowUpRight size={13} />
                    </External>
                  ))}
                </div>
                <a className="text-link" href="/Sumanth-VU-Resume.pdf" download>
                  Download résumé <ArrowDown size={16} />
                </a>
              </div>
            </Reveal>
          </section>
        </main>
      )}
      <footer>
        <a className="wordmark" href="/">
          svu<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} SUMANTH V U</span>
        <span>BUILT WITH INTENT & A LITTLE CAFFEINE.</span>
        <a href="#">BACK TO TOP ↑</a>
      </footer>
      <dialog
        ref={commandDialog}
        onCancel={() => setCommand(false)}
        className="command-dialog"
      >
        <div className="command-search">
          <Command size={20} />
          <input
            placeholder="Where would you like to go?"
            aria-label="Search navigation"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="icon-button"
            onClick={() => setCommand(false)}
            aria-label="Close command menu"
          >
            <X size={18} />
          </button>
        </div>
        <div className="command-results">
          {[...nav, "Skills", "Practice"]
            .filter((n) => n.toLowerCase().includes(query.toLowerCase()))
            .map((n) => (
              <a
                key={n}
                href={`${isCase ? "/" : ""}#${n.toLowerCase()}`}
                onClick={() => {
                  setCommand(false);
                  setQuery("");
                }}
              >
                <span>{n}</span>
                <ArrowUpRight size={17} />
              </a>
            ))}
          {![...nav, "Skills", "Practice"].some((n) =>
            n.toLowerCase().includes(query.toLowerCase()),
          ) && <p>No matching sections. Try “Work” or “Skills”.</p>}
        </div>
        <small>
          QUICK NAVIGATION <span>ESC TO CLOSE</span>
        </small>
      </dialog>
    </>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
