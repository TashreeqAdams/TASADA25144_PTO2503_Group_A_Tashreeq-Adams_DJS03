export default function PodcastCard({ podcast, genres }) {
  return (
    <div className="podcast-card">
      <img src={podcast.image} alt={podcast.title} />
      <h2>{podcast.title}</h2>
      <p>{podcast.seasons} seasons</p>
      <p>
        Genres:{" "}
        {podcast.genres
          .map((id) => genres.find((g) => g.id === id)?.title)
          .join(", ")}
      </p>
      <p>Last updated: {podcast.updated}</p>
    </div>
  );
}
