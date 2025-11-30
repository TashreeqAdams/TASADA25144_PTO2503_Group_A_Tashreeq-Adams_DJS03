import PodcastCard from "./PodcastCard";
import "../App.css";

/**
 * @typedef {Object} Podcast
 * @property {string|number} id - Unique identifier for the podcast.
 */

/**
 * @typedef {Object} Genre
 * @property {string|number} id - Unique genre identifier.
 * @property {string} name - Display name of the genre.
 */

/**
 * PodcastGrid component — renders a grid of podcast cards.
 *
 * @param {Object} props
 * @param {Podcast[]} props.podcasts - List of podcast objects to display.
 * @param {Genre[]} props.genres - List of all genres used to determine podcast categories.
 *
 * @returns {JSX.Element} Grid of PodcastCard components.
 */

export default function PodcastGrid({ podcasts, genres }) {
  return (
    <div id="thumbnail-container">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </div>
  );
}
