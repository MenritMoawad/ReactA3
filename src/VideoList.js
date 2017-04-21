import React from 'react';

function VideoList(props) {
  return (
    <div className="sidebar">
      <ul className="video-list">
        {props.videos.map((video, i) => <li key={i} onClick={props.clickOnVideo.bind(null, i)}>
          <div className="image-container">
            <img src={video.snippet.thumbnails.default.url} alt=""/>
          </div>
          <h6>{video.snippet.title}</h6>
        </li>)}
      </ul>
    </div>
  )
}

export default VideoList;
