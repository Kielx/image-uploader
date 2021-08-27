import React from "react";

const Footer = () => {
  return (
    <div className="text-sm text-center text-gray-500 pb-2">
      {`© Copyright 2021 ${
        new Date().getFullYear() > 2021 ? "- " + new Date().getFullYear() : ""
      } `}
      <a href="https://github.com/Kielx" className="font-extrabold">
        Chris Pantak
      </a>
      <a href="https://devchallenges.io/"> - DevChallenges.io</a>
    </div>
  );
};

export default Footer;
