import { Leader, CoverStory, TransformationSpotlight, NewsItem } from '../types';

export const coverStory: CoverStory = {
    headline: "The Death of Syntax",
    subheadline: "Why Vibe Coding is the New Literacy.",
    content: `The era of the '10x Developer' is ending. We are entering the era of the '100x Orchestrator.' 

Google's Gemini 3 has altered software physics. CIOs are shifting from syntax to systems thinking.

For decades, the software industry has worshipped at the altar of syntax. We built temples to semicolons, genuflected before curly braces, and excommunicated those who dared mix tabs with spaces. But a new epoch is dawning—one where the medium of creation isn't code, but intent.

Welcome to the Age of Vibe Coding.

The term, coined by Andrej Karpathy in early 2025, describes a fundamental shift in how we build software. Instead of writing precise instructions in rigid programming languages, developers now express their intentions in natural language, letting AI systems translate human thought into executable code.

This isn't about AI writing code for us. It's about AI understanding what we want to build and collaborating with us to build it. The developer's role is evolving from syntax specialist to systems architect—from typing commands to orchestrating outcomes.

Enterprise IT leaders are already adapting. The most forward-thinking CIOs understand that their competitive advantage no longer lies in hiring developers who can memorize API documentation. It lies in cultivating teams who can think in systems, communicate in outcomes, and orchestrate AI agents to execute at scale.

The implications are profound. Training programs are pivoting from teaching programming languages to teaching prompt engineering and agentic workflow design. Hiring criteria are shifting from "years of experience with JavaScript" to "demonstrated ability to decompose complex problems and communicate solutions clearly."

The 100x Orchestrator doesn't write more code—they write less, but better. They understand that in the age of abundant AI capability, the scarce resource is clarity of thought and precision of intent.

The syntax is dead. Long live the vibe.`,
    author: "Editorial Board"
};

export const leaders: Leader[] = [
    {
        id: "elena-rodriguez",
        name: "Elena Rodriguez",
        title: "Global CIO",
        company: "Nexus Dynamics",
        bio: "Elena Rodriguez has spent two decades at the forefront of enterprise technology transformation. At Nexus Dynamics, she leads a team of 4,000 technologists across 40 countries, driving the company's ambitious AI-first strategy. Her pioneering work in deploying Generative AI at scale has resulted in $2.3B in documented efficiency gains. Elena is a vocal advocate for responsible AI deployment and serves on the advisory boards of three major universities' AI ethics programs.",
        expertise: ["Enterprise AI Transformation", "Generative AI at Scale", "FinTech Innovation"]
    },
    {
        id: "david-chen",
        name: "David Chen",
        title: "CTO",
        company: "Vertex Healthcare",
        bio: "David Chen is revolutionizing healthcare diagnostics through his work on sovereign AI models. At Vertex Healthcare, he has built a privacy-first AI infrastructure that processes over 10 million patient interactions daily while maintaining strict HIPAA compliance. His focus on Edge Inference has reduced diagnostic latency by 94% while keeping sensitive data on-premises. David holds 17 patents in healthcare AI and edge computing.",
        expertise: ["Sovereign AI", "HIPAA Compliance", "Edge Inference", "Healthcare Diagnostics"]
    },
    {
        id: "sarah-johnson",
        name: "Sarah Johnson",
        title: "CDO",
        company: "EcoGrid Energy",
        bio: "Sarah Johnson is harnessing the power of IoT and Edge AI to build the sustainable energy grid of tomorrow. As Chief Digital Officer at EcoGrid Energy, she oversees the largest deployment of AI-powered smart grid technology in North America, optimizing energy distribution for 15 million customers. Her work has reduced grid waste by 31% and enabled the integration of 40GW of renewable energy sources.",
        expertise: ["IoT Networks", "Edge AI", "Sustainable Energy", "Smart Grid Technology"]
    }
];

export const transformationSpotlight: TransformationSpotlight = {
    title: "Wipro HPS Goes All-In on AI",
    summary: "How Wipro HealthPlan Services bypassed pilot purgatory to tackle a high-stakes Member Contact Center transformation using a privacy-first GenAI ecosystem. In an industry where AI pilots often die slow deaths in endless committee reviews, Wipro HPS chose a different path: full commitment to production-grade AI from day one. The result? A complete reimagining of how healthcare members interact with their insurance providers.",
    stats: ["Privacy First Architecture", "Record ROI during Open Enrollment"],
    company: "Wipro HealthPlan Services"
};

export const fallbackNews: NewsItem[] = [
    {
        id: "1",
        title: "Gemini 3: The New Standard for Enterprise Reasoning",
        source: "Google AI Blog",
        date: new Date().toISOString()
    },
    {
        id: "2",
        title: "Vibe Coding is Eating Software",
        source: "VentureBeat",
        date: new Date().toISOString()
    },
    {
        id: "3",
        title: "Nvidia's Sovereign AI Push: Jensen Huang's Vision for National AI Infrastructure",
        source: "Tech Crunch",
        date: new Date().toISOString()
    },
    {
        id: "4",
        title: "The Rise of Agentic Workflows in Enterprise IT",
        source: "Harvard Business Review",
        date: new Date().toISOString()
    },
    {
        id: "5",
        title: "Why CIOs Are Betting Big on AI Orchestration",
        source: "Forbes",
        date: new Date().toISOString()
    }
];
