import React,{useState} from 'react'
import RegisterHeader from '@/components/registerScreen/registerHeader'
import RegisterForm1 from '@/components/registerScreen/registerForm1'
import RegisterForm2 from '@/components/registerScreen/registerForm2'
import RegisterForm3 from '@/components/registerScreen/registerForm3'
import RegisterForm4 from '@/components/registerScreen/registerForm4'


const Register = () => {

  const [screen,setScreen]=useState(1)

  return (
    <div className='bg-[#E0E0E0] py-10 w-full'>
      <div className='bg-white w-[85%] mx-auto pt-12 pb-10'>
        <RegisterHeader index={screen}/>
        {screen==1&&<RegisterForm1/>}
        {screen==2&&<RegisterForm2/>}
        {screen==3&&<RegisterForm3/>}
        {screen==4&&<RegisterForm4/>}
      <div className={`${screen==2?"w-[800px]":"w-[400px]"} mx-auto flex justify-end my-3`}>
            <p className='text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max' onClick={()=>{if(screen<=3) setScreen(screen+1)}}>Next</p>
      </div>
      </div>
    </div>
  )
}

export default Register