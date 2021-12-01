import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div>
            <img 
                alt={title}
                src={url}
                width="200"
            />
            <p>{title}</p>
        </div>
    )
}
