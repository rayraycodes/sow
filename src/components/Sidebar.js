// Sidebar.js
import React, { useContext, useEffect, useState } from 'react';
import supabase from '../components/supabaseClient';
import '../css/Sidebar.css'; // Import the CSS file
import CategoryContext from '../contexts/CategoryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ isOpen, toggleSidebar }) {
  const { setSelectedCategory } = useContext(CategoryContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    let { data: categories, error } = await supabase.from('category').select('*');
    if (error) console.log("Error: ", error);
    else setCategories(categories);
    console.log(categories);
  }

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <h1 style={{color: 'white', paddingLeft: '20px'}}>Categories</h1>
      <p style={{color: 'white', paddingLeft: '20px', cursor: 'pointer'}} onClick={() => handleCategoryClick()}>All</p>
      {categories.map((category, index) => (
        <p key={index} style={{color: 'white', paddingLeft: '20px', cursor: 'pointer'}} onClick={() => handleCategoryClick(category.cat_id)}>{category.name}</p>
      ))}
      <button onClick={toggleSidebar} style={{
          position: 'absolute', 
          top: '20px', 
          right: '20px',
          fontFamily: 'Montserrat, sans-serif',
          borderRadius: '50%',
          padding: '10px 20px',
          border: 'none',
          backgroundColor: '#111',
          color: 'white',
          cursor: 'pointer',
          fontSize: '16px',
          transition: '0.3s',
          outline: 'none'
        }}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
    </div>
  );
}

export default Sidebar;