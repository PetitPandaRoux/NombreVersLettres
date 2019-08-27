function checkRadioButton(){
  let sexes = document.querySelectorAll('.sexe');
  if (!sexes[0].checked && !sexes[1].checked) {
    afficherMessageErreur(this);
  } else {
    effacerMessageErreur(this);
  }
}

function checkChampNom(e){
  if(this.value.length < 2){
    afficherMessageErreur(this);
  } else {
    effacerMessageErreur(this);
  };
}

function checkChampPseudo(){
  if(this.value.length < 4){
    afficherMessageErreur(this);
  } else {
    effacerMessageErreur(this);
  };
}

function checkChampPassWord(){
  if(this.value.length < 6){
    afficherMessageErreur(this);
  } else {
    effacerMessageErreur(this);
  };
}

function checkChampConfirm(){
  let password = document.querySelector('#password');
  if(this.value === password.value){
    effacerMessageErreur(this);
  } else {
    afficherMessageErreur(this); 
  };
}

function checkChampPays(){
  let pays = document.querySelector('#pays');
}

function checkChampAge(){
  let parent = this.parentElement;
  if(this.value < 5 || this.value > 140){
    afficherMessageErreur(this);
  } else {
    effacerMessageErreur(this);
  };
}

function effacerMessageErreur(nodeElement){
  let parent = nodeElement.parentElement;
  parent.style.border = '';
  let alerte = parent.lastElementChild;
  alerte.innerHTML = '';
  alerte.style.color = '';
}

function afficherMessageErreur(nodeElement){
  let listErreurs = {
    sexe : "Veuillez choisir un sexe",
    nom : "Veuillez rentrer au moins deux caractères",
    prenom:"Veuillez rentrer au moins deux caractères",
    age :"Veuillez rentrer un nombre compris entre 5 et 140",
    pseudo:"Veuillez rentrer pas moins de 4 caractères",
    password:"Veuillrez rentrer au moins 6 caractères",
    confirm:"Veuillez rentrer le même mot de passe",
    pays:"Veuillez sélectionner un pays",
  };

  let stringName = nodeElement.name;
  let parent = nodeElement.parentElement;
  parent.style.border = '1px red solid';
  let alerte = parent.lastElementChild;
  alerte.innerHTML = listErreurs[nodeElement.name];
  alerte.style.color = 'red';
}

let sexe = document.querySelectorAll('.sexe');
for (let i = 0 ; i < sexe.length ; i++) {
  sexe[i].addEventListener("focus", checkRadioButton, false);
  sexe[i].addEventListener("focusout", checkRadioButton, false);
}

document.querySelector('#nom').addEventListener("focus", checkChampNom(2), false);
document.querySelector('#nom').addEventListener("focusout", checkChampNom, false);
document.querySelector('#prenom').addEventListener("focus", checkChampNom, false);
document.querySelector('#prenom').addEventListener("focusout", checkChampNom, false);
document.querySelector('#age').addEventListener("focus", checkChampAge, false)
document.querySelector('#age').addEventListener("focusout", checkChampAge, false);
document.querySelector('#pseudo').addEventListener("focus", checkChampPseudo, false);
document.querySelector('#pseudo').addEventListener("focusout", checkChampPseudo, false);
document.querySelector('#password').addEventListener("focus", checkChampPassWord, false);
document.querySelector('#password').addEventListener("focusout", checkChampPassWord, false);
document.querySelector('#confirm').addEventListener("focus", checkChampConfirm, false);
document.querySelector('#confirm').addEventListener("focusout", checkChampConfirm, false);

function verification () {
  let formEstValide = [];
  console.log(elements);
}