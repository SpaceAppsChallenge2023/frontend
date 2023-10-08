import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Headphones from "../../assets/headphon.png";
import NasaLogo from "../../assets/nasa_logo.png";
import Sun from "../../assets/sun.png";

import Meteroid_One from "../../assets/Meteorite.png";
import Meteroid_Two from "../../assets/Meteorite_1.png";

import Particles from "react-tsparticles";
import ParticleConfig from "../../config/particles.json";
import ParticleConfig_Less from "../../config/particles_less.json";

import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { motion, useScroll, useSpring } from "framer-motion";
import "../../styles.css";

const Warning = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const { scrollYProgress } = useScroll(); // will be used for scroll progress indicator
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="text-3xl bg-black dark:bg-black text-white">
      <motion.div className="progress-bar" style={{ scaleX }} />

      <div className="h-screen flex flex-col justify-center items-center w-full">
        <div className="absolute top-0 w-1/2 h-3/5">
          <img src={Sun} alt="sun" />
        </div>

        <div className="relative h-screen flex flex-col justify-center items-center w-screen ">
          <div
            className="absolute bottom-24 flex flex-row justify-around items-center w-screen h-64"
            id="fernanda"
          >
            <div className="h-32 w-3/5 text-normal text-left">
              <Link to="/" className="text-sm">
                {" "}
                Return to title screen.{" "}
              </Link>
              <p className="">
                The objective of this project is to create sonifications based
                on footage provided by NASA.
                <br />
                <i className="font-thin text-lg animate-waving-hand">
                  {" "}
                  Scroll down{" "}
                </i>
              </p>
            </div>

            <div className="h-64 w-72 flex items-center">
              <img src={NasaLogo} alt="nasa logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center bg-red-500 relative overflow-hidden">
        <Particles
          className="absolute inset-0 z-0"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleConfig}
        />
        <p className="z-10 pb-5 relative text-5xl font-thin">
          This program was made with the intent of...
        </p>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center bg-red-500 relative overflow-hidden">
        <Particles
          className="absolute inset-0 z-0"
          id="tsparticles2"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleConfig_Less}
        />
        <p className="z-10 pb-5 relative text-5xl font-bold">
          Learning about the universe that surrounds us.
        </p>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center blur-sm hover:blur-none transition-all duration-300">
        <p className="text-9xl"> 👓 </p>
        <p className="text-3xl font-thin">With new glasses.</p>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center ">
        <div
          id="rowing"
          className="flex flex-row justify-around items-center w-full h-64"
        >
          <div>
            <img
              src={Meteroid_One}
              alt="meteoroid"
              className="h-48 w-48 animate-bouncy-twirly-asteroid"
            />
          </div>

          <p>Or, in this case...</p>

          <div>
            <img
              src={Meteroid_Two}
              alt="meteoroid"
              className="h-64 w-64 animate-floaty-rotaty-pulsy-asteroid"
            />
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center ">
        <div
          id="rowing"
          className="flex flex-row justify-around items-center w-full h-64"
        >
          <div>
            <p className="text-9xl"> 👂🎧 </p>
            <p className="text-2xl">With our ears.</p>
          </div>
        </div>
      </div>

      <Link to="/home">
        <div className="h-screen flex flex-col justify-center items-center w-full text-center text-xl ">
          <div className="shadow-lg justify-middle p-32 flex flex-col items-center rounded-2xl">
            <p className="text-9xl"> 🎧 </p>
            <p className="text-5xl font-thin pt-16 hover:text-sky-500 transition ">
              Best used with headphones
            </p>

            <i className="text-sm font-thin text-gray-500 lg:text-xl dark:text-gray-400 pt-16">
              Click anywhere to start{" "}
            </i>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Warning;
