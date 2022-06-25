import { useRouter } from "next/router";
import React from "react";
import requests from "../utils/requests";

const Nav = () => {
  const router = useRouter();
  // console.log("router:", router);  
  return (
    <nav className="relative sm:px-4">
      <div className="flex px-6  sm:px-10 text-sm sm:text-base whitespace-nowrap space-x-5 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="h-10  w-1/12 absolute top-0 right-0 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
};

export default Nav;
