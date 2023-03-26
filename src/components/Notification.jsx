import React from "react";
const Notification = ({ id, creationTime, thumb, title, message, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="group grid grid-cols-[60px_auto_100px] gap-2.5 items-center p-2.5 rounded-sm  transition bg-gray hover:bg-primary cursor-pointer"
    >
      <div className="w-[60px] h-[60px] flex items-center justify-center p-2.5 bg-white rounded-sm ">
        <img src={thumb} alt="img" className="max-w-full" />
      </div>
      <div className="truncate">
        <h5 className="text-sm font-metroMedium text-secondary mb-1.5 transition group-hover:text-white">
          {title}
        </h5>
        <p className="text-sm text-secondary60 truncate mb-0 w-full transition group-hover:text-white">
          {message}
        </p>
      </div>
      <div className="text-sm text-secondary60 font-metroBold ml-3.5 transition text-center group-hover:text-white">
        {new Date(creationTime).toLocaleDateString()}
      </div>
    </li>
  );
};

export default Notification;
