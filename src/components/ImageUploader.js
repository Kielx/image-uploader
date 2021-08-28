import React from "react";
import image from "../assets/images/image.svg";
import Dropzone from "./Dropzone";

const ImageUploader = () => {
  return (
    <div className="flex flex-col space-y-6 items-center w-full max-w-md shadow-md bg-white rounded-[12px] m-auto py-12 px-8">
      <h1 className="text-[#4F4F4F] text-2xl ">Upload your image</h1>
      <h2 className="text-[#828282]">File should be image eg. .jpg or .png</h2>
      <div className="dragNDrop w-full flex flex-col items-center justify-center bg-[#F6F8FB] p-12 space-y-12 border border-dashed border-[#97BEF4] rounded-[12px]">
        <img src={image} alt="cartoonish mountains" className="w-[43%]"></img>
        <span className="text-[#BDBDBD]">Drag & Drop your image here</span>
      </div>
      <span className="text-[#BDBDBD]">OR</span>
      <button className="text-center bg-[#2F80ED] rounded-[8px] p-3 text-white">
        Choose a file
      </button>
      <Dropzone />
    </div>
  );
};

export default ImageUploader;
