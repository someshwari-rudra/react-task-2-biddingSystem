import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Users } from '../DataInput/Users';
import { inputOnchange } from '../Redux/actions/actions';
import TextField from './TextField';

const SingleUser = () => {
      const inputValue = useSelector((state) => state.InputOnChange.inputValue);
     const totalCoins = useSelector(
       (state) => state.generateCoinsReducer.totalCoins
     );
    const dispatch = useDispatch();
    const handleOnchange = (e) => [
      dispatch(inputOnchange(e.target.name, e.target.value)),
    ];
    console.log("inputValue", inputValue);
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

                      {FirstBid.Input.map((input) => {
                        return (
                          <div className="col-md-6" key={input.id}>
                            <TextField {...input} onchange={handleOnchange} />
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
                        <button className="btn btn-primary m-2">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox `}>
                    <div className="row p-2">
                      <h3>{SecondBid.price}</h3>

                      {SecondBid.Input.map((input) => {
                        return (
                          <div className="col-md-6" key={input.id}>
                            <TextField {...input} onchange={handleOnchange} />
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
                        <button className="btn btn-primary m-2">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox`}>
                    <div className="row p-2">
                      <h3>{ThirdBid.price}</h3>

                      {ThirdBid.Input.map((input) => {
                        return (
                          <div className="col-md-6" key={input.id}>
                            <TextField {...input} onchange={handleOnchange} />
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
                        <button className="btn btn-primary m-2">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox`}>
                    <div className="row p-2">
                      <h3>{FourthBid.price}</h3>

                      {FourthBid.Input.map((input) => {
                        return (
                          <div className="col-md-6" key={input.id}>
                            <TextField {...input} onchange={handleOnchange} />
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
                        <button className="btn btn-primary m-2">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox`}>
                    <div className="row p-2">
                      <h3>{FifthBid.price}</h3>

                      {FifthBid.Input.map((input) => {
                        return (
                          <div className="col-md-6" key={input.id}>
                            <TextField {...input} onchange={handleOnchange} />
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
                        <button className="btn btn-primary m-2">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`m-2 p-2 bidbox`}>
                    <div className="row p-2">
                      <h3>{SixthBid.price}</h3>
                      {SixthBid.Input.map((input) => {
                        return (
                          <div className="col-md-6" key={input.id}>
                            <TextField {...input} onchange={handleOnchange} />
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
                        <button className="btn btn-primary m-2">Submit</button>
                      </div>
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
}

export default SingleUser