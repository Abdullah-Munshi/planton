import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiArrowSmLeft } from "react-icons/hi";
import HeaderGarden from "../components/HeaderGarden";
import Notification from "../components/Notification";
import { Container, CardTwo, PrimaryTitle } from "../components/UI";
import { notificationActions } from "../store/notification-slice";

const DUMMY_DATA = [
  {
    id: "id1",
    creationTime: "2023-03-25T13:15:00Z",
    type: "type1",
    title: "Vaše rajčice su spremne za branje",
    message:
      "Mario: Rajčice su spremne za branje. Molimo vas, potvrdite narudžbu kako bi mogli započeti",
    parcelId: "parcel1",
    read: true,
    imageUrl: "https://i.postimg.cc/VkBRYF8B/shopping-basket-3.png",
    images: ["image1a", "image1b"],
    deliveryMethods: [
      {
        id: "id1",
        activityId: "guid1",
        deliveryMethodId: 1,
        remark: "remark1",
        creationTime: "2023-03-25T13:15:00Z",
        deadline: "2023-03-27T13:15:00Z",
        title: "",
      },
      {
        id: "guid3",
        activityId: "guid1",
        deliveryMethodId: 2,
        remark: "remark2",
        creationTime: "2023-03-25T13:15:00Z",
        deadline: "2023-03-28T13:15:00Z",
        title: "",
      },
    ],
  },
  {
    id: "id2",
    creationTime: "2023-03-25T13:15:00Z",
    type: "type1",
    title: "Vaši krastavci su upravo zaliveni",
    message:
      "Mario: Želimo Vas obavijestiti da su vaši krastavci upravo zaliveni. ",
    parcelId: "parcel1",
    read: true,
    imageUrl: "https://i.postimg.cc/VkBRYF8B/shopping-basket-3.png",
    images: ["image1a", "image1b"],
    deliveryMethods: [
      {
        id: "guid2",
        activityId: "guid1",
        deliveryMethodId: 1,
        remark: "remark1",
        creationTime: "2023-03-25T13:15:00Z",
        deadline: "2023-03-27T13:15:00Z",
        title: "",
      },
      {
        id: "guid3",
        activityId: "guid1",
        deliveryMethodId: 2,
        remark: "remark2",
        creationTime: "2023-03-25T13:15:00Z",
        deadline: "2023-03-28T13:15:00Z",
        title: "",
      },
    ],
  },
];
const GardenNotification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notification.notification);
  useEffect(() => {
    const getNotificationData = async () => {
      const notifications = DUMMY_DATA.map((data) => {
        return {
          id: data.id,
          creationTime: data.creationTime,
          type: data.type,
          thumb: data.imageUrl,
          title: data.title,
          message: data.message,
        };
      });
      dispatch(notificationActions.showNotification(notifications));
    };

    getNotificationData();
  }, [dispatch]);

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
                <div className="mb-7">
                  <PrimaryTitle
                    heading="Posljednje notifikacije"
                    paragraph="Preko notifikacije održavajte obostranu komunikaciju s Vašim OPG-ovcem. Ukoliko imate pitanja vezana za Vaš vrt, pošaljite mu poruku i u što kraćem roku će pokušati odgovoriti.  "
                  />
                </div>
                <div className="latest-notification">
                  <ul className="space-y-[15px]">
                    {notifications !== null &&
                      notifications.map((notification) => (
                        <Notification
                          key={notification.id}
                          id={notification.id}
                          creationTime={notification.creationTime}
                          thumb={notification.thumb}
                          title={notification.title}
                          message={notification.message}
                          onClick={() =>
                            navigate(`${location.pathname}/${notification.id}`)
                          }
                        />
                      ))}
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

export default GardenNotification;
