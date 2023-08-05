import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidenav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const defaultPage = "admin";
  const isActive = (page) => {
    return router.pathname === `/${page}`;
  };

  return (
    <>
      <div className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
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
        {/* -translate-x-full sm:translate-x-0 */}
        <aside
          id="default-sidebar"
          className={`side_nav fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
            !isOpen && "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
          onClick={() => setIsOpen(false)}
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/admin"
                  className="flex justify-center items-center p-2 text-base font-normal"
                >
                  <svg
                    width="155"
                    height="54"
                    viewBox="0 0 155 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.3059 6.53287C-7.02065 23.5894 5.10434 39.3198 11.7558 44.4259C9.09521 41.201 5.3059 37.2771 6.3137 22.5568C9.63942 -1.63028 25.529 10.564 30.4 17.5178C31.9117 11.8742 43.6021 3.50947 50.2536 16.2077C55.5747 26.3663 46.7599 45.6353 41.6873 54C58.6989 43.0352 62.8531 22.5568 59.0214 13.6882C49.024 -9.45077 35.7749 1.89701 30.4 10.4633C26.5368 1.62826 13.9729 -5.45991 5.3059 6.53287Z"
                      fill="#ffffff"
                    />
                    <ellipse
                      cx="36.2454"
                      cy="19.433"
                      rx="3.4265"
                      ry="4.33352"
                      transform="rotate(-16.4858 36.2454 19.433)"
                      fill="#ffffff"
                    />
                    <ellipse
                      cx="23.8821"
                      cy="21.1022"
                      rx="2.9455"
                      ry="3.72519"
                      transform="rotate(10.2294 23.8821 21.1022)"
                      fill="#ffffff"
                    />
                    <path
                      d="M40.4779 29.8132C39.0267 49.0017 27.0406 51.8504 21.229 50.8762C27.6789 43.9425 30.7023 35.7592 31.4077 32.5343C37.2126 21.1664 39.8732 25.9836 40.4779 29.8132Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M26.4695 36.1623L18.2056 40.6974C30.0572 51.2591 37.9248 49.4652 40.3771 47.2481C35.3784 45.6356 29.0226 32.3327 26.4695 25.8828L21.9344 27.4953L26.4695 36.1623Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M37.0514 25.4795C32.9396 25.4795 26.4696 30.9216 23.7485 33.6426C29.493 36.8676 36.9842 34.8184 39.6717 34.7512C40.4443 31.6606 41.1632 25.4795 37.0514 25.4795Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M71.9715 20.8636H74.551L78.0055 29.2955H78.1419L81.5965 20.8636H84.176V32.5H82.1533V24.5057H82.0453L78.8294 32.4659H77.318L74.1021 24.4886H73.9942V32.5H71.9715V20.8636ZM88.8919 32.6761C88.3389 32.6761 87.8408 32.5777 87.3976 32.3807C86.9582 32.1799 86.6097 31.8845 86.3521 31.4943C86.0984 31.1042 85.9715 30.6231 85.9715 30.0511C85.9715 29.5587 86.0624 29.1515 86.2442 28.8295C86.426 28.5076 86.6741 28.25 86.9885 28.0568C87.3029 27.8636 87.6571 27.7178 88.051 27.6193C88.4487 27.517 88.8597 27.4432 89.284 27.3977C89.7953 27.3447 90.2101 27.2973 90.5283 27.2557C90.8465 27.2102 91.0775 27.142 91.2215 27.0511C91.3692 26.9564 91.443 26.8106 91.443 26.6136V26.5795C91.443 26.1515 91.3162 25.8201 91.0624 25.5852C90.8086 25.3504 90.443 25.233 89.9658 25.233C89.462 25.233 89.0624 25.3428 88.7669 25.5625C88.4752 25.7822 88.2783 26.0417 88.176 26.3409L86.2555 26.0682C86.4071 25.5379 86.6571 25.0947 87.0055 24.7386C87.354 24.3788 87.7802 24.1098 88.284 23.9318C88.7877 23.75 89.3446 23.6591 89.9544 23.6591C90.3749 23.6591 90.7934 23.7083 91.2101 23.8068C91.6268 23.9053 92.0074 24.0682 92.3521 24.2955C92.6968 24.5189 92.9734 24.8239 93.1817 25.2102C93.3938 25.5966 93.4999 26.0795 93.4999 26.6591V32.5H91.5226V31.3011H91.4544C91.3294 31.5436 91.1533 31.7708 90.926 31.983C90.7025 32.1913 90.4203 32.3598 90.0794 32.4886C89.7423 32.6136 89.3465 32.6761 88.8919 32.6761ZM89.426 31.1648C89.8389 31.1648 90.1968 31.0833 90.4999 30.9205C90.8029 30.7538 91.0359 30.5341 91.1987 30.2614C91.3654 29.9886 91.4487 29.6913 91.4487 29.3693V28.3409C91.3843 28.3939 91.2745 28.4432 91.1192 28.4886C90.9677 28.5341 90.7972 28.5739 90.6078 28.608C90.4184 28.642 90.2309 28.6723 90.0453 28.6989C89.8597 28.7254 89.6987 28.7481 89.5624 28.767C89.2555 28.8087 88.9809 28.8769 88.7385 28.9716C88.4961 29.0663 88.3048 29.1989 88.1646 29.3693C88.0245 29.536 87.9544 29.7519 87.9544 30.017C87.9544 30.3958 88.0927 30.6818 88.3692 30.875C88.6457 31.0682 88.998 31.1648 89.426 31.1648ZM99.926 23.7727V25.3636H94.909V23.7727H99.926ZM96.1476 21.6818H98.2044V29.875C98.2044 30.1515 98.2461 30.3636 98.3294 30.5114C98.4165 30.6553 98.5302 30.7538 98.6703 30.8068C98.8105 30.8598 98.9658 30.8864 99.1362 30.8864C99.265 30.8864 99.3824 30.8769 99.4885 30.858C99.5984 30.839 99.6817 30.822 99.7385 30.8068L100.085 32.4148C99.9752 32.4527 99.818 32.4943 99.6135 32.5398C99.4127 32.5852 99.1665 32.6117 98.8749 32.6193C98.3597 32.6345 97.8957 32.5568 97.4828 32.3864C97.0699 32.2121 96.7423 31.9432 96.4999 31.5795C96.2612 31.2159 96.1438 30.7614 96.1476 30.2159V21.6818ZM101.646 32.5V23.7727H103.64V25.2273H103.731C103.89 24.7235 104.163 24.3352 104.55 24.0625C104.94 23.786 105.385 23.6477 105.885 23.6477C105.998 23.6477 106.125 23.6534 106.265 23.6648C106.409 23.6723 106.529 23.6856 106.623 23.7045V25.5966C106.536 25.5663 106.398 25.5398 106.209 25.517C106.023 25.4905 105.843 25.4773 105.669 25.4773C105.294 25.4773 104.957 25.5587 104.658 25.7216C104.362 25.8807 104.129 26.1023 103.959 26.3864C103.788 26.6705 103.703 26.9981 103.703 27.3693V32.5H101.646ZM107.99 32.5V23.7727H110.047V32.5H107.99ZM109.024 22.5341C108.698 22.5341 108.418 22.4261 108.183 22.2102C107.948 21.9905 107.831 21.7273 107.831 21.4205C107.831 21.1098 107.948 20.8466 108.183 20.6307C108.418 20.411 108.698 20.3011 109.024 20.3011C109.354 20.3011 109.634 20.411 109.865 20.6307C110.1 20.8466 110.217 21.1098 110.217 21.4205C110.217 21.7273 110.1 21.9905 109.865 22.2102C109.634 22.4261 109.354 22.5341 109.024 22.5341ZM112.162 32.5V23.7727H114.128V25.2557H114.23C114.412 24.7557 114.713 24.3655 115.133 24.0852C115.554 23.8011 116.056 23.6591 116.639 23.6591C117.23 23.6591 117.728 23.803 118.133 24.0909C118.542 24.375 118.83 24.7633 118.997 25.2557H119.088C119.281 24.7708 119.607 24.3845 120.065 24.0966C120.527 23.8049 121.075 23.6591 121.707 23.6591C122.51 23.6591 123.166 23.9129 123.673 24.4205C124.181 24.928 124.435 25.6686 124.435 26.642V32.5H122.372V26.9602C122.372 26.4186 122.228 26.0227 121.94 25.7727C121.652 25.5189 121.3 25.392 120.883 25.392C120.387 25.392 119.999 25.5473 119.719 25.858C119.442 26.1648 119.304 26.5644 119.304 27.0568V32.5H117.287V26.875C117.287 26.4242 117.15 26.0644 116.878 25.7955C116.609 25.5265 116.256 25.392 115.821 25.392C115.525 25.392 115.256 25.4678 115.014 25.6193C114.772 25.767 114.578 25.9773 114.435 26.25C114.291 26.5189 114.219 26.8333 114.219 27.1932V32.5H112.162ZM130.328 32.6705C129.476 32.6705 128.737 32.483 128.112 32.108C127.487 31.733 127.002 31.2083 126.658 30.5341C126.317 29.8598 126.146 29.072 126.146 28.1705C126.146 27.2689 126.317 26.4792 126.658 25.8011C127.002 25.1231 127.487 24.5966 128.112 24.2216C128.737 23.8466 129.476 23.6591 130.328 23.6591C131.18 23.6591 131.919 23.8466 132.544 24.2216C133.169 24.5966 133.652 25.1231 133.993 25.8011C134.337 26.4792 134.51 27.2689 134.51 28.1705C134.51 29.072 134.337 29.8598 133.993 30.5341C133.652 31.2083 133.169 31.733 132.544 32.108C131.919 32.483 131.18 32.6705 130.328 32.6705ZM130.339 31.0227C130.801 31.0227 131.188 30.8958 131.498 30.642C131.809 30.3845 132.04 30.0398 132.192 29.608C132.347 29.1761 132.425 28.6951 132.425 28.1648C132.425 27.6307 132.347 27.1477 132.192 26.7159C132.04 26.2803 131.809 25.9337 131.498 25.6761C131.188 25.4186 130.801 25.2898 130.339 25.2898C129.866 25.2898 129.472 25.4186 129.158 25.6761C128.847 25.9337 128.614 26.2803 128.459 26.7159C128.307 27.1477 128.231 27.6307 128.231 28.1648C128.231 28.6951 128.307 29.1761 128.459 29.608C128.614 30.0398 128.847 30.3845 129.158 30.642C129.472 30.8958 129.866 31.0227 130.339 31.0227ZM138.312 27.3864V32.5H136.256V23.7727H138.221V25.2557H138.324C138.524 24.767 138.845 24.3788 139.284 24.0909C139.727 23.803 140.274 23.6591 140.926 23.6591C141.528 23.6591 142.053 23.7879 142.5 24.0455C142.951 24.303 143.299 24.6761 143.545 25.1648C143.795 25.6534 143.918 26.2462 143.915 26.9432V32.5H141.858V27.2614C141.858 26.678 141.706 26.2216 141.403 25.892C141.104 25.5625 140.689 25.3977 140.159 25.3977C139.799 25.3977 139.479 25.4773 139.199 25.6364C138.922 25.7917 138.704 26.017 138.545 26.3125C138.39 26.608 138.312 26.9659 138.312 27.3864ZM146.971 35.7727C146.691 35.7727 146.432 35.75 146.193 35.7045C145.958 35.6629 145.771 35.6136 145.631 35.5568L146.108 33.9545C146.407 34.0417 146.674 34.0833 146.909 34.0795C147.144 34.0758 147.35 34.0019 147.528 33.858C147.71 33.7178 147.864 33.483 147.989 33.1534L148.165 32.6818L145 23.7727H147.182L149.193 30.3636H149.284L151.301 23.7727H153.489L149.994 33.5568C149.831 34.0189 149.615 34.4148 149.346 34.7443C149.078 35.0777 148.748 35.3314 148.358 35.5057C147.971 35.6837 147.509 35.7727 146.971 35.7727Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </Link>
              </li>
              <li
                className={
                  isActive(defaultPage)
                    ? "flex items-center p-2 text-base rounded text-black bg-white left-0 right-[1196px] bottom-[664px] top-[228px] font-bold"
                    : "flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                }
              >
                <Link href={`/${defaultPage}`} className=" ">
                  <span
                    onClick={() => setIsOpen(false)}
                    className="flex-1 ml-3 whitespace-nowrap"
                  >
                    Dashboard
                  </span>
                </Link>
              </li>
              <li
                className={
                  isActive("admin/manageuser")
                    ? "flex items-center p-2 text-base rounded text-black bg-white left-0 right-[1196px] bottom-[664px] top-[228px] font-bold"
                    : "flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                }
              >
                <Link href="/admin/manageuser">
                  <span
                    onClick={() => setIsOpen(false)}
                    className="flex-1 ml-3 whitespace-nowrap"
                  >
                    Manage Users
                  </span>
                </Link>
              </li>
              <li
                className={
                  isActive("admin/managelist")
                    ? "flex items-center p-2 text-base rounded text-black bg-white left-0 right-[1196px] bottom-[664px] top-[228px] font-bold"
                    : "flex items-center p-2 text-base font-normal text-white rounded hover:text-white"
                }
              >
                <Link href="/admin/managelist">
                  <span
                    onClick={() => setIsOpen(false)}
                    className="flex-1 ml-3 whitespace-nowrap"
                  >
                    Members List
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
