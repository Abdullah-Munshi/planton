import React from "react";
import { IoMdAdd } from "react-icons/io";
import { CardTwo, PrimaryTitle } from "../components/UI";
const Chat = () => {
  return (
    <div className="bg-white relative max-w-[850px] mx-auto border-sm">
      <div className="h-[calc(100vh-154px)] xl:h-[calc(100vh-124px)] overflow-y-scroll pb-12">
        <CardTwo>
          <div className="mb-7 text-center max-w-[310px] mx-auto">
            <PrimaryTitle
              heading="Mirkovac (Baranja)"
              paragraph="Želimo Vas obavijestiti da su Vaše rajčice sazrijele. Najavite dostavu..."
            />
          </div>
          <div className="chat-wrapper grid grid-cols-1 space-y-3">
            <div className="chat-row w-full md:w-3/4 place-self-start">
              <div className="chat-images grid grid-cols-3 gap-2.5 mb-1.5 bg-gray font-metroMedium px-5 py-4 rounded-sm rounded-b-none">
                <div className="relative bg-white">
                  <img src="" alt="img" className="aspect-square rounded-sm" />
                </div>
                <div className="relative bg-white">
                  <img src="" alt="img" className="aspect-square rounded-sm" />
                </div>
                <div className="relative bg-white after:content-0 after:w-full after:h-full after:bg-[rgba(0,0,0,.3)] after:rounded-sm after:absolute after:top-0 after:left-0">
                  <img src="" alt="img" className="aspect-square rounded-sm" />
                  <span className="absolute top-0 right-0 bottom-0 left-0 m-auto z-10 inline-block w-7 h-7 flex items-center justify-center">
                    +2
                  </span>
                </div>
              </div>
              <div className="chat-content bg-gray text-sm text-secondary60 font-metroMedium px-5 py-4 rounded-sm rounded-b-none">
                Poštovani, želimo vas obavijestiti da su vaše rajčice spremne za
                branje i da možete potvrditi kada želite da se uberu i da ih
                pošaljemo Vama.
              </div>
              <p className="text-xs text-secondary60 font-metroRegular mb-0 mt-1.5">
                Prije 8 sati · OPG Kolar
              </p>
            </div>

            <div className="chat-row w-full md:w-3/4 place-self-end">
              <div className="chat-content  bg-primary text-sm text-white font-metroMedium px-5 py-4 rounded-sm rounded-br-none">
                Poštovani, želimo vas obavijestiti da su vaše rajčice spremne za
                branje i da možete potvrditi kada želite da se uberu i da ih
                pošaljemo Vama.
              </div>
              <p className="text-xs text-secondary60 font-metroRegular mb-0 mt-1.5 text-end">
                Prije 8 sati · OPG Kolar
              </p>
            </div>
            <div className="chat-row w-full md:w-3/4 place-self-start">
              <div className="chat-content bg-gray text-sm text-secondary60 font-metroMedium px-5 py-4 rounded-sm rounded-b-none">
                Poštovani, želimo vas obavijestiti da su vaše rajčice spremne za
                branje i da možete potvrditi kada želite da se uberu i da ih
                pošaljemo Vama.
              </div>
              <p className="text-xs text-secondary60 font-metroRegular mb-0 mt-1.5">
                Prije 8 sati · OPG Kolar
              </p>
            </div>

            <div className="chat-row w-full md:w-3/4 place-self-end">
              <div className="chat-content  bg-primary text-sm text-white font-metroMedium px-5 py-4 rounded-sm rounded-br-none">
                Poštovani, želimo vas obavijestiti da su vaše rajčice spremne za
                branje i da možete potvrditi kada želite da se uberu i da ih
                pošaljemo Vama.
              </div>
              <p className="text-xs text-secondary60 font-metroRegular mb-0 mt-1.5 text-end">
                Prije 8 sati · OPG Kolar
              </p>
            </div>
            <div className="chat-row w-full md:w-3/4 place-self-start">
              <div className="chat-content bg-gray text-sm text-secondary60 font-metroMedium px-5 py-4 rounded-sm rounded-b-none">
                Poštovani, želimo vas obavijestiti da su vaše rajčice spremne za
                branje i da možete potvrditi kada želite da se uberu i da ih
                pošaljemo Vama.
              </div>
              <p className="text-xs text-secondary60 font-metroRegular mb-0 mt-1.5">
                Prije 8 sati · OPG Kolar
              </p>
            </div>

            <div className="chat-row w-full md:w-3/4 place-self-end">
              <div className="chat-content  bg-primary text-sm text-white font-metroMedium px-5 py-4 rounded-sm rounded-br-none">
                Poštovani, želimo vas obavijestiti da su vaše rajčice spremne za
                branje i da možete potvrditi kada želite da se uberu i da ih
                pošaljemo Vama.
              </div>
              <p className="text-xs text-secondary60 font-metroRegular mb-0 mt-1.5 text-end">
                Prije 8 sati · OPG Kolar
              </p>
            </div>
            <div className="chat-row w-full md:w-3/4 place-self-start">
              <div className="chat-content bg-gray text-sm text-secondary60 font-metroMedium px-5 py-4 rounded-sm rounded-b-none">
                Poštovani, želimo vas obavijestiti da su vaše rajčice spremne za
                branje i da možete potvrditi kada želite da se uberu i da ih
                pošaljemo Vama.
              </div>
              <p className="text-xs text-secondary60 font-metroRegular mb-0 mt-1.5">
                Prije 8 sati · OPG Kolar
              </p>
            </div>

            <div className="chat-row w-full md:w-3/4 place-self-end">
              <div className="chat-content  bg-primary text-sm text-white font-metroMedium px-5 py-4 rounded-sm rounded-br-none">
                Poštovani, želimo vas obavijestiti da su vaše rajčice spremne za
                branje i da možete potvrditi kada želite da se uberu i da ih
                pošaljemo Vama.
              </div>
              <p className="text-xs text-secondary60 font-metroRegular mb-0 mt-1.5 text-end">
                Prije 8 sati · OPG Kolar
              </p>
            </div>
          </div>
        </CardTwo>
      </div>

      <div className="bg-white h-[54px] absolute bottom-0 w-full left-0 right-0 z-10 px-5 lg:px-7">
        <div className="grid grid-cols-[34px_auto] items-center px-4 py-2.5 bg-gray">
          <label
            htmlFor="addFile"
            className="w-[34px] h-[34px] bg-white rounded-sm relative flex items-center justify-center cursor-pointer"
          >
            <input
              type="file"
              name=""
              id="addFile"
              className="absolute max-w-0 max-h-0"
            />
            <IoMdAdd />
          </label>
          <input
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Poruka..."
            className="px-3 bg-transparent outline-none text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
