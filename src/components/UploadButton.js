import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/UploadButton.css';
import UploadTextStory from '../components/UploadTextStory';
import UploadAudioStory from '../components/UploadAudioStory'; // import your UploadAudioStory component
import UploadArtStory from '../components/UploadArtStory'; // import your UploadArtStory component
import UploadCompleteStory from '../components/UploadCompleteStory'; // import your UploadCompleteStory component

function UploadButton() {
    const [showOptions, setShowOptions] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [showTextStory, setShowTextStory] = useState(false);
    const [showAudioStory, setShowAudioStory] = useState(false);
    const [showArtStory, setShowArtStory] = useState(false); // new state variable
    const [showCompleteStory, setShowCompleteStory] = useState(false); // new state variable
    const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
    setIsClicked(true);
  };

  const handleTextStoryClick = () => {
    setShowTextStory(true);
    setShowAudioStory(false);
    setShowArtStory(false); // hide the art story when the text story is clicked
    setShowCompleteStory(false); // hide the complete story when the text story is clicked
    setActiveButton('text');
  };

  const handleAudioStoryClick = () => {
    setShowAudioStory(true);
    setShowTextStory(false);
    setShowArtStory(false); // hide the art story when the audio story is clicked
    setShowCompleteStory(false); // hide the complete story when the audio story is clicked
    setActiveButton('audio');
  };

  const handleArtStoryClick = () => {
    setShowArtStory(true);
    setShowTextStory(false); // hide the text story when the art story is clicked
    setShowAudioStory(false); // hide the audio story when the art story is clicked
    setShowCompleteStory(false); // hide the complete story when the art story is clicked
    setActiveButton('art');
  };

  const handleCompleteStoryClick = () => {
    setShowCompleteStory(true);
    setShowTextStory(false); // hide the text story when the complete story is clicked
    setShowAudioStory(false); // hide the audio story when the complete story is clicked
    setShowArtStory(false); // hide the art story when the complete story is clicked
    setActiveButton('complete');
  };

  return (
    <div className="upload-button">
      <button className="button" onClick={handleButtonClick} disabled={isClicked} style={{backgroundColor: isClicked ? 'grey' : ''}}>Upload Stories</button>
      {showOptions && (
        <div>
          <Link to="" className={`button ${activeButton === 'text' ? 'active' : ''}`} onClick={handleTextStoryClick}>Text Story</Link>
          <Link to="" className={`button ${activeButton === 'audio' ? 'active' : ''}`} onClick={handleAudioStoryClick}>Audio Story</Link>
          <Link to="" className={`button ${activeButton === 'art' ? 'active' : ''}`} onClick={handleArtStoryClick}>Art Story</Link>
          <Link to="" className={`button ${activeButton === 'complete' ? 'active' : ''}`} onClick={handleCompleteStoryClick}>Complete Story</Link>
        </div>
      )}
      {showTextStory && <UploadTextStory />}
      {showAudioStory && <UploadAudioStory />} {/* render the UploadAudioStory component when showAudioStory is true */}
      {showArtStory && <UploadArtStory />} {/* render the UploadAudioStory component when showAudioStory is true */}
      {showCompleteStory && <UploadCompleteStory />} {/* render the UploadAudioStory component when showAudioStory is true */}
    </div>
  );
}

export default UploadButton;