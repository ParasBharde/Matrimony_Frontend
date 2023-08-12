import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStorage } from "@/hooks/useStorage";

function OrderSummery() {
  const storageData = useStorage();
  const [subData, setsubData] = useState([]) 



  return (
    <div className="relative  shadow mx-10 my-10">
        <table className="text-sm text-left text-gray-500 border border-sky-500">
          <thead
            style={{ color: "rgba(30, 30, 30, 0.5)", fontWeight: "400" }}
            className="text-xs  uppercase "
          >
            <tr>
              <th
                scope="col"
                className="px-6 py-3"
              >
              Start Date
              </th>
              <th scope="col" className="px-6 py-3 ">
                End Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
             
            </tr>
          </thead>
          <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">
                   test
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4"
                  >
                   test
                  </td>
                  <td className="py-3 px-6 text-left">
                  test
                  </td>
                  <td className="px-6 py-4">
                    test
                  </td>
                </tr>
       
          </tbody>
        </table>
      </div>
  )
}

export default OrderSummery