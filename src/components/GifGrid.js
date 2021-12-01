import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
const API_KEY = 'adWjSzzT0NRuUc0WQaiosvbKG9Xx13W4';

export const GifGrid = ({category}) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(category)}&limit=5`;
    
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        getGifs();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const getGifs = async () => {
        const resp = await fetch(url);
        console.log(resp);
        const {data} = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
    }
    
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
