import React from "react";

const TextField = (props) => {
  const { onchange, ...rest } = props;
  return (
    <input
      {...rest}
      onChange={onchange}
      className="form-control m-1 shadow-sm"
    />
  );
};

export default TextField;
