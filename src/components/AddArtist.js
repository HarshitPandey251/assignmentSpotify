import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const AddArtist = ({ setshowPopUp }) => {
  return (
    <div className="absolute top-0 left-0 w-full backdrop-blur-sm backdrop-brightness-75 min-h-screen h-full bg-transparent flex items-center justify-center">
      <div className="w-1/2 bg-white rounded-lg dialog-shadow">
        <div className="w-full h-full flex flex-col p-4 relative">
          <div className="absolute top-0 left-0 px-2 py-2 w-full flex justify-end items-end">
            <button>
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CloseIcon"
              >
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
          <div className="w-full flex justify-between items-start px-10 pt-4">
            <div className="text-xl font-semibold tracking-wide justify-start items-end flex flex-col">
              <p>Add Artist </p>
              <div className=" border border-blue-600 rounded-full w-14 mt-2 mb-4 "></div>
            </div>
            <div className="cursor-pointer" onClick={() => setshowPopUp(false)}>
              <CancelIcon />
            </div>
          </div>
          <form className="w-full py-10 px-10">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Artist Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value=""
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Date of Birth
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="date"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block md:text-left mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Bio
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  rows="5"
                  className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value=""
                />
              </div>
            </div>
          </form>
          <div className="w-full flex justify-center items-center space-x-4">
            <button className="rounded-lg flex text-white bg-blue-600 w-1/3 justify-center py-2 mt-4 items-center px-6 text-white">
              Create Artist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArtist;
