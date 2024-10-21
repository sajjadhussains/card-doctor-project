"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

const Page = () => {
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
          <h1 className="text-center text-4xl text-[#444]">Login</h1>
          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const searchParam = useSearchParams();
  const path = searchParam?.get("redirect");

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    console.log(resp);
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="input input-bordered w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          className="input input-bordered w-full mt-2"
        />
      </div>
      <button className="btn btn-primary w-full mt-4">Sign in</button>
    </form>
  );
};

export default Page;
