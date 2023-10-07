import React from "react";

const TitleScreen = () => {
  return (
    <div className = "min-h-screen flex flex-col justify-center items-center w-full text-center">

        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl transition">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-rose-600 from-yellow-500">
            Melodies
          </span>{" "}
          from Space.
        </h1>
        <p class="mb-8 text-2xl font-bold text-white dark:text-white">
          Let's listen to the stars.
        </p>
        <i class="text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          (Click anywhere to start)
        </i>

        
        <p className="absolute bottom-0 mb-4 text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400">
        Made by the Sonic Revolution Team
      </p>



    </div>
  );
};

export default TitleScreen;
