import React, { Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import {  useSelector } from "react-redux";
import { inputFields } from "../DataInput/InputData";
import { SingleUser6bids } from "../DataInput/SingleUser6bids";
// import { inputOnchange } from "../Redux/actions/actions";
import TextField from "./TextField";

const SingleUserBid = () => {
  const form2 = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 9));
  };
  const inputValue = useSelector((state) => state.InputOnChange.inputValue);
  const totalCoins = useSelector(
    (state) => state.generateCoinsReducer.totalCoins
  );
  // const dispatch = useDispatch();
  // const handleOnchange = (e) => [
  //   dispatch(inputOnchange(e.target.name, e.target.value)), ///ye code imporvoed h uska but problkem
  // ];
  console.log("inputValue", inputValue);
  return (
    <>
      {SingleUser6bids.map((item) => {
        const { id, price } = item;
        return (
          <div className="col-md-4" key={id}>
            <div
              className={`m-2 p-2 bidbox ${
                totalCoins >= price ? "enable" : "disable"
              }`}
            >
              <div className="row p-2">
                <h3>{price === 0 ? "Free" : price}</h3>
                <form action="" className="row p-2" ref={form2} onSubmit={handleSubmit(onSubmit)}>
                  {inputFields.map((input) => {
                    return (
                      <div className="col-md-6" key={input.id}>
                        <TextField
                          {...input}
                          register={register}
                          errors={errors}
                        />
                      </div>
                    );
                  })}
                  <div
                    className={`${
                      totalCoins >= price ? "enable" : "disableOverlay"
                    }`}
                  ></div>
                  <div className="d-flex justify-content-center align-item-center ">
                    <button className="btn btn-primary m-2">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SingleUserBid;
