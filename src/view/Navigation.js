import {Link, Outlet} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light border-2 border-bottom" style={{backgroundColor: "#e3f2fd",}}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">GUINEE+<i className="bi bi-dot text-success"></i></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex ms-sm-2" role="search">
                            <div className="input-group">
                                <input className="form-control" type="search" placeholder="Quel service cherez-vous" aria-label="Search" />
                                <button className="btn btn-dark" type="submit"><i className="bi bi-search"></i></button>
                            </div>
                        </form>

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
