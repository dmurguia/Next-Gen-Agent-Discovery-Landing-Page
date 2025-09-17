import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { AgentDetailPage } from './pages/AgentDetailPage';
import { Agent } from './types';
import { sampleAgents } from './data/sampleAgents';
export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearched(true);
    navigate('/search');
  };
  const handleAgentSelect = (agent: Agent) => {
    navigate(`/agent/${agent.id}`);
  };
  return <div className="flex flex-col min-h-screen bg-gradient-to-b from-stone-900 to-black text-white">
      <Header onSearch={handleSearch} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage onSearch={handleSearch} />} />
          <Route path="/search" element={<SearchResultsPage searchQuery={searchQuery} agents={sampleAgents} onAgentSelect={handleAgentSelect} />} />
          <Route path="/agent/:id" element={<AgentDetailPage />} />
        </Routes>
      </main>
    </div>;
}