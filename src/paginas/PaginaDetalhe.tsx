// import "./Detalhe.css";
// import BotaoFavorito from "../componentes/botoes/favorito";
// import CardEpisodio from "../componentes/episodios/card-episodio";

import { Link } from "react-router-dom";

/**
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 * Uso:
 * ``` <PaginaDetalhe /> ```
 *
 * @returns Página de detalhe
 */

const PaginaDetalhe: React.FC = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página em desenvolvimento</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Em breve.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" to="/">Volte para a Página Inicial</Link>
        </div>
      </div>
    </main>
  );
};

export default PaginaDetalhe;
