var stage = [];


let effacer = function(){
  stage = [];
  afficherOnScreen();
  afficherResultat();
};

let ajouterVersStage = function(e) {
	stage.push(e.target.value);
	afficherOnScreen();
}

let ajouterOperateurVersStage = function(e){
  stage.push(e.target.value);
  afficherOnScreen();
  afficherResultat();
}

let resultatFinal = function(e){
  afficherResultat();
  afficherResultat();
  afficherOnScreen();
  afficherResultat();
}
/**
 * Afficher sur l'écran
 */
function afficherOnScreen(){
	document.querySelector('.screen-historic').innerHTML = stage.join('');
}

function afficherResultat(){
  let resultat = eval(stage.join(''));
  document.querySelector('.screen').innerHTML = resultat;
}

function parcourirTableau(){
  //pass ;
}


function Boutton(NomDuBoutton, fonctionAssociée) {
  this.nom = NomDuBoutton,
  this.fonction = fonctionAssociée
}

// On créer les bouttons 
let bouttonDelete = new Boutton('.delete', effacer);
let bouttonResultat = new Boutton('.resultat', resultatFinal);
let tableauBoutton = [bouttonDelete, bouttonResultat,];

let tableauChiffres = ['.chiffre-0', '.chiffre-1', '.chiffre-2', '.chiffre-3', '.chiffre-4', '.chiffre-5', '.chiffre-6', '.chiffre-7', '.chiffre-8', '.chiffre-9'];

let tableauOperateur = ['.addition', '.soustraction', '.multiplication', '.division'];

for (let i = 0 ; i < tableauChiffres.length ; i++) {
  let bouttonChiffre = new Boutton(tableauChiffres[i], ajouterVersStage);
  tableauBoutton.push(bouttonChiffre);
}

for (let i = 0 ; i < tableauChiffres.length ; i++) {
  let bouttonOperateur = new Boutton(tableauOperateur[i], ajouterOperateurVersStage);
  tableauBoutton.push(bouttonOperateur);
}


//On ajoute les eventListener 
for (let i = 0 ; i < tableauBoutton.length ; i++){
	document.querySelector(tableauBoutton[i].nom).addEventListener('click',tableauBoutton[i].fonction)
}

