import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="carousel w-full">
        {banners.map((banner, idx) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.75), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                idx + 1
              }.jpg)`,
            }}
            key={idx}
            id={`slide${idx + 1}`}
            className="carousel-item relative w-full  h-[90vh] bg-cover bg-top bg-no-repeat"
          >
            <div className="flex items-center pl-24 text-white">
              <div className="w-1/2">
                <h1 className="pr-20 font text-3xl md:text-6xl font-semibold md:leading-[75px]">
                  {banner.title}
                </h1>
                <h1 className="text-lg">{banner.description}</h1>
                <div className="mt-7">
                  <button className="btn btn-primary text-white mr-5">
                    Discover More
                  </button>
                  <button className="btn btn-outline hover:bg-primary text-white">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between bottom-12 right-12">
              <a href={banner.prev} className="btn btn-circle mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
