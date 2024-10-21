"use client";
import Image from "next/image";
import React from "react";
import small_banner_img from "../../../public/assets/images/checkout/detail_banner_bottom.png";
import { usePathname } from "next/navigation";

const Banner = ({ service }) => {
  const pathName = usePathname();
  const checkPath = pathName[1];
  // console.log;
  // console.log("this is service image url", service.img);
  return (
    <div className="relative h-72] overflow-hidden rounded-[10px] mt-12">
      <Image
        className="h-72 top-0 left-0 object-cover w-full "
        src={service.img}
        width={1920}
        height={300}
        alt="this is service detail banner image"
      ></Image>
      <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
        <h1 className="text-white text-4xl font-bold flex justify-center items-center ml-8">
          Check Out {service && checkPath === "s" ? service.title : ""}
        </h1>
      </div>
      <div className="absolute bottom-0 md:left-[37%]">
        <div className="relative">
          <Image
            src={small_banner_img}
            width={296}
            height={49}
            alt="banner bottom"
          ></Image>
        </div>
        <div className="absolute left-0 top-0 flex justify-center items-center h-full w-full">
          <p className="text-white">Home/Service Details</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
