import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full px-10 flex justify-between items-center place-items-center bg-[#3D3D3D] h-[60px] sticky">
      <h1 className="text-xl md:text-3xl font-bold text-white tracking-wide text-center py-4">
        Soccer Lovers
      </h1>
      <input
        type="search"
        id="default-search"
        className="  p-2 pl-10 outline-none text-sm text-white  rounded-lg bg-[#3D3D3D] "
        placeholder="Search..."
      />
    </div>
  );
};

export default Header;
