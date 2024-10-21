"use client";
import Banner from "@/components/ServiceDetails/Banner";
import { generateServiceDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Checkout = ({ params }) => {
  const { data } = useSession();
  const [service, setService] = useState([]);
  const loadService = async () => {
    const { service } = await generateServiceDetails(params.id);
    setService(service);
  };

  const handleBooking = async (event) => {
    event.preventDefault();
    const newBooking = {
      name: data?.user?.name,
      email: data?.user?.email,
      due_amount: service?.price,
      phone_number: event.target.phone.value,
      address: event.target.address.value,
      date: event.target.date.value,
      ...service,
    };
    console.log(newBooking);
    const resp = await fetch(
      `https://card-doctor-project-5116ux9tz-sajjad-hussains-projects-dc535a31.vercel.app/checkout/api/new-booking`,
      {
        method: "POST",
        body: JSON.stringify(newBooking),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const response = await resp?.json();
    toast.success(response?.message);
    event.target.reset();
  };

  useEffect(() => {
    loadService();
  }, [params.id]);

  return (
    <div className="container mx-auto mb-32">
      <ToastContainer />
      <Banner service={service}></Banner>
      <form onSubmit={handleBooking} className="mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={data?.user?.name}
              type="text"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              defaultValue={new Date().toISOString().slice(0, 10)}
              type="date"
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={data?.user?.email}
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              defaultValue={service?.price}
              readOnly
              type="text"
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              required
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Present Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
