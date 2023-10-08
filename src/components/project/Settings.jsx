import React, { useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="absolute top-0 left-0 p-4 flex flex-col justify-center items-center z-30"
        id="help-infobuttons"
      >
        <button
          className="border-2 border-white mb-4"
          id="settings"
          onClick={openModal}
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
            />
          </svg>
        </button>
        <Link to="/">
          <button className="border-2 border-white mb-4">
            {" "}
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>{" "}
          </button>
        </Link>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center pb-42 bg-opacity-50 z-40 rounded-4xl">
          <div className="bg-black p-4 rounded text-left">
            <div className="w-100 flex justify-end ">
              <button
                onClick={closeModal}
                className="border p-2 bg-transparent text-right"
              >
                X
              </button>
            </div>

            <h1 className="text-3xl font-bold ">Instructions</h1>
            <p>Use the next buttons to interact with it:</p>
            <br /> 
            <ul>
              <li> [A] to toggle the [Harmonics] </li>
              <li> [M] to toggle the [Melodies] </li>
              <li> [⏸️] to play, pause and replay. </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
