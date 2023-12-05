import React, { useEffect, useState } from 'react';
import supabase from '../components/supabaseClient';
import { useParams, Link } from 'react-router-dom';
import '../css/StoryPlayPage.css'; // Import the CSS file

function StoryPlayPage() {
  const { id } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('story_details').select('*').eq('s_id', id);
      if (error) console.log('Data fetch error: ', error);
      else setContent(data[0]);
    };
  
    fetchData();
  }, [id]);

  return (
    <div className="story-play-page">
      <div className="content-container">
        {content && (
          <>
            <img src={`https://picsum.photos/200/200?random=${content.s_id}`} alt={`Content ${content.s_id}`} />
            <h2>{content.s_name}</h2>
            <p>{content.s_description}</p>
            <p>{content.text_content}</p>
            <Link to="/">Back Home</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default StoryPlayPage;