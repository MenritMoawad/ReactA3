import React from 'react';

function VideoPreview(props) {
  let videoid = "GKSRyLdjsPA";

  return (
    <div>
      <iframe width="700" height="400" src={"https://www.youtube.com/embed/" + videoid} frameBorder="0" allowfullscreen></iframe>
    </div>
  )
}

export default VideoPreview;
