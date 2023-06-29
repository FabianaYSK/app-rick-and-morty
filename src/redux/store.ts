import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { favoritosReducer } from "./reducers";
import { IInitialState } from "./actions/types";

// Combinar os reducers em um único
const combine = combineReducers({
    favoritosReducer: favoritosReducer
});

// Criar uma store com o reducer único e aplicar applyMiddleware
export const store = legacy_createStore(combine, applyMiddleware(thunk))

// Exportar um tipo de estado da store
export type RootState = {
    favoritosReducer: IInitialState;
}