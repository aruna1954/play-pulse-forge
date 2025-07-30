import { useState } from "react";
import ChatHeader from "@/components/ChatHeader";
import ChatSidebar from "@/components/ChatSidebar";
import ChatArea from "@/components/ChatArea";
import ChatInput from "@/components/ChatInput";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm a demo ChatGPT clone. I can help you with various tasks like writing, coding, analysis, and answering questions. What would you like to know or discuss?",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-chat-bg flex flex-col">
      <ChatHeader 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        onNewChat={handleNewChat}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar isOpen={isSidebarOpen} />
        
        <main className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}>
          <ChatArea 
            messages={messages} 
            onSendMessage={handleSendMessage}
          />
          <ChatInput onSendMessage={handleSendMessage} />
        </main>
      </div>
    </div>
  );
};

export default Index;
