import { useState,useEffect } from "react";

export function useStorage()
{
    const [data,setData]=useState(null)
    useEffect(()=>{
    const ls=localStorage.getItem("user")
    const ss=sessionStorage.getItem("user")
    if(ls&&!ss)
    {
        setData(JSON.parse(ls))
    }
    else if(ss&&!ls)
    {
        setData(JSON.parse(ss))
    }
    }, [])

    return data
}