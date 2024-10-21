import { getServices } from "@/services/getServices";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = async () => {
  const { services } = await getServices();

  return (
    <div className="mt-32 text-slate-800 min-h-screen">
      <div className="flex justify-center">
        <div className="max-w-[717px] text-center">
          <h3 className="text-2xl font-bold text-orange-600">Service</h3>
          <h2 className="text-5xl mt-5">Our Service Area</h2>
          <p className="text-[#737373] mt-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don look even slightly believable.{" "}
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.length > 0 &&
          services?.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
      </div>
    </div>
  );
};

export default Services;
