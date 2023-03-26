import React from "react";
import { Link, useLocation } from "react-router-dom";
const MainMenu = ({ listType }) => {
  const location = useLocation();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  // tailwind css class for link
  let linkClasses =
    "text-base text-secondary flex items-center transition hover:text-primary";
  if (listType) {
    linkClasses += " px-4 py-2 justify-start";
  } else {
    linkClasses +=
      " h-[60px] border-t-[3px] border-b-[3px] border-transparent justify-center";
  }
  return (
    <ul
      className={`${
        listType ? "block space-x-0 2xl:space-x-0 py-1" : "flex space-x-10"
      } justify-center 2xl:space-x-14 font-metroRegular`}
    >
      <li>
        <Link
          to="/my-planton"
          className={`${linkClasses} ${
            pathMatchRoute("/my-planton") && "border-b-primary"
          }`}
        >
          Moj PlantOn
        </Link>
      </li>
      <li>
        <Link
          to="/nutritionism"
          className={`${linkClasses} ${
            pathMatchRoute("/nutritionism") && "border-b-primary"
          } `}
        >
          Nutricionizam
        </Link>
      </li>
      <li>
        <Link
          to="/market"
          className={`${linkClasses} ${
            pathMatchRoute("/market") && "border-b-primary"
          } `}
        >
          Trgovina
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
