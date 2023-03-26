import React from "react";

const ProductThumb = ({ classes, thumbLink, thumbAlter }) => {
  return (
    <div className={classes}>
      <img src={thumbLink} alt={thumbAlter} className="max-w-full" />
    </div>
  );
};

export default ProductThumb;
