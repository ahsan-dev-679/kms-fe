import React from "react";

const MobileCategorySidebar = () => {
  return (
    <Link
      className={`px-4 py-2 rounded-lg font-semibold text-md hover:bg-[#4FAE5A] hover:text-[#fff] transition-colors duration-300  ${
        isActive ? "bg-[#4FAE5A] text-[#fff]" : "text-[#000]"
      }`}
      to={"#"}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default MobileCategorySidebar;
