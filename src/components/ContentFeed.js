import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ContentFeed.css';
import supabase from './supabaseClient';

function ContentFeed({ searchTerm, selectedCategory }) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('story_details').select('*');
      if (error) console.log('Data fetch error: ', error);
      else setContents(data);
      console.log(data);
    };

    fetchData();
  }, []);

  const filteredContents = contents.filter(content =>
    content.s_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedCategory || content.category === selectedCategory)
  );
  console.log(filteredContents);

  return (
    <div className="content-feed">
      {filteredContents.map(content => (
        <Link to={`/story-play/${content.s_id}`} key={content.s_id}>
          <div className="content-item">
            <img src={`https://picsum.photos/200/200?random=${content.s_id}`} alt={`Content ${content.s_id}`} />
            <h2>{content.s_name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ContentFeed;