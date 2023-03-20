import Caroussel from "./Caroussel";
import Card from "./Card";
import Footer from "./Footer";
import {gestionCards,} from "../controller/DisplayManage";
import Menu from "./Menu";
import Navigation from "./Navigation";

const Accueil = () => {
    var cardsMostVisited = gestionCards(10)

    return (
        <>
            <div className="container-fluid fixed-top">
                <Navigation/>
                <Menu/>
            </div>

            <div className="container-fluid">
                <Caroussel/>
            </div>

            <div className="container-fluid border border-1 text-center">
                <h3>Services les plus recherchés</h3>
            </div>

            <div className="container-fluid text-center">
                {
                    cardsMostVisited.map((elem) => <Card num={elem.num} img={elem.img}/>)
                }
            </div>

            <Footer/>

        </>
    )
}

export default Accueil
