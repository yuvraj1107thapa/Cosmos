import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

//condition location

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container"> 
        <div>
          Made by{" "}
          <a
            // todo: href="https://netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="not-link"
          >
            {" "}
            Team Cosmos
          </a>
        </div>
        <div className="footer-links">
          <div>
            <a
             className="not-link"
              // todo: href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div>
            <a
            className="not-link"
              // todo: href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
          <div>
            <a
             className="not-link"
              // todo href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div>&#169; 2023 | Cosmos</div>
      </div>
    </div>
  );
};

export default Footer;