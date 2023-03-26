import React from "react";
import { BiSearch } from "react-icons/bi";
import { CardOne, PrimaryTitle } from "../components/UI";
import Header from "../components/Header";
import Notification from "../components/Notification";
import { Container } from "../components/UI";
import PackageHistory from "../components/PackageHistory";
import CategoryCard from "../components/CategoryCard";

const MyPlanton = () => {
  return (
    <div className="bg-wrapper-full min-h-screen min-w-full">
      <Header displayMenu={true} />
      <main>
        <div className="py-5 md:py-8">
          <Container>
            <div className="tripple-grid space-x-5">
              <div>
                <CardOne>
                  <div className="mb-5">
                    <h3 className="text-xl font-metroSemibold text-secondary mb-1">
                      Notifikacije
                    </h3>
                    <p className="text-xs text-secondary60 mb-0">
                      Vaše posljednje notifikacije su prikazane ispod:
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Notification />
                    <Notification />
                  </div>
                </CardOne>
              </div>
              <div>
                <CardOne>
                  <div className="flex justify-center space-x-11 py-8">
                    <button className="w-[100px] h-[70px] bg-gray rounded-sm text-secondary font-metroSemibold text-base relative px-3 pb-3 pt-[40px]">
                      <span className="block w-[60px] h-[60px] -top-[30px] left-0 right-0 mx-auto absolute">
                        <img
                          src="https://i.ibb.co/7WFtHX6/Group-97.png"
                          alt="category"
                          className="max-w-full"
                        />
                      </span>
                      Povrće
                    </button>
                    <button className="w-[100px] h-[70px] bg-gray rounded-sm text-secondary font-metroSemibold text-base relative px-3 pb-3 pt-[40px]">
                      <span className="block w-[60px] h-[60px] -top-[30px] left-0 right-0 mx-auto absolute">
                        <img
                          src="https://i.ibb.co/7WFtHX6/Group-97.png"
                          alt="category"
                          className="max-w-full"
                        />
                      </span>
                      Voće
                    </button>
                    <button className="w-[100px] h-[70px] bg-gray rounded-sm text-secondary font-metroSemibold text-base relative px-3 pb-3 pt-[40px]">
                      <span className="block w-[60px] h-[60px] -top-[30px] left-0 right-0 mx-auto absolute">
                        <img
                          src="https://i.ibb.co/7WFtHX6/Group-97.png"
                          alt="category"
                          className="max-w-full"
                        />
                      </span>
                      Meso
                    </button>
                    <button className="w-[100px] h-[70px] bg-gray rounded-sm text-secondary font-metroSemibold text-base relative px-3 pb-3 pt-[40px]">
                      <span className="block w-[60px] h-[60px] -top-[30px] left-0 right-0 mx-auto absolute">
                        <img
                          src="https://i.ibb.co/7WFtHX6/Group-97.png"
                          alt="category"
                          className="max-w-full"
                        />
                      </span>
                      Med
                    </button>
                  </div>

                  <div className="border-t-2 border-gray py-5">
                    <form className="flex relative max-w-[232px]">
                      <input
                        type="text"
                        placeholder="Pretraga..."
                        className="h-8 bg-gray text-xs text-secondary60 font-metroRegular w-full pl-3 pr-9 focus:outline-none border border-transparent focus:border-primary transition"
                      />

                      <button
                        type="submit"
                        className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center absolute right-0 top-0 bottom-0 text-white"
                      >
                        <BiSearch />
                      </button>
                    </form>
                  </div>

                  <div className="mb-5">
                    <PrimaryTitle
                      heading="Moji vrtovi"
                      paragraph="Za potpuni nadzor nad vrtom i upravljanje njime, pritisnite na odabrani vrt."
                    />
                  </div>

                  <ul className="space-y-[15px]">
                    <CategoryCard />
                    <CategoryCard />
                  </ul>
                </CardOne>
              </div>
              <div>
                <CardOne>
                  <div className="mb-5">
                    <h3 className="text-xl font-metroSemibold text-secondary mb-1">
                      Povijest paketa
                    </h3>
                    <p className="text-xs text-secondary60 mb-0">
                      Uvid u povijest vaših prethodnih narudžbi
                    </p>
                  </div>

                  <div className="space-y-4">
                    <PackageHistory />
                    <PackageHistory />
                    <PackageHistory />
                  </div>
                </CardOne>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default MyPlanton;
