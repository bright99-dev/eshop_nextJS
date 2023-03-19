import React from "react";
import FooterItem from "./FooterItem";
import IconButton from "./IconButton";
import {
  AiOutlineInstagram,
  AiOutlineGoogle,
  AiFillGithub,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="px-5 md:px-10 lg:px-16 pt-5 md:pt-10 lg:pt-20 pb-5 md:pb-10 grid grid-cols-12 bg-[#222935] text-white">
      <div className="col-span-12 md:col-span-6 lg:col-span-3 md:px-2">
        <h3 className="text-3xl mb-4">ECOMERCE</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          deleniti veniam enim at nesciunt consectetur aut reiciendis autem
          nulla animi? Temporibus repudiandae dolor enim provident rem! Saepe
          quibusdam reprehenderit deleniti.
        </p>
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 md:px-2">
        <h4 className="text-2xl">About Us</h4>
        <FooterItem title="Careers" href="/" />
        <FooterItem title="Our Stores" href="/" />
        <FooterItem title="Our Cares" href="/" />
        <FooterItem title="Terms & Conditions" href="/" />
        <FooterItem title="Privacy Policy" href="/" />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 md:px-2">
        <h4 className="text-2xl">Customer Care</h4>
        <FooterItem title="Help Center" href="/" />
        <FooterItem title="How to Buy" href="/" />
        <FooterItem title="Track Your Order" href="/" />
        <FooterItem title="Corporate & Bulk Purchasing" href="/" />
        <FooterItem title="Returns & Refunds" href="/" />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3 md:px-2">
        <h4 className="text-2xl">Contact Us</h4>
        <FooterItem title="Ho Chi Minh City" href="/" />
        <FooterItem title="Email: bright99.dev@gmail.com" href="/" />
        <FooterItem title="Phone: 0354868289" href="/" />
        <div className="flex">
          <IconButton className="bg-[#1B212A] text-white">
            <BsFacebook />
          </IconButton>
          <IconButton className="bg-[#1B212A] text-white">
            <AiOutlineInstagram />
          </IconButton>
          <IconButton className="bg-[#1B212A] text-white">
            <AiOutlineGoogle />
          </IconButton>
          <IconButton className="bg-[#1B212A] text-white">
            <AiFillGithub />
          </IconButton>
        </div>
      </div>
    </div>
  );
}