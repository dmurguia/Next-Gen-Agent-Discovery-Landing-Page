import React from 'react';
interface BadgeProps {
  source: string;
  className?: string;
}
export function Badge({
  source,
  className = ''
}: BadgeProps) {
  const getColorBySource = (source: string) => {
    switch (source) {
      case 'Hugging Face':
        return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
      case 'n8n':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
      case 'GitHub':
        return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
      case 'Zapier':
        return 'bg-orange-500/20 text-orange-400 border border-orange-500/30';
      case 'Custom Repo':
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorBySource(source)} ${className}`}>
      {source}
    </span>;
}