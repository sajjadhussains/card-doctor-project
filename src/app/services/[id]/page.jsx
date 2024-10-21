import Banner from "@/components/ServiceDetails/Banner";
import { generateServiceDetails, getServices } from "@/services/getServices";
import Image from "next/image";
import checkout from "../../../../public/assets/images/checkout/checkout.jpg";
import rightArrow from "../../../../public/assets/icons/right-arrow.svg";
import rightArrow2 from "../../../../public/assets/icons/right-arrow-2.svg";
import React from "react";
import ServiceDetailsFacilityCard from "@/components/ServiceDetails/ServiceDetailsFacilityCard";
import Link from "next/link";

const page = async ({ params }) => {
  const { service } = await generateServiceDetails(params.id);
  const { services } = await getServices();

  return (
    <div className="container mx-auto">
      <Banner service={service}></Banner>
      <div className="md:flex mt-32 mb-10 gap-6">
        <div className="md:w-3/5">
          <div className="rounded-[10px] overflow-hidden">
            <Image src={checkout} width={1920} height={400} alt=""></Image>
          </div>
          <h1 className="text-4xl font-semibold mt-12">{service.title}</h1>
          <p className="text-[#737373] mt-7">{service.description}</p>
          <div className="grid md:grid-cols-2 gap-6 mt-7">
            {service.facility.map((item, idx) => (
              <ServiceDetailsFacilityCard
                item={item}
                key={idx}
              ></ServiceDetailsFacilityCard>
            ))}
          </div>
        </div>

        {/* right side of the service details page */}
        <div className="md:w-2/5">
          <div className="bg-[#F3F3F3] p-10 rounded-[10px]">
            <h2 className="text-2xl font-semibold">Services</h2>
            {services?.map((service) => (
              <Link href={`/services/${service._id}`} key={service._id}>
                <div
                  className={`h-14 flex justify-between items-center p-5 mt-5 rounded ${
                    params.id === service._id ? "bg-[#FF3811]" : "bg-white"
                  }`}
                >
                  <p
                    className={`${
                      params.id === service._id ? "text-white" : ""
                    }`}
                  >
                    {service.title}
                  </p>
                  <Image
                    className="cursor-pointer"
                    src={params.id === service._id ? rightArrow : rightArrow2}
                    height={24}
                    width={24}
                    alt=""
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <h2 className="text-4xl font-semibold">Price ${service.price}</h2>
            <Link href={`/checkout/${params.id}`}>
              <button className="btn btn-primary w-full text-white mt-7 text-[18px]">
                Proceed Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
