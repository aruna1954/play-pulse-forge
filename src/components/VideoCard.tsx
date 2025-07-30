import { formatDistanceToNow } from "date-fns";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: number;
  publishedAt: Date;
  duration: string;
  onClick?: () => void;
}

const VideoCard = ({
  thumbnail,
  title,
  channel,
  views,
  publishedAt,
  duration,
  onClick,
}: VideoCardProps) => {
  const formatViews = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const formatTimeAgo = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <div 
      className="group cursor-pointer transition-all duration-200"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative mb-3 overflow-hidden rounded-xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-3">
        {/* Channel Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-youtube-red to-youtube-red-hover flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
          {channel[0]}
        </div>

        {/* Video Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-youtube-text line-clamp-2 text-sm leading-5 mb-1 group-hover:text-youtube-red transition-colors">
            {title}
          </h3>
          <div className="text-youtube-text-secondary text-xs space-y-0.5">
            <p className="hover:text-youtube-text transition-colors cursor-pointer">
              {channel}
            </p>
            <div className="flex items-center gap-1">
              <span>{formatViews(views)} views</span>
              <span>•</span>
              <span>{formatTimeAgo(publishedAt)}</span>
            </div>
          </div>
        </div>

        {/* More options */}
        <Button 
          variant="ghost" 
          size="icon"
          className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            // Handle menu click
          }}
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;