import React, { useState } from 'react';
import { SearchIcon, BotIcon, TrendingUpIcon, ZapIcon, FileTextIcon, MessageSquareIcon, BarChartIcon, CodeIcon, ImageIcon, CalendarIcon, GlobeIcon, HeadphonesIcon } from 'lucide-react';
import { IntegrationsScroll } from '../components/IntegrationsScroll';
interface LandingPageProps {
  onSearch: (query: string) => void;
  onIntegrationClick?: (integration: string) => void;
}
export function LandingPage({
  onSearch,
  onIntegrationClick
}: LandingPageProps) {
  const [searchInput, setSearchInput] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };
  const handleIntegrationSearch = (integration: string) => {
    if (integration === 'all') {
      onSearch('integrations');
    } else {
      onSearch(`integration:${integration}`);
    }
  };
  const categories = [{
    name: 'Content Generation',
    icon: <FileTextIcon size={20} />,
    color: 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
  }, {
    name: 'Customer Support',
    icon: <MessageSquareIcon size={20} />,
    color: 'bg-green-500/20 text-green-400 border border-green-500/30'
  }, {
    name: 'Data Analysis',
    icon: <BarChartIcon size={20} />,
    color: 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
  }, {
    name: 'Code Assistant',
    icon: <CodeIcon size={20} />,
    color: 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
  }, {
    name: 'Image & Design',
    icon: <ImageIcon size={20} />,
    color: 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
  }, {
    name: 'Meeting Tools',
    icon: <CalendarIcon size={20} />,
    color: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
  }, {
    name: 'Web Scraping',
    icon: <GlobeIcon size={20} />,
    color: 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
  }, {
    name: 'Audio Processing',
    icon: <HeadphonesIcon size={20} />,
    color: 'bg-red-500/20 text-red-400 border border-red-500/30'
  }];
  return <div className="min-h-screen bg-gradient-to-b from-stone-900 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-[500px] overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-[-350px] left-[-350px] w-[700px] h-[700px] rounded-full bg-amber-700 blur-[150px]"></div>
        <div className="absolute top-[-250px] right-[-350px] w-[700px] h-[700px] rounded-full bg-stone-700 blur-[150px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Discover the perfect{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-stone-400">
              AI agents
            </span>{' '}
            for your needs
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Find, evaluate, and select from thousands of software agents across
            all major platforms and marketplaces.
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <input type="text" placeholder="Search for AI agents, tools, or use cases..." className="w-full py-4 pl-12 pr-4 text-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-gray-400" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
              <button type="submit" className="absolute left-4 top-5 text-gray-400">
                <SearchIcon size={24} />
              </button>
              <button type="submit" className="absolute right-3 top-2 bg-gradient-to-r from-amber-600 to-stone-700 text-white px-6 py-2 rounded-full hover:from-amber-700 hover:to-stone-800 transition-all">
                Search
              </button>
            </form>
          </div>
          {/* Category boxes */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {categories.map((category, index) => <button key={index} onClick={() => onSearch(category.name)} className={`flex flex-col items-center justify-center p-4 rounded-lg ${category.color} backdrop-blur-sm hover:shadow-md transition-all`}>
                {category.icon}
                <span className="mt-2 text-sm font-medium">
                  {category.name}
                </span>
              </button>)}
          </div>
          {/* Integrations Scroll */}
          <IntegrationsScroll onIntegrationClick={handleIntegrationSearch} />
          <div className="mt-6 text-sm text-gray-400">
            Popular:{' '}
            <button onClick={() => onSearch('summarization')} className="text-amber-400 hover:underline">
              Summarization
            </button>{' '}
            •
            <button onClick={() => onSearch('customer support')} className="text-amber-400 hover:underline ml-2">
              Customer Support
            </button>{' '}
            •
            <button onClick={() => onSearch('data visualization')} className="text-amber-400 hover:underline ml-2">
              Data Visualization
            </button>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center text-white mb-12">
            Why use AgentHub?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-amber-600 to-stone-700 text-white mb-4">
                <SearchIcon size={24} />
              </div>
              <h3 className="text-lg font-medium text-white">
                Universal Search
              </h3>
              <p className="mt-2 text-base text-gray-300 text-center">
                Search across all major agent marketplaces and repositories in
                one place.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-amber-600 to-stone-700 text-white mb-4">
                <TrendingUpIcon size={24} />
              </div>
              <h3 className="text-lg font-medium text-white">
                Popularity Insights
              </h3>
              <p className="mt-2 text-base text-gray-300 text-center">
                See ratings, reviews, and GitHub pull metrics to find the most
                trusted agents.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-amber-600 to-stone-700 text-white mb-4">
                <ZapIcon size={24} />
              </div>
              <h3 className="text-lg font-medium text-white">Quick Setup</h3>
              <p className="mt-2 text-base text-gray-300 text-center">
                One-click installation and setup for compatible environments and
                platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}