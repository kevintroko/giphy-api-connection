import React, { useState } from 'react';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Liverpool', 'The Beatles', 'Kirby'])
    
    const handleAdd = () => {
        const newArr = [...categories, 'Tacos'];
        setCategories(newArr)
    }
    
    return (
        <>
        <h2>GifExpertApp</h2>
        <hr/>
        
        <button onClick={handleAdd}>add</button>
        
        <ol>
            {
                categories.map(
                    (category) => {
                        return <li key={category}>
                            {category} 
                        </li>
                    }
                )
            }
        </ol>
        </>  
    )
}

export default GifExpertApp;