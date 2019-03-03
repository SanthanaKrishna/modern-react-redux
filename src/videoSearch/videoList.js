import React from 'react';
import VideoItem from './videoItem';

const VideoList =(props)=>{
    const videoList= props && props.videos && props.videos.map((video)=>{
        return <VideoItem video={video}/>
    })
    return <div className="ui relaxed divided list">
    {videoList}
    </div>
}
export default VideoList;