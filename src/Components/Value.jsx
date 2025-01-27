import React from "react";
import simple from "../assets/logo1.png";

function Value() {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-black text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that hold us true and to account
      </h1>
      
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px]  hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} className="w-[70%]" />
            </div>
            <span className="font-semibold text-gray-950 text-[18px]">
              Simplicity
            </span>
          </div>
        </div>
        <div className="singleGrid rounded-[10px]  hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} className="" />
            </div>
            <span className="font-semibold text-gray-950 text-[18px]">
              Simplicity
            </span>
          </div>
        </div>
        <div className="singleGrid rounded-[10px]  hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} className="w-[70%]" />
            </div>
            <span className="font-semibold text-gray-950 text-[18px]">
              Simplicity
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[2rem] flex justify-between bg-blue-800 p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-white text-[30px]  font-bold">Ready to switch a career</h1>
          <h2 className="text-white text-[25px]  font-bold">Ready to switch a career</h2>
        </div>
        <button className=" border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-white  hover:text-black">Get Started</button>

      </div>
    </div>
  );
}

export default Value;
