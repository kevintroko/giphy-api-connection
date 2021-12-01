import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card">
            <img alt={title} src={url}/>
            <p>{title}</p>
        </div>
    )
}
