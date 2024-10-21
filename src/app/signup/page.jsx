"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

const Page = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const newUser = {
      name,
      email,
      password,
    };
    const resp = await fetch(`http://localhost:3000/signup/api`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (resp.status === 200) {
      e.target.reset();
    }
  };

  return (
    <div className="container mx-auto py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            width={540}
            height={540}
            alt="Login Image"
          />
        </div>
        <div className="border-2 rounded-[8px] p-10 md:p-24">
          <h1 className="text-center text-4xl text-[#444]">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className="mt-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full mt-2"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-2"
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Confirm your Password"
                className="input input-bordered w-full mt-2"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-4 text-white"
            >
              Sign Up
            </button>
          </form>
          <h6 className="text-center mt-6 text-[#444]">or sign in with</h6>
          <div className="flex gap-3 justify-center mt-4">
            <button className="btn flex items-center justify-center text-blue-500">
              <FaFacebook />
            </button>
            <button className="btn flex items-center justify-center text-blue-600">
              <FaLinkedin />
            </button>
            <button className="btn flex items-center justify-center text-primary">
              <FaGoogle />
            </button>
          </div>
          <h6 className="text-center mt-12">
            Already have an account?
            <Link className="text-primary ml-2" href="/login">
              Login
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Page;
