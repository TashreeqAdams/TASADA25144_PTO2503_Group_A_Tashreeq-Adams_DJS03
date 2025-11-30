/**
 * Converts an ISO date string into a human-readable "Updated {date}" format.
 *
 * @param {string|number|Date} isoString - An ISO timestamp or any valid date input for `Date()`.
 * @returns {string} A formatted string.
 */
export function daysAgo(isoString) {
  const pastDate = new Date(isoString);

  return `Updated ${pastDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
}
