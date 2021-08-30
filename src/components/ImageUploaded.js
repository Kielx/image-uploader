import React from "react";

const ImageUploaded = ({ uploadedImage, downloadURL }) => {
  return (
    <div className="relative flex flex-col space-y-6 items-center w-full max-w-md shadow-md bg-white rounded-[12px] m-auto py-12 px-8">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-circle-check"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#ffffff"
          fill="#10B981"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </span>
      <h1 className="text-[#4F4F4F] text-2xl pb-4 font-bold">
        Uploaded Successfully!
      </h1>

      <img
        src={uploadedImage}
        alt="Uploaded file"
        className="w-full max-w-full rounded-xl"
      ></img>
      <div className="w-full flex items-center space-x-2 bg-[#F6F8FB] border-[#E0E0E0] border-[1.5px] rounded-xl p-1">
        <a
          href="https://images.yourdomain.com/photo-1496950866446-325..."
          className="text-xs text-[#4F4F4F] truncate w-3/4"
        >
          https://images.yourdomain.com/photo-1496950866446-325...
        </a>
        <button
          className="w-1/4 transition-all bg-blue-500 hover:bg-blue-600 text-white px-2 py-3 text-sm rounded-xl font-bold"
          onClick={(e) => {
            e.target.innerHTML = "Copied!";
            navigator.clipboard.writeText(downloadURL);
            e.target.className = "btn-clicked";
            setTimeout(() => {
              e.target.innerHTML = "Copy Link";
              e.target.className = "btn-copy";
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
