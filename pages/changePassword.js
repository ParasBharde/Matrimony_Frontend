import React, { useState } from 'react'
import Breadcrumb from '@/components/breadcrumb'
import SnpHeader from '@/components/setNewPasswordScreen/snpHeader'
import ChangePasswordForm from '@/components/changePasswordForm'
// import SnpForm from '@/components/setNewPasswordScreen/snpForm'

import snpH from "@/assets/setNewPasswordAssets/snpHeadingLogo.png"
import snpL from "@/assets/setNewPasswordAssets/snpLogo.png"



const ChangePassword = () => {

  const [nextScreen,setNextScreen]=useState(false);

  return (
    <div className="bg-[#E0E0E0] pb-16 max-md:h-[90vh]">
      <Breadcrumb
        screens={["Home", "Change Password"]}
      />
      {!nextScreen ? (
        <>
          <SnpHeader image={snpH} />
          <p
            className="text-white bg-main py-2 px-5 rounded-md cursor-pointer mt-5  w-[400px] text-center mx-auto max-md:w-auto max-md:mt-20 max-md:mx-4"
            onClick={() => {
              setNextScreen(true);
            }}
          >
            Continue
          </p>
        </>
      ) : (
        <>
          <SnpHeader image={snpL} />
          <ChangePasswordForm />
        </>
      )}
    </div>
  );
}

export default ChangePassword;