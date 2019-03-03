import React from 'react';
import './videoItem.css'
const videoItem=({video})=>{
    return (
    <div className="item">
        <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
        <div className="content">
        <div className="header">{video.snippet.title}</div>
        </div>
    </div>
    );
};
export default videoItem;