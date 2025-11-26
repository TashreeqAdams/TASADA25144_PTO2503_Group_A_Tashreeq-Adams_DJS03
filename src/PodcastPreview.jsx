import React, { useState, useEffect } from "react";

function PodcastPreview() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://podcast-api.netlify.app/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="thumbnail">
      {data && Array.isArray(data)
        ? data.map((element, index) => (
            <div key={index}>
              <img
                className="podcast-img"
                src={element.image}
                alt={element.title || "Podcast image"}
              />
              <h1 className="podcast-title">{element.title}</h1>
              <p className="seasonDetails">{element.seasons}</p>
              <p className="podcast-genres">Genres:</p>
              <p className="podcast-update">Last Updated:</p>
            </div>
          ))
        : null}
    </div>
  );
}

export default PodcastPreview;
