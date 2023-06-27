// import { Action } from "../actions/types";
import { IActionFavoritos, IInitialState } from "../actions/types";

const INITIAL_STATE: IInitialState = {
  favoritos: {},
};

/* export function personagemReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case "FETCH_PERSONAGEM": {
      return {
        ...state,
        personagem: action.payload
      };
    }
    default: return state;
  }
} */

export const favoritosReducer = (state = INITIAL_STATE, action: IActionFavoritos) => {
  switch (action.type) {
    case 'SET_FAVORITO':
      return {
        ...state,
        favoritos: action.payload,
      };
    case 'HANDLE_FAVORITO':
      return {
        ...state,
        favoritos: {
          ...state.favoritos,
          [action.payload]: !state.favoritos[action.payload],
        },
      };
    default:
      return state;
  }
};

