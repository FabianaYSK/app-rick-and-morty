import axios from "axios";
// import { ThunkAction } from "redux-thunk";
// import { AnyAction } from 'redux';
// import { RootState } from "../store";

export const fetchPersonagens = () => {
    return async (dispatch) => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );
  
      dispatch({ type: 'FETCH_PERSONAGEM', payload: response.data });
    };
  };

