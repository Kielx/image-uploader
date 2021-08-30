import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative flex flex-col space-y-6 items-start w-full max-w-md shadow-md bg-white rounded-[12px] m-auto py-12 px-8">
      <h1 className="text-[#4F4F4F] text-xl">Uploading...</h1>
      <div className="relative w-full pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;