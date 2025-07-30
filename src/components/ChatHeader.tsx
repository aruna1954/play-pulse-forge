import { MessageSquare, Plus, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  onToggleSidebar: () => void;
  onNewChat: () => void;
}

const ChatHeader = ({ onToggleSidebar, onNewChat }: ChatHeaderProps) => {
  return (
    <header className="h-16 bg-chat-surface border-b border-chat-border flex items-center px-4 justify-between">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="h-9 w-9"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-chat-primary" />
          <span className="font-semibold text-chat-text">ChatGPT</span>
        </div>
      </div>
      
      <Button
        onClick={onNewChat}
        className="bg-chat-primary hover:bg-chat-primary-hover text-white"
      >
        <Plus className="h-4 w-4 mr-2" />
        New Chat
      </Button>
    </header>
  );
};

export default ChatHeader;