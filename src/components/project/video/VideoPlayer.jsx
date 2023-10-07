import React, { useRef, useState } from "react";
import Particles from "react-tsparticles";
import Video_Basado from "./nasa_video.mp4";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";

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
    videoRef.current.currentTime = 0;
  };

  return (
    <div className="relative align-center mx-auto justify-center">
      <Particles 
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            color: {
              value: "#ffcc00",
            },
            move: {
              enable: true,
              speed: 1,
              random: true,
            },
            links: {
              enable: false,
            },
          },
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />
      <div className="relative z-10 rounded-xl">
        <video
          ref={videoRef}
          width="1920"
          height="1080"
          src={Video_Basado}
          onEnded={handleVideoEnded}
          className="rounded-xl video-style" // Add CSS class for additional styles
          autoPlay 
        />
      </div>
      <div className = "w-full" > 
      <div className="flex flex-row z-10 relative"> 
        <button onClick={playVideo} className="mt-3">
          {playState}
        </button>
        <ButtonGroup />
      </div> 
      </div>
    </div>
  );
};

export default VideoPlayer;
