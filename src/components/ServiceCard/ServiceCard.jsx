"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price, _id } = service;
  console.log("is working");
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-[208px]">
        <Image src={img} height={120} width={430} alt="service card img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between items-center">
          <p className="text-primary font-semibold text-xl">price:{price}$</p>
          <Link href={`/services/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
