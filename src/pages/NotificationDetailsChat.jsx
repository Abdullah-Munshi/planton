import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Chat from "../components/Chat";
import HeaderGarden from "../components/HeaderGarden";
import { Container, CardTwo, PrimaryTitle } from "../components/UI";
const NotificationDetailsChat = () => {
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
            <Chat />
          </Container>
        </div>
      </main>
    </div>
  );
};

export default NotificationDetailsChat;
