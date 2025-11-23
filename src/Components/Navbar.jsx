import { Link } from "react-router-dom";
import '../Styles/index.css'

export default function Navbar(){
  return (
    <nav>
      <div className="container nav-inner">
        <Link to="/">Início</Link>
        <Link to="/shop">Loja</Link>
        <Link to="/rules">Regras</Link>
        <Link to="/team">Equipe</Link>
      </div>
    </nav>
  );
}
