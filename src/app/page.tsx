"use client";

import { useState, useEffect, useRef } from "react";
import {
  Sword,
  Shield,
  ScrollText,
  Code,
  Brain,
  Zap,
  Target,
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Award,
  Star,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import ChatBot from "@/components/ChatBot";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [expandedExperience, setExpandedExperience] = useState<string | null>(
    null
  );
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const parallaxY = useTransform(scrollY, [0, 1000], [0, -300]);
  const parallaxOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const skills = [
    {
      name: "Python",
      level: 5,
      icon: "🐍",
      color: "from-blue-600 to-cyan-500",
      description:
        "Master of Python programming with expertise in building scalable AI systems and automation scripts.",
      projects: "Built 10+ production AI systems",
      experience: "5+ years of intensive development",
    },
    {
      name: "FastAPI",
      level: 4,
      icon: "⚡",
      color: "from-purple-600 to-pink-500",
      description:
        "Framework for building RESTful APIs and backend systems for agents and tools.",
      projects: ["AI Agent Framework"],
      experience:
        "Created modular API endpoints for agent, provider, and tool management.",
    },
    {
      name: "LangChain",
      level: 4,
      icon: "🔗",
      color: "from-indigo-600 to-purple-500",
      description:
        "Framework used for agent reasoning and dynamic tool orchestration.",
      projects: ["AI Agent Framework"],
      experience:
        "Integrated LangChain components for tool-based execution and workflow logic.",
    },
    {
      name: "LangGraph",
      level: 4,
      icon: "🧠",
      color: "from-cyan-600 to-blue-500",
      description:
        "Graph-based agent workflow engine for managing agentic task flows.",
      projects: ["AI Agent Framework"],
      experience:
        "Built workflow structures for modular agent collaboration and stateful execution.",
    },
    {
      name: "AutoGen",
      level: 4,
      icon: "🤖",
      color: "from-amber-600 to-orange-500",
      description: "Framework for multi-agent collaboration and communication.",
      projects: ["AI Agent Framework"],
      experience:
        "Implemented A2A (Agent-to-Agent) communication and integrated dynamic tool usage.",
    },
    {
      name: "GoogleADK",
      level: 3,
      icon: "🔧",
      color: "from-blue-600 to-indigo-500",
      description:
        "SDK used for agent creation and provider configuration management.",
      projects: ["AI Agent Framework"],
      experience:
        "Integrated GoogleADK to support provider-based agent setup and execution.",
    },
    {
      name: "AGNO",
      level: 3,
      icon: "🌀",
      color: "from-blue-600 to-cyan-500",
      description:
        "Framework used for advanced agent configuration and runtime control.",
      projects: ["AI Agent Framework"],
      experience:
        "Configured agent workflows and interoperability through AGNO SDK.",
    },
    {
      name: "Oracle Database",
      level: 4,
      icon: "🗄️",
      color: "from-purple-600 to-pink-500",
      description:
        "Relational database used for schema design, backup, recovery, and migration.",
      projects: ["DBA Management System"],
      experience:
        "Handled database creation, migration, backup automation, and performance tuning.",
    },
    {
      name: "Unix / Shell Scripting",
      level: 4,
      icon: "💻",
      color: "from-indigo-600 to-purple-500",
      description:
        "Used for automation, server management, and deployment scripting.",
      projects: ["DBA Automation Scripts"],
      experience:
        "Automated server maintenance and database operations to reduce manual intervention.",
    },
    {
      name: "MCP (Model Context Protocol)",
      level: 4,
      icon: "🧩",
      color: "from-cyan-600 to-blue-500",
      description:
        "Protocol for dynamic tool creation, discovery, and execution in agent systems.",
      projects: ["AI Agent Framework"],
      experience:
        "Developed backend logic for tool lifecycle and context management across agents.",
    },
    {
      name: "A2A Communication",
      level: 4,
      icon: "🔄",
      color: "from-amber-600 to-orange-500",
      description:
        "Agent-to-Agent communication layer enabling collaborative multi-agent workflows.",
      projects: ["AI Agent Framework"],
      experience:
        "Built custom A2A logic for real-time agent collaboration and task delegation.",
    },
  ];

  const experiences = [
    {
      title: "AI Agent Framework & Backend Development",
      company: "Tata Consultancy Services Pvt. Ltd.",
      period: "2025",
      location: "INDIA",
      description:
        "Transitioned into AI backend development, contributing to the design and implementation of a modular AI agent framework enabling dynamic, multi-provider agent execution and collaboration.",
      achievements: [
        "Designed and implemented a modular AI agent and workflow framework, enabling configurable, multi-provider agent execution",
        "Developed backend APIs for managing agents, providers, and dynamic tool integration using FastAPI.",
        "Built an MCP (Model Context Protocol) system to support on-demand tool creation and management for agents.",
        "Implemented Agent-to-Agent (A2A) communication for collaborative multi-agent task handling.",
        "Collaborated on integrating providers like LangChain, LangGraph, AutoGen, Google SDK, and AGNO for cross-platform interoperability.",
      ],
      responsibilities:
        "Architect and implement scalable AI solutions to deliver scalable framework for AI agent orchestration across multiple providers.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "LangGraph",
        "Autogen",
        "OpenAI",
        "GoogleADK",
        "MCP",
        "A2A",
      ],
      impact:
        "Enabled faster AI system deployment and improved interoperability between tools and agents.",
    },
    {
      title: "Database Administration & System Management",
      company: "Tata Consultancy Services Pvt. Ltd.",
      period: "2023",
      location: "INDIA",
      description:
        "Worked as part of the Database Administration team, managing and maintaining enterprise Oracle databases, ensuring performance, reliability, and system continuity.",
      achievements: [
        "Streamlined DB maintenance workflows, reducing manual overhead by 30%.",
        "Ensured consistent uptime and optimized database performance through proactive monitoring.",
      ],
      responsibilities: [
        "Created and managed Oracle databases, tables, schemas, and scripts for enterprise environments.",
        "Performed database backup, recovery, migration, and duplication tasks.",
        "Handled server configuration, issue resolution (INC, ELO), and system monitoring.",
        "Automated repetitive DBA tasks using Python and Unix shell scripts.",
      ],
      technologies: [
        "Oracle",
        "DBMS",
        "Unix",
        "Python",
      ],
      impact:
        "Enabled faster AI system deployment and improved interoperability between tools and agents.",
    },
  ];

  const projects = [
    {
      title: "Autonomous Agent Framework",
      status: "Completed Quest",
      description:
        "A comprehensive framework for building autonomous AI agents with multi-step reasoning",
      tech: ["Python", "LangChain", "OpenAI", "FastAPI"],
      outcome: "Deployed to production, handling 10K+ requests daily",
      image: "🏯",
      details:
        "Built a modular framework that enables rapid development of autonomous agents capable of complex task decomposition and execution.",
      challenges:
        "Implemented robust error handling and recovery mechanisms for agent failures.",
      architecture:
        "Microservices architecture with message queues for agent communication.",
      performance:
        "Average response time: 200ms, 99.9% uptime, auto-scaling capabilities.",
    },
    {
      title: "LLM Orchestration Platform",
      status: "Ongoing Battle",
      description:
        "Enterprise platform for orchestrating multiple LLMs with intelligent routing",
      tech: ["TypeScript", "React", "Node.js", "AWS"],
      outcome: "Beta testing with 5 enterprise clients",
      image: "⚔️",
      details:
        "Developed an intelligent routing system that selects optimal LLMs based on task requirements, cost constraints, and performance metrics.",
      challenges:
        "Real-time load balancing and cost optimization across multiple model providers.",
      architecture:
        "Event-driven architecture with intelligent routing algorithms and caching layers.",
      performance: "Reduced LLM costs by 40% while maintaining 95% accuracy.",
    },
    {
      title: "AI-Powered Game Engine",
      status: "Secret Mission",
      description:
        "Game engine with integrated AI for dynamic storytelling and NPC behavior",
      tech: ["Python", "Unity", "TensorFlow", "C#"],
      outcome: "Internal prototype, patent pending",
      image: "🎌",
      details:
        "Created a revolutionary game engine that uses AI to generate dynamic narratives and realistic NPC behaviors in real-time.",
      challenges:
        "Balancing computational efficiency with AI complexity for smooth gameplay.",
      architecture:
        "Hybrid architecture combining Unity engine with Python-based AI modules.",
      performance:
        "Supports 100+ concurrent NPCs with unique behaviors and storylines.",
    },
    {
      title: "Real-time Translation System",
      status: "Completed Quest",
      description:
        "Real-time translation system for Japanese-English with cultural context",
      tech: ["Python", "Transformers", "WebSockets", "React"],
      outcome: "95% accuracy, used by 1000+ users",
      image: "📜",
      details:
        "Built a culturally-aware translation system that understands context, idioms, and cultural nuances between Japanese and English.",
      challenges:
        "Preserving cultural context and nuances in real-time translation.",
      architecture:
        "WebSocket-based real-time communication with custom transformer models.",
      performance: "Sub-100ms translation latency with 95% accuracy rating.",
    },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      if (
        heroRef.current &&
        scrollPosition <
          heroRef.current.offsetTop + heroRef.current.offsetHeight
      ) {
        setActiveSection("hero");
      } else if (
        skillsRef.current &&
        scrollPosition <
          skillsRef.current.offsetTop + skillsRef.current.offsetHeight
      ) {
        setActiveSection("skills");
      } else if (
        experienceRef.current &&
        scrollPosition <
          experienceRef.current.offsetTop + experienceRef.current.offsetHeight
      ) {
        setActiveSection("experience");
      } else if (
        projectsRef.current &&
        scrollPosition <
          projectsRef.current.offsetTop + projectsRef.current.offsetHeight
      ) {
        setActiveSection("projects");
      } else if (
        aboutRef.current &&
        scrollPosition <
          aboutRef.current.offsetTop + aboutRef.current.offsetHeight
      ) {
        setActiveSection("about");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Subtle blood splatter overlay effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237f1d1d' fill-opacity='0.2'%3E%3Cpath d='M50 0C50 0 60 20 50 50C40 20 50 0 50 0Z'/%3E%3Cpath d='M0 50C0 50 20 40 50 50C20 60 0 50 0 50Z'/%3E%3Cpath d='M100 50C100 50 80 60 50 50C80 40 100 50 100 50Z'/%3E%3Cpath d='M50 100C50 100 40 80 50 50C60 80 50 100 50 100Z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-black/50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {/* <Sword className="w-6 h-6 text-gray-400" /> */}
              <div className="w-6 h-6 text-gray-400">
                <img
                  src="/logo4.png"
                  alt="Priyanshu Agarwal - AI Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-xl font-amanojaku font-brush-stroke"
                data-text="Priyanshu"
                style={{
                  fontFamily:
                    "'Ma Shan Zheng', 'ZCOOL KuaiLe', 'Noto Serif JP', cursive",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  textShadow: `
                    2px 2px 4px rgba(0, 0, 0, 0.3),
                    1px 1px 2px rgba(139, 0, 0, 0.2),
                    0px 0px 6px rgba(139, 0, 0, 0.15),
                    -1px -1px 1px rgba(255, 255, 255, 0.1),
                    0px 0px 10px rgba(139, 0, 0, 0.1)
                  `,
                  filter: `
                    drop-shadow(1px 1px 2px rgba(139, 0, 0, 0.2))
                    contrast(1.05)
                    brightness(1.02)
                  `,
                  color: "#9ca3af",
                  WebkitTextStroke: "0.3px rgba(139, 0, 0, 0.2)",
                  paintOrder: "stroke fill",
                  position: "relative",
                }}
              >
                Priyanshu
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { name: "Battlefield", ref: heroRef },
                { name: "Arsenal", ref: skillsRef },
                { name: "Campaigns", ref: experienceRef },
                { name: "Conquests", ref: projectsRef },
                { name: "Code", ref: aboutRef },
                { name: "Messenger's Path", ref: contactRef },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className={`transition-colors hover:text-gray-300 font-semibold ${
                    activeSection === item.name.toLowerCase()
                      ? "text-gray-300"
                      : "text-gray-500"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-400"></div>
                <div className="w-6 h-0.5 bg-gray-400"></div>
                <div className="w-6 h-0.5 bg-gray-400"></div>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center"
      >
        <motion.div
          style={{ y: parallaxY, opacity: parallaxOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-black/90"></div>

          {/* Black samurai silhouette background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <img
              src="/samurai-silhouette.png"
              alt="Samurai Warrior Silhouette"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237f1d1d' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Subtle sword rain effect */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-gray-600/5 text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, 200, 400],
                  opacity: [0, 0.1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8 + Math.random() * 8,
                  repeat: Infinity,
                  delay: Math.random() * 8,
                }}
              >
                ⚔️
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full blur-xl opacity-40"></div>
              <div className="relative bg-gray-900 rounded-full w-full h-full flex items-center justify-center border-2 border-gray-600 overflow-hidden shadow-lg shadow-black/50">
                <img
                  src="/logo.png"
                  alt="Priyanshu Agarwal - AI Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-4 font-brush-stroke"
            data-text="PRIYANSHU AGARWAL"
            style={{
              fontFamily:
                "'Ma Shan Zheng', 'ZCOOL KuaiLe', 'Noto Serif JP', cursive",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textShadow: `
                4px 4px 8px rgba(0, 0, 0, 0.4),
                2px 2px 4px rgba(139, 0, 0, 0.3),
                1px 1px 2px rgba(139, 0, 0, 0.2),
                0px 0px 12px rgba(139, 0, 0, 0.15),
                -1px -1px 2px rgba(255, 255, 255, 0.1),
                0px 0px 20px rgba(139, 0, 0, 0.1)
              `,
              filter: `
                drop-shadow(3px 3px 6px rgba(139, 0, 0, 0.25))
                contrast(1.1)
                brightness(1.05)
              `,
              color: "#ffffff",
              WebkitTextStroke: "0.5px rgba(139, 0, 0, 0.3)",
              paintOrder: "stroke fill",
              position: "relative",
              transform: "perspective(1px) translateZ(0)",
              backfaceVisibility: "hidden",
              animation: "brush-texture 6s ease-in-out infinite",
            }}
          >
            PRIYANSHU AGARWAL
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl mb-6 text-gray-400 font-bold font-japanese-sans"
          >
            AGENTIC AI DISCIPLE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl mb-8 text-gray-500 max-w-2xl mx-auto font-semibold"
          >
            "Forging intelligence through battle, conquest, and relentless
            warfare."
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            onClick={() => scrollToSection(skillsRef)}
            className="group relative px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg font-black text-lg hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-105 overflow-hidden shadow-lg shadow-black/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center space-x-2">
              <Sword className="w-5 h-5" />
              <span>ENTER THE BATTLEFIELD</span>
            </span>
            <div className="absolute inset-0 bg-gray-900/30 rounded-lg transform translate-y-1 group-hover:translate-y-0 transition-transform"></div>
          </motion.button>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="relative min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16 font-japanese-serif"
          >
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              THE ARSENAL
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() =>
                  setExpandedSkill(
                    expandedSkill === skill.name ? null : skill.name
                  )
                }
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-gray-600 transition-all shadow-lg shadow-black/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <h3 className="text-xl font-black font-japanese-sans">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < skill.level
                              ? "text-gray-400 fill-current"
                              : "text-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    ></motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-800">
                          <p className="text-gray-400 text-sm mb-3">
                            {skill.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Target className="w-3 h-3 text-gray-500" />
                              <span className="text-xs text-gray-500">
                                {skill.projects}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-3 h-3 text-gray-500" />
                              <span className="text-xs text-gray-500">
                                {skill.experience}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="text-center mt-2">
                    <span className="text-xs text-gray-600">
                      {expandedSkill === skill.name
                        ? "Click to collapse"
                        : "Click to expand"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="relative min-h-screen py-20 px-4">
        {/* Faint map background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(127, 29, 29, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(127, 29, 29, 0.15) 0%, transparent 50%),
                url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237f1d1d' fill-opacity='0.4'%3E%3Cpath d='M75 15L85 45L115 55L85 65L75 95L65 65L35 55L65 45Z'/%3E%3Cpath d='M25 25L35 55L65 65L35 75L25 105L15 75L-15 65L15 55Z'/%3E%3Cpath d='M125 25L135 55L165 65L135 75L125 105L115 75L85 65L115 55Z'/%3E%3Cpath d='M25 125L35 155L65 165L35 175L25 205L15 175L-15 165L15 155Z'/%3E%3Cpath d='M125 125L135 155L165 165L135 175L125 205L115 175L85 165L115 155Z'/%3E%3Cpath d='M75 135L80 150L95 155L80 160L75 175L70 160L55 155L70 150Z'/%3E%3C/g%3E%3C/svg%3E")
              `,
              backgroundSize: "400px 400px, 400px 400px, 150px 150px",
              backgroundPosition: "0% 0%, 100% 100%, 0% 0%",
              backgroundRepeat: "no-repeat, no-repeat, repeat",
            }}
          ></motion.div>
        </div>
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16 font-japanese-serif"
          >
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              WAR CAMPAIGNS
            </span>
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gray-700 to-gray-800"></div>

            {experiences.map((exp, index) => {
              const year = exp.period.split(" - ")[0];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-1/2"></div>

                  <div
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gray-900 rounded-full border-4 border-gray-600 flex items-center justify-center shadow-lg shadow-black/50 cursor-pointer"
                    onClick={() =>
                      setExpandedExperience(
                        expandedExperience === exp.title ? null : exp.title
                      )
                    }
                  >
                    <span className="text-xs font-black text-gray-400">
                      {year}
                    </span>
                    <div className="absolute inset-0 bg-gray-600 rounded-full animate-ping opacity-10"></div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full md:w-1/2 px-4 md:px-8 cursor-pointer"
                    onClick={() =>
                      setExpandedExperience(
                        expandedExperience === exp.title ? null : exp.title
                      )
                    }
                  >
                    <div
                      className={`bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-xl shadow-black/40 hover:border-gray-600 transition-all ${
                        index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500 font-semibold">
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-black mb-2 text-gray-300 font-japanese-sans">
                        {exp.title}
                      </h3>
                      <p className="text-lg mb-2 text-gray-400 font-bold">
                        {exp.company}
                      </p>
                      <div className="flex items-center space-x-2 mb-4">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-600">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-500 mb-4 text-sm">
                        {exp.description}
                      </p>

                      <AnimatePresence>
                        {expandedExperience === exp.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-gray-800 space-y-4">
                              <div>
                                <h4 className="text-sm font-black text-gray-400 mb-2">
                                  RESPONSIBILITIES:
                                </h4>
                                <p className="text-xs text-gray-600">
                                  {exp.responsibilities}
                                </p>
                              </div>

                              <div>
                                <h4 className="text-sm font-black text-gray-400 mb-2">
                                  BATTLE ACHIEVEMENTS:
                                </h4>
                                <div className="space-y-1">
                                  {exp.achievements.map((achievement, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center space-x-2"
                                    >
                                      <Award className="w-3 h-3 text-gray-500" />
                                      <span className="text-xs text-gray-600">
                                        {achievement}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-sm font-black text-gray-400 mb-2">
                                  WEAPONS USED:
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                  {exp.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-600 border border-gray-700"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-sm font-black text-gray-400 mb-2">
                                  IMPACT:
                                </h4>
                                <p className="text-xs text-gray-600">
                                  {exp.impact}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="text-center mt-3">
                        <span className="text-xs text-gray-700">
                          {expandedExperience === exp.title
                            ? "Click to collapse"
                            : "Click to expand"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="relative min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16 font-japanese-serif"
          >
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              BATTLE CONQUESTS
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.title ? null : project.title
                  )
                }
              >
                <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden hover:border-gray-600 transition-all shadow-lg shadow-black/30">
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black ${
                        project.status === "Completed Quest"
                          ? "bg-gray-800/30 text-gray-400 border border-gray-600"
                          : project.status === "Ongoing Battle"
                          ? "bg-gray-700/30 text-gray-300 border border-gray-500"
                          : "bg-gray-900/30 text-gray-500 border border-gray-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="text-6xl mb-4 text-center">
                      {project.image}
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-gray-300 font-japanese-sans">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-black text-gray-400 mb-2">
                        WEAPONS USED:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-600 border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-800 pt-4">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500 font-semibold">
                          {project.outcome}
                        </span>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedProject === project.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-gray-800 space-y-4">
                            <div>
                              <h4 className="text-sm font-black text-gray-400 mb-2">
                                STRATEGIC DETAILS:
                              </h4>
                              <p className="text-xs text-gray-600">
                                {project.details}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-black text-gray-400 mb-2">
                                BATTLE CHALLENGES:
                              </h4>
                              <p className="text-xs text-gray-600">
                                {project.challenges}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-black text-gray-400 mb-2">
                                WAR ARCHITECTURE:
                              </h4>
                              <p className="text-xs text-gray-600">
                                {project.architecture}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-sm font-black text-gray-400 mb-2">
                                COMBAT PERFORMANCE:
                              </h4>
                              <p className="text-xs text-gray-600">
                                {project.performance}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="text-center mt-4">
                      <span className="text-xs text-gray-700">
                        {expandedProject === project.title
                          ? "Click to collapse"
                          : "Click to expand"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16 font-japanese-serif"
          >
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              WARRIOR'S CODE
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-gray-950/30 rounded-lg blur-xl"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-12 shadow-xl shadow-black/40">
              <div className="text-center mb-8">
                <span className="text-6xl">⚔️</span>
              </div>

              <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-semibold">
                <p>
                  In the realm of digital warfare, I stand as a battle-hardened
                  warlord—a master of artificial intelligence, wielding the
                  weapons of code and logic to conquer complex challenges and
                  dominate the technological battlefield.
                </p>

                <p>
                  My campaign began two years ago, not in a peaceful dojo, but
                  in the crucible of relentless combat where every algorithm is
                  a weapon, every model a soldier, and every deployment a battle
                  for supremacy. I have forged my skills in the fires of machine
                  learning warfare while mastering the arsenal of cloud
                  architecture and distributed systems.
                </p>

                <p>
                  Like the warlords of ancient times, I believe in absolute
                  dominance—the principle of{" "}
                  <span className="text-gray-400 font-black">BUSHIDŌ</span>
                  applied to artificial intelligence. Each project is a military
                  campaign, each challenge a fortress to be conquered, each
                  victory a testament to superior strategy and execution.
                </p>

                <p>
                  My code is to wage total war in the realm of AI, to build
                  autonomous armies of intelligent agents, to create systems
                  that not only solve problems but annihilate them. In this
                  digital age of technological warfare, I am the commander of
                  the AI legions—the architect of intelligent destruction and
                  creation, forging the weapons that will dominate tomorrow.
                </p>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center space-x-2 text-gray-400">
                  <Zap className="w-5 h-5" />
                  <span className="font-black">
                    "CODE IS MY WEAPON, AI IS MY ARMY, CONQUEST IS MY DESTINY."
                  </span>
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="relative min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16 font-japanese-serif"
          >
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              The Messenger's Path
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-gray-950/30 rounded-lg blur-xl"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-12 shadow-xl shadow-black/40">
              <div className="text-center mb-8">
                <span className="text-6xl">⚔️</span>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2 font-black">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gray-600 focus:outline-none transition-colors text-gray-300"
                    placeholder="Enter your warrior name..."
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 font-black">
                    SIGNAL
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gray-600 focus:outline-none transition-colors text-gray-300"
                    placeholder="your.battle.signal@warfront.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2 font-black">
                    MESSAGE
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gray-600 focus:outline-none transition-colors resize-none text-gray-300"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="group w-full py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg font-black text-lg hover:from-gray-700 hover:to-gray-800 transition-all transform hover:scale-105 overflow-hidden relative shadow-lg shadow-black/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <span className="relative flex items-center justify-center space-x-2">
                    {/* <span>{"=>"}</span> */}
                    <Mail className="w-5 h-5" />
                    {/* <span>{"<="}</span> */}
                  </span>
                </motion.button>
              </form>

              <div className="mt-12 flex justify-center space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-gray-600 transition-colors shadow-lg shadow-black/30"
                >
                  <Github className="w-6 h-6 text-gray-400" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-gray-600 transition-colors shadow-lg shadow-black/30"
                >
                  <Linkedin className="w-6 h-6 text-gray-400" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="p-3 bg-gray-800 rounded-full border border-gray-700 hover:border-gray-600 transition-colors shadow-lg shadow-black/30"
                >
                  <Mail className="w-6 h-6 text-gray-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ChatBot />
    </div>
  );
}
