import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Sidenav = () => {
  const router = useRouter();

  // const defaultPage = 'admin';
  // const isActive = (page) => {
  //   return router.pathname === `/${page}`;
  // };

  return (
    <>
      <div className=" ">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className="side_nav fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="flex justify-center items-center p-2 text-base font-normal"
                >
                  <svg
                    width="154"
                    height="56"
                    viewBox="0 0 154 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M0 4C0 1.79086 1.79086 0 4 0H150C152.209 0 154 1.79086 154 4V52C154 54.2091 152.209 56 150 56H4C1.79086 56 0 54.2091 0 52V4Z"
                      fill="white"
                    />
                    <path
                      d="M59.2784 34V22.3636H61.0341V32.4886H66.3068V34H59.2784ZM72.0494 34.1761C71.2312 34.1761 70.5172 33.9886 69.9074 33.6136C69.2975 33.2386 68.8241 32.714 68.4869 32.0398C68.1498 31.3655 67.9812 30.5777 67.9812 29.6761C67.9812 28.7708 68.1498 27.9792 68.4869 27.3011C68.8241 26.6231 69.2975 26.0966 69.9074 25.7216C70.5172 25.3466 71.2312 25.1591 72.0494 25.1591C72.8676 25.1591 73.5816 25.3466 74.1915 25.7216C74.8013 26.0966 75.2748 26.6231 75.6119 27.3011C75.9491 27.9792 76.1176 28.7708 76.1176 29.6761C76.1176 30.5777 75.9491 31.3655 75.6119 32.0398C75.2748 32.714 74.8013 33.2386 74.1915 33.6136C73.5816 33.9886 72.8676 34.1761 72.0494 34.1761ZM72.0551 32.75C72.5854 32.75 73.0248 32.6098 73.3733 32.3295C73.7218 32.0492 73.9794 31.6761 74.146 31.2102C74.3165 30.7443 74.4017 30.2311 74.4017 29.6705C74.4017 29.1136 74.3165 28.6023 74.146 28.1364C73.9794 27.6667 73.7218 27.2898 73.3733 27.0057C73.0248 26.7216 72.5854 26.5795 72.0551 26.5795C71.521 26.5795 71.0778 26.7216 70.7256 27.0057C70.3771 27.2898 70.1176 27.6667 69.9472 28.1364C69.7805 28.6023 69.6972 29.1136 69.6972 29.6705C69.6972 30.2311 69.7805 30.7443 69.9472 31.2102C70.1176 31.6761 70.3771 32.0492 70.7256 32.3295C71.0778 32.6098 71.521 32.75 72.0551 32.75ZM81.873 37.4545C81.1798 37.4545 80.5832 37.3636 80.0832 37.1818C79.587 37 79.1817 36.7595 78.8673 36.4602C78.5529 36.161 78.3181 35.8333 78.1628 35.4773L79.623 34.875C79.7253 35.0417 79.8616 35.2178 80.0321 35.4034C80.2063 35.5928 80.4412 35.7538 80.7366 35.8864C81.0359 36.0189 81.4204 36.0852 81.8901 36.0852C82.534 36.0852 83.0662 35.928 83.4866 35.6136C83.9071 35.303 84.1173 34.8068 84.1173 34.125V32.4091H84.0094C83.9071 32.5947 83.7594 32.8011 83.5662 33.0284C83.3768 33.2557 83.1154 33.4527 82.7821 33.6193C82.4488 33.786 82.0151 33.8693 81.481 33.8693C80.7916 33.8693 80.1704 33.7083 79.6173 33.3864C79.0681 33.0606 78.6325 32.5814 78.3105 31.9489C77.9923 31.3125 77.8332 30.5303 77.8332 29.6023C77.8332 28.6742 77.9904 27.8788 78.3048 27.2159C78.623 26.553 79.0586 26.0455 79.6116 25.6932C80.1647 25.3371 80.7916 25.1591 81.4923 25.1591C82.034 25.1591 82.4715 25.25 82.8048 25.4318C83.1382 25.6098 83.3976 25.8182 83.5832 26.0568C83.7726 26.2955 83.9185 26.5057 84.0207 26.6875H84.1457V25.2727H85.8105V34.1932C85.8105 34.9432 85.6363 35.5587 85.2878 36.0398C84.9393 36.5208 84.4677 36.8769 83.873 37.108C83.2821 37.339 82.6154 37.4545 81.873 37.4545ZM81.856 32.4602C82.3446 32.4602 82.7575 32.3466 83.0946 32.1193C83.4355 31.8883 83.6931 31.5587 83.8673 31.1307C84.0454 30.6989 84.1344 30.1818 84.1344 29.5795C84.1344 28.9924 84.0473 28.4754 83.873 28.0284C83.6988 27.5814 83.4431 27.233 83.106 26.983C82.7688 26.7292 82.3522 26.6023 81.856 26.6023C81.3446 26.6023 80.9185 26.7348 80.5776 27C80.2366 27.2614 79.9791 27.6174 79.8048 28.0682C79.6344 28.5189 79.5491 29.0227 79.5491 29.5795C79.5491 30.1515 79.6363 30.6534 79.8105 31.0852C79.9848 31.517 80.2423 31.8542 80.5832 32.0966C80.9279 32.339 81.3522 32.4602 81.856 32.4602ZM91.9651 34.1761C91.1469 34.1761 90.4329 33.9886 89.823 33.6136C89.2132 33.2386 88.7397 32.714 88.4026 32.0398C88.0654 31.3655 87.8969 30.5777 87.8969 29.6761C87.8969 28.7708 88.0654 27.9792 88.4026 27.3011C88.7397 26.6231 89.2132 26.0966 89.823 25.7216C90.4329 25.3466 91.1469 25.1591 91.9651 25.1591C92.7832 25.1591 93.4973 25.3466 94.1071 25.7216C94.717 26.0966 95.1904 26.6231 95.5276 27.3011C95.8647 27.9792 96.0332 28.7708 96.0332 29.6761C96.0332 30.5777 95.8647 31.3655 95.5276 32.0398C95.1904 32.714 94.717 33.2386 94.1071 33.6136C93.4973 33.9886 92.7832 34.1761 91.9651 34.1761ZM91.9707 32.75C92.501 32.75 92.9404 32.6098 93.2889 32.3295C93.6374 32.0492 93.895 31.6761 94.0616 31.2102C94.2321 30.7443 94.3173 30.2311 94.3173 29.6705C94.3173 29.1136 94.2321 28.6023 94.0616 28.1364C93.895 27.6667 93.6374 27.2898 93.2889 27.0057C92.9404 26.7216 92.501 26.5795 91.9707 26.5795C91.4366 26.5795 90.9935 26.7216 90.6412 27.0057C90.2927 27.2898 90.0332 27.6667 89.8628 28.1364C89.6961 28.6023 89.6128 29.1136 89.6128 29.6705C89.6128 30.2311 89.6961 30.7443 89.8628 31.2102C90.0332 31.6761 90.2927 32.0492 90.6412 32.3295C90.9935 32.6098 91.4366 32.75 91.9707 32.75Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              {/* <li className={isActive(defaultPage) ? "active" : ""}>
                <Link href={`/${defaultPage}`} className=" flex items-center p-2 text-base rounded text-black bg-white left-0 right-[1196px] bottom-[664px] top-[228px] font-bold" >
                  <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                </Link>
              </li>
              <li className={isActive("about") ? "active" : ""} >
                <Link href="/admin/manageuser" className="hv_co flex items-center p-2 text-base font-normal text-white rounded hover:text-white">
                  <span className="flex-1 ml-3 whitespace-nowrap">Manage Users</span>
                </Link>
              </li>
              <li className={isActive("contact") ? "active" : ""}>
                <Link href="/admin/managelist" className="hv_co flex items-center p-2 text-base font-normal text-white rounded hover:text-white">
                  <span className="flex-1 ml-3 whitespace-nowrap">Manage List</span>
                </Link>
              </li> */}
              <li>
                <Link
                  href="/admin"
                  className="hv_co flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                >
                  <span className="active flex-1 ml-3 whitespace-nowrap">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/manageuser"
                  className="hv_co flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Manage Users
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/managelist"
                  className="hv_co flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Manage List
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <style jsx>{`
        @media (max-width: 600px) {
        }
      `}</style>
      <style global jsx>{`
        body {
          background: #e0e0e0;
        }
      `}</style>
    </>
  );
};

export default Sidenav;
