import React from "react";

import Image from "next/image";
import abims from "@/public/assets/images/abims.png";

const Resume = () => {
  return (
    <div> 
      {" "}
      <Image src={abims} alt="" width={1500} className="object-cover" />
    </div>
  );
};

export default Resume;
