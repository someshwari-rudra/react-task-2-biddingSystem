import { INPUT_ONCHANGE, INPUT_VALUE_RESET } from "../actions/ActionsTypes";

const initialValue = {
  inputValue: {
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    FourthInput: "",
    FifthInput: "",
    sixthInput: "",
  },
};
export const InputOnChange = (state = initialValue, { type, name, value }) => {
    switch (type) {
      case INPUT_ONCHANGE:
        return {
          ...state,
          inputValue: { ...state.inputValue, [name]: value },
        };
        case INPUT_VALUE_RESET:
            console.log("InputOnChange")
        return {
          ...state,
          inputValue: {[name]: 0 },
        };
      default:
        return state;
    }
}