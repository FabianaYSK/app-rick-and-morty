import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CardPersonagem from "../componentes/personagens/card-personagem";
import { useEffect } from "react";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
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
        <h3 className="text-lg font-medium">Personagens Favoritos</h3>
        <button className="cursor-pointer px-5 py-2 text-sm font-medium border-0 rounded-md bg-red-800 text-white">Apagar favoritos</button> 
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
