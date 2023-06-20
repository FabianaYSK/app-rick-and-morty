import Filtros from "../componentes/personagens/filtros";
import GradePersonagens from "../componentes/personagens/grade-personagens";
import Paginacao from "../componentes/paginacao/paginacao";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */

const PaginaInicio: React.FC = () => {
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      <Paginacao />
      <GradePersonagens />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
