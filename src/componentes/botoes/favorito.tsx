import React from 'react';
// import PropTypes from 'prop-types';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import "./favorito.css";

/**
 * @typedef { Object } BFavorito - Interface
 * 
 * @property { boolean } isFavorito - Indica se um elemento é favorito ou não 
 * 
 * @property { function } onClick - Função chamada quando clicar no botão
 */

interface BFavorito {
  isFavorito: boolean;
  onClick: () => void;
}

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 * 
 * Terá que tipar as propriedades se utilizar este componente
 * 
 * @param { BFavorito } props - As props do componente BotaoFavorito
 * 
 * @returns { JSX.Element } - Retorna um elemento JSX
 */

const BotaoFavorito: React.FC<BFavorito> = ({ isFavorito, onClick }) => {
  
  const Icon = isFavorito ? AiFillStar : AiOutlineStar;

  return (
    <div className="botao-favorito" onClick={onClick}>
      <Icon alt={"favorito"} size={25}/>
    </div>
  );
};

/*
No Typescript, o componente BotaoFavorito já possui uma interface que especifica a tipagem das props.
Assim, inserir o PropTypes será redundante nesse caso. 
*/

/* BotaoFavorito.propTypes = {
  isFavorito: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
*/

export default BotaoFavorito;
