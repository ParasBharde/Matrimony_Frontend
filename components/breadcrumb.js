import React from 'react'
const Breadcrumb = ({ screens }) => {
  return (
    <nav className="flex ml-20 py-5 max-md:hidden z-10">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <p className="inline-flex items-center text-[14px] font-[400] text-dark opacity-50 hover:text-main">
            {screens[0]}
          </p>
        </li>
        {screens.map((item, index) => {
          if (index != 0) {
            return (
              <li key={index}>
                <div className="flex items-center">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <p className={`ml-1 text-[14px] font-[400] ${!(index == (screens.length - 1)) ? "text-dark opacity-50 hover:text-main" : "text-main"}  md:ml-2`}>{item}</p>
                </div>
              </li>
            )
          }
        })}
      </ol>
    </nav>
  )
}
export default Breadcrumb