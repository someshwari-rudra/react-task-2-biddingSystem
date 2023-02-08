import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { inputFields } from "../DataInput/InputData";
import { FormSubmit } from "../Redux/actions/actions";
import TextField from "./TextField";

const SingleBid = ({ price, name }) => {
  const form2 = useRef();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    dispatch(FormSubmit(name, Object.values(data)));
    console.log(JSON.stringify(data, null, 9));
    reset();
  };
  const totalCoins = useSelector(
    (state) => state.generateCoinsReducer.totalCoins
  );
  return (
    <div className="col-md-4">
      <div className="m-2 p-2 bidbox">
        <div className="row p-2">
          <h3>{price === 0 ? "Free" : price}</h3>
          <form
            action=""
            className="row p-2"
            ref={form2}
            onSubmit={handleSubmit(onSubmit)}
          >
            {inputFields.map((input) => {
              return (
                <div className="col-md-6" key={input.id}>
                  <TextField {...input} register={register} errors={errors} />
                </div>
              );
            })}
            <div
              className={`${totalCoins >= price ? "enable" : "disableOverlay"}`}
            ></div>
            <div className="d-flex justify-content-center align-item-center ">
              <button className="btn btn-primary m-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleBid;
