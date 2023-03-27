import Caroussel from "./Caroussel";
import Card from "./Card";
import Footer from "./Footer";
import {gestionCards,} from "../controller/DisplayManage";
import Navigation from "./Navigation";
import Menu2 from "./Menu2";


const Accueil = () => {
    var cardsMostVisited = gestionCards(3)

    return (
        <>
            <div className="container-fluid fixed-top">
                <Navigation/>
                <Menu2/>
            </div>

            <div className="container">
                <Caroussel/>
            </div>

            <div className="container-fluid border border-1 text-center">
                <h3>Services les plus recherchés</h3>
            </div>

            <div className="container-fluid text-center">
                {
                    cardsMostVisited.map((elem) => <Card num={elem.num} img={elem.img} key={elem.num}/>)
                }
            </div>

            <div className='container-fluid' style={{backgroundColor: "#e3f2fd",}}>
                <Footer/>
            </div>

        </>
    )
}

export default Accueil
