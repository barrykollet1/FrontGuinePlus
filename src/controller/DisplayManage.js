import imgc1 from "../img/img_c1.jpg";


var gestionCards = (nbCard) => {
    var cards = []
    for(let i=1; i<=nbCard; i++) {
        cards.push({num:i, img:imgc1})
    }
    return cards
}


var gestionCaroussel = (nbImgs) => {
    var carousselImgs = []
    for(let i=1; i<=nbImgs; i++) {
        carousselImgs.push({num:i, img:imgc1})
    }
    return carousselImgs
}


var gestionMenu = () => {
    return [
        "Informatique", "Communication", "Business", "Services Plublics", "Santé", "Culture", "Photographie", "Banques et Assurances",
        "Transport", "Construction", "Immobilier"
    ]
}


export {gestionCards, gestionCaroussel, gestionMenu}
