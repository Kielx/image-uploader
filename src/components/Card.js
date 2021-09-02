import React from "react";

const Card = ({ children }) => {
  return (
    <div className="transition-all relative flex flex-col space-y-6 items-center w-full max-w-md shadow-md bg-white dark:bg-dp01 rounded-[12px] m-auto py-12 px-8">
      {children}
    </div>
  );
};

export default Card;
