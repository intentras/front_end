import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Box,
  CheckCircle2,
  Cpu,
  Globe,
  Layers,
  Server,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Intentras — NVIDIA Inception Program Profile" },
      {
        name: "description",
        content:
          "Technical application profile for the Intentras enterprise AI infrastructure control plane, prepared for the NVIDIA Inception Program.",
      },
    ],
  }),
  component: ProductPage,
});

type SdkCategory = "all" | "analytics" | "llm" | "inference" | "security";

const sdkMatrix = [
  {
    id: "rapids",
    name: "NVIDIA RAPIDS Accelerator",
    category: "analytics",
    badge: "Data Processing",
    purpose: "GPU-accelerated data science and analytics processing for infrastructure telemetry.",
    items: [
      "Real-time infrastructure telemetry data processing",
      "Feature engineering pipelines for anomaly detection models",
      "Data transformation workflows across multi-cloud environments",
      "Machine learning preprocessing for infrastructure behavior analysis",
      "Exploratory data analysis of system performance metrics",
    ],
    highlight:
      "Uses cuDF and cuML via RAPIDS Accelerator for Apache Spark to dramatically reduce processing time for enterprise telemetry.",
  },
  {
    id: "nemo",
    name: "NVIDIA NeMo Framework",
    category: "llm",
    badge: "Generative AI",
    purpose: "Build enterprise AI reasoning and infrastructure intelligence capabilities.",
    items: [
      "Infrastructure intent understanding and validation",
      "Natural language infrastructure analytics",
      "AI-generated system behavior summaries",
      "Document intelligence for infrastructure policies",
      "Conversational infrastructure assistants",
    ],
    highlight:
      "End-to-end LLM customization allowing infrastructure teams to declare intent and query system state in natural language.",
  },
  {
    id: "tensorrt",
    name: "NVIDIA TensorRT",
    category: "inference",
    badge: "Inference Acceleration",
    purpose: "Optimize AI inference pipelines for production infrastructure environments.",
    items: [
      "Predictive anomaly detection model inference",
      "Real-time intent validation workflows",
      "Low-latency enforcement decision pipelines",
      "Infrastructure behavior classification models",
    ],
    highlight:
      "Delivers ultra-low latency enforcement decisions and maximizes GPU utilization across real-time control loops.",
  },
  {
    id: "triton",
    name: "NVIDIA Triton Inference Server",
    category: "inference",
    badge: "Model Serving",
    purpose: "Production deployment and management of AI models for infrastructure intelligence.",
    items: [
      "Multi-model serving for diverse infrastructure AI models",
      "Dynamic batching of telemetry inference requests",
      "Model version management for continuous model improvement",
      "Concurrent inference workloads across distributed infrastructure",
    ],
    highlight:
      "Handles dynamic request batching to serve concurrent multi-source infrastructure intelligence models with strict SLAs.",
  },
  {
    id: "morpheus",
    name: "NVIDIA Morpheus",
    category: "security",
    badge: "Cybersecurity",
    purpose:
      "AI-powered cybersecurity and enterprise data intelligence pipelines for infrastructure security.",
    items: [
      "Automated anomaly detection across infrastructure telemetry",
      "Real-time threat intelligence for system behavior",
      "Streaming data analysis from endpoints, networks, and cloud",
      "Enterprise security insights for proactive risk management",
    ],
    highlight:
      "Achieves full-traffic GPU inspection across endpoints, host activity, and networks for continuous behavior enforcement.",
  },
  {
    id: "merlin",
    name: "NVIDIA Merlin",
    category: "analytics",
    badge: "Optimization",
    purpose:
      "Enterprise-scale recommendation and personalization intelligence for infrastructure optimization.",
    items: [
      "Infrastructure optimization recommendations",
      "Predictive resource allocation models",
      "Automated remediation suggestions",
      "Enterprise infrastructure decision optimization",
    ],
    highlight:
      "Processes large-scale infrastructure interaction datasets to recommend closed-loop automated remediations.",
  },
] as const;

const sdkTabs: { id: SdkCategory; label: string }[] = [
  { id: "all", label: "ALL SDKs" },
  { id: "analytics", label: "ANALYTICS & ML" },
  { id: "llm", label: "REASONING & LLM" },
  { id: "inference", label: "INFERENCE" },
  { id: "security", label: "SECURITY" },
];

