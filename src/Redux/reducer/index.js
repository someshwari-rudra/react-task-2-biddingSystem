import { combineReducers } from "redux";
import { enableNextBidReducer } from "./EnableNextBid";
import { generateCoinsReducer } from "./generateCoins";
import { generateUserReducer } from "./GenerateUser";
import { InputOnChange } from "./InputOnChange";

 export const RootReducer = combineReducers({
   generateUser: generateUserReducer,
   enableNextBid: enableNextBidReducer,
   generateCoinsReducer: generateCoinsReducer,
   InputOnChange: InputOnChange,
 });