import React from 'react';
import '../css/ContentFeed.css';

function ContentFeed() {
  const contents = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="content-feed">
      {contents.map(content => (
        <div key={content} className="content-item">
          Content {content}
        </div>
      ))}
    </div>
  );
}

export default ContentFeed;