function ProductPage() {
  const [activeTab, setActiveTab] = useState<SdkCategory>("all");

  const filteredSDKs =
    activeTab === "all" ? sdkMatrix : sdkMatrix.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#070709] text-gray-200 font-sans selection:bg-orange-500 selection:text-white">
      {/* Background Decorative Gradients & Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f2e0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e0a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-orange-600/10 via-orange-900/5 to-transparent blur-[120px] pointer-events-none" />

      <SiteHeader />

      <main className="max-w-7xl mx-auto px-6 pt-28 pb-10 space-y-16 relative z-10">
        {/* Section jump nav (page is a single scroll, keeps the anchors from the
            original design without duplicating the site's global nav). */}
        <nav
          aria-label="On this page"
          className="hidden md:flex items-center justify-center gap-8 text-xs font-mono text-gray-400 tracking-wider"
        >
          <a href="#overview" className="hover:text-orange-400 transition-colors">
            OVERVIEW
          </a>
          <a href="#stack" className="hover:text-orange-400 transition-colors">
            TECH STACK
          </a>
          <a href="#sdk-matrix" className="hover:text-orange-400 transition-colors">
            NVIDIA MATRIX
          </a>
          <a href="#hardware" className="hover:text-orange-400 transition-colors">
            COMPUTE
          </a>
          <a href="#roadmap" className="hover:text-orange-400 transition-colors">
            ROADMAP
          </a>
        </nav>

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-orange-950/50 border border-orange-500/40 rounded-full px-3 py-1 text-xs font-mono text-orange-400 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>NVIDIA PROGRAM </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Technical Application Profile for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300">
                Intentras
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Enterprise AI Infrastructure Control Plane engineered for continuous behavior
              enforcement, closed-loop automation, and accelerated GPU intelligence.
            </p>

            <a
              href="https://hub.intentras.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-mono text-xs font-semibold px-5 py-3 rounded shadow-[0_0_20px_rgba(255,85,0,0.3)] transition-all"
            >
              <span>CONNECT DASHBOARD</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#111116] border border-zinc-800/80 rounded-lg p-3.5 flex items-start space-x-3">
                <Globe className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase">Production Domain</div>
                  <div className="text-sm font-semibold text-white">intentras.com</div>
                </div>
              </div>

              <div className="bg-[#111116] border border-zinc-800/80 rounded-lg p-3.5 flex items-start space-x-3">
                <Box className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase">
                    Project / Platform
                  </div>
                  <div className="text-sm font-semibold text-white">Intentras</div>
                </div>
              </div>
            </div>

            {/* Application Targets */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                Application Target Scope
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Enterprise AI Infrastructure Control Plane",
                  "Infrastructure Automation",
                  "AI-Powered System Enforcement",
                  "Closed-Loop Infrastructure Validation",
                  "GPU-Accelerated Infrastructure Intelligence",
                ].map((target, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-900/90 border border-zinc-800 text-gray-300 text-xs px-2.5 py-1 rounded-md font-mono flex items-center space-x-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span>{target}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Topology Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0f0f14] border border-zinc-800 rounded-xl p-5 shadow-2xl relative overflow-hidden group hover:border-orange-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-5">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-orange-500 animate-pulse" />
                  <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">
                    CONTROL PLANE • LIVE TOPOLOGY
                  </span>
                </div>
                <span className="text-[10px] font-mono text-orange-400 bg-orange-950/60 border border-orange-500/30 px-2 py-0.5 rounded uppercase">
                  ● ENFORCING
                </span>
              </div>

              {/* Topology Diagram Simulation */}
              <div className="relative py-6 px-2 flex items-center justify-between">
                {/* Inputs Left */}
                <div className="space-y-3 z-10">
                  {["Endpoints", "Cloud Logs", "Networks", "Telemetry"].map((item, i) => (
                    <div
                      key={i}
                      className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded text-[11px] font-mono text-gray-400 flex items-center justify-between w-28 hover:border-orange-500/40 transition-colors"
                    >
                      <span>{item}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/80" />
                    </div>
                  ))}
                </div>

                {/* Connecting Lines SVG */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none stroke-orange-500/30"
                  strokeWidth="1"
                >
                  <path d="M 115 45 L 180 110" strokeDasharray="3 3" />
                  <path d="M 115 80 L 180 110" />
                  <path d="M 115 115 L 180 110" />
                  <path d="M 115 150 L 180 110" strokeDasharray="3 3" />

                  <path d="M 230 110 L 290 45" />
                  <path d="M 230 110 L 290 110" />
                  <path d="M 230 110 L 290 175" strokeDasharray="3 3" />
                </svg>

                {/* Core Engine Center */}
                <div className="z-10 bg-gradient-to-b from-orange-600 to-orange-700 text-black p-4 rounded-xl shadow-[0_0_25px_rgba(255,85,0,0.4)] text-center w-28 my-auto border border-orange-400">
                  <Cpu className="w-6 h-6 mx-auto mb-1 text-black" />
                  <div className="text-[10px] font-mono font-bold uppercase tracking-tight leading-none">
                    NVIDIA GPU
                  </div>
                  <div className="text-[9px] font-mono opacity-80 mt-0.5">Core Runtime</div>
                </div>

                {/* Enforcements Right */}
                <div className="space-y-4 z-10">
                  {["Intent Validation", "Closed-Loop Action", "Auto Rollback"].map((item, i) => (
                    <div
                      key={i}
                      className="bg-zinc-900 border border-zinc-800 px-3 py-2 rounded text-[11px] font-mono text-gray-300 text-right w-28 border-l-2 border-l-orange-500"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 border-t border-zinc-800/80 pt-4 mt-2 text-center">
                <div className="bg-zinc-900/50 p-2 rounded border border-zinc-800/50">
                  <div className="text-[10px] font-mono text-gray-500">TELEMETRY</div>
                  <div className="text-sm font-mono font-bold text-orange-400">100k+/sec</div>
                </div>
                <div className="bg-zinc-900/50 p-2 rounded border border-zinc-800/50">
                  <div className="text-[10px] font-mono text-gray-500">ENFORCEMENT</div>
                  <div className="text-sm font-mono font-bold text-white">CLOSED-LOOP</div>
                </div>
                <div className="bg-zinc-900/50 p-2 rounded border border-zinc-800/50">
                  <div className="text-[10px] font-mono text-gray-500">LATENCY</div>
                  <div className="text-sm font-mono font-bold text-orange-400">&lt;12ms</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: EXECUTIVE PRODUCT & ARCHITECTURAL OVERVIEW */}
        <section id="overview" className="space-y-6">
          <div className="border-l-2 border-orange-500 pl-4">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              SECTION 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Executive Product & Architectural Overview
            </h2>
          </div>

          <div className="bg-[#0f0f14] border border-zinc-800/80 rounded-xl p-6 lg:p-8 space-y-6 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">Intentras</strong> is an AI-powered infrastructure
              control plane designed to help enterprises define, enforce, and continuously maintain
              how their systems are supposed to behave — across endpoints, networks, and cloud
              environments. Unlike traditional observability platforms that merely monitor
              infrastructure and recommend actions, Intentras allows organizations to declare intent
              — how systems must behave — and continuously enforces that intent through closed-loop
              automation, validation, and rollback.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="bg-[#14141c] border border-zinc-800 p-5 rounded-lg space-y-2">
                <Terminal className="w-5 h-5 text-orange-500" />
                <h3 className="font-semibold text-white">System of Authority</h3>
                <p className="text-xs text-gray-400">
                  Treats infrastructure as a single interconnected system rather than isolated tool
                  silos.
                </p>
              </div>
              <div className="bg-[#14141c] border border-zinc-800 p-5 rounded-lg space-y-2">
                <Shield className="w-5 h-5 text-orange-500" />
                <h3 className="font-semibold text-white">Continuous Enforcement</h3>
                <p className="text-xs text-gray-400">
                  Solves enterprise failure by actively enforcing correctness across the stack in
                  real-time.
                </p>
              </div>
              <div className="bg-[#14141c] border border-zinc-800 p-5 rounded-lg space-y-2">
                <Zap className="w-5 h-5 text-orange-500" />
                <h3 className="font-semibold text-white">Predictive Prevention</h3>
                <p className="text-xs text-gray-400">
                  Prevents outages, misconfigurations, and systemic risks before they affect
                  operations.
                </p>
              </div>
            </div>

            <p>
              The platform is architected to prevent outages, misconfigurations, and systemic
              failures before they occur, serving as the system of authority that enterprise
              infrastructure teams can rely on when uptime, risk, and scale are non-negotiable.
            </p>

            <div className="bg-orange-950/20 border border-orange-500/30 rounded-lg p-4 flex items-start space-x-3 text-orange-200 text-sm">
              <Cpu className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <span>
                <strong>Compute Requirement Notice:</strong> Intentras requires accelerated
                computing capabilities to process large-scale telemetry data streams, train
                predictive models for anomaly detection, execute AI reasoning workloads for intent
                validation, and deliver real-time enforcement actions across distributed enterprise
                environments.
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 2: PRODUCTION CORE TECHNICAL STACK */}
        <section id="stack" className="space-y-6">
          <div className="border-l-2 border-orange-500 pl-4">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              SECTION 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Production Core Technical Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Core Stack Badges */}
            <div className="lg:col-span-7 bg-[#0f0f14] border border-zinc-800/80 rounded-xl p-6 space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Layers className="w-4 h-4 text-orange-500" />
                <span>Core Platform Stack</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Python", role: "Primary Logic & Models" },
                  { name: "PyTorch", role: "Deep Learning Framework" },
                  { name: "Scikit-learn", role: "Classical ML Analytics" },
                  { name: "FastAPI", role: "High-Performance Async APIs" },
                  { name: "Apache Spark", role: "Distributed Telemetry" },
                  { name: "PostgreSQL", role: "System State Persistence" },
                  { name: "Vector DB", role: "Semantic Policy Search" },
                  { name: "Docker", role: "Containerized Services" },
                  { name: "Kubernetes", role: "Orchestration & Scale" },
                  { name: "Apache Kafka", role: "Event Telemetry Streaming" },
                  { name: "MLflow", role: "Model Lifecycle Ops" },
                  { name: "Prometheus & Grafana", role: "Metrics & Observability" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#15151e] border border-zinc-800 p-3 rounded-lg hover:border-orange-500/40 transition-colors"
                  >
                    <div className="text-xs font-mono font-bold text-orange-400">{item.name}</div>
                    <div className="text-[10px] text-gray-400 mt-1">{item.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* NVIDIA Integration Status */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#12121b] to-[#0d0d12] border border-orange-500/30 rounded-xl p-6 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-orange-400 tracking-wider uppercase">
                    NVIDIA STATUS
                  </span>
                  <span className="bg-orange-950/80 border border-orange-500/40 text-orange-400 text-[10px] font-mono px-2 py-0.5 rounded">
                    ROADMAP PREPARATION
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">Current Integration Status</h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Intentras is currently preparing its AI infrastructure for NVIDIA accelerated
                  computing. NVIDIA technologies are planned as part of the production roadmap to
                  improve real-time telemetry processing, AI model training for anomaly detection,
                  predictive infrastructure analytics, and automated enforcement intelligence
                  workloads.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <div className="flex items-center space-x-2 text-xs font-mono text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Targeting AWS P4d & P5 Accelerated Clusters</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: NVIDIA SDK INTEGRATION MATRIX */}
        <section id="sdk-matrix" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="border-l-2 border-orange-500 pl-4">
              <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
                SECTION 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                NVIDIA SDK Integration Matrix (Planned)
              </h2>
            </div>

            {/* Matrix Category Filter Tabs */}
            <div className="flex flex-wrap gap-1 bg-[#111116] p-1 rounded-lg border border-zinc-800 text-xs font-mono">
              {sdkTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    activeTab === tab.id
                      ? "bg-orange-600 text-white font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSDKs.map((sdk) => (
              <div
                key={sdk.id}
                className="bg-[#0f0f14] border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-orange-500/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-orange-400 bg-orange-950/40 border border-orange-500/30 px-2 py-0.5 rounded">
                      {sdk.badge}
                    </span>
                    <Cpu className="w-4 h-4 text-gray-500" />
                  </div>

                  <h3 className="text-lg font-bold text-white">{sdk.name}</h3>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gray-500 uppercase">
                      Primary Purpose
                    </span>
                    <p className="text-xs text-gray-300 font-medium">{sdk.purpose}</p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase">
                      Planned Implementation
                    </span>
                    <ul className="space-y-1">
                      {sdk.items.map((item, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start space-x-2">
                          <span className="text-orange-500 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#15151e] border border-zinc-800/80 p-3 rounded-lg text-xs text-gray-400 font-sans mt-4">
                  <span className="text-orange-400 font-mono font-semibold block mb-0.5">
                    Impact Summary:
                  </span>
                  {sdk.highlight}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: COMPUTE & HARDWARE JUSTIFICATION */}
        <section id="hardware" className="space-y-6">
          <div className="border-l-2 border-orange-500 pl-4">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              SECTION 4
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Compute & Hardware Justification (AWS Infrastructure)
            </h2>
          </div>

          <div className="bg-[#0f0f14] border border-zinc-800/80 rounded-xl p-6 lg:p-8 space-y-8">
            {/* Target Instances Cards */}
            <div>
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
                Target Cloud Infrastructure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#15151d] border border-orange-500/30 rounded-lg p-5 flex items-start space-x-4">
                  <Server className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-white">Amazon EC2 P4d Instances</h4>
                    <p className="text-xs font-mono text-orange-400 mt-0.5">
                      NVIDIA A100 Tensor Core GPUs
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Provides essential high memory bandwidth and multi-GPU tensor scaling for
                      streaming telemetry pipelines and model retraining.
                    </p>
                  </div>
                </div>

                <div className="bg-[#15151d] border border-orange-500/30 rounded-lg p-5 flex items-start space-x-4">
                  <Server className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-white">Amazon EC2 P5 Instances</h4>
                    <p className="text-xs font-mono text-orange-400 mt-0.5">
                      NVIDIA H100 Tensor Core GPUs
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Delivers top-tier computational performance required for low-latency reasoning
                      and large-scale infrastructure behavior patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Workload Justifications */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                Technical Workload Justification
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Real-time infrastructure telemetry processing at scale",
                  "Predictive anomaly detection models",
                  "Natural language infrastructure intelligence",
                  "AI-generated system behavior insights",
                  "Automated enforcement decision systems",
                  "Multi-source infrastructure data correlation",
                  "Continuous intent validation across distributed environments",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#14141c] border border-zinc-800 p-3.5 rounded-lg flex items-center space-x-3 text-xs text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-900 border border-orange-500/40 rounded-lg p-5 text-sm text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Program Credit Value:</strong> Access to AWS GPU
                credits through the{" "}
                <span className="text-orange-400">NVIDIA Inception Program</span> will allow
                Intentras to optimize AI pipelines, benchmark infrastructure intelligence workloads,
                and accelerate development toward production-scale infrastructure automation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: ADVANCED TECHNOLOGY ROADMAP */}
        <section id="roadmap" className="space-y-6">
          <div className="border-l-2 border-orange-500 pl-4">
            <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">
              SECTION 5
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Advanced Technology Roadmap (Q3–Q4)
            </h2>
          </div>

          <div className="bg-[#0f0f14] border border-zinc-800/80 rounded-xl p-6 lg:p-8 space-y-6">
            <div className="relative border-l-2 border-zinc-800 ml-4 space-y-8 pl-6 py-2">
              {[
                {
                  milestone: "RAPIDS Data Acceleration",
                  desc: "Integrate NVIDIA RAPIDS for accelerated infrastructure telemetry data processing.",
                },
                {
                  milestone: "NeMo Language Intelligence",
                  desc: "Deploy NVIDIA NeMo for enterprise infrastructure language intelligence.",
                },
                {
                  milestone: "TensorRT Inference Optimization",
                  desc: "Optimize production models using NVIDIA TensorRT.",
                },
                {
                  milestone: "Triton Multi-Model Serving",
                  desc: "Deploy NVIDIA Triton Inference Server for scalable AI serving.",
                },
                {
                  milestone: "Morpheus Threat Evaluation",
                  desc: "Evaluate NVIDIA Morpheus for real-time infrastructure security monitoring.",
                },
                {
                  milestone: "Merlin Decision Engine",
                  desc: "Implement NVIDIA Merlin for intelligent infrastructure optimization recommendations.",
                },
                {
                  milestone: "H100 Performance Benchmarking",
                  desc: "Benchmark infrastructure intelligence workloads on NVIDIA H100 Tensor Core GPUs.",
                },
                {
                  milestone: "Distributed Analytics Scaling",
                  desc: "Expand GPU-accelerated analytics pipelines across enterprise infrastructure datasets.",
                },
                {
                  milestone: "Closed-Loop Enforcement Core",
                  desc: "Build closed-loop enforcement system leveraging GPU-accelerated AI inference.",
                },
              ].map((m, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-zinc-800 group-hover:bg-orange-500 group-hover:shadow-[0_0_10px_rgba(255,85,0,0.8)] transition-all" />

                  <div className="bg-[#14141c] border border-zinc-800/80 p-4 rounded-lg hover:border-orange-500/40 transition-colors">
                    <span className="text-[10px] font-mono text-orange-500 uppercase tracking-wider">
                      MILESTONE 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{m.milestone}</h4>
                    <p className="text-xs text-gray-400 mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
