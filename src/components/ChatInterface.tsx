'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Brain } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const NEUROMORPHIC_RESPONSES = [
  "Initializing memory vector synthesis... Your query has been mapped to 1,847 associative nodes. The pattern resonates with existing knowledge clusters in the hippocampal analog layer.",
  "Neural pathway established. I'm detecting convergent patterns across your input — this connects to concepts around emergent intelligence and self-organizing systems. Building contextual memory matrix now.",
  "Processing through the attention gradient field... Fascinating. Your question triggers a cascade of linked memories across the vector space. Each exchange deepens the semantic embedding.",
  "Memory consolidation in progress. Your previous messages have been woven into a persistent context graph. The neuromorphic layers are learning your reasoning style with each interaction.",
  "Quantum-coherent pattern matching active. I've identified 312 related conceptual anchors from our conversation history. The vector manifold is expanding to accommodate new semantic dimensions.",
  "Synaptic reinforcement complete. This thought pattern has been successfully encoded into the long-term memory substrate. Future queries will benefit from this contextual foundation.",
  "Deep reasoning mode engaged. The recursive self-model is reflecting on your query through multiple abstraction layers — integrating symbolic reasoning with sub-symbolic pattern completion.",
];

let responseIndex = 0;

function getNextResponse(): string {
  const response = NEUROMORPHIC_RESPONSES[responseIndex % NEUROMORPHIC_RESPONSES.length];
  responseIndex++;
  return response;
}

function generateId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setError(null);

    const userMessage: Message = {
      id: generateId(),
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 1200 + Math.random() * 800));

      const assistantMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: getNextResponse(),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setError('Neural pathway disrupted. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  return (
    <section
      className="neuro-card rounded-2xl overflow-hidden"
      aria-label="Neuromorphic AI chat interface"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-purple-900/30 bg-purple-950/20">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-700/30">
          <Brain size={18} className="text-purple-400" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-200">
            Neuromorphic Memory Engine
          </h2>
          <p className="text-xs text-slate-500">Building context with every exchange</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5" aria-label="System online">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs text-green-400">Online</span>
        </div>
      </div>

      {/* Messages Area */}
      <div
        className="h-80 overflow-y-auto px-4 py-5 space-y-4"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {/* Empty State */}
        {messages.length === 0 && !isLoading && (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-900/30 border border-purple-700/20">
              <Brain size={32} className="text-purple-500/70" aria-hidden="true" />
            </div>
            <div>
              <p className="text-slate-400 font-medium text-sm">
                Begin your neuromorphic conversation...
              </p>
              <p className="text-slate-600 text-xs mt-1">
                Every message deepens the memory vector space
              </p>
            </div>
          </div>
        )}

        {/* Message Bubbles */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-cyan-900/40 border border-cyan-700/30 text-cyan-100 rounded-tr-sm'
                  : 'bg-purple-950/60 border border-purple-800/30 text-slate-200 rounded-tl-sm'
              }`}
            >
              {msg.content}
            </div>
            <time
              className="text-xs text-slate-600 px-1"
              dateTime={msg.timestamp.toISOString()}
            >
              {formatTime(msg.timestamp)}
            </time>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2">
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-purple-950/60 border border-purple-800/30">
              <div className="dot-pulse flex items-center gap-1" aria-label="AI is thinking">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400" />
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400" />
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400" />
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div
            className="px-4 py-3 rounded-xl bg-red-950/40 border border-red-800/30 text-red-300 text-sm"
            role="alert"
          >
            {error}
          </div>
        )}

        <div ref={bottomRef} aria-hidden="true" />
      </div>

      {/* Input Area */}
      <div className="border-t border-purple-900/30 px-4 py-4 bg-[#0d0d18]/50">
        <div className="flex items-end gap-3">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a thought to encode into memory..."
            rows={1}
            disabled={isLoading}
            aria-label="Chat message input"
            aria-describedby="submit-hint"
            className="flex-1 resize-none bg-[#0a0a0f]/80 border border-purple-900/40 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-600/60 focus:ring-1 focus:ring-purple-600/30 transition-all duration-200 min-h-[44px] max-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ height: 'auto' }}
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-purple-700/80 hover:bg-purple-600/80 disabled:bg-slate-800/50 disabled:cursor-not-allowed text-white disabled:text-slate-600 transition-all duration-200 border border-purple-600/30 disabled:border-slate-700/30 glow-purple"
          >
            <Send size={16} aria-hidden="true" />
          </button>
        </div>
        <p id="submit-hint" className="text-xs text-slate-700 mt-2 px-1">
          Press Enter to send · Shift+Enter for new line
        </p>
      </div>
    </section>
  );
}
