import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/ContentFeed.css';
import supabase from './supabaseClient';
import ClipLoader from "react-spinners/ClipLoader";



function ContentFeed({ searchTerm, selectedCategory, userId}) {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase.from('story_details').select('*');
      if (userId) {
        data = data.filter(content => content.uuid === userId);
      }
      if (error) console.log('Data fetch error: ', error);
      else setContents(data);
      setLoading(false);
    };

    fetchData();
  }, [userId]);

  const filteredContents = contents.filter(content =>
    content.s_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedCategory || content.category === selectedCategory)
  );

  return (
    <div className="content-feed">
      {loading ? (
        <ClipLoader color="#4A90E2" loading={loading} size={150} />
      ) : (
        filteredContents.map(content => (
          <Link to={`/story-play/${content.s_id}`} key={content.s_id} className="content-item" style={{ animation: 'fade-in 0.5s' }}>
            <img src={`https://picsum.photos/200/200?random=${content.s_id}`} alt={`Content ${content.s_id}`} />
            <h2>{content.s_name}</h2>
          </Link>
        ))
      )}
    </div>
  );
}

export default ContentFeed;