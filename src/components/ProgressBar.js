import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative flex flex-col space-y-6 items-center w-full max-w-md shadow-md bg-white rounded-[12px] m-auto py-12 px-8">
      <div className="relative w-full pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
