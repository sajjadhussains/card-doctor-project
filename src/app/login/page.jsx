"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
const Page = () => {
  const router = useRouter();
  const searchParam = useSearchParams();
  const path = searchParam.get("redirect");
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
    // if (resp.status === 200) {
    //   router.push("/");
    // }
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
          <h1 className="text-center text-4xl text-[#444]">Login</h1>
          <div>
            <form onSubmit={handleLogin}>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  class="input input-bordered w-full mt-2"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password">Password</label>
                <br />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  class="input input-bordered w-full mt-2"
                />
              </div>
              <button className="btn btn-primary w-full mt-4">Sign in</button>
            </form>
            <h6 className="text-center mt-6 text-[#444]">or sign in with</h6>
            <div className="flex gap-3 justify-center mt-4">
              <button className="btn  flex items-center justify-center text-blue-500">
                <FaFacebook />
              </button>
              <button className="btn  flex items-center justify-center text-blue-600">
                <FaLinkedin />
              </button>
              <button className="btn  flex items-center justify-center text-primary">
                <FaGoogle />
              </button>
            </div>
            <h6 className="text-center mt-12">
              Don't have an account?
              <Link className="text-primary ml-2" href={`/signup`}>
                Signup
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
