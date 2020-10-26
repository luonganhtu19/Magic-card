const arrName = ["SKILLED DRAK MAGICIAN", "JACK'S KNIGHT", "SKILLED WHITE MAGICIAN", "DARK MAGICIAN GIRL", "CHAOS SORCERER,VICTORY DRAGON", " RED-EYES DARKNESS DRAGON", "RED-EYES B.DRAGON", "GLADIATOR BEAST ALEXANDER", "SUMMONED SKULL", "JUNK DESTROYER", "LIGHT AND DRAKNESS DRAGON", "TYLER THE GREAT WARRIOR", "BID SHIELD GUARDBA", "GRZELLE THE KING OF MYTHICAL BEASTS", "RIGHT LEG OF THE FORBIDDEN ONE"];
const arrAttack = [1900, 1900, 1700, 2000, 2300, 2400, 2400, 2400, 2400, 2500, 2600, 2800, 3000, 100, 1500, 200]
const arrDefense = [1700, 1700, 1900, 1700, 2000, 3000, 2000, 2000, 600, 1200, 2500, 2400, 1500, 2600, 1200, 300]
let arrIDCard=[];
class Cards {
    constructor(id) {
        this.id =id;
        this.name=arrName[this.id];
        this.attack = arrAttack[this.id];
        this.defense = arrDefense[this.id];
        this.src = `img/${this.id}.jpg`;
    }
    set setStatus(_status) {
        this.status = _status;
    }
}

class Player {
    constructor() {
        // this.name = name;
        this.hp = 100;
        this.cards= "";
        this.arrCard = [];
    }
    setCards(cards){
        this.cards=cards;
    }
}

function chooseCards() {
    let idRad
    do {
         idRad = Math.floor(Math.random() * 16);
    }while (arrIDCard.indexOf(idRad)!=-1)
    arrIDCard.push(idRad)
    return idRad;
}

function gameBasic() {
    let player1=new Player();
    let player2=new Player();
    // chon bai
    for (let i = 0; i < 16; i++) {
        if (i%2==0){
            player1.arrCard.push(chooseCards())
        }else {
            player2.arrCard.push(chooseCards())
        }
    }
    console.log(player1.arrCard)
    console.log(player2.arrCard)
}
gameBasic()
function display() {

}
function clear(){
    arrIDCard=[];
}



