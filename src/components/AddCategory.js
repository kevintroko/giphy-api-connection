import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [value, setValue] = useState('');
    
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (value.trim().length > 2) {
            setCategories((categories) => [...categories, value]);
            setValue('');
        }
    }
    
    return (
    <form onSubmit={handleSubmit}>        
        <input 
            type="text"
            value={value}
            onChange={ handleInputChange }
        />
    </form>
)};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
