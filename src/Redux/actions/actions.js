import Bidding from "../../reusableComponents/Bidding";
import {
  COIN_RESET,
  ENABLE_NEXT_BID,
  GENERATE_COINS,
  GENRATEUSER,
  INPUT_ONCHANGE,
} from "./ActionsTypes";



export const generateUser = (userName) => (dispatch) => {
  dispatch({
    type: COIN_RESET,
    payload: 0,
  });
  dispatch({
    type: GENRATEUSER,
    payload: <Bidding />,
    name: userName,
  });
};

export const enableNextBid = () => {
  return {
    type: ENABLE_NEXT_BID,
  };
};

export const GenerateCoins = (number) => {
  return {
    type: GENERATE_COINS,
    payload: number,
  };
};
export const inputOnchange = (name, value) => {
  return {
    type: INPUT_ONCHANGE,
    name: name,
    value: value,
  };
};
