import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify"

const RegisterForm3 = ({ screen, setScreen }) => {

  const [fatherName, setFatherName] = useState("")
  const [motherName, setMotherName] = useState("")

  const [fatherNative, setFatherNative] = useState("")
  const [motherNative, setMotherNative] = useState("")

  const [fatherProfession, setFatherProfession] = useState("")
  const [motherProfession, setMotherProfession] = useState("")

  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")

  const [father, setFather] = useState(false)
  const [mother, setMother] = useState(false)

  const [brothers, setBrothers] = useState(0)
  const [youngerBrothers, setYoungerBrothers] = useState(0)
  const [elderBrothers, setElderBrothers] = useState(0)
  const [marriedBrothers, setMarriedBrothers] = useState(0)

  const [sisters, setSisters] = useState(0)
  const [youngerSisters, setYoungerSisters] = useState(0)
  const [elderSisters, setElderSisters] = useState(0)
  const [marriedSisters, setMarriedSisters] = useState(0)

  useEffect(() => {
    const rg = sessionStorage.getItem("rg3")
    if (rg) {
      const jrg = JSON.parse(rg)

      setFatherName(jrg.fatherName)
      setMotherName(jrg.motherName)

      setFatherNative(jrg.fatherNative)
      setMotherNative(jrg.motherNative)

      setFatherProfession(jrg.fatherProfession)
      setMotherProfession(jrg.motherProfession)

      setPhoneNumber(jrg.phoneNumber)
      setAddress(jrg.address)

      setFather(jrg.father)
      setMother(jrg.mother)

      setBrothers(jrg.brothers)
      setYoungerBrothers(jrg.youngerBrothers)
      setElderBrothers(jrg.elderBrothers)
      setMarriedBrothers(jrg.marriedBrothers)

      setSisters(jrg.sisters)
      setYoungerSisters(jrg.youngerSisters)
      setElderSisters(jrg.elderSisters)
      setMarriedSisters(jrg.marriedSisters)
    }
  }, []);

  const beforeNextScreen = () => {
    const rg3 = { fatherName, motherName, fatherNative, motherNative, fatherProfession, motherProfession, phoneNumber, address, father, mother, brothers, youngerBrothers, elderBrothers, marriedBrothers, sisters, youngerSisters, elderSisters, marriedSisters }
    sessionStorage.setItem("rg3", JSON.stringify(rg3))
  }

  var nameRegex = /\d/g;
  var phoneRegex = /^(?:(?:\+91)|(?:91)|(?:0))?[7-9][0-9]{9}$/;

  const validate = () => {

    if (!(fatherName && motherName && fatherNative && motherNative && fatherProfession && motherProfession && phoneNumber && address)) {
      toast.error("Please Input all fields")
      return false
    }

    if (nameRegex.test(fatherName) || nameRegex.test(motherName)) {
      toast.error("Name must not contain a number")
      return false
    }

    if (nameRegex.test(fatherNative) || nameRegex.test(motherNative)) {
      toast.error("Native must not contain a number")
      return false
    }


    if (!phoneRegex.test(phoneNumber)) {
      toast.error("Please enter a valid phone number")
      return false
    }

    return true

  }

  return (
    <>
      <div className="w-[820px] mx-auto max-md:w-[10rem] max-md:flex max-md:justify-center max-md:items-center ">
        <p className="font-[600] text-[18px]">Parent Information</p>
      </div>
      <div className='max-md:w-[10rem] max-md:ml-32'>
        <div className=" flex justify-center items-center gap-5 max-md:flex max-md:flex-col max-md:items-center max-md:mr-6 max-md:w-auto">
          <div className="mt-5 max-md:ml-6">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Father&apos;s Name *
            </p>
            <input
              placeholder="Enter Your Father's Name"
              type={"text"}
              value={fatherName}
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5 max-md:ml-6">
            <p className="text-dark font-[500] text-[14px] mb-2 ">
              Mother&apos;s name *
            </p>
            <input
              placeholder="Enter Your Mother's Name"
              type={"text"}
              value={motherName}
              onChange={(e) => {
                setMotherName(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 "
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 max-md:flex max-md:flex-col max-md:items-center max-md:mr-6 max-md:w-auto ">
          <div className="mt-5 max-md:ml-6">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Father&apos;s Native *
            </p>
            <input
              placeholder="Enter Your Father's Native"
              type={"text"}
              value={fatherNative}
              onChange={(e) => {
                setFatherNative(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5 max-md:ml-5">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Mother&apos;s Native *
            </p>
            <input
              placeholder="Enter Your Mother's Native"
              type={"text"}
              value={motherNative}
              onChange={(e) => {
                setMotherNative(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
        </div>

        <div className=" flex justify-center items-center gap-5 max-md:flex max-md:flex-col max-md:items-center">
          <div className="mt-5">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Father&apos;s Profession *
            </p>
            <input
              placeholder="Enter Your Father's Profession"
              type={"text"}
              value={fatherProfession}
              onChange={(e) => {
                setFatherProfession(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
          <div className="mt-5">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Mother&apos;s Profession *
            </p>
            <input
              placeholder="Enter Your Mother's Profession"
              type={"text"}
              value={motherProfession}
              onChange={(e) => {
                setMotherProfession(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3"
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 max-md:flex max-md:flex-col max-md:items-center">
          <div className="mt-5">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Phone Number *
            </p>
            <input
              placeholder="Enter Your Parent's Phone Number"
              type={"text"}
              value={phoneNumber}
              onChange={(e) => {
                const reg = /^[0-9\b]+$/;
                if (e.target.value === '' || reg.test(e.target.value)) {
                  if (e.target.value.length <= 10) setPhoneNumber(e.target.value);
                }
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 appearance-none"
            />
          </div>
          <div className="mt-5">
            <p className="text-dark font-[500] text-[14px] mb-2">Address *</p>
            <input
              placeholder="Enter Your Address"
              type={"text"}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="border border-gray-400 w-[400px] py-2 px-8 rounded-md mb-3 "
            />
          </div>
        </div>
      </div>
      <div className="w-[820px] max-md:items-center mx-auto mt-5 max-md:w-[10rem]">
        <div>
          <p className="font-[600] text-[18px] text-dark">Family Members</p>
          <div className="fam-info mt-4">
            <div className="fam-info1 px-8">
              <input
                type="checkbox"
                checked={father}
                onChange={(e) => {
                  setFather(e.target.checked);
                }}
                name="father"
                value="father"
              />
              <label htmlFor="father"> Father</label>
            </div>
            <div className="fam-info2 px-8">
              <input
                type="checkbox"
                checked={mother}
                onChange={(e) => {
                  setMother(e.target.checked);
                }}
                name="mother"
                value="mother"
              />
              <label htmlFor="mother"> Mother</label>
            </div>
          </div>
        </div>
      </div>
      <div className="reg3-foot">
        <div className="flex justify-between items-center mt-5 w-[820px] mx-auto max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-[10rem]  max-md:gap-3">
          <div className="max-md:flex max-md:flex-col">
            <p className="text-dark font-[500] text-[14px] mb-2 ">Brothers </p>
            <select
              value={brothers}
              onChange={(e) => {
                setBrothers(e.target.value);
              }}
              name="brothers"
              className="border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2"
            >
              <option value={0}>00</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>   
            </select>
          </div>
          <div>
            <p className="text-dark font-[500] text-[14px] mb-2">
              Younger Brothers 
            </p>
            <select
              value={youngerBrothers}
              onChange={(e) => {
                setYoungerBrothers(e.target.value);
              }}
              name="youngerBrothers"
              className="border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2"
            >
              <option value={0}>00</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
            </select>
          </div>
          <div className="">
            <p className="text-dark font-[500] text-[14px] mb-2">
              Elder Brothers 
            </p>
            <select
              value={elderBrothers}
              onChange={(e) => {
                setElderBrothers(e.target.value);
              }}
              name="elderBrothers"
              className="border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2"
            >
              <option value={0}>00</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
            </select>
          </div>
          <div>
            <p className="text-dark font-[500] text-[14px] mb-2">Married </p>
            <select
              value={marriedBrothers}
              onChange={(e) => {
                setMarriedBrothers(e.target.value);
              }}
              name="marriedBrothers"
              className="border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2"
            >
              <option value={0}>00</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
            </select>
          </div>
        </div>

        <div className="flex  justify-between items-center mt-5 w-[820px] mx-auto mb-3 max-md:flex-1 max-md:flex-col max-md:items-center max-md:justify-center max-md:w-[10rem] max-md:gap-3 max-md:ml-3">
          <div>
            <p className="text-dark font-[500] text-sm  mb-2">Sisters </p>
            <select
              value={sisters}
              onChange={(e) => {
                setSisters(e.target.value);
              }}
              name="sisters"
              className="border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2"
            >
              <option value={0}>00</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
            </select>
          </div>
          <div>
            <p className="text-dark font-[500] text-[14px] mb-2">
              Younger Sisters 
            </p>
            <select
              value={youngerSisters}
              onChange={(e) => {
                setYoungerSisters(e.target.value);
              }}
              name="youngerSisters"
              className="border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2"
            >
              <option value={0}>00</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
            </select>
          </div>
          <div>
            <p className="text-dark font-[500] text-[14px] mb-2">
              Elder Sisters 
            </p>
            <select
              value={elderSisters}
              onChange={(e) => {
                setElderSisters(e.target.value);
              }}
              name="elderSisters"
              className="border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2"
            >
              <option value={0}>00</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
            </select>
          </div>
          <div>
            <p className="text-dark font-[500] text-[14px] mb-2">Married </p>
            <select
              value={marriedSisters}
              onChange={(e) => {
                setMarriedSisters(e.target.value);
              }}
              name="marriedSisters"
              className="border-gray-300 text-gray-400 border-2 rounded h-[40px] w-[190px] mt-2"
            >
              <option value={0}>00</option>
              <option value={1}>01</option>
              <option value={2}>02</option>
              <option value={3}>03</option>
              <option value={4}>04</option>
              <option value={5}>05</option>
            </select>
          </div>
        </div>
      </div>
      <div
        className={`${
          screen != 1 ? "w-[800px]" : "w-[400px]"
        } mx-auto flex justify-end my-3 gap-2 max-md:flex max-md:w-[10rem]`}
      >
        {screen != 1 && (
          <p
            className="text-main bg-white border-2 border-main py-2 px-5 rounded-md cursor-pointer max-w-max"
            onClick={() => {
              setScreen(screen - 1);
            }}
          >
            Back
          </p>
        )}
        <p
          className="text-white bg-main py-2 px-5 rounded-md cursor-pointer max-w-max"
          onClick={() => {
            if (validate()) {
              if (screen <= 3) {
                setScreen(screen + 1);
              }
              beforeNextScreen();
            }
          }}
        >
          Next
        </p>
      </div>
    </>
  );
}

export default RegisterForm3