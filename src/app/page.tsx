import Navigation from '@/components/Navigation';
import ChatInterface from '@/components/ChatInterface';
import FeatureCard from '@/components/FeatureCard';
import { Brain, Cpu, Layers, Network, ExternalLink } from 'lucide-react';

const features = [
  {
    icon: <Brain size={24} aria-hidden="true" />,
    title: 'Neuromorphic Memory',
    description:
      'Conversation flows that build upon each other, expanding context with every exchange into a persistent vector memory substrate.',
  },
  {
    icon: <Cpu size={24} aria-hidden="true" />,
    title: 'AI Reasoning Engine',
    description:
      'Logic pathways that connect patterns across your entire knowledge graph, enabling multi-hop reasoning through semantic space.',
  },
  {
    icon: <Layers size={24} aria-hidden="true" />,
    title: 'Vector Design',
    description:
      'Visualize and manipulate high-dimensional AI thought structures, mapping the topology of machine cognition.',
  },
  {
    icon: <Network size={24} aria-hidden="true" />,
    title: 'Autonomous Architecture',
    description:
      'Self-organizing systems that evolve and optimize in real-time, adapting their structure to emerging task requirements.',
  },
];

const repoLinks = [
  { label: 'Bitcoin Crusher', href: 'https://github.com/www-infinity4/Bitcoin-Crusher' },
  { label: 'Alien Radio', href: 'https://github.com/www-infinity4/Alien-Radio' },
  { label: 'Infinity Crown Index', href: 'https://github.com/www-infinity4' },
];

export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background glow orbs */}
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-40 left-1/3 w-[300px] h-[300px] bg-cyan-900/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/60 border border-purple-700/30 text-purple-300 text-xs font-medium mb-8 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" aria-hidden="true" />
              Neuromorphic AI Platform
            </div>

            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
            >
              <span className="gradient-text-animated">GPT Vector Design</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              A neuromorphic AI hub where conversations build persistent memory vectors,
              reasoning engines map knowledge graphs, and autonomous architectures
              self-organize in real-time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#chat"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-600 text-white font-semibold text-sm transition-all duration-200 glow-purple border border-purple-600/50"
              >
                <Brain size={18} aria-hidden="true" />
                Start Conversation
              </a>
              <a
                href="https://github.com/www-infinity4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 border border-slate-700/50"
              >
                <ExternalLink size={18} aria-hidden="true" />
                GitHub Repos
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-20 px-4 sm:px-6 lg:px-8"
          aria-labelledby="features-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2
                id="features-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4"
              >
                Platform Capabilities
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
                Each capability is a node in the larger cognitive architecture —
                designed to evolve with every interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Chat Section */}
        <section
          id="chat"
          className="py-20 px-4 sm:px-6 lg:px-8"
          aria-labelledby="chat-heading"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2
                id="chat-heading"
                className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4"
              >
                Memory-Building Conversation
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
                Engage the neuromorphic engine. Each message expands the vector space
                and reinforces contextual memory across the knowledge graph.
              </p>
            </div>
            <ChatInterface />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-900/20 py-10 px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ⚡ GPT Vector Design
              </p>
              <p className="text-xs text-slate-600 mt-1">Neuromorphic AI Hub</p>
            </div>

            <nav aria-label="Footer repository links" className="flex flex-wrap justify-center gap-4">
              {repoLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-slate-500 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.label}
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
              ))}
            </nav>

            <p className="text-xs text-slate-700">
              © {new Date().getFullYear()} GPT Vector Design
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
