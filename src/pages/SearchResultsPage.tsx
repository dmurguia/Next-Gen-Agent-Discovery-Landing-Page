import React, { useState } from 'react';
import { AgentCard } from '../components/AgentCard';
import { Agent, FilterOptions } from '../types';
import { FilterBar } from '../components/FilterBar';
interface SearchResultsPageProps {
  searchQuery: string;
  agents: Agent[];
  onAgentSelect: (agent: Agent) => void;
}
export function SearchResultsPage({
  searchQuery,
  agents,
  onAgentSelect
}: SearchResultsPageProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    source: [],
    integrations: [],
    sortBy: 'popularity'
  });
  // Check if searching for a specific integration
  const integrationFilter = searchQuery.match(/integration:(.+)/);
  // Get all unique sources and integrations for filter options
  const sources = [...new Set(agents.map(agent => agent.source.name))];
  const integrations = [...new Set(agents.flatMap(agent => agent.integrations))];
  // Apply filters and sorting
  const filteredAgents = agents.filter(agent => {
    // Filter by integration if specified in search query
    if (integrationFilter && integrationFilter[1]) {
      if (!agent.integrations.some(i => i.toLowerCase().includes(integrationFilter[1].toLowerCase()))) {
        return false;
      }
    }
    // Filter by source if any sources are selected
    if (filters.source.length > 0 && !filters.source.includes(agent.source.name)) {
      return false;
    }
    // Filter by integrations if any integrations are selected
    if (filters.integrations.length > 0 && !agent.integrations.some(i => filters.integrations.includes(i))) {
      return false;
    }
    return true;
  });
  // Sort agents
  const sortedAgents = [...filteredAgents].sort((a, b) => {
    switch (filters.sortBy) {
      case 'popularity':
        return b.popularity.pulls - a.popularity.pulls;
      case 'recent':
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      case 'rating':
        return b.popularity.rating - a.popularity.rating;
      default:
        return 0;
    }
  });
  // Format the display query
  const displayQuery = integrationFilter ? `Integration: ${integrationFilter[1]}` : searchQuery === 'integrations' ? 'All Integrations' : `"${searchQuery}"`;
  return <div className="min-h-screen bg-gradient-to-b from-stone-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">
            Results for {displayQuery}
          </h1>
          <p className="text-gray-400 mt-1">
            Found {sortedAgents.length} agents
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterBar sources={sources} integrations={integrations} filters={filters} onChange={setFilters} />
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedAgents.map(agent => <AgentCard key={agent.id} agent={agent} onClick={onAgentSelect} />)}
            </div>
            {sortedAgents.length === 0 && <div className="text-center py-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                <p className="text-gray-300">
                  No agents found matching your criteria.
                </p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
}