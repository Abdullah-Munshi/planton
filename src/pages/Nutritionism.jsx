import React from "react";
import Header from "../components/Header";
import { CardOne, Container, PrimaryTitle } from "../components/UI";

const Nutritionism = () => {
  return (
    <div className="bg-wrapper-full min-h-screen min-w-full">
      <Header displayMenu={true} />
      <main>
        <div className="py-5 md:py-8">
          <Container>
            <div className="max-w-[850px] mx-auto">
              <CardOne>
                <div className="mb-5">
                  <PrimaryTitle
                    heading="Nutricionistički savjeti"
                    paragraph="U partnerstvu s nutricionizam.hr donosimo vam najzdravije, najbolje i najlakše recepte i savjete za vaše svježe povrće."
                  />
                </div>

                <ul>
                  <li className="group grid grid-cols-[60px_auto] gap-2.5 items-center p-2.5 rounded-sm  transition bg-gray hover:bg-primary cursor-pointer">
                    <div className="w-[60px] h-[60px] flex items-center justify-center p-2.5 bg-white rounded-sm ">
                      <img src="" alt="img" className="max-w-full" />
                    </div>
                    <div className="truncate">
                      <h5 className="text-sm font-metroMedium text-secondary mb-1.5 transition group-hover:text-white">
                        Biljni proteini
                      </h5>
                      <p className="text-sm text-secondary60 truncate mb-0 w-full transition group-hover:text-white">
                        Želimo Vas obavijestiti da su vaši krastavci upravo
                        zaliveni.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardOne>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default Nutritionism;
