/**
 * @typedef { Object } IBotaoFavorito - Interface
 * @property { boolean } isFavorito - Indica se um elemento é favorito ou não 
 * @property { function } onClick - Função chamada quando clicar no botão
 */

export interface IBotaoFavorito {
  isFavorito: boolean;
  onClick: () => void;
}

/**
 * @typedef { Object } IPersonagem - Interface
 * @property { number } id - Indica o id do personagem 
 * @property { string } name - Indica o nome do personagem 
 * @property { string } image - Indica a url da imagem do personagem 
*/
export interface IPersonagem {
  id: number;
  name: string;
  image: string;
}

/**
 * @typedef { Object } IPersonagemProps - Interface
 * @property { IPersonagem } personagem - Indica o personagem 
 * @property { Record<number, boolean> } favoritos - Indica os personagens favoritos 
 * @property { function } handleFavoritoClick - Função chamada quando clicar no botão
*/
export interface IPersonagemProps {
  personagem: IPersonagem;
  favoritos: Record<number, boolean>;
  handleFavorito: (id: number) => void;
}

/**
 * @typedef { Object } IGradePersonagensProps - Interface
 * @property { number } paginaAtual - Indica a página atual
 * @property { string } termoPesquisa - Indica o termo de pesquisa atual  
*/
export interface IGradePersonagensProps {
  paginaAtual: number;
  termoPesquisa: string;
}

/**
 * @typedef { Object } IFiltrosProps - Interface
 * @property { string } termoPesquisa - Indica o termo de pesquisa atual 
 * @property { function } setTermoPesquisa - Função chamada para atualizar o termo de pesquisa
 */
export interface IFiltrosProps {
  termoPesquisa: string;
  setTermoPesquisa: (value: string) => void;
}

/**
 * @typedef { Object } IPaginacaoProps - Interface
 * @property { number } paginaAtual - Indica a página atual 
 * @property { function } handlePagina - Função chamada para atualizar a página
 */
export interface IPaginacaoProps {
  paginaAtual: number;
  handlePagina: (novaPagina: number) => void;
}

export interface ISetFavoritoAction {
  type: 'SET_FAVORITO';
  payload: Record<number, boolean>;
}

export interface IHandleFavoritoAction {
  type: 'HANDLE_FAVORITO';
  payload: number;
}

export type IActionFavoritos = ISetFavoritoAction | IHandleFavoritoAction;

export interface IInitialState {
  favoritos: Record<number, boolean>;
}