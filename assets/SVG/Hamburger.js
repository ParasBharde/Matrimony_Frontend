import React from 'react'

const Hamburger = (props) => {
  return (
    <svg
      width="30"
      height="30" 
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z"
        fill="white"
      />
    </svg>
  );
}

export default Hamburger