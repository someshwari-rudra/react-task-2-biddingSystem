import { FORM_SUBMIT } from "../actions/ActionsTypes";

const initialValue = {
    allInputValues:[]
}
export const FormSubmitReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
      case FORM_SUBMIT:
        return {
          ...state,
          allInputValues: [...state.allInputValues, payload],
        };
      default:
        return state;
    }
}