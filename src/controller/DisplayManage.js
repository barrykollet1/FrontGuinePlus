import imgc1 from "../img/logoG320.png";

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
    return ["Technologie", "Communication", "Business", "Services Plublics", "Banques et Assurances", "Santé", "Culture",
        "Transport", "Construction", "Diverstissement", "Tourisme"]
}


export {gestionCards, gestionCaroussel, gestionMenu}
