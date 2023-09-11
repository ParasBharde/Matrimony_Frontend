import { useState,useEffect } from "react";

export function useStorage()
{
    const [data,setData]=useState(null)

    useEffect(() => {
        const lsUser = localStorage.getItem("user");
        const lsUserLogin = localStorage.getItem("userLogin");
        const ssUser = sessionStorage.getItem("user");
        const ssUserLogin = sessionStorage.getItem("userLogin");
    
        let mergedData = {};
        if (lsUser) {
          mergedData = { ...mergedData, ...JSON.parse(lsUser) };
        }
        if (lsUserLogin) {
          mergedData = { ...mergedData, ...JSON.parse(lsUserLogin) };
        }
    
        if (ssUser) {
          mergedData = { ...mergedData, ...JSON.parse(ssUser) };
        }
        if (ssUserLogin) {
          mergedData = { ...mergedData, ...JSON.parse(ssUserLogin) };
        }
    
        if (Object.keys(mergedData).length > 0) {
          setData(mergedData);
        }
      }, []);

    return data
}