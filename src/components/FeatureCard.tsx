import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="neuro-card rounded-2xl p-6 flex flex-col gap-4 group">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-900/30 border border-purple-700/20 text-purple-400 group-hover:text-cyan-400 group-hover:border-cyan-700/30 group-hover:bg-cyan-900/20 transition-all duration-300">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-slate-200 group-hover:text-purple-300 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}
