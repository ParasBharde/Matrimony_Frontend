import React, { useEffect, useState } from "react";
import axios from "axios";

import { useStorage } from "@/hooks/useStorage";

export const useLikedProfiles = () => {
  const [likedprofiles, setlikedprofiles] = useState([]);
  const [myLikedprofiles, setMyLikedprofiles] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const storageData = useStorage();
  console.log(storageData)
  const registerStorage = storageData?.id;
  const loginStorage = storageData?.user_profile?.id;
  const finalId = registerStorage === undefined ? loginStorage : registerStorage
  console.log(finalId)
  const [getRegister, setRegister] = useState([])
  const isUid = getRegister.length > 0 ? getRegister[0]?.id : storageData?.id;
  console.log(getRegister);
  console.log(isUid);

  useEffect(() => {
    const getRegisteruser = () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://172.105.57.17:1337/api/users?populate=user_profile',
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        const data =    response.data.filter(u => u.user_profile.id === finalId)
        console.log(data)
     setRegister(data)
      })
      .catch((error) => {
        console.log(error);
      });
    }

    const filterMyLikedProfiles = (likedprofiles) => {
      let data = likedprofiles.filter((profile) => {
        return (
          profile?.attributes?.user_permissions_user?.data?.id == isUid);
      });
      setMyLikedprofiles(data);
      // console.log("myLikedprofiles: ", data);
    };
    if (likedprofiles.length > 0) {
      filterMyLikedProfiles(likedprofiles);
    }

    getRegisteruser();
  }, [likedprofiles, storageData?.id]);

  useEffect(() => {
    axios
      .get("http://172.105.57.17:1337/api/liked-profiles")
      .then((response) => {
        if (response.data.meta) {
          setPageCount(response.data.meta.pagination.pageCount);
        }
      })
      .catch((error) => {
        console.log("liked profile error", error);
      });

    let allData = [];
    for (let i = 1; i <= pageCount; i++) {
      axios.get(`http://172.105.57.17:1337/api/liked-profiles?populate=user_permissions_user&populate=user_profile.profile_photo&pagination[page]=${i}`)
      .then((response) => {
        let currData = response.data.data;
          allData = [...allData, ...currData];
          setlikedprofiles(allData);

      })
      .catch((error) => {
        console.log("like hook error", error);
      })
    }
  }, [storageData?.id, pageCount]);

  return myLikedprofiles;
};

      // const getLikedProfiles = async () => {
      //   try {
      //     const response = await axios.get(
      //       `http://172.105.57.17:1337/api/liked-profiles?populate=user_permissions_user&populate=user_profile.profile_photo&pagination[page]=${i}`
      //     );
      //     // "http://172.105.57.17:1337/api/liked-profiles?populate=user_permissions_user&populate=user_profile.profile_photo"
      //     // setlikedprofiles(response.data.data);
      //     let currData = response.data.data;
      //     allData = [...allData, ...currData];
      //   } catch (error) {
      //     console.error(error);
      //   }
      // };
      // getLikedProfiles(storageData?.id);
