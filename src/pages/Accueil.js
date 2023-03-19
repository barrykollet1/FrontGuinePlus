import Caroussel from "./Caroussel";
import Card from "./Card";
import imgc1 from "../img/img_c1.jpg"

const Accueil = () => {
    return (
        <>
            <div className="container-fluid">
                <Caroussel/>
            </div>

            <div className="container-fluid border border-1 bg-info-subtle">
                <h1>Services les plus recherchés</h1>
            </div>


            <div className="container text-start">
                <Card img={imgc1}/>
                <Card img={imgc1}/>
                <Card img="../images/img1.jpg"/>
                <Card img="../images/img1.jpg"/>
                <Card img="../images/img1.jpg"/>

            </div>

        </>
    )
}

export default Accueil