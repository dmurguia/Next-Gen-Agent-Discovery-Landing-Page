import React from 'react';
import { FilterOptions } from '../types';
import { SlidersHorizontal, TrendingUp, Clock, Star } from 'lucide-react';
interface FilterBarProps {
  sources: string[];
  integrations: string[];
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
}
export function FilterBar({
  sources,
  integrations,
  filters,
  onChange
}: FilterBarProps) {
  const handleSourceChange = (source: string) => {
    const newSources = filters.source.includes(source) ? filters.source.filter(s => s !== source) : [...filters.source, source];
    onChange({
      ...filters,
      source: newSources
    });
  };
  const handleIntegrationChange = (integration: string) => {
    const newIntegrations = filters.integrations.includes(integration) ? filters.integrations.filter(i => i !== integration) : [...filters.integrations, integration];
    onChange({
      ...filters,
      integrations: newIntegrations
    });
  };
  const handleSortChange = (sortBy: FilterOptions['sortBy']) => {
    onChange({
      ...filters,
      sortBy
    });
  };
  return <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <SlidersHorizontal size={18} className="mr-2 text-amber-400" />
          <h3 className="font-medium text-white">Filters</h3>
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Sort By</h4>
          <div className="space-y-2">
            <button className={`flex items-center w-full px-3 py-2 text-sm rounded-md ${filters.sortBy === 'popularity' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-gray-300 hover:bg-white/10'}`} onClick={() => handleSortChange('popularity')}>
              <TrendingUp size={16} className="mr-2" />
              Most Popular
            </button>
            <button className={`flex items-center w-full px-3 py-2 text-sm rounded-md ${filters.sortBy === 'recent' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-gray-300 hover:bg-white/10'}`} onClick={() => handleSortChange('recent')}>
              <Clock size={16} className="mr-2" />
              Most Recent
            </button>
            <button className={`flex items-center w-full px-3 py-2 text-sm rounded-md ${filters.sortBy === 'rating' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-gray-300 hover:bg-white/10'}`} onClick={() => handleSortChange('rating')}>
              <Star size={16} className="mr-2" />
              Highest Rated
            </button>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Source</h4>
          <div className="space-y-2">
            {sources.map(source => <label key={source} className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-700 bg-white/10 focus:ring-indigo-500 focus:ring-offset-gray-900" checked={filters.source.includes(source)} onChange={() => handleSourceChange(source)} />
                <span className="ml-2 text-sm text-gray-300">{source}</span>
              </label>)}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-300 mb-2">
            Integrations
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2 hide-scrollbar">
            {integrations.map(integration => <label key={integration} className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded border-gray-700 bg-white/10 focus:ring-indigo-500 focus:ring-offset-gray-900" checked={filters.integrations.includes(integration)} onChange={() => handleIntegrationChange(integration)} />
                <span className="ml-2 text-sm text-gray-300">
                  {integration}
                </span>
              </label>)}
          </div>
        </div>
      </div>
      <button className="w-full py-2 px-4 border border-white/20 rounded-md text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors" onClick={() => onChange({
      source: [],
      integrations: [],
      sortBy: 'popularity'
    })}>
        Reset Filters
      </button>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .hide-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
      `}</style>
    </div>;
}