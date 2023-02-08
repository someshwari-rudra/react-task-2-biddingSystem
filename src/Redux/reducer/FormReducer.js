import { ON_CHANGE } from "../actions/ActionTypes";

const initailValue = {
  form: {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  },
  formErrors: {},
};
export const FormReducer = (state = initailValue, action) => {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        form: action.updatedForm,
        formError: action.updatedFormError,
      };
    default:
      return state;
  }
};
