import React, { useEffect, useState } from "react";
import axios from "axios";

import { useStorage } from "@/hooks/useStorage";

export const useLikedProfiles = () => {
  const [likedprofiles, setlikedprofiles] = useState([]);
  const [myLikedprofiles, setMyLikedprofiles] = useState([]);
  const storageData = useStorage();

  useEffect(() => {
    const filterMyLikedProfiles = (likedprofiles) => {
      console.log(likedprofiles);
      let data = likedprofiles.filter((profile) => {
        return profile.attributes.user.data.id == storageData.id;
      });
      setMyLikedprofiles(data);
      // console.log("myLikedprofiles: ", data);
    };
    if (likedprofiles.length > 0) {
      filterMyLikedProfiles(likedprofiles);
    }
  }, [likedprofiles, storageData?.id]);

  useEffect(() => {
    const getLikedProfiles = async () => {
      try {
        const response = await axios.get(
          "http://172.105.57.17:1337/api/liked-profiles?populate=user&populate=user_profile.profile_photo"
        );
        // console.log("liked profiles response", response.data.data);
        setlikedprofiles(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getLikedProfiles(storageData?.id);
  }, [storageData?.id]);

  return myLikedprofiles;
};
