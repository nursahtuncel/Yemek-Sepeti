import { combineReducers, createStore, applyMiddleware } from "redux";
import restorantsReducer from "./reducers/restorant";
import basketReducer from "./reducers/basket";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  restorant: restorantsReducer,
  basket: basketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
