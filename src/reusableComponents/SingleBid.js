import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputFields } from "../DataInput/InputData";
import { inputOnchange } from "../Redux/actions/actions";
import TextField from "./TextField";

const SingleBid = () => {
  const inputValue = useSelector((state) => state.InputOnChange.inputValue);
  const dispatch = useDispatch();
  const handleOnchange = (e) => [
    dispatch(inputOnchange(e.target.name, e.target.value)),
  ];
  console.log("inputValue", inputValue);
  return (
    <div className="col-md-4">
      <div className="m-2 p-2 bidbox">
        <div className="row p-2">
          <h1>free</h1>
          {inputFields.map((input) => {
            return (
              <div className="col-md-6" key={input.id}>
                <TextField {...input}  onchange={handleOnchange} />
              </div>
            );
          })}
          <div className="d-flex justify-content-center align-item-center ">
            <button className="btn btn-primary m-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBid;
