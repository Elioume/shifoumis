let pierre = document.getElementById("pierre");
let feuille = document.getElementById("feuille");
let ciseaux = document.getElementById("ciseaux");
let message = document.getElementById("messageResultat");

let symbole = 0;
let randomNumber = 0
/*  Role : créer un nombre aléatoire entre 1 et 3
    Paramètre : math.random
    Return : nombre aléatoire
*/
function nombreOrdi (){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    return randomNumber
}

// for (i=0; i<=50; i++){
//     console.log(nombreAleatoire())
// }

/*  Role : Donner un nombre entre 1 et 3 au joueur en fonction du symbole choisi
    Paramètre : le click du joueur
    Return : nombre joueur 
*/
function nombreJoueur (){
    randomNumber= nombreOrdi()
    pierre.addEventListener("click", (e) => {
        symbole = 1
        console.log(e)
        resultat()
    })
    feuille.addEventListener("click", (e) => {
        symbole = 2
        console.log(e)
        resultat()
    })
    ciseaux.addEventListener("click", (e) => {
        symbole = 3
        console.log(e)
        resultat()
    })
}
console.log(nombreJoueur())
// 1: pierre  2 feuilles  3: ciseau
function resultat(){
    if (symbole === 1 && randomNumber === 2) {
        console.log("Ordi à gagner")
        message.innerHTML = 'Ordi à gagner'
    }
    else if (symbole === 1 && randomNumber === 3) {
        console.log("Joueur à gagner")
        message.innerHTML = 'Joueur à gagner'
    }
    else if (symbole === 2 && randomNumber === 1) {
        console.log("Joueur à gagner")
        message.innerHTML = 'Joueur à gagner'
    }
    else if (symbole === 2 && randomNumber === 3) {
        console.log("Ordi à gagner")
        message.innerHTML = 'Ordi à gagner'
    }
    else if (symbole === 3 && randomNumber === 1) {
        console.log("Ordi à gagner")
        message.innerHTML = 'Ordi à gagner'
    }
    else if (symbole === 3 && randomNumber === 2) {
        console.log("Joueur à gagner")
        message.innerHTML = 'Joueur à gagner'
    }
    else{
        console.log("égaliter")
        message.innerHTML = 'egalité'
    }
}
