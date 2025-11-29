import "../App.css";
import { daysAgo } from "../utils/dateConverter";

export default function PodcastCard({ podcast, genres }) {
  return (
    <div className="thumbnail">
      <img className="podcast-img" src={podcast.image} alt={podcast.title} />
      <h2 className="podcast-title">{podcast.title}</h2>
      <p className="seasonDetails">{podcast.seasons} seasons</p>
      <p className="podcast-genres">
        Genres:{" "}
        {podcast.genres
          .map((id) => genres.find((g) => g.id === id)?.title)
          .join(", ")}
      </p>
      <p className="podcast-update">Last updated: {daysAgo(podcast.updated)}</p>
    </div>
  );
}
