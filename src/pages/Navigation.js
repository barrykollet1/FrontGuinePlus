import {Link, Outlet} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">GUINEE+</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="#">GuineePlus Business</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link">Découvrir</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link">Devenir Prestataire</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link">Se connecter</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link btn btn-outline-success px-4">S'incrire</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="input-group">
                                <input className="form-control-lg" type="search" placeholder="Rechercher" aria-label="Search" />
                                <button className="btn btn-outline-dark" type="submit">Rechercher</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            <Outlet/>
        </>
    )
}

export default Navigation