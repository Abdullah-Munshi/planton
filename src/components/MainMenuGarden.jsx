import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const MainMenuGarden = ({ listType }) => {
  const location = useLocation();
  const navigate = useNavigate();

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
      } justify-center  2xl:space-x-14 font-metroRegular`}
    >
      <li>
        <Link
          to="/about"
          className={`${linkClasses} ${
            pathMatchRoute("/about") && "border-b-primary"
          }`}
        >
          O vrtu
        </Link>
      </li>
      <li>
        <Link
          to="/notification"
          className={`${linkClasses} ${
            pathMatchRoute("/notification") && "border-b-primary"
          } `}
        >
          Notifikacije
        </Link>
      </li>
      <li>
        <Link
          to="/live"
          className={`${linkClasses} ${
            pathMatchRoute("/live") && "border-b-primary"
          } `}
        >
          Video nadzor
        </Link>
      </li>
    </ul>
  );
};

export default MainMenuGarden;
