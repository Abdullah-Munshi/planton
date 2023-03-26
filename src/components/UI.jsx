import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="px-5 max-w-[1880px] mx-auto basis-[100%] relative">
      {children}
    </div>
  );
};

export const CardOne = ({ children }) => {
  return <div className="bg-white p-5 border-sm">{children}</div>;
};

export const CardTwo = ({ children }) => {
  return <div className="bg-white p-5 lg:p-7 border-sm">{children}</div>;
};

export const PrimaryTitle = ({ heading, paragraph }) => {
  return (
    <>
      <h3 className="text-xl font-metroSemibold text-secondary mb-0">
        {heading}
      </h3>
      <p className="text-xs text-secondary60 mb-0">{paragraph}</p>
    </>
  );
};
