import { Agent } from '../types';
export const sampleAgents: Agent[] = [{
  id: '1',
  name: 'Content Summarizer',
  summary: 'Automatically summarize long documents and web content into concise, actionable insights',
  description: 'This advanced agent uses state-of-the-art natural language processing to analyze and condense lengthy documents, articles, and web pages into clear, structured summaries. Perfect for researchers, content creators, and busy professionals who need to quickly extract key information from large volumes of text.',
  source: {
    name: 'Hugging Face',
    url: 'https://huggingface.co/models'
  },
  popularity: {
    pulls: 12500,
    rating: 4.7,
    reviews: 342,
    isHot: true
  },
  integrations: ['Slack', 'Google Drive', 'Notion'],
  setupInstructions: '1. Clone the repository\n2. Install dependencies with npm install\n3. Configure your API keys\n4. Run the setup script',
  tags: ['NLP', 'Summarization', 'Content', 'Productivity'],
  createdAt: '2023-05-15',
  updatedAt: '2024-04-01'
}, {
  id: '2',
  name: 'Customer Support Assistant',
  summary: 'AI-powered support agent that handles common customer queries and escalates complex issues',
  description: 'Enhance your customer support with this intelligent agent that can understand customer inquiries, provide instant responses to common questions, and seamlessly escalate complex issues to human agents. Includes sentiment analysis to detect customer frustration and prioritize urgent cases.',
  source: {
    name: 'n8n',
    url: 'https://n8n.io/workflows'
  },
  popularity: {
    pulls: 8750,
    rating: 4.5,
    reviews: 216
  },
  integrations: ['Zendesk', 'Intercom', 'Salesforce', 'Slack'],
  setupInstructions: '1. Add to your n8n workspace\n2. Connect your support platform\n3. Customize response templates\n4. Set escalation rules',
  tags: ['Customer Support', 'Automation', 'Chatbot'],
  createdAt: '2023-08-22',
  updatedAt: '2024-03-15'
}, {
  id: '3',
  name: 'Data Visualization Generator',
  summary: 'Transform complex datasets into beautiful, interactive visualizations with minimal configuration',
  description: 'This powerful agent analyzes your data structure and automatically generates the most appropriate and insightful visualizations. It can create charts, graphs, heatmaps, and interactive dashboards that reveal patterns and trends in your data without requiring advanced technical skills.',
  source: {
    name: 'GitHub',
    url: 'https://github.com/featured-agents'
  },
  popularity: {
    pulls: 5600,
    rating: 4.8,
    reviews: 178
  },
  integrations: ['Tableau', 'Power BI', 'Google Data Studio', 'Excel'],
  setupInstructions: '1. Install via npm or yarn\n2. Import your dataset\n3. Run the visualization wizard\n4. Export or embed the results',
  tags: ['Data', 'Visualization', 'Analytics', 'Reporting'],
  createdAt: '2023-11-05',
  updatedAt: '2024-02-28'
}, {
  id: '4',
  name: 'Meeting Transcription & Action Items',
  summary: 'Automatically transcribe meetings, identify action items, and assign tasks to team members',
  description: 'Never miss important details from your meetings again. This agent records and transcribes conversations, uses AI to identify commitments and action items, and can automatically create and assign tasks in your project management tool. It also generates concise meeting summaries for easy reference.',
  source: {
    name: 'Zapier',
    url: 'https://zapier.com/apps'
  },
  popularity: {
    pulls: 9200,
    rating: 4.6,
    reviews: 267,
    isHot: true
  },
  integrations: ['Zoom', 'Teams', 'Google Meet', 'Asana', 'Trello', 'Jira'],
  setupInstructions: '1. Connect to your Zapier account\n2. Link your video conferencing platform\n3. Connect your task management tool\n4. Configure notification preferences',
  tags: ['Meetings', 'Transcription', 'Productivity', 'Task Management'],
  createdAt: '2023-07-12',
  updatedAt: '2024-04-10'
}, {
  id: '5',
  name: 'Code Review Assistant',
  summary: 'AI-powered code review that identifies bugs, security issues, and suggests improvements',
  description: 'Improve your code quality with this intelligent code review agent. It analyzes your codebase to find potential bugs, security vulnerabilities, and performance issues. It also suggests improvements based on best practices and can automatically fix common problems. Supports multiple programming languages and frameworks.',
  source: {
    name: 'GitHub',
    url: 'https://github.com/featured-agents'
  },
  popularity: {
    pulls: 7800,
    rating: 4.9,
    reviews: 324
  },
  integrations: ['GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'JetBrains IDEs'],
  setupInstructions: '1. Install the GitHub app\n2. Configure repository access\n3. Set review preferences\n4. Add to your CI/CD pipeline (optional)',
  tags: ['Development', 'Code Quality', 'Security', 'DevOps'],
  createdAt: '2023-09-18',
  updatedAt: '2024-03-22'
}, {
  id: '6',
  name: 'Social Media Content Generator',
  summary: 'Create engaging social media posts with AI-generated text, images, and hashtags',
  description: 'Streamline your social media marketing with this versatile content generation agent. It can create compelling post copy, suggest relevant hashtags, generate custom images, and even recommend optimal posting times based on your audience engagement patterns.',
  source: {
    name: 'Custom Repo',
    url: 'https://custom-agents.io/marketplace'
  },
  popularity: {
    pulls: 6300,
    rating: 4.4,
    reviews: 198
  },
  integrations: ['Buffer', 'Hootsuite', 'Later', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
  setupInstructions: '1. Clone the repository\n2. Configure your API keys\n3. Connect your social media accounts\n4. Set content preferences and posting schedule',
  tags: ['Marketing', 'Social Media', 'Content Creation', 'Automation'],
  createdAt: '2023-10-30',
  updatedAt: '2024-02-15'
}];