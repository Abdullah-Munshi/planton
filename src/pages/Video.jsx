import React from "react";
import HeaderGarden from "../components/HeaderGarden";
const Video = () => {
  return (
    <div className="bg-wrapper-full min-h-screen min-w-full">
      <HeaderGarden displayMenu={true} />
      <main>
        <div className="py-5 md:py-8">
          <div className="text-center text-2xl">Video Player Here</div>
        </div>
      </main>
    </div>
  );
};

export default Video;
