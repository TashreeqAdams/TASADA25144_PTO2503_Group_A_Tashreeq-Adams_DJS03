import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { genres } from "./data";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";

/**
 * App component — main entry point of the application.
 * Handles loading, error states, and passing podcast data down to the PodcastGrid component.
 *
 * @returns {JSX.Element} The rendered application layout.
 */

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
      <div className="container">
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
      </div>
    </>
  );
}
