import { IGradePersonagensProps, IPersonagem } from "../../redux/actions/types";
import { useEffect, useState } from "react";
import CardPersonagem from "./card-personagem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

/**
 * Grade de personagens para a página inicial
 * O componente recebe a página atual e o termo de pesquisa.
 * O componente interagem com a store do Redux para buscar e atualizar a lista de personagens marcados como favoritos.
 * O componente utiliza o localStorage para persistir o estado dos favoritos na aplicação.
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const GradePersonagem: React.FC<IGradePersonagensProps> = ({
  paginaAtual,
  termoPesquisa,
}) => {
  const dispatch = useDispatch();
  const { personagensFavoritos } = useSelector((state: RootState) => state.favoritosReducer);
  const [personagens, setPersonagens] = useState<IPersonagem[]>([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${paginaAtual}`)
      .then((response) => response.json())
      .then((data) => setPersonagens(data.results));
  }, [paginaAtual]);

  const handleFavorito = (personagem: IPersonagem) => {
    if (isFavorite(personagem.id)) {
      dispatch({ type: 'REMOVE_PERSONAGEM_FAVORITO', payload: personagem.id });
    } else {
      dispatch({ type: 'ADD_PERSONAGEM_FAVORITO', payload: personagem });
    }
  };

  const isFavorite = (id: number) => {
    const personagemFavorito = personagensFavoritos.find(
      (personagem) => personagem.id === id
    );
    return personagemFavorito !== undefined;
  };

  const favoritosObjeto: Record<number, boolean> = {};
  personagensFavoritos.forEach((personagem) => {
    favoritosObjeto[personagem.id] = true;
  });

  useEffect(() => {
    const favoritosLocalStorage = localStorage.getItem('personagensFavoritos');
    if (favoritosLocalStorage) {
      dispatch({
        type: 'SET_PERSONAGEM_FAVORITO',
        payload: JSON.parse(favoritosLocalStorage),
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('personagensFavoritos', JSON.stringify(personagensFavoritos));
  }, [personagensFavoritos]); 

  const personagensFiltrados = personagens.filter((personagem) =>
    personagem.name.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <div className="grid grid-cols-5 gap-5">
      {personagensFiltrados.map((personagem) => (
        <CardPersonagem
          key={personagem.id}
          personagem={personagem}
          favoritos={favoritosObjeto} 
          handleFavorito={() => handleFavorito(personagem)}
        />
      ))}
    </div>
  );
};

export default GradePersonagem;
