import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Users } from "../DataInput/Users";
import { FormSubmit, inputOnchange } from "../Redux/actions/actions";
import TextField from "./TextField";

const SingleUser = () => {
  const [formData, setFormData] = useState({});
  const form1 = useRef();
  const form2 = useRef();
  const form3 = useRef();
  const form4 = useRef();
  const form5 = useRef();
  const form6 = useRef();
  const {
    register: registerFirstField,
    handleSubmit: handleFirstFormSubmit,
    formState: { errors: errorsFirst },
    reset: resetFirst,
  } = useForm();
  const {
    register: registerSecondField,
    handleSubmit: handleSecondFormSubmit,
    formState: { errors: errorsSecond },
    reset: resetSecond,
  } = useForm();
  const {
    register: registerThirdField,
    handleSubmit: handleThirdFormSubmit,
    formState: { errors: errorsThird },
    reset: resetThird,
  } = useForm();
  const {
    register: registerFourthField,
    handleSubmit: handleFourthFormSubmit,
    formState: { errors: errorsFourth },
    reset: resetFourth,
  } = useForm();
  const {
    register: registerFifthField,
    handleSubmit: handleFifthFormSubmit,
    formState: { errors: errorsFifth },
    reset: resetFifth,
  } = useForm();
  const {
    register: registerSixthField,
    handleSubmit: handleSixthFormSubmit,
    formState: { errors: errorsSixth },
    reset: resetSixth,
  } = useForm();

  const totalCoins = useSelector(
    (state) => state.generateCoinsReducer.totalCoins
  );
  const allInputValues = useSelector(
    (state) => state.FormSubmitReducer.allInputValues
  );
  console.log("allInputValues", allInputValues);
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    dispatch(inputOnchange(e.target.name, e.target.value));
  };
  const onSubmit = (data) => {
    setFormData(data);
    console.log("daataaa0", formData);
    console.log("onSubmit", data);
    dispatch(FormSubmit(data));
    resetFirst();
    resetSecond();
    resetThird();
    resetFourth();
    resetFifth();
    resetSixth();
  };
  return (
    <div>
      {Users.map((item) => {
        const {
          id,
          FirstBid,
          SecondBid,
          ThirdBid,
          FourthBid,
          FifthBid,
          SixthBid,
        } = item;
        return (
          <div key={id}>
            <div className="container">
              <div className="row g-2">
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox`}>
                    <div className="row p-2">
                      <h3>{FirstBid.price === 0 && "Free"}</h3>
                      <form
                        action=""
                        className="row p-2"
                        ref={form1}
                        onSubmit={handleFirstFormSubmit(onSubmit)}
                      >
                        {FirstBid.Input.map((input) => {
                          return (
                            <div className="col-md-6" key={input.id}>
                              <TextField
                                // onChange={handleOnchange}
                                errors={errorsFirst}
                                register={registerFirstField}
                                {...input}
                              />
                            </div>
                          );
                        })}

                        <div
                          className={`${
                            totalCoins >= FirstBid.price
                              ? "enable"
                              : "disableOverlay"
                          }`}
                        ></div>
                        <div className="d-flex justify-content-center align-item-center ">
                          <button className="btn btn-primary m-2" type="submit">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox `}>
                    <div className="row p-2">
                      <h3>{SecondBid.price}</h3>
                      <form
                        action=""
                        className="row p-2"
                        ref={form2}
                        onSubmit={handleSecondFormSubmit(onSubmit)}
                      >
                        {SecondBid.Input.map((input) => {
                          return (
                            <div className="col-md-6" key={input.id}>
                              <TextField
                                errors={errorsSecond}
                                register={registerSecondField}
                                {...input}
                              />
                            </div>
                          );
                        })}
                        <div
                          className={`${
                            totalCoins >= SecondBid.price
                              ? "enable"
                              : "disableOverlay"
                          }`}
                        ></div>
                        <div className="d-flex justify-content-center align-item-center ">
                          <button className="btn btn-primary m-2">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox`}>
                    <div className="row p-2">
                      <h3>{ThirdBid.price}</h3>
                      <form
                        action=""
                        className="row p-2"
                        ref={form3}
                        onSubmit={handleThirdFormSubmit(onSubmit)}
                      >
                        {ThirdBid.Input.map((input) => {
                          return (
                            <div className="col-md-6" key={input.id}>
                              <TextField
                                {...input}
                                errors={errorsThird}
                                register={registerThirdField}
                                onchange={handleOnchange}
                              />
                            </div>
                          );
                        })}
                        <div
                          className={`${
                            totalCoins >= ThirdBid.price
                              ? "enable"
                              : "disableOverlay"
                          }`}
                        ></div>
                        <div className="d-flex justify-content-center align-item-center ">
                          <button className="btn btn-primary m-2" type="submit">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox`}>
                    <div className="row p-2">
                      <h3>{FourthBid.price}</h3>
                      <form
                        action=""
                        className="row p-2"
                        ref={form4}
                        onSubmit={handleFourthFormSubmit(onSubmit)}
                      >
                        {FourthBid.Input.map((input) => {
                          return (
                            <div className="col-md-6" key={input.id}>
                              <TextField
                                {...input}
                                errors={errorsFourth}
                                register={registerFourthField}
                              />
                            </div>
                          );
                        })}
                        <div
                          className={`${
                            totalCoins >= FourthBid.price
                              ? "enable"
                              : "disableOverlay"
                          }`}
                        ></div>
                        <div className="d-flex justify-content-center align-item-center ">
                          <button className="btn btn-primary m-2">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox`}>
                    <div className="row p-2">
                      <h3>{FifthBid.price}</h3>
                      <form
                        action=""
                        className="row p-2"
                        ref={form5}
                        onSubmit={handleFifthFormSubmit(onSubmit)}
                      >
                        {FifthBid.Input.map((input) => {
                          return (
                            <div className="col-md-6" key={input.id}>
                              <TextField
                                {...input}
                                errors={errorsFifth}
                                register={registerFifthField}
                              />
                            </div>
                          );
                        })}
                        <div
                          className={`${
                            totalCoins >= FifthBid.price
                              ? "enable"
                              : "disableOverlay"
                          }`}
                        ></div>
                        <div className="d-flex justify-content-center align-item-center ">
                          <button className="btn btn-primary m-2">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox`}>
                    <div className="row p-2">
                      <h3>{SixthBid.price}</h3>
                      <form
                        action=""
                        className="row p-2"
                        ref={form6}
                        onSubmit={handleSixthFormSubmit(onSubmit)}
                      >
                        {SixthBid.Input.map((input) => {
                          return (
                            <div className="col-md-6" key={input.id}>
                              <TextField
                                {...input}
                                errors={errorsSixth}
                                register={registerSixthField}
                              />
                            </div>
                          );
                        })}
                        <div
                          className={`${
                            totalCoins >= SixthBid.price
                              ? "enable"
                              : "disableOverlay"
                          }`}
                        ></div>
                        <div className="d-flex justify-content-center align-item-center ">
                          <button className="btn btn-primary m-2">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleUser;
