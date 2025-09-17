import React from 'react';
import { SlackIcon, FileIcon, BookOpenIcon, MessageSquareIcon, DatabaseIcon, BarChartIcon, CalendarIcon, GitBranchIcon, CodeIcon, BoxIcon, MailIcon, TableIcon, BrainIcon, GlobeIcon, SendIcon } from 'lucide-react';
interface IntegrationIconProps {
  name: string;
  size?: number;
}
export function IntegrationIcon({
  name,
  size = 16
}: IntegrationIconProps) {
  const getIcon = () => {
    switch (name) {
      case 'Slack':
        return <SlackIcon size={size} className="text-[#4A154B]" />;
      case 'Google Drive':
        return <FileIcon size={size} className="text-[#0F9D58]" />;
      case 'Notion':
        return <BookOpenIcon size={size} className="text-white" />;
      case 'Zendesk':
      case 'Intercom':
        return <MessageSquareIcon size={size} className="text-[#03363D]" />;
      case 'Salesforce':
        return <DatabaseIcon size={size} className="text-[#00A1E0]" />;
      case 'Tableau':
      case 'Power BI':
      case 'Google Data Studio':
        return <BarChartIcon size={size} className="text-[#E97627]" />;
      case 'Zoom':
      case 'Teams':
      case 'Google Meet':
        return <CalendarIcon size={size} className="text-[#2D8CFF]" />;
      case 'GitHub':
      case 'GitLab':
      case 'Bitbucket':
        return <GitBranchIcon size={size} className="text-[#2088FF]" />;
      case 'VS Code':
      case 'JetBrains IDEs':
        return <CodeIcon size={size} className="text-[#007ACC]" />;
      case 'Gmail':
        return <MailIcon size={size} className="text-[#EA4335]" />;
      case 'Sheets':
        return <TableIcon size={size} className="text-[#0F9D58]" />;
      case 'OpenAI':
      case 'Anthropic':
      case 'Google Gemini':
        return <BrainIcon size={size} className="text-[#10a37f]" />;
      case 'Telegram':
        return <SendIcon size={size} className="text-[#0088cc]" />;
      default:
        return <BoxIcon size={size} className="text-gray-300" />;
    }
  };
  return <div className="flex items-center justify-center" title={name}>
      {getIcon()}
    </div>;
}