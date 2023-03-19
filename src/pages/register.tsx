import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import IconButton from "@/components/IconButton";
import Link from "next/link";
import React from "react";
import { TbLockSquareRoundedFilled } from "react-icons/tb";

export default function register() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-10 px-5 lg:px-7">
      <div className="mb-5 flex flex-col justify-center items-center">
        <IconButton className="bg-violet-700 text-white">
          <TbLockSquareRoundedFilled />
        </IconButton>
        <h4 className="text-2xl">Sign up</h4>
      </div>
      <FormInput size="large" label="Full Name *" type="text" />
      <FormInput className="mt-4" size="large" label="Email Address *" type="text" />
      <FormInput className="mt-4" size="large" label="Password *" type="password" />
      <Button className="mt-4 w-full" variant="contained">Sign up</Button>
      <Link
        className="text-end block text-blue-600 underline mt-4"
        href="/login"
      >
        Already have an account? Sign in
      </Link>
    </div>
  );
}