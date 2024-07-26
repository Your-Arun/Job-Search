import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <div
      className="footer p-[5rem] mb-4 bg-blue-800 
    rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center
     justify-center"
    >
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[24px] text-white pb-[1.5rem]">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          {" "}
          We Always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>
      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">
            About Us
          </li>
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">
            Features
          </li>
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">News</li>
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">
            Account
          </li>
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">
            Support Center
          </li>
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">Feedback</li>
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">Conatct Us</li>
        </div>
      </div>
      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
        Support
        </span>
        <div className="grid gap-3">
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">
           Events
          </li>
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">
          Promo
          </li>
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">Req Demo</li>
          <li className="text-white oapcity-[.7] hover: oapcity-[1]">Career</li>
        </div>
      </div>
      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
            Contact Info
        </span>
        <div>
            <small className="text-[14px] text-white">
                <a href="mailto:urarun02@gmail.com">urarun02@gmail.com</a>
            </small>
            <div className="flex gap-4 py-[1rem]">
                <FaInstagram className="icon bg-white p-[8px] h-[35px]  w-[35px] rounded-full text-blue-900"/>
                <FaFacebookF className="icon bg-white p-[8px] h-[35px]  w-[35px] rounded-full text-blue-900"/>
                <FaGithub className="icon bg-white p-[8px] h-[35px]  w-[35px] rounded-full text-blue-900"/>
                <FaLinkedin className="icon bg-white p-[8px] h-[35px]  w-[35px] rounded-full text-blue-900"/>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
