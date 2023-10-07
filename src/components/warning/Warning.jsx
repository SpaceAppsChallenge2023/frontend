import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Headphones from "../../assets/headphon.png";
import NasaLogo from "../../assets/nasa_logo.png";
import Ear from "../../assets/ear.png";
import Particles from "react-tsparticles";
import ParticleConfig from "../../config/particles.json";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

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

  return (
    <div className="text-3xl">
      <div className="h-screen flex flex-col justify-center items-center w-full">
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
                <i className="font-thin text-lg"> Scroll down </i>
              </p>
            </div>

            <div className="h-64 w-72 flex items-center">
              <img src={NasaLogo} alt="nasa logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center">
        <p className="text-3xl">This program was made with the intent of...</p>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center bg-red-500 relative overflow-hidden">
        <Particles
          className="absolute inset-0 z-0"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleConfig}
        />
        <p className="z-10 pb-5 relative text-5xl font-bold">
          Learning about the universe that surrounds us.
        </p>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center blur-sm hover:blur-none transition-all duration-300">
        <p className="text-9xl"> 👓 </p>
        <p className = "text-3xl font-thin">
        With new glasses.
      

        </p>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center ">
        <p>Or, in this case...</p>
      </div>

      <div className="h-screen flex flex-col justify-center items-center w-full text-center ">
        <p className="text-9xl"> 👂🎧 </p>
        <p className="text-2xl">With our ears.</p>
      </div>

      <Link to="/">
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
