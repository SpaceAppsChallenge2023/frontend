import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./video/VideoPlayer";
import background from "./background.jpg";

const Project = () => {
  return (
    <div>
  
      <Link to="/"> Return </Link>
      <h2 class="text-4xl font-bold dark:text-white">Placeholder Title</h2>
      <VideoPlayer />
    </div>
  );
};

export default Project;
