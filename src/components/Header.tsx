import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';
interface HeaderProps {
  onSearch: (query: string) => void;
}
export function Header({
  onSearch
}: HeaderProps) {
  const [searchInput, setSearchInput] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };
  return <header className="bg-gradient-to-r from-stone-900 to-neutral-900 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-stone-400">
              AgentHub
            </Link>
          </div>
          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <form onSubmit={handleSubmit} className="relative">
              <input type="text" placeholder="Search for agents..." className="w-full py-2 pl-10 pr-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-gray-400" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
              <button type="submit" className="absolute left-3 top-2.5 text-gray-400">
                <SearchIcon size={18} />
              </button>
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/browse" className="text-gray-300 hover:text-white transition-colors">
              Browse
            </Link>
            <Link to="/categories" className="text-gray-300 hover:text-white transition-colors">
              Categories
            </Link>
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md border border-white/20 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>;
}