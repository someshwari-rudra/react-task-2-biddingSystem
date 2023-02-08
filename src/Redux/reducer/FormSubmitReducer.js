import { FORM_SUBMIT } from "../actions/ActionsTypes";

const initialValue = {
  user: [],
  allInputValues: [],
};
export const FormSubmitReducer = (
  state = initialValue,
  { type, name, data }
) => {
  switch (type) {
    case FORM_SUBMIT:
      const existingUser = state.user.find((obj) => obj[name]);
      if (existingUser) {
        return (
          {
            ...state,
            user: state.user.map((obj) => {
              if (obj[name]) {
                return [...state.user, {[name]: data} ] ;
              }
              return obj;
            }),
            allInputValues: [...state.allInputValues, data],
          }
        );
      } else {
        return {
          ...state,
          user: [...state.user, { [name]: data }],
          allInputValues: [...state.allInputValues, data],
        };
      }
    // return {
    //   ...state,
    //   user: [...state.user,  {[name]:data}],
    //   allInputValues: [...state.allInputValues, data],
    // };
    default:
      return state;
  }
};
