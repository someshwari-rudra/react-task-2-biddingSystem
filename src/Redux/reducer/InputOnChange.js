import { INPUT_ONCHANGE, INPUT_VALUE_RESET } from "../actions/ActionsTypes";

const initialValue = {
  inputValue: {
    input1_1: "",
    input1_2: "",
    input1_3: "",
    input1_4: "",
    input1_5: "",
    input1_6: "",
    input2_1: "",
    input2_2: "",
    input2_3: "",
    input2_4: "",
    input2_5: "",
    input2_6: "",
    input3_1: "",
    input3_2: "",
    input3_3: "",
    input3_4: "",
    input3_5: "",
    input3_6: "",
    input4_1: "",
    input4_2: "",
    input4_3: "",
    input4_4: "",
    input4_5: "",
    input4_6: "",
    input5_1: "",
    input5_2: "",
    input5_3: "",
    input5_4: "",
    input5_5: "",
    input5_6: "",
    input6_1: "",
    input6_2: "",
    input6_3: "",
    input6_4: "",
    input6_5: "",
    input6_6: "",
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
      return {
        ...state,
        inputValue: {...state.inputValue, [name]: value}
      };
    default:
      return state;
  }
};
