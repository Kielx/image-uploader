import React from "react";
import image from "../assets/images/image.svg";
import { useDropzone } from "react-dropzone";

const ImageUploader = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 2,
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <span key={file.path}>
      {file.path} - {(file.size / 1000000).toFixed(2)} MB
    </span>
  ));

  return (
    <div className="flex flex-col space-y-6 items-center w-full max-w-md shadow-md bg-white rounded-[12px] m-auto py-12 px-8">
      <h1 className="text-[#4F4F4F] text-2xl ">Upload your image</h1>
      <h2 className="text-[#828282]">File type should be .jpg or .png</h2>
      <div
        {...getRootProps({ className: "dropzone" })}
        className={`dragNDrop cursor-pointer w-full flex flex-col items-center justify-center bg-[#F6F8FB] p-12 space-y-12 border border-dashed border-[#97BEF4] ${
          acceptedFiles.length > 0 ? "border-green-400" : ""
        } rounded-[12px]`}
      >
        <img
          src={
            acceptedFiles.length > 0
              ? URL.createObjectURL(acceptedFiles[0])
              : image
          }
          alt="cartoonish mountains"
          className="max-w-[43%] max-h-[25%] rounded-lg"
        ></img>
        <span className="text-[#BDBDBD]">
          {acceptedFiles.length > 0
            ? acceptedFileItems
            : "Drag & Drop your image here"}
        </span>
      </div>
      <input {...getInputProps()} />
      {acceptedFiles.length > 0 ? (
        <button className="text-center bg-green-500 hover:bg-green-600 transition-all rounded-[8px] p-3 text-white">
          Upload file
        </button>
      ) : (
        <>
          <span className="text-[#BDBDBD]">OR</span>
          <button className="text-center bg-[#2F80ED] hover:bg-[#2666be] transition-all rounded-[8px] p-3 text-white hover:">
            Choose a file
          </button>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
