import GradePersonagens from "../componentes/personagens/grade-personagens";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */

const PaginaFavoritos: React.FC = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-8 text-black">
      <div className="flex justify-between items-center my-6">
        <h3 className="text-lg font-medium">Personagens Favoritos</h3>
        <button className="cursor-pointer px-5 py-2 text-sm font-medium border-0 rounded-md bg-red-800 text-white">Test Button</button>
      </div>
      <GradePersonagens paginaAtual={0} termoPesquisa={""} />
    </div>
  );
};

export default PaginaFavoritos;
