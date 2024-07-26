import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import datalist from "./JobsList";





function Search() {
 const [searchTerm, setsearchTerm] =useState('');

  return (
    <>
    <div className="grid gp-10 bg-gray-300 rounded-[10px] p-[3rem] mt-10">
      <form action="">
        <div className="firstdiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-gray-700 ">
          <div className="flex  gap-2 items-center">
            <AiOutlineSearch className="text-[25px] cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-black focus:outline-none w-[100%]"
              placeholder="Search Job Here....." 
              id="searchInput"
              onChange={(e)=>{
                setsearchTerm(e.target.value);
              }}
              
            />
            <AiOutlineCloseCircle className="text-[25px]  text-[#a5a6a6] hover:text-black cursor-pointer" />
          </div>

          <div className="flex  gap-2 items-center">
            <GoHomeFill className="text-[25px] cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-black focus:outline-none w-[100%]"
              placeholder="Search by companies....."
            />
            <AiOutlineCloseCircle className="text-[25px]  text-[#a5a6a6] hover:text-black cursor-pointer" />
          </div>

          <div className="flex  gap-2 items-center">
            <CiLocationOn className="text-[25px] cursor-pointer" />
            <input
              type="text"
              className="bg-transparent text-black focus:outline-none w-[100%]"
              placeholder="Search by location...."
            />
            <AiOutlineCloseCircle className="text-[25px]  text-[#a5a6a6] hover:text-black cursor-pointer" />
          </div>
          <button className="bg-blue-700 h-full p-5 px-10 rounded-[10px] cursor-pointer hover:bg-gray-300"> Search</button>
        </div>
      </form>
        <div className="secdiv flex items-center gap-10 justify-center mt-4">
            <div className="singlesearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-gray-600 font-semibold">Sort by:</label>
            <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1 ">
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
            </select> 
            </div>

            <div className="singlesearch flex items-center gap-2">
            <label htmlFor="type" className="text-gray-600 font-semibold">Type</label>
            <select name="" id="type" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Full-Time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-Time</option>
            </select> 
            </div>

            <div className="singlesearch flex items-center gap-2">
            <label htmlFor="level" className="text-gray-600 font-semibold">Level</label>
            <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advance</option>
            </select> 
            <span className="text-gray-700 cursor-pointer ml-3"> Clear All</span>
            </div>
        </div>

    </div>

    <div>
      
    </div>
    </>
  );
}

export default Search;
