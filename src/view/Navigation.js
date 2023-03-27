import {Link, Outlet} from "react-router-dom";
import logo from '../img/logoG320.png'

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light border border-bottom" style={{backgroundColor: "#e3f2fd",}}>
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Guinee+" style={{height: '36px', borderRadius:5}} />
                    </Link>
                    <form className="d-flex ms-sm-2" role="search">
                        <div className="input-group">
                            <input className="form-control" type="text" aria-label="Search"
                                   placeholder="Quel service cherchez-vous aujourd'hui"
                            />
                            <button className="btn btn-dark" type="submit"><i className="bi bi-search"></i></button>
                        </div>
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link to="/accueil" className="nav-link">Business</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/decouvrir" className="nav-link">Découvrir</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/demande" className="nav-link">Devenir Prestataire</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/connexion" className="nav-link">Se connecter</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/inscription" className="nav-link btn btn-outline-success px-4 py-1">S'incrire</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet/>
        </>
    )
}

export default Navigation
