import React from 'react';

export const NotFound = () => (
  <div className="not-found">
    <h1>You&apos;re Lost.</h1>
    <p>
      Sorry we couldn&apos;t find what you&apos;re looking for.{' '}
      <a href="/">Try going back Home.</a>
    </p>
    <iframe
      width="90%"
      height="720"
      src="https://www.youtube.com/embed/EkOxJF1wiWY"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);
