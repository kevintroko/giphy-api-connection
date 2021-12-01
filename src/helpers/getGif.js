const API_KEY = 'adWjSzzT0NRuUc0WQaiosvbKG9Xx13W4';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(category)}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
}