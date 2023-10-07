import React, { useRef, useState } from "react";
import Video_Basado from "./nasa_video.mp4";

const VideoPlayer = () => {
  const [playState, setPlayState] = useState("Play");
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlayState("Pause");
    } else {
      videoRef.current.pause();
      setPlayState("Play");
    }
  };

  const handleVideoEnded = () => {
    setPlayState("Restart");
    videoRef.current.currentTime = 0; // Reset video to the beginning
  };

  return (
    <div>
      <div className="border-2 rounded-xl border-neutral-50">
        <video
          ref={videoRef}
          width="1000"
          height="500"
          src={Video_Basado}
          onEnded={handleVideoEnded}
        />
      </div>
      <button onClick={playVideo} className="mt-10">
        {playState}
      </button>
    </div>
  );
};

export default VideoPlayer;
