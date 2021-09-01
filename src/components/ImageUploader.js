import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/progressSlice";
import {
  setLoading,
  setLoaded,
  setUploadedImage,
  setDownloadURL,
} from "../redux/imageUploadSlice";
import image from "../assets/images/image.svg";
import { useDropzone } from "react-dropzone";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const ImageUploader = () => {
  const dispatch = useDispatch();

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    open,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 1,
    multiple: false,
    maxSize: 5000000,
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <div key={file.path} className="flex flex-col max-w-full text-center">
      <span className="truncate ">{file.path}</span>
      <span>{(file.size / 1000000).toFixed(2)} MB</span>
    </div>
  ));

  const upload = (file) => {
    const storage = getStorage();
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/*",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `image-uploader/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        dispatch(setLoading(true));
        dispatch(
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        );
        //console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            //console.log("Upload is paused");
            break;
          case "running":
            //console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        //console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        dispatch(setLoading(false));
        dispatch(setLoaded(true));
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          dispatch(setDownloadURL(downloadURL))
        );
      }
    );
  };

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      dispatch(setUploadedImage(URL.createObjectURL(acceptedFiles[0])));
    }
  }, [acceptedFiles, dispatch]);

  return (
    <div className="relative flex flex-col space-y-6 items-center w-full max-w-md shadow-md bg-white rounded-[12px] m-auto py-12 px-8">
      <h1 className="text-[#4F4F4F] text-2xl ">Upload your image</h1>
      {isDragReject ? (
        <h2 className="text-red-500 min-h-[3rem] text-center">
          File must be of image type
        </h2>
      ) : (
        <h2
          className={`${
            fileRejections.length > 0 ? "text-red-500" : "text-[#828282]"
          } text-center min-h-[3rem]`}
        >
          File should be of image type with max size of 5MB
        </h2>
      )}

      <div
        {...getRootProps({
          className: "dropzone",
        })}
        className={`transition-all dragNDrop cursor-pointer w-full flex flex-col items-center justify-center bg-[#F6F8FB] rounded-[12px] p-12 space-y-12 border border-dashed border-[#97BEF4] ${
          acceptedFiles.length > 0 ? "border-green-400 p-4" : ""
        } ${isDragAccept ? "ring-2 ring-green-500 border-transparent" : ""} ${
          isDragReject ? "ring-2 ring-red-500 border-transparent" : ""
        }`}
      >
        <img
          src={
            acceptedFiles.length > 0
              ? URL.createObjectURL(acceptedFiles[0])
              : image
          }
          alt="upload placeholder"
          className={`max-w-64 max-h-64 object-scale-down rounded-lg ${
            acceptedFiles.length > 0 ? "w-full max-w-full" : ""
          }`}
        ></img>
        <span className="text-[#BDBDBD] flex max-w-full text-center">
          {acceptedFiles.length > 0
            ? acceptedFileItems
            : "Drag & Drop your image here"}
        </span>
      </div>

      <input {...getInputProps()} />
      {acceptedFiles.length > 0 ? (
        <button
          onClick={() => upload(acceptedFiles[0])}
          className="font-bold text-center bg-green-500 hover:bg-green-600 transition-all rounded-[8px] p-3 text-white"
        >
          Upload file
        </button>
      ) : (
        <>
          <span className="text-[#BDBDBD]">OR</span>
          <button
            onClick={open}
            className="font-bold text-center bg-[#2F80ED] hover:bg-[#2666be] transition-all rounded-[8px] p-3 text-white hover:"
          >
            Choose a file
          </button>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
