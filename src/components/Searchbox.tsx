import React from "react";
import { FiSearch } from "react-icons/fi"; // Importing a search icon from react-icons

const SearchBox = () => {
  return (
    <div className="flex items-center justify-start w-full max-w-md bg-white border border-gray-300 rounded-lg p-2">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search here..."
        className="flex-grow px-2 py-1 outline-none text-gray-700"
      />

      {/* Text and Icon */}
      <div className="flex items-center space-x-1 text-gray-500">
        <span className="text-sm">Search</span>
        <FiSearch className="w-5 h-5" />
      </div>
    </div>
  );
};

export default SearchBox;
