import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProductThumb from "./ProductThumb";
import { useNavigate } from "react-router-dom";

const CategoryCard = () => {
  const navigate = useNavigate();
  const productHandler = (event) => {
    navigate("/");
  };

  const crudHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <li
      className="flex space-x-5 relative px-[15px] py-2.5 pr-[28px] bg-gray rounded-sm"
      onClick={productHandler}
    >
      <div className="grow-0">
        <ProductThumb
          classes="bg-white rounded-sm w-10 h-10 p-2"
          thumbLink="https://i.ibb.co/7WFtHX6/Group-97.png"
          thumbAlter="Category"
        />
      </div>
      <div className="grow">
        <h5 className="text-secondary text-sm font-metroMedium mb-0">
          Vrt za vikendicu
        </h5>
        <p className="text-secondary60 text-xs font-metroRegular mb-0">
          Kneževi Vinogradi, Baranja
        </p>
      </div>
      <div className="grow">
        <h5 className="text-secondary text-sm font-metroMedium mb-0">
          OPG Kolar
        </h5>
        <p className="text-secondary60 text-xs font-metroRegular mb-0">
          Obiteljski paket
        </p>
      </div>
      <div className="grow">
        <h5 className="text-secondary text-sm font-metroMedium mb-0">
          Spremno za isporuku
        </h5>
        <p className="text-secondary60 text-xs font-metroRegular mb-0">
          Krastavac, rajčica, salata...
        </p>
      </div>
      <Menu
        as="div"
        className="absolute w-5 h-5 flex items-center justify-center top-0 bottom-0 right-2 m-auto"
      >
        <Menu.Button onClick={crudHandler}>
          <BsThreeDotsVertical />
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
            className="absolute right-2.5 top-5 shadow-md bg-white rounded-sm py-1 min-w-[160px] z-10"
          >
            <Menu.Item
              as="li"
              className="py-1.5 px-3 text-xs text-secondary font-metroRegular cursor-pointer leading-tight"
            >
              Uredi
            </Menu.Item>
            <Menu.Item
              as="li"
              className="py-1.5 px-3 text-xs text-dangerRed font-metroRegular cursor-pointer leading-tight"
            >
              Otkaži
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
};

export default CategoryCard;
