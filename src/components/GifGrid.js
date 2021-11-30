import React from 'react'
const API_KEY = 'adWjSzzT0NRuUc0WQaiosvbKG9Xx13W4';

export const GifGrid = ({category}) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=Liverpool&limit=5`;
    
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
    }
    
    getGifs();
    
    return (
        <div>
            <h3> {category} </h3>
        </div>
    )
}
