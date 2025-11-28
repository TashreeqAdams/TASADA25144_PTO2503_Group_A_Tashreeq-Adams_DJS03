import PodcastCard from "./PodcastCard";
import "../App.css";

export default function PodcastGrid({ podcasts, genres }) {
  return (
    <div className="thumbnail-container">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </div>
  );
}
