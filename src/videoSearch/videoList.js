import React from 'react';
import VideoItem from './videoItem';
import VideoDetail from './videoDetails';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoList = videos && videos.map((video) => {
        return <VideoItem key={VideoDetail.videoId}
         onVideoSelect={onVideoSelect} 
         video={video} 
         />
    })
    return <div className="ui relaxed divided list">
        {videoList}
    </div>
}
export default VideoList;