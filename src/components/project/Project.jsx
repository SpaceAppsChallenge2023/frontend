import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./video/VideoPlayer";


const Project = () => {
  return (
    <div className = "">
  
      
      <VideoPlayer />
      <Link to="/"> Return </Link>
    </div>
  );
};

export default Project;
