import React from "react";
import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const PackageHistory = () => {
  return (
    <div className="bg-gray p-2.5 rounded-sm">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center relative w-full">
              <div className="w-20 basis-20 h-20 bg-white mr-3.5 flex items-center justify-center">
                <img src="" alt="img" />
              </div>
              <div className="text-left">
                <h5 className="text-sm font-metroMedium text-secondary mb-1.5 truncate w-[160px] 2xl:w-[235px]">
                  Paket #908534
                  <span className="text-xs text-secondary60">
                    - Vrt za vikendicu Vrt za vikendicu Vrt za vikendicu
                  </span>
                </h5>
                <p className="text-sm text-secondary60 mb-0">Zaprimljeno</p>
                <strong>28. listopad 2022.</strong>
              </div>

              <span className="absolute right-1 top-2 text-secondary60 inline-block">
                <FaChevronDown
                  className={
                    open ? "rotate-180 transform w-3.5 h-3.5" : "w-3.5 h-3.5"
                  }
                />
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="bg-white px-5 py-6 mt-2.5">
              <ol className="font-metroRegular relative border-l border-primary">
                <li className="mb-7 ml-4">
                  <span className="absolute w-5 h-5 bg-primary rounded-full -left-[11px]"></span>
                  <h5 className="text-sm text-secondary mb-0  leading-tight">
                    Naručeno
                  </h5>
                  <p className="text-xs text-secondary60 mb-0">
                    12:58 AM, 09 ožujak, 2022.
                  </p>
                </li>
                <li className="mb-7 ml-4">
                  <span className="absolute w-5 h-5 bg-primary rounded-full -left-[11px]"></span>
                  <h5 className="text-sm text-secondary mb-0  leading-tight">
                    Zapakirano
                  </h5>
                  <p className="text-xs text-secondary60 mb-0">
                    12:58 AM, 09 ožujak, 2022.
                  </p>
                </li>
                <li className="mb-7 ml-4">
                  <span className="absolute w-5 h-5 bg-primary rounded-full -left-[11px]"></span>
                  <h5 className="text-sm text-secondary mb-0  leading-tight">
                    Poslano
                  </h5>
                  <p className="text-xs text-secondary60 mb-0">
                    12:58 AM, 09 ožujak, 2022.
                  </p>
                </li>
                <li className="ml-4">
                  <span className="absolute w-5 h-5 bg-primary rounded-full -left-[11px]"></span>
                  <h5 className="text-sm text-secondary mb-0  leading-tight">
                    Zaprimljeno
                  </h5>
                  <p className="text-xs text-secondary60 mb-0">
                    12:58 AM, 09 ožujak, 2022.
                  </p>
                </li>
              </ol>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PackageHistory;
