import React from "react";
import { useSelector } from "react-redux";

const TextField = (props) => {
  const inputValue = useSelector((state) => state.InputOnChange.inputValue)
  const { onchange, name, type } = props;
  console.log(inputValue  )
  console.log()
  return (
    <input
      name={name}
      type={type}
      value={inputValue[name]}
      onChange={onchange}
      className="form-control m-1 shadow-sm"
    />
  );
};

export default TextField;
