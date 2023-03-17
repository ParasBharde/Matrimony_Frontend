
import {useState , useEffect } from "react";
import axios from "axios";

import { useRouter } from "next/router";

const App=()=>
{   
  const [data, setData]=useState()
    useEffect(() => {
        async function getUser() {
          try {
            const response = await axios.get(
              `http://172.105.57.17:1337/api/profiles/?populate=%2A${id}`
            );
            console.log("response", response.data.data);
            setprofilesdata(response.data.data.filter());
          } catch (error) {
            console.error(error);
          }
        }
        getUser();
      }, []);
        
      const router=useRouter();
      const {query:id}=router;
      console.log("idd",id);
    
    

  var config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://172.105.57.17:1337/api/users/?populate=user_profile${id}',
    headers: { }
  };

  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    document.write(JSON.stringify(response.data));
    var dta=JSON.stringify(response.data);

    console.log(dta.id)
   setData(dta.id);

    document.write("==========================================");
    
  })
  .catch(function (error) {
    console.log(error);
  });




  return(
    <>
    
        <p>welcome to my page.....</p>
        <table class="table table-bordered" style={{backgroundColor:"#FF000"}}>
        <thead>
        <tr>
            <th> Id</th>
            <th> Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>salary</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                         </tr>
        </tbody>
    </table>

    </>
  );
} 

export default App;



// import axios from "axios";
// import React from "react";

// const baseURL = "http://172.105.57.17:1337/api/users?populate=user_profile";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <p>{post.id}</p>
//       <p>{post.username}</p>
//     </div>
//   );
// }



