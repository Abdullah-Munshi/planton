import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const GardenInfo = ({ type, value }) => {
  return (
    <li className="bg-gray px-4 lg:px-7 py-3 lg:py-4 grid grid-cols-1 md:grid-cols-2 gap-3">
      <p className="flex items-center text-sm font-metroMedium text-secondary60 mb-0">
        <RiErrorWarningFill className="mr-5 w-6 h-6 text-secondary60" />
        {type}
      </p>
      <p className="text-sm font-metroMedium text-secondary mb-0">{value}</p>
    </li>
  );
};

export default GardenInfo;
