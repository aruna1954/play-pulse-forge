import { useSearchParams } from "react-router-dom";
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import VideoCard from "@/components/VideoCard";
import { formatDistanceToNow } from "date-fns";
import thumb1 from "@/assets/thumb1.jpg";
import thumb2 from "@/assets/thumb2.jpg";
import thumb3 from "@/assets/thumb3.jpg";
import thumb4 from "@/assets/thumb4.jpg";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  // Mock video data
  const currentVideo = {
    title: "The Ultimate Smartphone Review 2024 - Everything You Need to Know!",
    channel: "TechReviews",
    subscribers: "2.1M",
    views: 1240000,
    likes: 45000,
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    description: "In this comprehensive review, we dive deep into the latest smartphones of 2024. From camera quality to battery life, performance benchmarks to design aesthetics, we cover everything you need to make an informed decision for your next phone upgrade.",
  };

  const suggestedVideos = [
    {
      id: "2",
      thumbnail: thumb2,
      title: "How to Make Perfect Pasta - Professional Chef Secrets",
      channel: "CookingMaster",
      views: 856000,
      publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      duration: "8:45",
    },
    {
      id: "3",
      thumbnail: thumb3,
      title: "Epic Gaming Setup Tour 2024",
      channel: "GamerHub",
      views: 2100000,
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      duration: "15:22",
    },
    {
      id: "4",
      thumbnail: thumb4,
      title: "Mountain Adventure Hiking",
      channel: "AdventureSeeker",
      views: 634000,
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      duration: "20:18",
    },
  ];

  const formatViews = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="flex gap-6 p-6 max-w-full">
      {/* Main Content */}
      <div className="flex-1 max-w-5xl">
        {/* Video Player */}
        <div className="relative mb-4 bg-black rounded-xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-youtube-red/20 to-youtube-red-hover/20 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-youtube-red rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-lg">Video Player</p>
              <p className="text-sm opacity-75">Video ID: {videoId}</p>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold text-youtube-text">
            {currentVideo.title}
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Channel Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-youtube-red to-youtube-red-hover flex items-center justify-center text-white font-semibold">
                  {currentVideo.channel[0]}
                </div>
                <div>
                  <p className="font-medium text-youtube-text">{currentVideo.channel}</p>
                  <p className="text-sm text-youtube-text-secondary">{currentVideo.subscribers} subscribers</p>
                </div>
              </div>
              <Button className="bg-youtube-red hover:bg-youtube-red-hover text-white px-6">
                Subscribe
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-youtube-bg rounded-full">
                <Button variant="ghost" className="rounded-l-full px-4">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  {formatViews(currentVideo.likes)}
                </Button>
                <div className="w-px h-6 bg-youtube-border"></div>
                <Button variant="ghost" className="rounded-r-full px-4">
                  <ThumbsDown className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="ghost" className="bg-youtube-bg rounded-full px-4">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" className="bg-youtube-bg rounded-full px-4">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="ghost" size="icon" className="bg-youtube-bg rounded-full">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Description */}
          <div className="bg-youtube-bg rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-youtube-text mb-2">
              <span>{formatViews(currentVideo.views)} views</span>
              <span>•</span>
              <span>{formatDistanceToNow(currentVideo.publishedAt, { addSuffix: true })}</span>
            </div>
            <p className="text-youtube-text text-sm leading-relaxed">
              {currentVideo.description}
            </p>
          </div>

          {/* Comments Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-youtube-text">Comments</h3>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-youtube-red to-youtube-red-hover flex items-center justify-center text-white font-semibold text-sm">
                U
              </div>
              <div className="flex-1">
                <Textarea 
                  placeholder="Add a comment..."
                  className="border-0 border-b border-youtube-border rounded-none bg-transparent focus:border-youtube-red resize-none"
                />
                <div className="flex justify-end gap-2 mt-2">
                  <Button variant="ghost">Cancel</Button>
                  <Button className="bg-youtube-red hover:bg-youtube-red-hover text-white">Comment</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Suggested Videos */}
      <div className="w-96 space-y-2">
        <h3 className="font-medium text-youtube-text mb-4">Up next</h3>
        {suggestedVideos.map((video) => (
          <div key={video.id} className="flex gap-2">
            <div className="w-40 flex-shrink-0">
              <VideoCard
                thumbnail={video.thumbnail}
                title={video.title}
                channel={video.channel}
                views={video.views}
                publishedAt={video.publishedAt}
                duration={video.duration}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;