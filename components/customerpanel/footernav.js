import React from "react";

const Footernav = () => {
  return (
    <>
      <footer className="footer bg-white shadow md:flex md:items-center md:justify-center md:p-6">
        <span style={{ color: 'color: rgba(30, 30, 30, 0.5)' }} className="text-sm  sm:text-center">
          Copyright © {" "}
          <span className="hover:underline">
            Trichy Vayalur Road Reddy Trust All rights reserved.
          </span>
          . Theme Anews by themeuniver
        </span>
      </footer>

    </>
  );
};

export default Footernav;
