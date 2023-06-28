import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { favoritosReducer } from "./reducers";
import { IInitialState } from "./actions/types";

const combine = combineReducers({
    favoritosReducer: favoritosReducer
});

export const store = legacy_createStore(combine, applyMiddleware(thunk))

export type RootState = {
    favoritosReducer: IInitialState;
}