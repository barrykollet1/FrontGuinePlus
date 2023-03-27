import {gestionMenu} from "../controller/DisplayManage";

const Menu = () => {
    return(
        <>
            <nav className="navbar navbar-expand-md bg-light navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        {
                            gestionMenu().map((item) => <ItemMenu titre={item} key={item}/>)
                        }
                    </ul>
                </div>
            </nav>

            <ServiceListe/>
        </>
    )
}



const ItemMenu = (propos) => {
    return (
        <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#servicesList" role="button" aria-expanded="false" aria-controls="servicesList">
                {propos.titre}</a>
        </li>
    )
}

const ServiceListe = () => {
    return (
        <div className="collapse" id="servicesList">
            <div className="card card-body">
                <h6>Ici sera defini les différents services de MENU-1</h6>
            </div>
        </div>
    )
}


export default Menu
