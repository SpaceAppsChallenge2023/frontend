import React from "react";

const TitleScreen = () => {
  return (
    <div className = "min-h-screen flex flex-col justify-center items-center w-full text-center">

        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Melodies
          </span>{" "}
          from Space.
        </h1>
        <p class="mb-8 text-2xl text-gray-500 dark:text-gray-400">
          Let's listen to the stars.
        </p>
        <p class="text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          (Click anywhere to start)
        </p>

    </div>
  );
};

export default TitleScreen;
