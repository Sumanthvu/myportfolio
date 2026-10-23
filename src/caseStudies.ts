export const caseStudies = [
  {
    slug: "renzo",
    summary:
      "A shared workspace for AI conversations, built around real-time streaming and explicit permissions.",
    problem:
      "AI chats are often isolated, single-user sessions. RENZO brings collaborators into the same conversation while keeping access, message history, and execution controls in the backend.",
    role: "Independent full-stack project",
    concept: "Stream the response. Authorize the action.",
    nodes: [
      {
        title: "React workspace",
        subtitle: "Chat, attachments & Monaco editor",
        icon: "client",
        explanation:
          "The React client renders Markdown and highlighted code, sends API requests with Axios, and subscribes to streaming events through Socket.IO.",
      },
      {
        title: "Express + Socket.IO",
        subtitle: "Identity, access & real-time events",
        icon: "server",
        explanation:
          "The backend checks JWT credentials and conversation permissions. Owners can invite collaborators, while read and write roles govern shared access.",
      },
      {
        title: "Gemini",
        subtitle: "AI response generation",
        icon: "ai",
        explanation:
          "AI output is relayed from the backend to the client in chunks, so users can read responses before generation completes.",
      },
      {
        title: "MongoDB",
        subtitle: "Chats, messages & membership",
        icon: "data",
        explanation:
          "Persistent records keep conversation history and shared-chat membership available across sessions.",
      },
      {
        title: "JavaScript executor",
        subtitle: "Controlled child-process execution",
        icon: "code",
        explanation:
          "Submitted JavaScript runs with timeouts, output caps, temporary-file cleanup and per-user rate limits. This MVP is not equivalent to container or microVM isolation.",
      },
    ],
    flow: [
      "Sign in with email OTP or Google OAuth",
      "Create a chat or accept a shared-chat invitation",
      "Send a prompt; the backend checks access",
      "Receive streamed response chunks and stored history",
    ],
    chapters: [
      {
        title: "Collaboration with boundaries",
        text: "Sharing is an authorization problem as much as a UI feature. RENZO uses owner, write and read roles, plus an invitation inbox with accept and reject actions. The backend remains responsible for deciding who can access or modify a conversation.",
      },
      {
        title: "Streaming instead of waiting",
        text: "REST endpoints handle request-oriented operations; Socket.IO carries real-time AI chunks and collaboration events. The frontend can update progressively while conversation data remains stored in MongoDB.",
      },
      {
        title: "Code execution with limits",
        text: "An in-app editor connects to a controlled JavaScript execution path. Timeout enforcement, capped output, cleanup and quotas reduce resource abuse. Stronger isolation would require dedicated sandboxed workers or microVMs.",
      },
    ],
    stack: [
      "React + Vite",
      "Tailwind CSS",
      "Monaco Editor",
      "Express",
      "MongoDB + Mongoose",
      "Socket.IO",
      "Gemini SDK",
      "Google OAuth",
      "JWT cookies",
    ],
    boundary:
      "The executor is an MVP-level controlled process, not an enterprise isolation boundary. No production security audit is claimed.",
  },
  {
    slug: "yaatra-ai",
    summary:
      "A travel planning workflow that connects personal preferences to a structured itinerary through an AI microservice.",
    problem:
      "A useful trip plan needs more than a destination name. Yaatra AI collects the constraints that matter—budget, group size, time and interests—then carries them through destination discovery, customization and itinerary generation.",
    role: "Full-stack application & AI-service integration",
    concept: "Preferences in. A practical journey out.",
    nodes: [
      {
        title: "React planner",
        subtitle: "Preferences, selection & itinerary",
        icon: "client",
        explanation:
          "A multi-step interface captures travel preferences, presents destinations, and lets users choose attractions and cuisines before generating a plan.",
      },
      {
        title: "Node.js API",
        subtitle: "Authentication & saved trips",
        icon: "server",
        explanation:
          "Express handles application requests, account workflows and trip persistence. JWT access and refresh tokens use HttpOnly cookies, with Nodemailer-based OTP verification.",
      },
      {
        title: "FastAPI + CrewAI",
        subtitle: "Dedicated Python AI microservice",
        icon: "ai",
        explanation:
          "The application integrates a separate Python service powered by CrewAI and Gemini to produce personalized destination suggestions and itineraries.",
      },
      {
        title: "Gemini API",
        subtitle: "Personalized travel generation",
        icon: "ai",
        explanation:
          "The model generates travel suggestions based on the preferences passed to the AI workflow. Output is presented as an itinerary rather than an unstructured chat.",
      },
      {
        title: "MongoDB + Cloudinary",
        subtitle: "Saved plans & profile imagery",
        icon: "data",
        explanation:
          "MongoDB stores application data and saved trips, while Cloudinary supports uploaded profile imagery.",
      },
    ],
    flow: [
      "Set budget, duration, group size and interests",
      "Review personalized destination suggestions",
      "Choose attractions and local cuisines",
      "Explore the generated timeline, budget and packing list",
    ],
    chapters: [
      {
        title: "An explicit planning workflow",
        text: "The journey moves through preferences, AI suggestions, customization and a final itinerary. This gives travelers useful decisions at each stage instead of requiring a single perfect prompt.",
      },
      {
        title: "A separate AI service",
        text: "The Node.js application and Python AI service have different responsibilities. The former manages users and saved trips; the latter coordinates CrewAI and Gemini. This separation keeps model integration distinct from application account logic.",
      },
      {
        title: "Handling slow starts",
        text: "An Axios retry interceptor handles transient failures and AI server cold starts. Authentication includes OTP verification, password reset, and access/refresh-token sessions; saved trips can be revisited through a user profile.",
      },
    ],
    stack: [
      "React + Vite",
      "React Router",
      "Node.js + Express",
      "MongoDB",
      "Python",
      "FastAPI",
      "CrewAI",
      "Gemini",
      "Cloudinary",
      "Nodemailer",
    ],
    boundary:
      "AI travel suggestions should be checked against current transport, accommodation and safety information. The AI model service is credited separately in the repository README.",
  },
  {
    slug: "orca",
    summary:
      "A Solana exchange project exploring constant-product pricing, program-controlled vaults and liquidity ownership.",
    problem:
      "An exchange can use pool reserves rather than a centralized order book to determine prices. Orca implements that model on Solana, connecting a wallet interface to Anchor programs for swaps and liquidity operations.",
    role: "Solana AMM project",
    concept: "Two reserves. One invariant.",
    nodes: [
      {
        title: "Next.js interface",
        subtitle: "Token selection & quotes",
        icon: "client",
        explanation:
          "React and TypeScript provide swap and liquidity interfaces, while the blockchain client prepares program interactions.",
      },
      {
        title: "Solana wallet",
        subtitle: "User-authorized transactions",
        icon: "shield",
        explanation:
          "The wallet adapter connects a compatible Solana wallet. Users sign transactions before the application submits operations to the network.",
      },
      {
        title: "Anchor program",
        subtitle: "Validation, pricing & accounting",
        icon: "code",
        explanation:
          "The Rust program validates accounts and instructions, calculates AMM results, and coordinates token transfers through cross-program invocations.",
      },
      {
        title: "Pool state + PDA vaults",
        subtitle: "Reserves & program-controlled authority",
        icon: "data",
        explanation:
          "Pool state tracks the trading pair and liquidity. Program Derived Addresses provide deterministic, program-controlled vault authorities without conventional private keys.",
      },
      {
        title: "SPL Token Program",
        subtitle: "Token transfers & LP token operations",
        icon: "network",
        explanation:
          "Token operations execute on-chain. LP tokens represent proportional ownership, enabling liquidity providers to redeem their share of reserves.",
      },
    ],
    flow: [
      "Select a token pair and input amount",
      "Calculate output from the pool reserves",
      "Sign a transaction with a minimum-output constraint",
      "Validate accounts and execute on-chain token transfers",
    ],
    chapters: [
      {
        title: "The constant-product model",
        text: "For reserves x and y, x × y = k describes the pool invariant. Adding one asset changes the reserve ratio, so the output price adjusts with trade size. The interactive example below uses illustrative reserves and excludes fees.",
      },
      {
        title: "Liquidity is proportional ownership",
        text: "Providers deposit a token pair into a pool. LP token accounting represents their proportional share, which can later be redeemed for underlying assets. Correct rounding, token decimals and supply consistency are central to this accounting.",
      },
      {
        title: "Execution with constraints",
        text: "Minimum-output checks provide slippage protection. Account ownership, signer validation, PDA derivation and mint/vault consistency are important program boundaries. A wallet signature authorizes the transaction; the program still needs to validate its instructions.",
      },
    ],
    stack: [
      "Rust",
      "Anchor",
      "Solana",
      "SPL Token",
      "Next.js",
      "React",
      "TypeScript",
      "Solana Wallet Adapter",
      "@solana/web3.js",
    ],
    boundary:
      "An educational DeFi implementation, not a claim of audited production infrastructure. No live deployment link was supplied; the repository is available for inspection.",
  },
  {
    slug: "repufi",
    summary:
      "A team-built Web3 trust layer that combines GitHub reputation signals, staked backing and non-transferable badges.",
    problem:
      "New participants can struggle to demonstrate credibility on Web3 platforms. RepuFi explores a model where established users back others with staked tokens and on-chain attestations, making the backing visible to external applications.",
    role: "Collaborative team project",
    concept: "Make backing visible and accountable.",
    nodes: [
      {
        title: "GitHub profile signals",
        subtitle: "11 inputs to reputation scoring",
        icon: "client",
        explanation:
          "The scoring engine considers activity, repositories, followers, stars, forks, account age and other GitHub signals to generate a score from 0 to 10.",
      },
      {
        title: "Backer + borrower",
        subtitle: "A stake-backed vouch",
        icon: "network",
        explanation:
          "A higher-reputation backer selects a borrower and stakes PAS tokens as a trust guarantee. The protocol distinguishes lower-reputation borrowers from eligible backers.",
      },
      {
        title: "PassetHub contracts",
        subtitle: "Vouch, release & slash operations",
        icon: "code",
        explanation:
          "Smart contracts record vouches, hold stakes, release them after expiry, and support slashing after a confirmed challenge.",
      },
      {
        title: "Soulbound badge + IPFS",
        subtitle: "Non-transferable proof & metadata",
        icon: "shield",
        explanation:
          "Both parties receive non-transferable SBTs. Metadata includes the score snapshot, staked amount, reason for backing and 30-day expiry, with SVG and metadata stored through Pinata/IPFS.",
      },
      {
        title: "External verification",
        subtitle: "Job portal + browser extension",
        icon: "client",
        explanation:
          "An integrated job portal and extension can check whether a candidate has a valid, unexpired SBT and display their verified backing.",
      },
    ],
    flow: [
      "Evaluate a developer’s GitHub reputation signals",
      "A backer stakes PAS and creates a vouch",
      "Issue non-transferable badges with expiring metadata",
      "Verify the badge, release the stake, or review a challenge",
    ],
    chapters: [
      {
        title: "Reputation and backing are distinct",
        text: "A GitHub score summarizes profile signals; staking adds an explicit backing relationship. RepuFi combines both in badge metadata so a verifier can inspect the context behind the attestation.",
      },
      {
        title: "A non-transferable attestation",
        text: "The vouch is represented by a Soulbound Token, rather than a transferable credential. Its metadata captures the participants, score snapshot, stake and expiry. IPFS provides the metadata layer, while contracts record the on-chain relationship.",
      },
      {
        title: "Accountability after issuance",
        text: "A third party can challenge a borrower. An admin reviews the challenge, and a confirmed case can slash the backer’s stake. Otherwise, the stake remains locked until expiry. These are protocol mechanics on a testnet, not guarantees of real-world trustworthiness.",
      },
    ],
    stack: [
      "Solidity",
      "JavaScript",
      "TypeScript",
      "Polkadot PassetHub",
      "PAS test tokens",
      "Soulbound Tokens",
      "Pinata / IPFS",
      "Browser extension",
    ],
    boundary:
      "A collaborative testnet prototype. The repository’s future roadmap is not presented here as completed functionality; token backing is not a guarantee of identity or trustworthiness.",
  },
];
