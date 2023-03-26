import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { HiArrowSmLeft } from "react-icons/hi";
import Header from "../components/Header";
import { CardTwo, Container, PrimaryTitle } from "../components/UI";
import Button from "../components/Button";
import Input from "../components/Input";

const ProfileSetting = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-wrapper-full min-h-screen min-w-full">
      <Header />
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
                <div className="mb-3">
                  <PrimaryTitle heading="Postavke profila" />
                </div>

                <Tab.Group as="div">
                  <Tab.List className="text-sm font-metroRegular space-x-2.5 mb-5 lg:mb-8">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`min-w-[140px] lg:min-w-[170px] h-[35px] px-3 outline-none rounded-sm ${
                            selected
                              ? "bg-primary text-white"
                              : "bg-gray text-secondary"
                          }`}
                        >
                          Moje informacije
                        </button>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={`min-w-[140px] lg:min-w-[170px] h-[35px] px-3 outline-none rounded-sm ${
                            selected
                              ? "bg-primary text-white"
                              : "bg-gray text-secondary"
                          }`}
                        >
                          Notifikacije
                        </button>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel as="div">
                      <form className="grid lg:grid-cols-2 gap-5 mb-12">
                        <div className="space-y-4 lg:space-y-2.5">
                          <div className="input-grid-1 two items-center">
                            <label
                              htmlFor="username"
                              className="mb-0 text-left  md:text-right text-sm text-secondary60 font-metroMedium"
                            >
                              Ime i prezime
                            </label>
                            <Input type="text" id="username" />
                          </div>
                          <div className="input-grid-1 two items-center">
                            <label
                              htmlFor="username"
                              className="mb-0 text-left  md:text-right text-sm text-secondary60 font-metroMedium"
                            >
                              Email
                            </label>
                            <Input type="email" id="username" />
                          </div>
                          <div className="input-grid-1 two items-center">
                            <label
                              htmlFor="username"
                              className="mb-0 text-left  md:text-right text-sm text-secondary60 font-metroMedium"
                            >
                              Telefon
                            </label>
                            <Input type="text" id="username" />
                          </div>
                          <div className="input-grid-1 two items-center">
                            <label
                              htmlFor="username"
                              className="mb-0 text-left  md:text-right text-sm text-secondary60 font-metroMedium"
                            >
                              OIB
                            </label>
                            <Input type="text" id="username" />
                          </div>
                          <div className="input-grid-1 two items-center">
                            <label
                              htmlFor="username"
                              className="mb-0 text-left  md:text-right text-sm text-secondary60 font-metroMedium"
                            >
                              Država
                            </label>
                            <Input type="text" id="username" />
                          </div>
                          <div className="input-grid-1 two items-center">
                            <label
                              htmlFor="username"
                              className="mb-0 text-left  md:text-right text-sm text-secondary60 font-metroMedium"
                            >
                              Županija
                            </label>
                            <Input type="text" id="username" />
                          </div>
                          <div className="input-grid-1 two items-center">
                            <label
                              htmlFor="username"
                              className="mb-0 text-left  md:text-right text-sm text-secondary60 font-metroMedium"
                            >
                              Poštanski broj
                            </label>
                            <Input type="text" id="username" />
                          </div>
                          <div className="input-grid-1 two items-center">
                            <label
                              htmlFor="username"
                              className="mb-0 text-left  md:text-right text-sm text-secondary60 font-metroMedium"
                            >
                              Grad
                            </label>
                            <Input type="text" id="username" />
                          </div>
                          <div className="input-grid-1 two items-center">
                            <label
                              htmlFor="username"
                              className="mb-0 text-left  md:text-right text-sm text-secondary60 font-metroMedium"
                            >
                              Ulica i broj
                            </label>
                            <Input type="text" id="username" />
                          </div>
                        </div>
                        <div className="flex justify-start md:justify-end">
                          <Button>Spremi promjene</Button>
                        </div>
                      </form>

                      <div className="flex justify-center">
                        <Button variant="danger" width="w-[140px]">
                          Odjavi se
                        </Button>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel as="div">Content 2</Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </CardTwo>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default ProfileSetting;
