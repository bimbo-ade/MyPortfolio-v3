// Layout.tsx
"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { MdDownload } from "react-icons/md";

import {
  AiOutlineMail,
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import SplashScreen from "./components/splash-screen/splash-screen";
import { motion } from "framer-motion";
import "./components/cursor-highlight/cursor.css";
import CursorHighlight from "./components/cursor-highlight/cursor";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import { MdOutlineArrowDownward } from "react-icons/md";
import Link from "next/link";
export default function Page() {
  const [loading, setLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  // const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      console.log("ScrollX:", scrollX);
      console.log("ScrollY:", scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mouseMove = (e: any) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2500));

      setLoading(false);
    };

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const cursorVariants = {
    default: {
      x: cursorPosition.x - 25,
      y: cursorPosition.y - 25,
      transition: { stiffness: 500, damping: 10 }, // Adjust values for faster motion
    },
  };
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  const [activeSection, setActiveSection] = useState(null);

  const handleMouseEnter = (sectionId: any) => {
    setActiveSection(sectionId);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
  };

  const isSectionActive = (sectionId: any) => activeSection === sectionId;

  const abims = "/assets/images/abims.pdf";

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {" "}
          {/* <motion.div
            variants={cursorVariants}
            animate="default"
            className="cursor-highlight"
          />{" "} */}
          <div className="relative h-screen " id="app-container">
            <div className="w-[150px] h-[5px] tablet:mt-[30px] tablet:ml-[50px] tablet:w-[300px] tablet:h-[20px]  rounded-b-[20px] bg-gradient-to-r from-[#53dd89] via-[#a9bdcf] to-[#80e7a7]">
              <div className="w-[5px] h-[180px]  tablet:w-[20px] tablet:h-[300px] rounded-r-[20px] bg-gradient-to-b from-[#53dd89] via-[#a9bdcf] to-[#80e7a7]">
                {" "}
              </div>
            </div>{" "}
            <div className=" tablet:p-8 laptop:flex laptop:h-screen overflow-hidden tablet:max-w-[910px] laptop:max-w-[1300px] m-auto ">
              <div className="laptop:w-[50%] mt-[20px] laptop:p-[50px]  tablet:p-5">
                <div className="p-5 tablet:p-0">
                  <motion.div variants={itemVariants}>
                    {" "}
                    {/* <Image
                      src={name}
                      alt=""
                      className="tablet:w-[330px] hidden tablet:block tablet:w-[400px] w-[200px]"
                    /> */}
                    <p className="  text-[25px] tablet: text-[30px]  tracking-[1px] mt-[23px] mb-[5px] w-[290px] tablet:mt-[30px] laptop:mt-[-11px] tablet:w-[100%] uppercase mb-[-30px] tablet:mb-[30px] text-white">
                      {" "}
                      {/* <span>I</span>
                      <span>M</span>
                      <span className="mx-[200px] tablet:mx-[2px]"> </span> */}
                      <span>A</span>
                      <span className="animate-color-change-s">B</span>
                      <span className="animate-color-change-s">I</span>
                      <span className="animate-color-change-s">M</span>
                      <span className="animate-color-change-s">B</span>
                      <span className="animate-color-change-s">O</span>
                      <span>L</span>
                      <span>A</span>
                      <span className="mx-[100px] tablet:mx-[2px]"> </span>
                      <span>A</span>
                      <span>D</span>
                      <span>E</span>
                      <span>Y</span>
                      <span>E</span>
                      <span>M</span>
                      <span>I</span>
                    </p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <p className="text-[16px] hidden tablet:block  w-[100%] laptop:text-[16px] tablet:w-[500px] laptop:w-[360px] mt-[10px] text-[#a9bdcf]">
                      {" "}
                      Frontend developer with a passion for crafting seamless
                      web experiences using Next.js, React, TypeScript, and CSS.
                    </p>{" "}
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <div className="hidden laptop:block tablet:mt-[100px]">
                    <ul>
                      <li
                        className="mt-[10px]"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a
                          href="#section1"
                          id="textForSection1"
                          className={`${
                            isSectionActive("section1")
                              ? "text-[#53DD89] group flex items-center tracking-[5px] "
                              : "hover:text-white group flex items-center tracking-[5px] text-[#a9bdcf]"
                          }`}
                        >
                          <div
                            id="textForSection1"
                            className={` ${
                              isSectionActive("section1")
                                ? "w-[60px] mr-[7px] h-[1px]  bg-[#a9bdcf] transition-all duration-200 ease-in-out group-hover:w-[50px]"
                                : "w-[30px] mr-[7px] h-[1px] bg-[#a9bdcf] transition-all duration-200 ease-in-out group-hover:w-[50px]"
                            }`}
                          ></div>
                          About
                        </a>
                      </li>{" "}
                      <li
                        className="mt-[10px]"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a
                          href="#section2"
                          id="textForSection2"
                          className={`${
                            isSectionActive("section2")
                              ? "text-[#53DD89] group flex items-center tracking-[5px] "
                              : "hover:text-white group flex items-center tracking-[5px] text-[#a9bdcf]"
                          }`}
                        >
                          <div
                            className={`${
                              isSectionActive("section2")
                                ? "w-[60px] mr-[7px] h-[1px]  bg-[#a9bdcf] transition-all duration-200 ease-in-out group-hover:w-[50px]"
                                : "w-[30px] mr-[7px] h-[1px] bg-[#a9bdcf] transition-all duration-200 ease-in-out group-hover:w-[50px]"
                            }`}
                          ></div>
                          Experience{" "}
                        </a>
                      </li>{" "}
                      <li
                        className="mt-[10px]"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a
                          href="#section3"
                          id="textForSection3"
                          className={`${
                            isSectionActive("section3")
                              ? "text-[#53DD89] group flex items-center tracking-[5px] "
                              : "hover:text-white group flex items-center tracking-[5px] text-[#a9bdcf]"
                          }`}
                        >
                          <div
                            id="textForSection3"
                            className={`${
                              isSectionActive("section3")
                                ? "w-[60px] mr-[7px] h-[1px]  bg-[#a9bdcf] transition-all duration-200 ease-in-out group-hover:w-[50px]"
                                : "w-[30px] mr-[7px] h-[1px] bg-[#a9bdcf] transition-all duration-200 ease-in-out group-hover:w-[50px]"
                            }`}
                          ></div>
                          Projects
                        </a>
                      </li>{" "}
                      <li
                        className="mt-[10px]"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <a
                          href="#section4"
                          id="textForSection4"
                          className={`${
                            isSectionActive("section4")
                              ? "text-[#53DD89] group flex items-center tracking-[5px] "
                              : "hover:text-white group flex items-center tracking-[5px] text-[#a9bdcf]"
                          }`}
                        >
                          <div
                            id="textForSection4"
                            className={`${
                              isSectionActive("section4")
                                ? "w-[60px] mr-[7px] h-[1px]  bg-[#a9bdcf] transition-all duration-200 ease-in-out group-hover:w-[50px]"
                                : "w-[30px] mr-[7px] h-[1px] bg-[#a9bdcf] transition-all duration-200 ease-in-out group-hover:w-[50px]"
                            }`}
                          ></div>
                          Resume{" "}
                        </a>
                      </li>{" "}
                    </ul>{" "}
                  </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <div className=" mt-[30px] tablet:block laptop:mt-[150px]  ">
                    <p className="hidden laptop:block"> Lets connect</p>
                    <div className="flex w-[100%] mt-[20px] text-white justify-between bg-[#0b2425] px-9  py-3 fixed bottom-0 tablet:static tablet:mt-[-3px] tablet:ml-[-10px] tablet:w-[200px] tablet:bg-transparent tablet:px-2">
                      <a
                        href="https://github.com/bimbo-ade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <AiOutlineGithub size={22} />
                      </a>
                      <a
                        href="https://github.com/bimbo-ade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FaLinkedinIn size={22} />
                      </a>
                      <a
                        href="https://twitter.com/damisayrah_"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillTwitterCircle size={22} />
                      </a>

                      <a
                        href="https://www.instagram.com/damisayrah_/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillInstagram size={22} />
                      </a>
                      <a
                        href="mailto:bimboadeyemi65@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiOutlineMail size={22} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Right Scrollable Content */}{" "}
              <div className="flex overflow-y-auto h-full px-5 tablet:pt-[50px]  laptop:w-[50%] scrollbar-none">
                <motion.div variants={itemVariants}>
                  <section
                    id="textForSection1"
                    onMouseEnter={() => handleMouseEnter("section1")}
                    onMouseLeave={handleMouseLeave}
                    className="mb-10  "
                  >
                    <p className="my-[30px] hidden tablet:block text-[14px] text-white font-bold tracking-[2px] laptop:hidden">
                      ABOUT
                    </p>

                    <p className="text-[16px] leading-7 ">
                      Hi! I am a frontend developer specializing in React.js
                      Next.js, TypeScript and CSS. I create responsive web
                      applications with a focus on seamless user experiences.My
                      journey in web development has led me to collaborate on
                      diverse projects. I am passionate about creating
                      great user experiences and I have a strong understanding
                      of usability and accessibility standards.
                    </p>
                    <p className="mt-[22px] text-[16px] leading-7 ">
                      Recently, I ventured into the dynamic world of mobile app
                      creation with{" "}
                      <span className="tracking-[3px] text-[#53DD89]">
                        Flutter
                      </span>{" "}
                      , broadening my skill set to bring engaging experiences to
                      both web and mobile platforms.
                    </p>
                    <p className="mt-[22px] text-[16px] leading-7 ">
                      In my life outside coding, youll often find me immersed in
                      captivating movie marathons, enjoying quality time with
                      friends, or embarking on thrilling gaming adventures. Just
                      as I seek excellence in code, I appreciate the artistry in
                      these hobbies.
                    </p>
                    <p className="mt-[22px] text-[16px] leading-7 ">
                      {" "}
                      Eager to collaborate on dynamic projects and engage in
                      discussions about the latest trends in frontend
                      development. Lets create something remarkable together!
                    </p>
                    {/* Add content for Section 1 */}
                  </section>
                  <section
                    id="textForSection2"
                    onMouseEnter={() => handleMouseEnter("section2")}
                    onMouseLeave={handleMouseLeave}
                    className=" my-[120px]"
                  >
                    {" "}
                    <p className="mt-[30px] text-[14px] text-white font-bold tracking-[2px] laptop:hidden">
                      EXPERIENCE
                    </p>
                    <Experience />
                  </section>
                  <section
                    className=" my-[120px] laptop:w-[100%] laptop:my-[180px] desktop:w-[560px]"
                    id="textForSection3"
                    onMouseEnter={() => handleMouseEnter("section3")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <p className="mt-[20px] text-[14px] text-white font-bold tracking-[2px] laptop:hidden">
                      PROJECTS
                    </p>
                    <Projects />
                  </section>
                  <section
                    id="textForSection4"
                    onMouseEnter={() => handleMouseEnter("section4")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a href={abims} download="Abimbola Adeyemi Resume">
                      <p className="text-[#53DD89] flex tracking-[2px] mb-[40px] tablet:mb-[1px] h-[90px] uppercase text-[12px] tablet:text-[14px]">
                        Download Resume
                        <span className=" ml-[7px]">
                          <MdDownload size={20} />
                        </span>
                      </p>{" "}
                    </a>
                  </section>
                </motion.div>
              </div>
            </div>{" "}
          </div>
        </motion.div>
      )}
    </div>
  );
}
