// SplashScreen.tsx
import React from "react";

import Image from "next/image";
import letterA from "@/public/assets/images/letterA.png";
import "./splash-screen.css";

const SplashScreen: React.FC = () => {
  return (
    <div className="splashScreen">
      <div className="circularDiv">
        <Image src={letterA} alt="" width={200} />{" "}
      </div>
    </div>
  );
};

export default SplashScreen;
