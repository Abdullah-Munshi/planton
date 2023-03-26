import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import HeaderGarden from "../components/HeaderGarden";
import { Container, CardTwo, PrimaryTitle } from "../components/UI";
import GardenInfo from "../components/GardenInfo";

const GardenAbout = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-wrapper-full min-h-screen min-w-full">
      <HeaderGarden displayMenu={true} />
      <main>
        <div className="py-5 md:py-8">
          <Container>
            <button
              onClick={() => navigate(-1)}
              className="xl:absolute left-5 text-base mb-4 xl:mb-0 text-secondary60 font-metroSemibold cursor-pointer transition hover:text-primary flex items-center inline-block"
            >
              <HiArrowSmLeft className="w-5 h-5 mr-1" />
              Povratak
            </button>
            <div className="max-w-[850px] mx-auto">
              <CardTwo>
                <div className="mb-[80px]">
                  <PrimaryTitle
                    heading="Status paketa"
                    paragraph="Pažljivo! Vi upravljate vašom parcelom, a zadatak OPG-ovca je da održava kontakt s Vama. Kada čestica bude spremna za branje dobit će te notifikaciju i datum do kada imate vremena Vašu parcelu označiti naručenom!"
                  />
                </div>

                <div className="package-status-wrap grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 gap-y-[64px] md:gap-y-3">
                  <div className="bg-gray rounded-sm p-3 text-center pt-[50px] relative">
                    <span className="block w-[80px] h-[80px] -top-[50px] left-0 right-0 mx-auto absolute">
                      <img
                        src="https://i.ibb.co/7WFtHX6/Group-97.png"
                        alt="category"
                        className="max-w-full"
                      />
                    </span>
                    <h4 className="text-lg md:text-xl font-metroSemibold text-secondary mb-1 min-h-[30px]">
                      Obrano
                    </h4>
                    <p className="text-xs font-metroRegular text-secondary60 mb-0">
                      Potvrdili ste narudžbu za branje povrća 14.9.2022. u 15:28
                      sati.
                    </p>
                  </div>
                  <div className="bg-gray rounded-sm p-3 text-center pt-[50px] relative">
                    <span className="block w-[80px] h-[80px] -top-[50px] left-0 right-0 mx-auto absolute">
                      <img
                        src="https://i.ibb.co/7WFtHX6/Group-97.png"
                        alt="category"
                        className="max-w-full"
                      />
                    </span>
                    <h4 className="text-lg md:text-xl font-metroSemibold text-secondary mb-1 min-h-[30px]">
                      Obrano
                    </h4>
                    <p className="text-xs font-metroRegular text-secondary60 mb-0">
                      Potvrdili ste narudžbu za branje povrća 14.9.2022. u 15:28
                      sati.
                    </p>
                  </div>
                  <div className="bg-gray rounded-sm p-3 text-center pt-[50px] relative">
                    <span className="block w-[80px] h-[80px] -top-[50px] left-0 right-0 mx-auto absolute">
                      <img
                        src="https://i.ibb.co/7WFtHX6/Group-97.png"
                        alt="category"
                        className="max-w-full"
                      />
                    </span>
                    <h4 className="text-lg md:text-xl font-metroSemibold text-secondary mb-1 min-h-[30px]">
                      Obrano
                    </h4>
                    <p className="text-xs font-metroRegular text-secondary60 mb-0">
                      Potvrdili ste narudžbu za branje povrća 14.9.2022. u 15:28
                      sati.
                    </p>
                  </div>
                  <div className="bg-gray rounded-sm p-3 text-center pt-[50px] relative">
                    <span className="block w-[80px] h-[80px] -top-[50px] left-0 right-0 mx-auto absolute">
                      <img
                        src="https://i.ibb.co/7WFtHX6/Group-97.png"
                        alt="category"
                        className="max-w-full"
                      />
                    </span>
                    <h4 className="text-lg md:text-xl font-metroSemibold text-secondary mb-1 min-h-[30px]">
                      Obrano
                    </h4>
                    <p className="text-xs font-metroRegular text-secondary60 mb-0">
                      Potvrdili ste narudžbu za branje povrća 14.9.2022. u 15:28
                      sati.
                    </p>
                  </div>
                </div>

                <div className="garden-information">
                  <div className="mb-5">
                    <PrimaryTitle heading="Osnovne informacije vrta" />
                  </div>
                  <ul className="space-y-2.5">
                    <GardenInfo type="Naziv vrta" value="Vrt za vikendicu" />
                    <GardenInfo type="OPG-ovac" value="OPG Kolar" />
                    <GardenInfo type="Datum kupnje" value="7. prosinac 2021." />
                  </ul>
                </div>
              </CardTwo>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default GardenAbout;
