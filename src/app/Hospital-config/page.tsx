import React from "react";
import Layout from "@/components/layout";

import { Button } from "@/components/ui/button"; // shadcn button component

const HospitalConfig = () => {
  return (
     <Layout>
      <div className="min-h-screen bg-[#ceddff] p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-[#004a87]">Hospital Config</h1>
        <div className="flex items-center gap-5">
          
          <img
            src="/profile.png" // Replace with your image path
            alt=""
            className="w-10 h-10 rounded-sm border-[.5px] border-[#004a87]"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-[#004a87]">John Doe</h2>
            <div className="text-sm text-[#004a87]">
            <p className="font-bold">Admin Master</p>
          </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-white mb-6" />

      {/* Buttons Section */}
      <div className="flex justify-end mb-6 space-x-3 ">
        <Button className="bg-[#004a87] text-[18px] text-white hover:bg-[#003970]">Save</Button>
        <Button className="bg-white text-[18px] text-[#006dc2] border border-[#006dc2]">Clear</Button>
        <Button className="bg-[#d32929] text-[18px] text-white">Exit</Button>
      </div>

      {/* Form Section */}
      <div className="p-6 bg-[#8cb7ff] rounded-lg">
        <h2 className="text-lg font-semibold text-white mb-4">Hospital Name Configuration</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-white mb-1">Name</label>
          <input
            type="text"
            className="w-full h-10 px-3 rounded-md border border-white bg-white"
          />
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label className="block text-white mb-1">Address</label>
          <input
            type="text"
            className="w-full h-10 px-3 rounded-md border border-white bg-white"
          />
        </div>

        {/* Phone, Fax, Location */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-white mb-1">Phone</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block text-white mb-1">Fax</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block text-white mb-1">Location</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            className="w-full h-10 px-3 rounded-md border border-white bg-white"
          />
        </div>

        {/* Currency and Symbol */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-white mb-1">Currency</label>
            <select
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            >
              <option value="usd">USD</option>
              <option value="inr">INR</option>
              <option value="eur">EUR</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-white mb-1">Symbol</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
        </div>

        {/* Pre-printed Stationary */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="h-5 w-5" />
          <label className="text-white">Pre-printed Stationary</label>
        </div>
      </div>

      {/* Additional Box Section */}
      <div className="mt-6 p-6 bg-[#8cb7ff] rounded-lg flex justify-start gap-8">
        <div className="mb-4 flex gap-2">
          <label className="block text-white mb-1">Self Consultation Review Day</label>
          <textarea
            className=" h-6  w-16 px-3 rounded-md border border-white bg-white"
          ></textarea>
        </div>

        <div className="mb-4 flex gap-2">
          <label className="block text-white mb-1">Credit Card Expiry Validity Days</label>
          <textarea
            className="h-6 w-16 px-3 rounded-md border border-white bg-white"
          ></textarea>
        </div>
      </div>
    </div>
     </Layout>
  );
};

export default HospitalConfig;
