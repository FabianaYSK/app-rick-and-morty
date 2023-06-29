import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CardPersonagem from "../componentes/personagens/card-personagem";
import { useEffect } from "react";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 * O componente utiliza a store do Redux para buscar e atualizar a lista de personagens marcados como favoritos.
 * O componente utiliza o localStorage para persistir o estado dos favoritos na aplicação.
 *  
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */

const PaginaFavoritos: React.FC = () => {
  const dispatch = useDispatch();
  const { personagensFavoritos } = useSelector((state: RootState) => state.favoritosReducer);

  const handleFavorito = (id: number) => {
    dispatch({ type: 'REMOVE_PERSONAGEM_FAVORITO', payload: id });
  };

  const handleApagarFavoritos = () => {
    dispatch({ type: 'SET_PERSONAGEM_FAVORITO', payload: [] });
  }

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

  return (
    <div className="max-w-7xl w-full mx-auto px-8 text-black">
      <div className="flex justify-between items-center my-6">
        <h3 className="text-2xl font-medium text-indigo-900">Personagens Favoritos</h3>
        <button
          className={`cursor-pointer px-5 py-2 text-sm font-medium border-0 rounded-md ${personagensFavoritos.length === 0 ? "disabled" : "bg-rose-800 hover:bg-rose-700"} text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700`}
          disabled={personagensFavoritos.length === 0}
          onClick={handleApagarFavoritos}
        >
          Apagar favoritos
        </button>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {personagensFavoritos.map((personagem) => (
          <CardPersonagem
            key={personagem.id}
            personagem={personagem}
            favoritos={{ [personagem.id]: true }}
            handleFavorito={() => handleFavorito(personagem.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PaginaFavoritos;
