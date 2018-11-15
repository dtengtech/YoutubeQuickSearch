import React from 'react';
import VideoListItem from './video_list_item'
const VideoList = (props) => {
    const VideoItems = props.videos.map((video) => {
        return <VideoListItem video={video} onVideoChange={props.onVideoChange }key={video.etag}/>
    });
    return(
        <ul className='list-group col-md-4'>
        {VideoItems}
        </ul>
    );
};

export default VideoList;