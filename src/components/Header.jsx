import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { Container } from "./UI";
import MainMenuOne from "./MainMenuOne";

const Header = ({ displayMenu }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-white w-full shadow-md h-[60px] flex items-center">
      <Container>
        <div className="grid grid-cols-[auto_auto] xl:grid-cols-[300px_minmax(0,_1fr)_300px] gap-4 items-center">
          <div>
            <img
              src="https://i.ibb.co/yyHGFfj/Group-2308.png"
              alt="Logo"
              className="h-7 sm:h-8 cursor-pointer -mt-1"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="hidden xl:block">
            {displayMenu && <MainMenuOne />}
          </div>

          <div className="flex items-center justify-end">
            <Menu as="div" className="relative flex items-center">
              <Menu.Button>
                <div className="flex items-center justify-end font-metroSemibold text-base text-secondary">
                  <div className="hidden sm:flex items-center justify-end mr-5 max-w-[185px]">
                    <span className=" truncate">Goran Markovanović</span>
                    <FaChevronDown className="ml-2" />
                  </div>
                  <img
                    src="https://i.ibb.co/hFS9Tgk/Mask-group.png"
                    alt="th"
                    className="h-10 w-10 rounded-[2px] bg-primary"
                  />
                </div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  as="ul"
                  className="absolute right-[60px] top-[100%] shadow-md bg-white rounded-sm py-1 min-w-[182px] z-10"
                >
                  <Menu.Item
                    as="li"
                    className="py-1.5 px-3 text-xs text-secondary font-metroRegular cursor-pointer leading-tight"
                  >
                    Link 1
                  </Menu.Item>
                  <Menu.Item
                    as="li"
                    className="py-1.5 px-3 text-xs text-dangerRed font-metroRegular cursor-pointer leading-tight"
                  >
                    Link 2
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            {displayMenu && (
              <Menu
                as="div"
                className="relative flex items-center ml-5 xl:hidden"
              >
                <Menu.Button>
                  <div className="flex items-center justify-end font-metroSemibold text-base text-secondary">
                    <FaBars className="w-7 h-7 text-secondary" />
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    as="ul"
                    className="absolute right-0 top-[44px] shadow-md bg-white rounded-sm py-1 min-w-[182px] z-10"
                  >
                    <MainMenuOne listType={true} />
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
