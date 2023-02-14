import React from 'react'

const RegisterForm3 = () => {
return (
<>
  <div className='w-[820px] mx-auto'>
    <p className='font-[600] text-[18px]'>Parent Information</p>
  </div>

  <div className='flex justify-center items-center gap-5'>

    <div className='mt-5'>
      <p className='text-dark font-[500] text-[14px] mb-2'>Father&apos;s Name *</p>
      <input placeholder='Enter Your Name' type={"password"}
        className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
    </div>
    <div className='mt-5'>
      <p className='text-dark font-[500] text-[14px] mb-2'>Mother&apos;s name *</p>
      <input placeholder='Enter Your Name' type={"password"}
        className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
    </div>

  </div>

  <div className='flex justify-center items-center gap-5'>

    <div className='mt-5'>
      <p className='text-dark font-[500] text-[14px] mb-2'>Father&apos;s Native *</p>
      <input placeholder='Enter Your Name' type={"password"}
        className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
    </div>
    <div className='mt-5'>
      <p className='text-dark font-[500] text-[14px] mb-2'>Mother&apos;s Native *</p>
      <input placeholder='Enter Your Name' type={"password"}
        className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
    </div>

  </div>

  <div className='flex justify-center items-center gap-5'>

    <div className='mt-5'>
      <p className='text-dark font-[500] text-[14px] mb-2'>Father&apos;s Profession *</p>
      <input placeholder='Enter Your Name' type={"password"}
        className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
    </div>
    <div className='mt-5'>
      <p className='text-dark font-[500] text-[14px] mb-2'>Mother&apos;s Profession *</p>
      <input placeholder='Enter Your Name' type={"password"}
        className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
    </div>

  </div>

  <div className='flex justify-center items-center gap-5'>

    <div className='mt-5'>
      <p className='text-dark font-[500] text-[14px] mb-2'>Phone Number *</p>
      <input placeholder='Enter Your Name' type={"password"}
        className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
    </div>
    <div className='mt-5'>
      <p className='text-dark font-[500] text-[14px] mb-2'>Address *</p>
      <input placeholder='Enter Your Name' type={"password"}
        className='border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3' />
    </div>

  </div>

  <div className='w-[820px] flex justify-start mx-auto mt-5'>
    <div>
      <p className='font-[600] text-[18px] text-dark'>Family Members</p>
      <div className='flex justify-start items-center gap-16 mt-3'>
        <div>
          <input type="checkbox" name="father" value="father" />
          <label htmlFor="father"> Father</label>
        </div>
        <div>
          <input type="checkbox" name="mother" value="mother" />
          <label htmlFor="mother"> Mother</label>
        </div>
      </div>
    </div>

  </div>

  <div className='flex justify-between items-center mt-5 w-[820px] mx-auto'>
    <div>
      <p className='text-dark font-[500] text-[14px] mb-2'>Brothers *</p>
      <select name="bothers" className='border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2'>
        <option value={1}>01</option>
        <option value={2}>01</option>
      </select>
    </div>
    <div>
      <p className='text-dark font-[500] text-[14px] mb-2'>Younger Brothers *</p>
      <select name="bothers" className='border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2'>
        <option value={1}>01</option>
        <option value={2}>01</option>
      </select>
    </div>
    <div>
      <p className='text-dark font-[500] text-[14px] mb-2'>Elder Brothers *</p>
      <select name="bothers" className='border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2'>
        <option value={1}>01</option>
        <option value={2}>01</option>
      </select>
    </div>
    <div>
      <p className='text-dark font-[500] text-[14px] mb-2'>Married *</p>
      <select name="bothers" className='border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2'>
        <option value={1}>01</option>
        <option value={2}>01</option>
      </select>
    </div>
    
  </div>


  <div className='flex justify-between items-center mt-5 w-[820px] mx-auto mb-3'>
    <div>
      <p className='text-dark font-[500] text-[14px] mb-2'>Sisters *</p>
      <select name="bothers" className='border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2'>
        <option value={1}>01</option>
        <option value={2}>01</option>
      </select>
    </div>
    <div>
      <p className='text-dark font-[500] text-[14px] mb-2'>Younger Sisters *</p>
      <select name="bothers" className='border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2'>
        <option value={1}>01</option>
        <option value={2}>01</option>
      </select>
    </div>
    <div>
      <p className='text-dark font-[500] text-[14px] mb-2'>Elder Sisters *</p>
      <select name="bothers" className='border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2'>
        <option value={1}>01</option>
        <option value={2}>01</option>
      </select>
    </div>
    <div>
      <p className='text-dark font-[500] text-[14px] mb-2'>Married *</p>
      <select name="bothers" className='border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2'>
        <option value={1}>01</option>
        <option value={2}>01</option>
      </select>
    </div>
    
  </div>



</>
)
}

export default RegisterForm3