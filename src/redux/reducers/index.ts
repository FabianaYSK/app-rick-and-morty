import { IActionFavoritos, IInitialState, IPersonagem } from "../actions/types";

const INITIAL_STATE: IInitialState = {
  favoritos: [],
  personagensFavoritos: [],
};

export const favoritosReducer = (state = INITIAL_STATE, action: IActionFavoritos) => {
  switch (action.type) {
    case 'SET_PERSONAGEM_FAVORITO':
      return {
        ...state,
        personagensFavoritos: action.payload,
      };
      case 'ADD_PERSONAGEM_FAVORITO':
      return {
        ...state,
        personagensFavoritos: [...state.personagensFavoritos, action.payload],
      };
    case 'REMOVE_PERSONAGEM_FAVORITO':
      return {
        ...state,
        personagensFavoritos: state.personagensFavoritos.filter(
          (personagem: IPersonagem) => personagem.id !== action.payload
        ),
      };
    default:
      return state;
  }
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