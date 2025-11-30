import "../App.css";
import { daysAgo } from "../utils/dateConverter";

/**
 * @typedef {Object} Genre
 * @property {number|string} id - Unique genre identifier.
 * @property {string} title - Display title of the genre.
 */

/**
 * @typedef {Object} Podcast
 * @property {number|string} id - Unique podcast identifier.
 * @property {string} title - Podcast title.
 * @property {string} image - URL to podcast thumbnail image.
 * @property {number} seasons - Number of seasons available.
 * @property {number[]} genres - Array of genre IDs associated with the podcast.
 * @property {string|number|Date} updated - Timestamp or date representing the last update time.
 */

/**
 * PodcastCard component — displays a single podcast entry with image,
 * title, seasons, genres, and last updated information.
 *
 * @param {Object} props
 * @param {Podcast} props.podcast - Podcast data to render.
 * @param {Genre[]} props.genres - List of all available genres used to resolve genre names.
 *
 * @returns {JSX.Element} A fully rendered podcast card.
 */

export default function PodcastCard({ podcast, genres }) {
  return (
    <div className="thumbnail">
      <img className="podcast-img" src={podcast.image} alt={podcast.title} />
      <h2 className="podcast-title">{podcast.title}</h2>
      <p className="seasonDetails">{podcast.seasons} seasons</p>
      <div className="podcast-genres">
        {" "}
        {podcast.genres
          .map((id) => genres.find((g) => g.id === id)?.title)
          .map((title, index) => (
            <p key={index}>{title}</p>
          ))}
      </div>
      <p className="podcast-update">Last updated: {daysAgo(podcast.updated)}</p>
    </div>
  );
}
