import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['The Beatles'])
    
    return (
        <>
        <h2>Search your favorite gifs</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        
        <ol>
            {
                categories.map(
                    (category) => (<GifGrid category={category} key={category}/>)
                )
            }
        </ol>
        </>  
    )
}

export default GifExpertApp;