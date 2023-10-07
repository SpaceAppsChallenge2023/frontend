import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./video/VideoPlayer";
import background from "./background.jpg";

const Project = () => {
  return (
    <div>
  
      
      <VideoPlayer />
      <Link to="/"> Return </Link>
    </div>
  );
};

export default Project;
