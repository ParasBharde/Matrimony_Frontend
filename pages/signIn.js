import React from 'react'
import Left from '@/components/signInScreen/left'
import Right from '@/components/signInScreen/right'


const SignIn = () => {
  return (
    <div className='flex justify-center items-center overflow-y-hidden'>
        <Left/>
        <Right/>
    </div>
  )
}

export default SignIn