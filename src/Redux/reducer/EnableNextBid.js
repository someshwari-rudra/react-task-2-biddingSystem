import SingleBid from "../../reusableComponents/SingleBid";
import { ENABLE_NEXT_BID } from "../actions/ActionsTypes";

const singlebid = [<SingleBid />],
  repeateSingle6Times = Array.from({ length: 6 }, () => singlebid[0]);
const initialState = {
  SingleBid: repeateSingle6Times,
  currentIndex: 0,
};
export const enableNextBidReducer = (state = initialState, { type }) => {
  switch (type) {
    case ENABLE_NEXT_BID:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    default:
      return state;
  }
};
