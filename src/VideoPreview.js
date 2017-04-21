import React from 'react';

function isEmpty(obj) {
  for (var prop in obj) {
    return false;
  }
  return true;
}

function VideoPreview(props) {
  let videoid = "GKSRyLdjsPA";
  let channel_title = "SiaVEVO";
  let video_title = "Sia - The Greatest";
  let video_desciption = `Get "The Greatest" featuring Kendrick Lamar now on: iTunes - http://smarturl.it/ThisIsActingDeluxe?IQid=yt Amazon - http://smarturl.it/ThisIsActingDeluxea?`;
  if (isEmpty(props.activeVideo)) {
    console.log("null here not there");
  } else {
    videoid = props.activeVideo.id.videoId;
    channel_title = props.activeVideo.snippet.channelTitle;
    video_title = props.activeVideo.snippet.title;
    video_desciption = props.activeVideo.snippet.description;
    console.log(props.activeVideo.snippet.channelTitle);
    console.log(props.activeVideo.id.videoId);
  }
  return (
    <div>
      <div className="videoWrapper">
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoid} frameBorder="0" allowFullScreen></iframe>
      </div>
      <h4>{video_title}</h4>
      <h5>{channel_title}</h5>
      <p>{video_desciption}</p>

    </div>
  )
}

export default VideoPreview;;
