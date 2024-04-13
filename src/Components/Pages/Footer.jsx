import React from "react";
import linkedin from "../Assets/linkedin_icon.png";
import x from "../Assets/x_icon.png";
import github from "../Assets/github_icon.png";

const Footer = () => {
  return (
    <div className="text-white py-4">
      <div className="flex flex-col gap-4">
        <p>
          Made with ❤️ by <span className="font-bold">Mohd Afjal</span>
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/mohd-afjal-746a5b298/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="linkedIn_icon"
              className="w-5 h-5 cursor-pointer"
            />
          </a>
          <a
            href="https://twitter.com/afjal07071998"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={x}
              alt="x_icon"
              className="w-5 h-5 cursor-pointer"
              target="_blank"
            />
          </a>

          <a
            href="https://github.com/mohdafjal2004"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github_icon"
              className="w-5 h-5 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
