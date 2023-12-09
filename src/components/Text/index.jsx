import React from "react";

const sizeClasses = {
  txtInterBold18: "font-bold font-inter",
  txtInterRegular30: "font-inter font-normal",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtManropeBold20: "font-bold font-manrope",
  txtInterBold25: "font-bold font-inter",
  txtPoppinsBold30: "font-bold font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsRegular25: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtPoppinsRegular28: "font-normal font-poppins",
  txtPoppinsBold25: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
