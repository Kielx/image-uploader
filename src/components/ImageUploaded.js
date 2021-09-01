import React from "react";
import { useSelector } from "react-redux";

const ImageUploaded = () => {
  const uploadedImage = useSelector((state) => state.imageUpload.uploadedImage);
  const downloadURL = useSelector((state) => state.imageUpload.downloadURL);
  return (
    <div className="relative flex flex-col space-y-6 items-center w-full max-w-md shadow-md bg-white dark:bg-dp01 rounded-[12px] m-auto py-12 px-8">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-check"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke={
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "#1e1e1e"
              : `#ffffff`
          }
          fill="#10B981"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </span>
      <h1 className="text-center text-[#4F4F4F] dark:text-grayGray-100 text-2xl pb-4 font-bold">
        Uploaded Successfully!
      </h1>

      <img
        src={uploadedImage}
        alt="Uploaded file"
        className="max-w-64 max-h-64 object-cover rounded-xl"
      ></img>
      <div className="w-full flex items-center space-x-2 bg-[#F6F8FB] dark:bg-dp03 border-[#E0E0E0] dark:border-opacity-25 border-[1.5px] rounded-xl p-1">
        <a
          href={downloadURL}
          className="text-xs text-[#4F4F4F] dark:text-grayGray-500 truncate w-3/4"
        >
          {downloadURL}
        </a>
        <button
          className="w-1/4 transition-all bg-blue-500 hover:bg-blue-600 text-white px-2 py-3 text-sm rounded-xl font-bold"
          onClick={(e) => {
            e.target.innerHTML = "Copied!";
            navigator.clipboard.writeText(downloadURL);
            e.target.className = "btn-clicked";
            setTimeout(() => {
              e.target.className = "btn-copy";
              e.target.innerHTML = "Copy Link";
            }, 2000);
          }}
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default ImageUploaded;
