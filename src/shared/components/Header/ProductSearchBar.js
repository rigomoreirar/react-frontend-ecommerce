import React from 'react';

import Magnifier from '../../assets/magnifier.png';
import './ProductSearchBar.css';
import { useForm } from '../../hooks/form-hook'; // Adjust the path as needed

const ProductSearchBar = () => {
  const [formState, inputHandler] = useForm({
    search: {
      value: '',
      isValid: true // Since there are no validations, we can set this to true
    }
  }, true);

  const searchSubmitHandler = event => {
    event.preventDefault();
    // Implement what should happen when the search is submitted
    console.log(formState.inputs.search.value);
  };

  return (
    <form onSubmit={searchSubmitHandler} className="search-bar-form">
      <input 
        id="search" 
        type="text" 
        placeholder="Search Products..." 
        onChange={event => inputHandler('search', event.target.value, true)} 
        value={formState.inputs.search.value}
      />
      <button type="submit" className="search-button">
        <img src={Magnifier} alt="Search" /> {/* Replace with your icon */}
      </button>
    </form>
  );
};

export default ProductSearchBar;


