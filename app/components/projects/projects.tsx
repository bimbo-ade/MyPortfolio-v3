import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

import Image from "next/image";
import flower from "@/public/assets/images/flower.jpg";
const Projects = () => {
  return (
    <div className="">
      <div className="my-[50px]  laptop:my-[30px]  bg-[#9EC3FA] bg-opacity-[0.033] tablet:bg-transparent tablet:p-0 p-4">
        {" "}
        <a
          href="https://abimbola-adeyemi.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer  my-[70px] laptop:my-[1px]  w-[100%] tablet:flex    laptop:p-6 transition duration-120 laptop:hover:bg-[#9EC3FA] laptop:hover:bg-opacity-[0.014]"
        >
          <Image
            src={flower}
            alt=""
            className="tablet:w-[100px] tablet:max-w-[130px] w-[150px] object-cover"
          />
          <div className="tablet:ml-[20px]  ">
            {" "}
            <p className="text-[#53DD89]  flex mt-[20px] tablet:mt-0 flex tracking-[2px] uppercase text-[12px]">
              {" "}
              PORTFOLIO V2{" "}
              <span className=" ml-[7px]">
                <MdOutlineArrowOutward size={15} />
              </span>
            </p>
            <p className=" mt-[10px] text-[16px]  ">
              My portfolio highlights my expertise in CSS animation, and I
              played a key role in its loose design.
            </p>
            <div className="flex mt-[10px] flex-wrap gap-2 desktop:gap-2">
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Reactjs
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Framer Motion{" "}
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                React Particles{" "}
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                JavaScript{" "}
              </p>{" "}
            </div>
          </div>
        </a>{" "}
      </div>{" "}
      <div className="my-[50px]  laptop:my-[30px] bg-[#9EC3FA] bg-opacity-[0.033] tablet:bg-transparent tablet:p-0 p-4">
        {" "}
        <a
          href="https://myfoodlang.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer  my-[70px] laptop:my-[1px] w-[100%] tablet:flex   laptop:p-6 transition duration-120 laptop:hover:bg-[#9EC3FA] laptop:hover:bg-opacity-[0.014]"
        >
          <Image
            src={flower}
            alt=""
            className="tablet:w-[100px] tablet:max-w-[130px] w-[150px] object-cover"
          />
          <div className="tablet:ml-[20px]  ">
            {" "}
            <p className="text-[#53DD89]   flex mt-[20px] tablet:mt-0 flex tracking-[2px] uppercase text-[12px]">
              {" "}
              FoodLang{" "}
              <span className=" ml-[7px]">
                <MdOutlineArrowOutward size={15} />
              </span>
            </p>
            <p className=" mt-[10px] text-[16px]   ">
              Foodlang is a web application featuring a menu list. It utilizes
              Redux for state management, coupled with React and CSS for a
              seamless and engaging user experience.
            </p>
            <div className="flex mt-[10px] flex-wrap gap-2 desktop:gap-2">
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Reactjs
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Redux{" "}
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                HTML & CSS{" "}
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Figma{" "}
              </p>{" "}
            </div>
          </div>
        </a>{" "}
      </div>{" "}
      <div className="my-[50px]  laptop:my-[30px] bg-[#9EC3FA] bg-opacity-[0.033] tablet:bg-transparent tablet:p-0 p-4">
        {" "}
        <a
          href="https://starwarspj.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer  my-[70px] laptop:my-[1px] w-[100%] tablet:flex laptop:p-6 transition duration-120 laptop:hover:bg-[#9EC3FA] laptop:hover:bg-opacity-[0.014]"
        >
          <Image
            src={flower}
            alt=""
            className="tablet:w-[100px] w-[150px] tablet:max-w-[130px] object-cover"
          />
          <div className="tablet:ml-[20px]  ">
            {" "}
            <p className="text-[#53DD89] flex mt-[20px] tablet:mt-0 flex tracking-[2px] uppercase text-[12px]">
              {" "}
              STARWARS{" "}
              <span className=" ml-[7px]">
                <MdOutlineArrowOutward size={15} />
              </span>
            </p>
            <p className=" mt-[10px] text-[16px]   ">
              The Star Wars project demonstrates my proficiency in API
              integration, utilizing an open backend API to list movies from the
              Star Wars franchise and showcase their respective characters.
            </p>
            <div className="flex mt-[10px] flex-wrap gap-2 desktop:gap-2">
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Reactjs
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                HTML & CSS
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                JavaScript
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Axios
              </p>{" "}
            </div>
          </div>
        </a>{" "}
      </div>{" "}
      <div className="my-[50px]  laptop:my-[30px] bg-[#9EC3FA] bg-opacity-[0.033] tablet:bg-transparent tablet:p-0 p-4">
        {" "}
        <a
          href="https://www.instagram.com/damisayrah_/"
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer  my-[70px] laptop:my-[1px] w-[100%] tablet:flex  laptop:p-6 transition duration-120 laptop:hover:bg-[#9EC3FA] laptop:hover:bg-opacity-[0.014]"
        >
          <Image
            src={flower}
            alt=""
            className="tablet:w-[100px] tablet:max-w-[130px] w-[150px] object-cover"
          />
          <div className="tablet:ml-[20px]  ">
            {" "}
            <p className="text-[#53DD89]   flex mt-[20px] tablet:mt-0 flex tracking-[2px] uppercase text-[12px]">
              {" "}
              PORTFOLIO V3{" "}
              <span className=" ml-[7px]">
                <MdOutlineArrowOutward size={15} />
              </span>
            </p>
            <p className=" mt-[10px] text-[16px]   ">
              My portfolio demonstrates my proficiency in Next.js, complemented
              by the use of Tailwind CSS and CSS animation libraries.
            </p>
            <div className="flex mt-[10px] flex-wrap gap-2 desktop:gap-2">
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Nextjs{" "}
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Framer Motion{" "}
              </p>{" "}
              <p className="px-[14px] py-[4px] bg-[#53DD89] text-[#53DD89] text-opacity-[0.7] text-[12px] bg-opacity-[0.08] rounded-[40px]">
                {" "}
                Tailwind CSS{" "}
              </p>{" "}
            </div>
          </div>
        </a>{" "}
      </div>
    </div>
  );
};

export default Projects;
