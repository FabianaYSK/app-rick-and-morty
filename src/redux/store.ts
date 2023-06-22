import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { personagemReducer } from "./reducers";

const combine = combineReducers({
    personagem: personagemReducer
});

export const store = legacy_createStore(combine, applyMiddleware(thunk))

// export type RootState = ReturnType<typeof combine>
