"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSettings, FiHome, FiUser, FiFileText } from "react-icons/fi"; // Example icons
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { name: "Hospital Configuration", icon: FiSettings, path: "/Hospital-config" },
    { name: "Service Group", icon: FiFileText, path: "/Service-group" },
    { name: "Master Setup", icon: FiHome, path: "/master-setup" },
    { name: "GST Setup", icon: FiUser, path: "/gst-setup" },
    { name: "Insurance Company", icon: FiSettings, path: "/insurance-company" },
    { name: "Insurance Rate", icon: FiFileText, path: "/insurance-rate" },
    { name: "Item Master Setup", icon: FiHome, path: "/item-master" },
    { name: "Item Markup Configuration", icon: FiUser, path: "/item-markup" },
    { name: "User Config", icon: FiSettings, path: "/user-config" },
  ];

  return (
    <div
      className={cn(
        "fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 z-20",
        isHovered ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sidebar Logo */}
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-xl font-bold text-[#004a87]">
          {isHovered ? "Logo" : "L"}
        </span>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col justify-between h-[calc(100%-4rem)]">
        <div className="flex flex-col justify-evenly flex-1">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group flex items-center p-2 mx-2 rounded-lg hover:bg-[#ceddff] cursor-pointer transition-all"
              onClick={() => router.push(item.path)}
            >
              <div className="text-[#004a87] w-6 h-6" >
                <item.icon/>
              </div>
              
              <span
                className={cn(
                  "ml-3 text-[#8cb7ff] text-md font-medium transition-all duration-300",
                  isHovered ? "opacity-100" : "opacity-0"
                )}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
