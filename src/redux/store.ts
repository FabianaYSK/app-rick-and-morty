import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { personagemReducer } from "./reducers";

const combine = combineReducers({
    personagemReducer: personagemReducer
});

export const store = legacy_createStore(combine, applyMiddleware(thunk))

