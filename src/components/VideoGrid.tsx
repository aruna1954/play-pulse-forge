import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";
import thumb1 from "@/assets/thumb1.jpg";
import thumb2 from "@/assets/thumb2.jpg";
import thumb3 from "@/assets/thumb3.jpg";
import thumb4 from "@/assets/thumb4.jpg";
import thumb5 from "@/assets/thumb5.jpg";
import thumb6 from "@/assets/thumb6.jpg";

const VideoGrid = () => {
  const navigate = useNavigate();

  const videos = [
    {
      id: "1",
      thumbnail: thumb1,
      title: "The Ultimate Smartphone Review 2024 - Everything You Need to Know!",
      channel: "TechReviews",
      views: 1240000,
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      duration: "12:34",
    },
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
      title: "Epic Gaming Setup Tour 2024 - $10K Gaming Room!",
      channel: "GamerHub",
      views: 2100000,
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      duration: "15:22",
    },
    {
      id: "4",
      thumbnail: thumb4,
      title: "Incredible Mountain Adventure - Hiking the World's Most Beautiful Peaks",
      channel: "AdventureSeeker",
      views: 634000,
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      duration: "20:18",
    },
    {
      id: "5",
      thumbnail: thumb5,
      title: "30-Minute Full Body Workout - No Equipment Needed!",
      channel: "FitnessFirst",
      views: 950000,
      publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      duration: "30:12",
    },
    {
      id: "6",
      thumbnail: thumb6,
      title: "Mind-Blowing Science Experiments You Can Do at Home",
      channel: "ScienceFun",
      views: 1800000,
      publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      duration: "11:56",
    },
    // Duplicate videos to fill the grid
    {
      id: "7",
      thumbnail: thumb1,
      title: "Latest Tech Gadgets 2024 - Must Have Devices",
      channel: "TechReviews",
      views: 750000,
      publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
      duration: "14:23",
    },
    {
      id: "8",
      thumbnail: thumb2,
      title: "Quick and Easy Dinner Recipes for Busy People",
      channel: "CookingMaster",
      views: 425000,
      publishedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
      duration: "9:18",
    },
    {
      id: "9",
      thumbnail: thumb3,
      title: "Best Gaming Peripherals Under $100",
      channel: "GamerHub",
      views: 1200000,
      publishedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
      duration: "16:45",
    },
    {
      id: "10",
      thumbnail: thumb4,
      title: "Travel Photography Tips for Stunning Landscape Shots",
      channel: "AdventureSeeker",
      views: 380000,
      publishedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      duration: "13:27",
    },
    {
      id: "11",
      thumbnail: thumb5,
      title: "Morning Yoga Routine - Start Your Day Right",
      channel: "FitnessFirst",
      views: 675000,
      publishedAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000),
      duration: "25:30",
    },
    {
      id: "12",
      thumbnail: thumb6,
      title: "Chemistry Explained - Understanding Basic Reactions",
      channel: "ScienceFun",
      views: 920000,
      publishedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
      duration: "18:12",
    },
  ];

  const handleVideoClick = (videoId: string) => {
    navigate(`/watch?v=${videoId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          thumbnail={video.thumbnail}
          title={video.title}
          channel={video.channel}
          views={video.views}
          publishedAt={video.publishedAt}
          duration={video.duration}
          onClick={() => handleVideoClick(video.id)}
        />
      ))}
    </div>
  );
};

export default VideoGrid;