import React from 'react';
import { X, Star, GitPullRequest, MessageSquare, ExternalLink, Copy, CheckCircle } from 'lucide-react';
import { Badge } from './Badge';
import { Agent } from '../types';
import { IntegrationIcon } from './IntegrationIcon';
interface AgentDetailModalProps {
  agent: Agent;
  onClose: () => void;
}
export function AgentDetailModal({
  agent,
  onClose
}: AgentDetailModalProps) {
  return <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button type="button" className="bg-white rounded-md text-gray-400 hover:text-gray-500" onClick={onClose}>
              <X size={24} />
            </button>
          </div>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left sm:w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge source={agent.source.name} className="mb-2" />
                    <h3 className="text-2xl font-bold text-gray-900" id="modal-title">
                      {agent.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star size={20} className="text-yellow-400" />
                      <span className="ml-1 font-medium">
                        {agent.popularity.rating}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <GitPullRequest size={20} className="text-gray-500" />
                      <span className="ml-1">
                        {agent.popularity.pulls.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare size={20} className="text-gray-500" />
                      <span className="ml-1">
                        {agent.popularity.reviews} reviews
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700">{agent.summary}</p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        Description
                      </h4>
                      <p className="text-gray-700">{agent.description}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        Setup Instructions
                      </h4>
                      <div className="bg-gray-50 rounded-md p-4">
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                          {agent.setupInstructions}
                        </pre>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.tags.map((tag, index) => <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {tag}
                          </span>)}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Source
                        </h4>
                        <a href={agent.source.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800">
                          {agent.source.name}
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Integrations
                        </h4>
                        <div className="space-y-2">
                          {agent.integrations.map((integration, index) => <div key={index} className="flex items-center">
                              <IntegrationIcon name={integration} />
                              <span className="ml-2 text-sm text-gray-700">
                                {integration}
                              </span>
                            </div>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Last Updated
                        </h4>
                        <p className="text-sm text-gray-600">
                          {new Date(agent.updatedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 mb-2">
                        Use Agent
                      </button>
                      <button className="w-full flex justify-center items-center border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50">
                        <Copy size={16} className="mr-2" />
                        Copy Setup Command
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}