import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WarningLogo from "./white_alert.svg";
const Warning = () => {
  return (
    <div className="flex ml-3 min-h-screen flex-col justify-center items-center">
      <div>
        <img src={WarningLogo} alt="warning" className="content-evenly" />
      </div>
      <div className="flex-col ml-7">
        <h1 className="text-6xl font-bold dark:text-white">Warning</h1>

        <div className = "text-xl">
          <p className="mt-3"> Please turn up the volume before using it. </p>
          <div className="mt-4">
            <Link to="/home" className="mt-5">
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
