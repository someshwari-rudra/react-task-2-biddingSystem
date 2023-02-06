import { COIN_RESET, GENERATE_COINS } from "../actions/ActionsTypes"

const initailValue = {
    coins: [],
    totalCoins: 0,

}
export const generateCoinsReducer = (state = initailValue, { type, payload }) => {
    switch (type) {
      case GENERATE_COINS:
        return {
          ...state,
          coins: [...state.coins, state.coins+payload],
          totalCoins: payload,
        };
      case COIN_RESET:
        return {
          ...state,
          totalCoins: payload,
        };
      default:
        return state;
    }
}