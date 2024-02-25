// Layout.tsx
"use client";
import React, { ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import name from "../public/assets/images/name.png";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import SplashScreen from "./components/splash-screen/splash-screen";


export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3500));

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="flex h-screen overflow-hidden w-[80%] m-auto ">
          <div className="w-[50%] mt-[70px]   p-4">
            <div>
              <Image src={name} alt="" width={400} />{" "}
              <p className=" text-[14px] w-[430px] mt-[0px] text-[#9bb8d2]">
                {" "}
                Frontend developer with a passion for crafting seamless web
                experiences using Next.js, React, TypeScript, and CSS.
              </p>{" "}
            </div>

            <div className="mt-[100px]">
              <ul>
                <li className="mt-[10px]">
                  <a
                    href="#section2"
                    className="hover:text-white group flex items-center tracking-[5px] text-[#9bb8d2]"
                  >
                    <div className="w-[40px] mr-[7px] h-[1px] bg-[#9bb8d2] transition-all duration-200 ease-in-out group-hover:w-[50px]"></div>
                    About
                  </a>
                </li>{" "}
                <li className="mt-[10px]">
                  <a
                    href="#section2"
                    className="hover:text-white group flex items-center tracking-[5px] text-[#9bb8d2]"
                  >
                    <div className="w-[40px] mr-[7px] h-[1px] bg-[#9bb8d2] transition-all duration-200 ease-in-out group-hover:w-[50px]"></div>
                    Experience
                  </a>
                </li>{" "}
                <li className="mt-[10px]">
                  <a
                    href="#section2"
                    className="hover:text-white group flex items-center tracking-[5px] text-[#9bb8d2]"
                  >
                    <div className="w-[40px] mr-[7px] h-[1px] bg-[#9bb8d2] transition-all duration-200 ease-in-out group-hover:w-[50px]"></div>
                    Projects
                  </a>
                </li>{" "}
                <li className="mt-[10px]">
                  <a
                    href="#section2"
                    className="hover:text-white group flex items-center tracking-[5px] text-[#9bb8d2]"
                  >
                    <div className="w-[40px] mr-[7px] h-[1px] bg-[#9bb8d2] transition-all duration-200 ease-in-out group-hover:w-[50px]"></div>
                    Resume
                  </a>
                </li>{" "}
              </ul>{" "}
            </div>
            <div className="mt-[100px]">
              <p>
                I'm here to help! If you have any questions or just want to
                connect, feel free to reach out to me through any of the social
                platforms listed below:
              </p>
              <div className="flex w-[190px] mt-[20px] justify-between">
                <a
                  href="https://github.com/bimbo-ade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <AiOutlineGithub size={30} />
                </a>

                <a
                  href="https://twitter.com/damisayrah_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle size={30} />
                </a>

                <a
                  href="https://www.instagram.com/damisayrah_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram size={30} />
                </a>
                <a
                  href="mailto:bimboadeyemi65@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineMail size={30} />
                </a>

                {/* <a
              href="tel:+2348162471353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelephone size={25}/>
            </a> */}
              </div>
            </div>
          </div>

          {/* Right Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 py-[100px]">
            {" "}
            {/* Content for Section 1 */}
            <section id="section1" className="mb-10">
              <h2 className="text-[16px]">
                Greetings! I'm [Your Name], a dedicated frontend developer known
                for my expertise in crafting modern and responsive web
                applications. My journey in the digital realm revolves around
                creating seamless user experiences using a blend of cutting-edge
                technologies. With a primary focus on frontend development, I
                specialize in harnessing the power of React.js. I take pride in
                building beautiful, interactive, and intuitive user interfaces
                that not only meet but exceed user expectations. My code is
                characterized by its performance, scalability, and
                maintainability. Responsive design is at the core of my
                development philosophy. Leveraging the capabilities of CSS and
                Tailwind CSS, I ensure that websites look impeccable and
                function seamlessly across a myriad of devices. As a fervent
                TypeScript enthusiast, I champion its use to enhance the
                development process. By catching errors early and improving code
                quality, TypeScript plays a pivotal role in my toolkit. My
                proficiency extends to Next.js, where I utilize its capabilities
                for server-side rendering, efficient routing, and optimized
                builds. The result is web applications that not only meet but
                exceed performance standards. In the world of technology, my
                language is not limited to code alone. I communicate through the
                lens of Git, GitHub, VSCode, npm, and Yarn. These tools empower
                me to bring ideas to life efficiently. Beyond code, I'm always
                excited to connect with fellow developers and collaborators. You
                can find me on [LinkedIn](#) and [Twitter](#), where we can
                discuss exciting projects, the latest trends in frontend
                development, or anything else that sparks your interest. Let's
                build something amazing together!
              </h2>
              {/* Add content for Section 1 */}
            </section>
            {/* Content for Section 2 */}
            <section id="section2" className="mb-10">
              <h2 className="text-2xl font-bold">Section 2</h2>
              {/* Add content for Section 2 */}
            </section>
            {/* Add more sections as needed */}
          </div>
        </div>
      )}
    </div>
  );
}
