import React from "react";

const ImageUploaded = ({ uploadedImage }) => {
  return (
    <div className="relative flex flex-col space-y-6 items-center w-full max-w-md shadow-md bg-white rounded-[12px] m-auto py-12 px-8">
      <h1 className="text-[#4F4F4F] text-2xl ">Success icon</h1>
      <h2 className="text-[#828282]">Uploaded Successfully</h2>
      <img
        src={uploadedImage}
        alt="Uploaded file"
        className="w-full max-w-full max-h-full"
      ></img>
    </div>
  );
};

export default ImageUploaded;
