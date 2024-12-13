'use client'
import React,{useState} from "react";
import Layout from "@/components/layout";
import Admin from "@/components/Admin";
import { Button } from "@/components/ui/button"; // shadcn button component

const HospitalConfig = () => {
  
   const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    fax: "",
    location: "",
    email: "",
    currency: "",
    symbol: "",
    prePrintedStationary: false,
    selfConsultationReviewDay: "",
    creditCardExpiryValidityDays: "",
  });


  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type} = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

   // Handle Save Button (POST)
  const handleSave = async () => {
    try {
      const response = await fetch("https://j7a4yhqqxi.execute-api.ap-southeast-2.amazonaws.com/dev/hospitalinfo/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Hospital data saved successfully!");
        // Clear the form or refresh data here if needed
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save hospital data.");
    }
  };

  return (
     <Layout>
      <div className="min-h-screen bg-[#ceddff] p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-[#004a87]">Hospital Config</h1>
        <Admin />{/* This is the Admin component */}
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-white mb-6" />

      {/* Buttons Section */}
      <div className="flex justify-end mb-6 space-x-3 ">
        <Button onClick={handleSave}className="bg-[#004a87] text-[18px] text-white hover:bg-[#003970]">Save</Button>
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
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-white bg-white"
          />
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label className="block text-white mb-1">Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-white bg-white"
          />
        </div>

        {/* Phone, Fax, Location */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-white mb-1">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block text-white mb-1">Fax</label>
            <input
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
          <div className="flex-1">
            <label className="block text-white mb-1">Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-white bg-white"
          />
        </div>

        {/* Currency and Symbol */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-white mb-1">Currency</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
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
              name="symbol"
              value={formData.symbol}
              onChange={handleChange}
              className="w-full h-10 px-3 rounded-md border border-white bg-white"
            />
          </div>
        </div>

        {/* Pre-printed Stationary */}
        <div className="flex items-center space-x-2">
          <input type="checkbox"
            name="prePrintedStationary"
            checked={formData.prePrintedStationary}
            onChange={handleChange} className="h-5 w-5" />
          <label className="text-white">Pre-printed Stationary</label>
        </div>
      </div>

      {/* Additional Box Section */}
      <div className="mt-6 p-6 bg-[#8cb7ff] rounded-lg flex justify-start gap-8">
        <div className="mb-4 flex gap-2">
          <label className="block text-white mb-1">Self Consultation Review Day</label>
          <input
             name="selfConsultationReviewDay"
             value={formData.selfConsultationReviewDay}
             onChange={handleChange}
            className=" h-6  w-16 px-3 rounded-md border border-white bg-white"
          ></input>
        </div>

        <div className="mb-4 flex gap-2">
          <label className="block text-white mb-1">Credit Card Expiry Validity Days</label>
          <input
              
              name="creditCardExpiryValidityDays"
              value={formData.creditCardExpiryValidityDays}
              onChange={handleChange}
            className="h-6 w-16 px-3 rounded-md border border-white bg-white"
          ></input>
        </div>
      </div>
    </div>
     </Layout>
  );
};

export default HospitalConfig;
