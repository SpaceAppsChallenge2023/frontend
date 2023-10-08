import React, { useRef, useState } from "react";
import Video_Basado from "./nasa_video.mp4";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import { useEffect } from "react";

const VideoControlBar = ({ playState, playVideo }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center ">
      <div className="bg-black px-10 py-3 rounded-2xl  transition-opacity duration-500 hover:opacity-100 opacity-0 border-2 border-white">
        <button
          onClick={playVideo}
          className="rounded-lx text-gray-900 text-sm"
        >
          {playState}
        </button>
        <ButtonGroup />
      </div>
    </div>
  );
};

const VideoPlayer = () => {
  const [playState, setPlayState] = useState("⏸️");
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlayState("⏸️");
    } else {
      videoRef.current.pause();
      setPlayState("▶️");
    }
  };

  const handleVideoEnded = () => {
    setPlayState("🔁");
    videoRef.current.currentTime = 0;
  };

  useEffect(() => {
    // Delay autoplay by 2 seconds
    const autoplayTimeout = setTimeout(() => {
      playVideo();
    }, 2 * 1000);

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(autoplayTimeout);
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <div
      className="relative mx-auto "
      style={{ width: "100vw", height: "100vh" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        src={Video_Basado}
        onEnded={handleVideoEnded}
        className="rounded-xl video-style"
      />
      {isHovering && (
        <VideoControlBar playState={playState} playVideo={playVideo} />
      )}
    </div>
  );
};

export default VideoPlayer;
