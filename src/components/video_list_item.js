import React from 'react';

const VideoListItem = ({ video, onVideoChange }) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoChange(video)} className='list-group-item'>
            <div className="media video-list">
                <img className="align-self-top mr-2 img-fluid" src={imgUrl} />
                <div className="media-body">
                    <h5 className="mt-0">{video.snippet.title}</h5>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;