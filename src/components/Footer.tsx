import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-muted-foreground gap-y-4 sm:gap-y-0 mb-8">
      <div>
        <p>© {new Date().getFullYear()} | Privacy & Policy</p>
      </div>
      <div>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Footer;
