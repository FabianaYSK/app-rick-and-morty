import { Link } from "react-router-dom";

/**
 * Cabeçalho que contém os links para navegar entre as páginas
 *
 * Uso: `<Cabecalho />`
 *
 * @returns {JSX.Element}
 */

const Cabecalho: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-300 w-full text-black py-6 px-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="m-0">App Rick and Morty</h2>
        <nav>
          <ul className="flex flex-row items-center">
            <li>
              <Link to="/" className="px-5 py-1 text-sm font-medium text-black hover:text-blue-600">Início</Link>
            </li>
            <li>
              <Link to="/favoritos" className="px-5 py-1 text-sm font-medium text-black hover:text-blue-600">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalhe" className="px-5 py-1 text-sm font-medium text-black hover:text-blue-600">Detalhes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  );
};

export default Cabecalho;
