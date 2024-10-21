import React from "react";

const ServiceDetailsFacilityCard = ({ item }) => {
  return (
    <div className="bg-[#F3F3F3] p-10 border-t-2 border-t-[#FF3811] rounded-[10px]">
      <h1 className="text-xl font-semibold">{item?.name}</h1>
      <p className="text-[#737373] mt-[10px]">{item?.details}</p>
    </div>
  );
};

export default ServiceDetailsFacilityCard;
