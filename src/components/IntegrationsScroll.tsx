import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { IntegrationIcon } from './IntegrationIcon';
interface IntegrationsScrollProps {
  onIntegrationClick: (integration: string) => void;
}
export function IntegrationsScroll({
  onIntegrationClick
}: IntegrationsScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const integrations = ['Slack', 'Google Drive', 'Notion', 'Zendesk', 'Intercom', 'Salesforce', 'Tableau', 'Power BI', 'Google Data Studio', 'Excel', 'Zoom', 'Teams', 'Google Meet', 'Asana', 'Trello', 'Jira', 'GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'JetBrains IDEs', 'Buffer', 'Hootsuite', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'OpenAI', 'Anthropic', 'Google Gemini', 'Telegram', 'Gmail', 'Sheets'];
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const {
        current
      } = scrollRef;
      const scrollAmount = 320;
      if (direction === 'left') {
        current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      } else {
        current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };
  return <div className="relative w-full mt-12 mb-6">
      <div className="text-center mb-4">
        <h3 className="text-xl font-medium text-white mb-2">
          Explore by Integration
        </h3>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          Find agents that work with your favorite tools and platforms
        </p>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-all" aria-label="Scroll left">
          <ChevronLeftIcon size={20} />
        </button>
        <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar py-4 px-2 snap-x gap-4 max-w-6xl mx-auto" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
          {integrations.map((integration, index) => <div key={index} onClick={() => onIntegrationClick(integration)} className="flex flex-col items-center justify-center min-w-[80px] h-[80px] bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all cursor-pointer snap-start p-2 border border-white/10">
              <div className="w-8 h-8 flex items-center justify-center mb-2">
                <IntegrationIcon name={integration} />
              </div>
              <span className="text-xs text-white text-center whitespace-nowrap">
                {integration}
              </span>
            </div>)}
        </div>
        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-all" aria-label="Scroll right">
          <ChevronRightIcon size={20} />
        </button>
      </div>
      <div className="text-center mt-6">
        <button onClick={() => onIntegrationClick('all')} className="bg-gradient-to-r from-amber-600 to-stone-700 text-white px-6 py-2 rounded-full hover:from-amber-700 hover:to-stone-800 transition-all font-medium">
          Discover All Integrations
        </button>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>;
}