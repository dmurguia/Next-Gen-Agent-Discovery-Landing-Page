import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, GitPullRequest, MessageSquare, ExternalLink, Copy, CheckCircle, LayoutGrid, FileCode, Code, Lightbulb } from 'lucide-react';
import { Badge } from '../components/Badge';
import { IntegrationIcon } from '../components/IntegrationIcon';
import { Agent } from '../types';
import { sampleAgents } from '../data/sampleAgents';
export function AgentDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const agent = sampleAgents.find(a => a.id === id);
  if (!agent) {
    return <div className="min-h-screen bg-gradient-to-b from-stone-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Agent Not Found</h1>
          <Link to="/" className="text-amber-400 hover:text-amber-300 inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-stone-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Agents
        </Link>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden shadow-xl">
          {/* Header */}
          <div className="p-8 border-b border-white/10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <Badge source={agent.source.name} className="mb-3" />
                <h1 className="text-3xl font-bold text-white mb-2">
                  {agent.name}
                </h1>
                <p className="text-gray-300 text-lg">{agent.summary}</p>
              </div>
              <div className="flex flex-wrap gap-4 items-start">
                <div className="flex items-center px-4 py-2 bg-white/5 rounded-lg">
                  <Star size={20} className="text-yellow-400 mr-2" />
                  <div>
                    <div className="font-medium">{agent.popularity.rating}</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/5 rounded-lg">
                  <GitPullRequest size={20} className="text-amber-400 mr-2" />
                  <div>
                    <div className="font-medium">
                      {agent.popularity.pulls.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">GitHub Pulls</div>
                  </div>
                </div>
                <div className="flex items-center px-4 py-2 bg-white/5 rounded-lg">
                  <MessageSquare size={20} className="text-green-400 mr-2" />
                  <div>
                    <div className="font-medium">
                      {agent.popularity.reviews}
                    </div>
                    <div className="text-xs text-gray-400">Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tab Navigation */}
          <div className="border-b border-white/10">
            <nav className="flex overflow-x-auto hide-scrollbar">
              <a href="#usecases" className="px-6 py-4 text-white font-medium border-b-2 border-amber-500">
                <div className="flex items-center">
                  <Lightbulb size={16} className="mr-2" />
                  Use Cases
                </div>
              </a>
              <a href="#overview" className="px-6 py-4 text-gray-400 hover:text-white">
                <div className="flex items-center">
                  <LayoutGrid size={16} className="mr-2" />
                  Overview
                </div>
              </a>
              <a href="#tools" className="px-6 py-4 text-gray-400 hover:text-white">
                <div className="flex items-center">
                  <div size={16} className="mr-2" />
                  Tools Required
                </div>
              </a>
              <a href="#source" className="px-6 py-4 text-gray-400 hover:text-white">
                <div className="flex items-center">
                  <FileCode size={16} className="mr-2" />
                  Source
                </div>
              </a>
              <a href="#install" className="px-6 py-4 text-gray-400 hover:text-white">
                <div className="flex items-center">
                  <Code size={16} className="mr-2" />
                  How to Install
                </div>
              </a>
            </nav>
          </div>
          {/* Content */}
          <div className="p-8">
            {/* Use Cases Section */}
            <section id="usecases" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Content Analysis
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Use this agent to automatically analyze and extract insights
                    from large volumes of content, saving hours of manual review
                    time.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Research Assistance
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Accelerate research projects by quickly summarizing academic
                    papers, reports, and articles into actionable insights.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Data Processing
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Transform unstructured data into structured formats that can
                    be easily analyzed and used in downstream applications.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Workflow Automation
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    Integrate with your existing tools to automate repetitive
                    tasks and streamline your workflow, increasing productivity.
                  </p>
                </div>
              </div>
            </section>
            {/* Overview Section */}
            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">{agent.description}</p>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Features
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300">
                        Advanced natural language processing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300">
                        Seamless integration with popular platforms
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300">
                        Customizable output formats
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300">
                        Regular updates and improvements
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* Tools Required Section */}
            <section id="tools" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                Tools Required
              </h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Integrations
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {agent.integrations.map((integration, index) => <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg">
                      <div className="w-8 h-8 flex items-center justify-center mr-3 bg-white/10 rounded-lg">
                        <IntegrationIcon name={integration} size={20} />
                      </div>
                      <span className="text-gray-300">{integration}</span>
                    </div>)}
                </div>
              </div>
            </section>
            {/* Source Section */}
            <section id="source" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Source</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {agent.source.name}
                    </h3>
                    <p className="text-gray-400">
                      Last updated:{' '}
                      {new Date(agent.updatedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    </p>
                  </div>
                  <a href={agent.source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                    Visit Source
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </section>
            {/* How to Install Section */}
            <section id="install" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                How to Install
              </h2>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium text-white">
                    Setup Instructions
                  </h3>
                  <button className="inline-flex items-center text-amber-400 hover:text-amber-300">
                    <Copy size={16} className="mr-1" />
                    Copy
                  </button>
                </div>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-gray-300 whitespace-pre-wrap">
                  {agent.setupInstructions}
                </div>
              </div>
            </section>
            {/* Tags Section */}
            <section id="tags" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Tags</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map((tag, index) => <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white">
                      {tag}
                    </span>)}
                </div>
              </div>
            </section>
          </div>
          {/* Footer CTA */}
          <div className="border-t border-white/10 p-8 bg-gradient-to-r from-stone-900 to-neutral-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready to get started?
                </h3>
                <p className="text-gray-300">
                  Install this agent and start boosting your productivity today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium">
                  Install Agent
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-medium">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>;
}