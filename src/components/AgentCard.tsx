import React from 'react';
import { Link } from 'react-router-dom';
import { Star, GitPullRequest, MessageSquare, Zap } from 'lucide-react';
import { Badge } from './Badge';
import { Agent } from '../types';
import { IntegrationIcon } from './IntegrationIcon';
interface AgentCardProps {
  agent: Agent;
  onClick?: (agent: Agent) => void;
}
export function AgentCard({
  agent,
  onClick
}: AgentCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(agent);
    }
  };
  return <Link to={`/agent/${agent.id}`} className="block bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 hover:shadow-lg transition-all duration-300" onClick={onClick ? handleClick : undefined}>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Badge source={agent.source.name} />
              {agent.popularity.isHot && <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                  <Zap size={12} className="mr-1" />
                  Hot
                </span>}
            </div>
            <h3 className="text-lg font-medium text-white">{agent.name}</h3>
            <p className="mt-1 text-sm text-gray-400">{agent.summary}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star size={16} className="text-yellow-400" />
              <span className="ml-1 text-sm text-gray-300">
                {agent.popularity.rating}
              </span>
            </div>
            <div className="flex items-center">
              <GitPullRequest size={16} className="text-amber-400" />
              <span className="ml-1 text-sm text-gray-300">
                {agent.popularity.pulls.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center">
              <MessageSquare size={16} className="text-green-400" />
              <span className="ml-1 text-sm text-gray-300">
                {agent.popularity.reviews}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {agent.integrations.slice(0, 3).map((integration, index) => <div key={index} className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full">
                <IntegrationIcon key={index} name={integration} />
              </div>)}
            {agent.integrations.length > 3 && <span className="text-xs text-gray-400">
                +{agent.integrations.length - 3}
              </span>}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {agent.tags.slice(0, 3).map((tag, index) => <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-white/10 text-gray-300">
                {tag}
              </span>)}
          </div>
          <button className="px-3 py-1 bg-gradient-to-r from-amber-600 to-stone-700 text-white text-sm font-medium rounded hover:from-amber-700 hover:to-stone-800 transition-all">
            View Details
          </button>
        </div>
      </div>
    </Link>;
}