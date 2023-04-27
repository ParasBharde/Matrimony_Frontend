
import {useState , useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const App=()=>
{   
      const [profile,setprofile ] =useState([]);
      const router=useRouter();
      const {query:id}=router;
      // console.log("idd",id.ids);

      useEffect(() => {
        var config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "http://172.105.57.17:1337/api/profiles?populate=users_profile",
          headers: {},
        };
    
        axios(config)
          .then(function (response) {
            console.log(response.data.data);

            // let id = [20, 21];

           let res = response.data.data;
           let filteredRes = [];
       
        // for (let i = 0; i < id.ids.length; i++) {
        //   for (let j = 0; j < res.length; j++) {
        //     if (id.ids[i]== res[j].id) {
        //       console.log("new data", res[j]);
        //       filteredRes.push(res[j]);
        //     }
        //   }
        // }
        if (typeof id.ids == "string") {
          for (let j = 0; j < res.length; j++) {
            if (id.ids == res[j].id) {
              console.log("new data", res[j]);
              filteredRes.push(res[j]);
            }
          }
        } else {
          for (let i = 0; i < id.ids.length; i++) {
            for (let j = 0; j < res.length; j++) {
              if (id.ids[i] == res[j].id) {
                console.log("new data", res[j]);
                filteredRes.push(res[j]);
              }
            }
          }
        }

        setprofile(filteredRes);
        console.log("filteredres....", filteredRes);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, [router,id.ids]);


      function downloadPdf() {
        const input = document.getElementById('pdf-content');
        html2canvas(input, {
          useCORS: true
        })
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('landscape', 'px' , 'a4');

            // pdf.addImage(imgData, 'PNG', 10, 10);
            // pdf.save('download.pdf');
    
            const imgProps= pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            // pdf.addImage(imgData, 'PNG', 0,0, pdfWidth, pdfHeight); 
            pdf.addtext(10,10, pdfWidth, pdfHeight);

            pdf.save('download.pdf');
          });
      }
      
      function handleDownloadPDF() {
        const doc = new jsPDF('p', 'px', 'a1');
        const html = document.documentElement.innerHTML;
        doc.html(html, {
          callback: function () {
            doc.save('my-pdf-file.pdf');
          }
        });
      }
    
  return(
    <>
       <button className="px-5 rounded bg-orange-400 py-2 float-right" onClick={handleDownloadPDF}>
            <span className="flex text-white" href="#">
              <svg className="mr-2 mt-1" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M14.5 11V14H2.5V11H0.5V14C0.5 15.1 1.4 16 2.5 16H14.5C15.6 16 16.5 15.1 16.5 14V11H14.5ZM13.5 7L12.09 5.59L9.5 8.17V0H7.5V8.17L4.91 5.59L3.5 7L8.5 12L13.5 7Z"
                  fill="white" />
              </svg>
              Download
            </span>
          </button>
           {/* <hr style={{ background: 'lime', color: 'lime', borderColor: 'lime', height: '3px',}} /> */}
      
      <table className="table table-auto  border-collapse border border-slate-400" id="pdf-content">
          
        <thead>
        <tr>
            <th className="border border-slate-300">Id</th>
            <th className="border border-slate-300"> First Name</th>
            <th className="border border-slate-300">Last name</th>
            <th className="border border-slate-300">Email</th>

            <th className="border border-slate-300">Color</th>
            <th className="border border-slate-300">Father Name</th>
            <th className="border border-slate-300">Height</th>

            <th className="border border-slate-300">Mother Name</th>
            <th className="border border-slate-300">Salary </th>
            <th className="border border-slate-300">address</th>
            <th className="border border-slate-300">birth_time</th>
            <th className="border border-slate-300">birthplace</th>
            <th className="border border-slate-300">date_of_birth</th>
            

        </tr><hr/>
        </thead>
        {/* <tbody> */}
            {
              profile.map((item)=>{
                return(
                  <>
                 
                <tbody>
                 <tr>
                     <td>{item.id}</td>
                  <td className="border border-slate-300">{item.attributes.first_name}</td>
                  <td className="border border-slate-300">{item.attributes.last_name}</td>
                  <td className="border border-slate-300">{item.attributes.email}</td>
                  <td className="border border-slate-300">{item.attributes.Color}</td>
                  <td className="border border-slate-300">{item.attributes.father_name}</td>
                  <td className="border border-slate-300">{item.attributes.Height}</td>
                  <td className="border border-slate-300">{item.attributes.mother_name}</td>
                  <td className="border border-slate-300">{item.attributes.Salary_monthly_income}</td>
                  <td className="border border-slate-300">{item.attributes.address}</td>
                  <td className="border border-slate-300">{item.attributes.birth_time}</td>
                  <td className="border border-slate-300">{item.attributes.birthplace}</td>
                  <td className="border border-slate-300">{item.attributes.date_of_birth}</td>
                 </tr>
                </tbody>
                </>
                );
              })
            }
        {/* </tbody> */}
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



