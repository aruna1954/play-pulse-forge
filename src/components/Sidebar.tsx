import { Home, Compass, History, PlaySquare, Clock, ThumbsUp, Flame, Music, GamepadIcon, Trophy, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  className?: string;
}

const Sidebar = ({ isOpen, className }: SidebarProps) => {
  const mainItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Compass, label: "Explore" },
    { icon: PlaySquare, label: "Subscriptions" },
  ];

  const libraryItems = [
    { icon: History, label: "History" },
    { icon: Clock, label: "Watch later" },
    { icon: ThumbsUp, label: "Liked videos" },
  ];

  const exploreItems = [
    { icon: Flame, label: "Trending" },
    { icon: Music, label: "Music" },
    { icon: GamepadIcon, label: "Gaming" },
    { icon: Trophy, label: "Sports" },
    { icon: Lightbulb, label: "Learning" },
  ];

  const SidebarContent = () => (
    <div className="space-y-4">
      {/* Main Navigation */}
      <div className="space-y-1">
        {mainItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-6 px-3 py-2 h-10",
              item.active && "bg-youtube-bg"
            )}
          >
            <item.icon className="h-5 w-5" />
            {isOpen && <span>{item.label}</span>}
          </Button>
        ))}
      </div>

      {isOpen && (
        <>
          <hr className="border-youtube-border" />
          
          {/* Library */}
          <div className="space-y-1">
            <h3 className="px-3 text-sm font-medium text-youtube-text-secondary mb-2">
              Library
            </h3>
            {libraryItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-6 px-3 py-2 h-10"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          <hr className="border-youtube-border" />

          {/* Explore */}
          <div className="space-y-1">
            <h3 className="px-3 text-sm font-medium text-youtube-text-secondary mb-2">
              Explore
            </h3>
            {exploreItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-6 px-3 py-2 h-10"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-64px)] bg-youtube-surface border-r border-youtube-border transition-all duration-300 z-40",
        isOpen ? "w-60" : "w-16",
        className
      )}
    >
      <div className="p-3 overflow-y-auto h-full">
        <SidebarContent />
      </div>
    </aside>
  );
};

export default Sidebar;