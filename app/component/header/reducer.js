import { SELECT_CITY } from "./actionType";

export default (state = {city:'上海'}, action) => {
    switch (action.type) {
        case SELECT_CITY: {
            return {...state,city:action.city};
        }
        default:
            return state;
    }
}