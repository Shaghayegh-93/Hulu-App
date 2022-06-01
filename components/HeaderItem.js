import React from "react";

const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-6 sm:h-7 mb-1  group-hover:animate-bounce  " />

      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
