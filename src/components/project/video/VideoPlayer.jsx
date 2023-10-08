import React, { useRef, useState } from "react";
import Video_Basado from "./nasa_video.mp4";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { useEffect } from "react";
import Audio2 from "../../../assets/audio/melody_site.mp3"; // Assume correct path
import Audio1 from "../../../assets/audio/chords_site.mp3"; // Assume correct path
import Audio_D from "../../../assets/audio/drums_site.mp3"; // Assume correct path

const VideoControlBar = ({ playState, playVideo, children}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center ">
      <div className="bg-black px-10 py-3 rounded-2xl  transition-opacity duration-500 hover:opacity-100 opacity-0 border-2 border-white">
        <button
          onClick={playVideo}
          className="rounded-lx text-gray-900 text-sm"
        >
          {playState}
        </button>
        { children } 
      </div>
    </div>
  );
};

const VideoPlayer = () => {
  const [playState, setPlayState] = useState("⏸️");
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); // music off by default 

  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null); 

  const [isPlaying1, setIsPlaying1] = useState(true); // Keep track of whether each track should be playing
  const [isPlaying2, setIsPlaying2] = useState(true); // You may adjust initial values as per your need
  const [isPlaying3, setIsPlaying3] = useState(true);

  

  const playMedia = () => {
    videoRef.current.play();
    if (!isMuted) {
      if (isPlaying1) audioRef1.current.play(); // Only play if it should be playing
      if (isPlaying2) audioRef2.current.play();
      if (isPlaying3) audioRef3.current.play();
    }
    setPlayState("⏸️");
  };

  const pauseMedia = () => {
    videoRef.current.pause();
    audioRef1.current.pause();
    audioRef2.current.pause();
    audioRef3.current.pause();
    setPlayState("▶️");
  };

  const playVideo = () => {
    if (videoRef.current.paused) {
      playMedia();
    } else {
      pauseMedia();
    }
  };

  const handleVideoEnded = () => {
    setPlayState("🔁");
    videoRef.current.currentTime = 0;
    audioRef1.current.currentTime = 0;
    audioRef2.current.currentTime = 0;
    audioRef3.current.currentTime = 0;
    // playMedia(); // If you want to automatically restart
  };

  useEffect(() => {
    const autoplayTimeout = setTimeout(() => {
      playMedia();
      audioRef1.current.play();
      audioRef2.current.play();
      audioRef3.current.play();
    }, 2 * 1000);

    return () => {
      clearTimeout(autoplayTimeout);
    };
  }, []);

  useEffect(() => {
    audioRef1.current.muted = isMuted;
    audioRef2.current.muted = isMuted;
    audioRef3.current.muted = isMuted;
  }, [isMuted]);


  const toggleAudioPlayback = (label) => {
    switch (label) {
      case "A":
        if (audioRef1.current.paused) {
          setIsPlaying1(true);
          audioRef1.current.play();

        } else {
          setIsPlaying1(false);
          audioRef1.current.pause();

        }
        break;
      case "M":
        if (audioRef2.current.paused) {
          audioRef2.current.play();
          setIsPlaying2(true);
        } else {
          audioRef2.current.pause();
          setIsPlaying2(false);
        }
        break;
      case "D":
        if (audioRef3.current.paused) {
          audioRef3.current.play();
          setIsPlaying3(true);
        } else {
          audioRef3.current.pause();
          setIsPlaying3(false);
        }
        break;
      default:
        console.log(`Unknown button label: ${label}`);
    }
  };
  return (
    <div
    className="relative mx-auto"
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
      <audio ref={audioRef1} src={Audio1}></audio>
      <audio ref={audioRef2} src={Audio2}></audio>
      <audio ref={audioRef3} src={Audio_D}></audio>

      {isHovering && (
        <>                 <VideoControlBar playState={playState} playVideo={playVideo}>
        <ButtonGroup onAudioToggle={toggleAudioPlayback} />
        <button onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? "Unmute Audio" : "Mute Audio"}
        </button>
      </VideoControlBar>

        </>

      )}
    </div>
  );
};

export default VideoPlayer;
