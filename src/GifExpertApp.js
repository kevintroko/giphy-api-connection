import React from 'react';

const GifExpertApp = () => {
    const categories = ['Liverpool', 'The Beatles', 'Kirby'];
    
    return (
        <>
        <h2>GifExpertApp</h2>
        <hr/>
        <ol>
            {
                categories.map(
                    (category) => {
                        return <li key={category}>
                                {category} </li>
                    }
                )
            }
        </ol>
        </>  
    )
}

export default GifExpertApp;