import { Validation } from "../../utils/Validation";
import { ON_CHANGE } from "./ActionTypes";

export const onChange = (name, value, pattern) => (dispatch, getState) => {
  const state = getState();
  const formClone = state.FormReducer.form;
  const formErrorClone = state.FormReducer.formErrors;
  console.log(formClone[name]);
  console.log(name);
  formClone[name] = value;
  formErrorClone[name] = !Validation(name,pattern, value);
  console.log(formErrorClone[name]);
  dispatch({
    type: ON_CHANGE,
    updatedForm: formClone,
    updatedFormError: formErrorClone,
  });
};
