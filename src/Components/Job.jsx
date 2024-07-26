import React from "react";
import { BiTimeFive } from "react-icons/bi";
import dataList from './JobsList'



const Job = () => {
  return (
    <>
    <div>
      <div className=" jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          dataList.map(({ id, image, title, desc, location, company,time }) => {
          return (
            <div key={id} className=" group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-600 shadow-xl shadow-gray-700 ">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-black group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#828080] gap-1 group-hover:text-white">
                  <BiTimeFive />
                 {time}
                </span>
              </span>
              <h5 className="text-[#838181] group-hover:text-white"> {location}</h5>
              <p className="text-[13px] text-[#4d4949] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex items-center gap-2">
                <img src={image} alt="Comapny Logo" className="w-[20%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className=" border-[2px] rounded-[10px] block p-[10px] w-full  text-[14px] font-semibold text-gray-900 hover:bg-white group-hover/item:text-gray-900 ">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
</>
  );
};

export default Job;
