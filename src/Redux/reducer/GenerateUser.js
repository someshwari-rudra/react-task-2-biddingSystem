
import { GENRATEUSER } from "../actions/ActionsTypes";

const initailValue = {
    users: [],
    userNames:[],
    AllUsers: [],
    name: "",
    totalUserGenerated:0
}
export const generateUserReducer = (state=initailValue, { type, payload,name }) => {
    switch (type) {
        case GENRATEUSER:
            return {
                ...state,
                name: name,
                userNames: [...state.userNames,name],
                AllUsers:state.totalUserGenerated<6 && [...state.AllUsers ,payload],
                users: state.totalUserGenerated<6 && [payload],
                totalUserGenerated: state.totalUserGenerated<6 && state.totalUserGenerated+1 
            }
        default:
            return state;
    }
    
}
