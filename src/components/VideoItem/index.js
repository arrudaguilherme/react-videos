import React from 'react';
import './styles.css';

const VideoItem = ({video,onVideoSelect})=>{
    return (
        <div onClick={()=> onVideoSelect(video) } className="video-item item">
            <img className="ui image" alt = {video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <div key={video.id.videoId} className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
            
        </div>
    );    
}

export default VideoItem;