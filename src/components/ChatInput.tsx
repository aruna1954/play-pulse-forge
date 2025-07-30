import { useState } from "react";
import { Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-chat-border bg-chat-surface p-4">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative flex items-end gap-3 bg-white border border-chat-border rounded-lg p-3">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-chat-text-secondary hover:bg-chat-assistant-bg"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message ChatGPT..."
              className="flex-1 min-h-[24px] max-h-[200px] resize-none border-0 p-0 text-base focus-visible:ring-0 bg-transparent"
              disabled={disabled}
            />
            
            <Button
              type="submit"
              size="icon"
              disabled={!message.trim() || disabled}
              className="h-8 w-8 bg-chat-primary hover:bg-chat-primary-hover text-white disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
        
        <p className="text-xs text-chat-text-secondary text-center mt-2">
          ChatGPT can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;