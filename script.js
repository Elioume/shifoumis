let pierre = document.getElementById("pierre");
let feuille = document.getElementById("feuille");
let ciseaux = document.getElementById("ciseaux");
let message = document.getElementById("messageResultat");
let scoreJ = document.getElementById("scoreJ")
let scoreO = document.getElementById("scoreO")

let symbole = 0;
let randomNumber = 0;

let scoreJoueur = 0;
let scoreOrdinateur = 0;

/*  Role : créer un nombre aléatoire entre 1 et 3
    Paramètre : math.random
    Return : nombre aléatoire
*/
function nombreOrdi (){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    return randomNumber
}

// Role: affecter le bon symbole au joueur en fonction du bouton sur lequel il a cliqué
let buttons = document.querySelectorAll(".symbole")

buttons.forEach(button=>{
    button.addEventListener("click", convertirSymbole)
})

function convertirSymbole(e){
    let boutonid = e.target.id
    // affecter le bon numero selon l'id du bouton cliqué
    if(boutonid ==="pierre"){
        symbole = 1
    }
    else if(boutonid === "feuille"){
        symbole = 2
    }
    else if(boutonid === "ciseaux"){
        symbole = 3
    }

    // Verfier le resultat
    resultat()
    console.log(boutonid)
}

/*  1: pierre
    2 feuille
    3: ciseaux */
function resultat(){
    randomNumber = nombreOrdi()
    if (symbole === 1 && randomNumber === 2) {
        message.classList.remove("txtVert")
        message.classList.remove("txtNoir")
        message.classList.add("txtRouge")
        message.innerHTML = `L'Ordinateur à fait FEUILLE. L'Ordinateur à gagné`
        scoreOrdinateur++
    }
    else if (symbole === 1 && randomNumber === 3) {
        message.classList.remove("txtRouge")
        message.classList.remove("txtNoir")
        message.classList.add("txtVert")
        message.innerHTML = `L'Ordinateur à fait CISEAUX. Vous avez gagné`
        scoreJoueur++
    }
    else if (symbole === 2 && randomNumber === 1) {
        message.classList.remove("txtRouge")
        message.classList.remove("txtNoir")
        message.classList.add("txtVert")
        message.innerHTML = `L'Ordinateur à fait PIERRE. Vous avez gagné`
        
        scoreJoueur++
    }
    else if (symbole === 2 && randomNumber === 3) {
        message.classList.remove("txtVert")
        message.classList.remove("txtNoir")
        message.classList.add("txtRouge")
        message.innerHTML = `L'Ordinateur à fait CISEAUX. L'Ordinateur à gagné`
        scoreOrdinateur++
    }
    else if (symbole === 3 && randomNumber === 1) {
        message.classList.remove("txtVert")
        message.classList.remove("txtNoir")
        message.classList.add("txtRouge")
        message.innerHTML = `L'Ordinateur à fait PIERRE. L'Ordinateur à gagné`
        scoreOrdinateur++
    }
    else if (symbole === 3 && randomNumber === 2) {
        message.classList.remove("txtRouge")
        message.classList.remove("txtNoir")
        message.classList.add("txtVert")
        message.innerHTML = `L'Ordinateur à fait FEUILLE. Vous avez gagné`
        scoreJoueur++
    }
    else{
        message.classList.remove("txtVert")
        message.classList.remove("txtRouge")
        message.classList.add("txtNoir")
        message.innerHTML = `Il y a eu une égalité, veuillez choisir un nouveau symbole`
    }
    majScore()
}

function majScore (){
    scoreJ.innerHTML=`Vous : ${scoreJoueur} points`
    scoreO.innerHTML=`Ordinateur : ${scoreOrdinateur} points`
}