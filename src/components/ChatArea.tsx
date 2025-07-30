import { ScrollArea } from "@/components/ui/scroll-area";
import ChatMessage from "./ChatMessage";
import { MessageSquare, Sparkles, FileText, Code, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

interface ChatAreaProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const ChatArea = ({ messages, onSendMessage }: ChatAreaProps) => {
  const suggestions = [
    {
      icon: Sparkles,
      title: "Creative writing",
      description: "Help me write a story about...",
    },
    {
      icon: Code,
      title: "Code review",
      description: "Review my JavaScript code",
    },
    {
      icon: FileText,
      title: "Summarize",
      description: "Summarize this article for me",
    },
    {
      icon: Lightbulb,
      title: "Brainstorm",
      description: "Help me brainstorm ideas for...",
    },
  ];

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center mb-8">
          <MessageSquare className="h-16 w-16 text-chat-primary mx-auto mb-4" />
          <h1 className="text-3xl font-semibold text-chat-text mb-2">
            How can I help you today?
          </h1>
          <p className="text-chat-text-secondary">
            Ask me anything or try one of these suggestions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl w-full">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start text-left border-chat-border hover:bg-chat-assistant-bg"
              onClick={() => onSendMessage(suggestion.description)}
            >
              <div className="flex items-center gap-3 mb-2">
                <suggestion.icon className="h-5 w-5 text-chat-primary" />
                <span className="font-medium text-chat-text">
                  {suggestion.title}
                </span>
              </div>
              <span className="text-sm text-chat-text-secondary">
                {suggestion.description}
              </span>
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1">
      <div className="min-h-full">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatArea;