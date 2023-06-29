import React from "react";
import BotaoFavorito from "../botoes/favorito";
import { IPersonagemProps } from "../../redux/actions/types";

/**
 * Card para cada personagem dentro da grade de personagem.
 * O componente recebe as informações do personagem, as marcações de favoritos e uma função para lidar com o clique no botão de favorito.
 * @param { IPersonagemProps } props - As props do componente CardPersonagem
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const CardPersonagem: React.FC<IPersonagemProps> = ({
  personagem,
  favoritos,
  handleFavorito,
}) => {
  return (
    <div className="bg-white">
      <div key={personagem.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={personagem.image} alt={personagem.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="mt-4 flex justify-between">
          <span className="text-sm text-gray-700">{personagem.name}</span>
          <div className="text-sm font-medium text-gray-900">
            <BotaoFavorito
              isFavorito={favoritos[personagem.id]}
              onClick={() => handleFavorito(personagem.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPersonagem;