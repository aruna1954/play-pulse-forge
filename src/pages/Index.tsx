import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import VideoGrid from "@/components/VideoGrid";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-youtube-bg">
      <Header onMenuClick={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        <main 
          className={`flex-1 transition-all duration-300 pt-16 ${
            sidebarOpen ? "ml-60" : "ml-16"
          }`}
        >
          <VideoGrid />
        </main>
      </div>
    </div>
  );
};

export default Index;
