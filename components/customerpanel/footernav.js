import React from "react";

const Footernav = () => {
  return (
    <>
      <footer className="footer bg-white shadow md:flex md:items-center md:justify-center md:p-6 overflow-visble max-md:hidden">
        <span style={{ color: 'color: rgba(30, 30, 30, 0.5)' }} className="text-sm  sm:text-center">
          Copyright &copy; {" "}
           Made by Shubhchintak Technology Pvt Ltd. <a href="https://shubhchintak.co/">https://shubhchintak.co/</a>
          {/* . Theme Anews by themeuniver */}
        </span>
      </footer>

    </>
  );
};

export default Footernav;
