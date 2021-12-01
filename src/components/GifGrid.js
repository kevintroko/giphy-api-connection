import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        getGifs(category).then(
            img => setImages(img)
        );   
    }, [category]);
    
    return (
        <>
        <h3> {category} </h3>
        <div className="cardGrid">
                {
                    images.map((img) => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
        </div>
        </>
    )
}
