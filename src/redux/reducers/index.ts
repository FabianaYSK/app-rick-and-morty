import { Action } from "../actions/types";

const INITIAL_STATE = {
  personagem: [],
};

export function personagemReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case "FETCH_PERSONAGEM": {
      return {
        ...state,
        personagem: action.payload
      };
    }
    default: return state;
  }

}
