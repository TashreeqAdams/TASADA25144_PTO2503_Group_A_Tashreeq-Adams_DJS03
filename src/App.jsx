import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { genres } from "./data";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  console.log("Loading:", loading, "Error:", error, "Podcasts:", podcasts);

  return (
    <>
      <Header />
      <main>
        {loading && <p>Loading Podcasts</p>}
        {!loading && error && (
          <p>Error occurred while fetching podcasts: {error}</p>
        )}
        {!loading && !error && (
          <PodcastGrid podcasts={podcasts} genres={genres} />
        )}
      </main>
    </>
  );
}
