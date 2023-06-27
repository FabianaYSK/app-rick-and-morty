import axios from "axios";

export const fetchPersonagens = (paginaAtual: number) => {
  return async (dispatch: any) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${paginaAtual}`
    );
    dispatch({ type: 'FETCH_PERSONAGEM', payload: response.data.results });
  };
};  
