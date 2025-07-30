import { MessageSquare, History, Settings, HelpCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatSidebarProps {
  isOpen: boolean;
  className?: string;
}

const ChatSidebar = ({ isOpen, className }: ChatSidebarProps) => {
  const recentChats = [
    "How to learn React",
    "JavaScript best practices",
    "Design system principles",
    "API integration patterns",
    "State management tips",
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-64px)] bg-chat-surface border-r border-chat-border transition-all duration-300 z-40",
        isOpen ? "w-64" : "w-0 overflow-hidden",
        className
      )}
    >
      {isOpen && (
        <div className="flex flex-col h-full">
          {/* Recent Chats */}
          <div className="flex-1 p-4">
            <h3 className="text-sm font-medium text-chat-text-secondary mb-3">
              Recent
            </h3>
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-1">
                {recentChats.map((chat, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start px-3 py-2 h-auto text-left text-chat-text hover:bg-chat-assistant-bg"
                  >
                    <MessageSquare className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="truncate text-sm">{chat}</span>
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Bottom Actions */}
          <div className="border-t border-chat-border p-4 space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 h-10 text-chat-text hover:bg-chat-assistant-bg"
            >
              <History className="h-4 w-4 mr-3" />
              <span>History</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 h-10 text-chat-text hover:bg-chat-assistant-bg"
            >
              <Settings className="h-4 w-4 mr-3" />
              <span>Settings</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 h-10 text-chat-text hover:bg-chat-assistant-bg"
            >
              <HelpCircle className="h-4 w-4 mr-3" />
              <span>Help</span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start px-3 py-2 h-10 text-chat-text hover:bg-chat-assistant-bg"
            >
              <User className="h-4 w-4 mr-3" />
              <span>Account</span>
            </Button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ChatSidebar;