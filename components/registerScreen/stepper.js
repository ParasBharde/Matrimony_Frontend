import React from 'react'

const Stepper = ({index,limit}) => {
  return (
<ol className="flex items-center w-[400px] mx-auto my-12">

    {Array(limit).fill(0).map((item,ind)=>{
        return(
        <li key={ind} className={`flex w-full items-center ${(ind+1)==limit?"":`after:content-[''] after:w-full after:h-1 after:border-b ${(ind+1)<index?"after:border-main":"after:border-[#BEBEBE80]"} after:border-4 after:inline-block`}`}>
            <span className={`flex items-center ${(ind+1)<=index?"border-main":""} border-4 justify-center w-10 h-10 rounded-full lg:h-12 ${index>(ind+1)?"bg-main":""} lg:w-12 shrink-0`}>
            {index==(ind+1)&&
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="5" cy="5" r="5" fill="#F98B1D"/>
            </svg>
            }
            {index>(ind+1)&&<svg width="20" height="18" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.16675 6.83301L4.50008 10.1663L12.8334 1.83301" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>}
            </span>
        </li>

        )
    })}

</ol>
  )
}

export default Stepper



{/* <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.16675 6.83301L4.50008 10.1663L12.8334 1.83301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
