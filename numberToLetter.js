function transformerDizaineEnLettre(nombreChoisi){
  let dict_dizaine = ['', 'dix', 'vingt', 'trente', 'quanrante', 'cinquante', 'soixante', 'soizante-dix', 'quatre-ving'];
  let resultat ;
  let tableau = nombreChoisi.split('');
  let separateur = ' ';
    if(nombreChoisi < 70 || nombreChoisi == 80) {
      // test
      if(tableau[1] == '1') {
        separateur = ' et ';
      } else if (tableau[1] == ''){
        separateur = '';
      } else {
        separateur = '-';
      }

      resultat = dict_dizaine[tableau[0]] + separateur + transformerUniteEnLettre(tableau[1]);
    } else {
      resultat = transformerProblemeFrancais(tableau);
    }
  return resultat;
}

function transformerUniteEnLettre(chiffreChoisi) {
  let  dict_unite = ['','un','deux','trois','quatre','cinq','six','sept','huit', 'neuf','dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize','dix-sept', 'dix-huit', 'dix-neuf'];
  return dict_unite[chiffreChoisi];
}

function transformerCentaineEnLettre(nombreChoisi){
  let dict_centaine = ['','cent','deux-cents','trois-cents','quatre-cents','cinq-cents','six-cents','sept-cents','huit-cents', 'neuf-cents'];
  let tableau = nombreChoisi.split('');
  let resultat ;
  let separateur = ' ';
  resultat = dict_centaine[tableau[0]] + separateur + transformerDizaineEnLettre(tableau[1]) + transformerUniteEnLettre(tableau[2]);
  return resultat;
}

function transformerProblemeFrancais(tableau){
  let resultat ;
  let separateur ;
  
  let dict_dizaine = ['', 'dix', 'vingt', 'trente', 'quanrante', 'cinquante', 'soixante', 'soizante-dix', 'quatre-ving'];

  
  if(tableau[1] == '1') {
    separateur = '-et-';
  } else {
    separateur = '-';
  }

  if (tableau[0] == '7'){
    resultat = dict_dizaine[tableau[0]-1] + separateur + transformerUniteEnLettre(Number(tableau[1])+10);
  }
  return resultat;
}

function afficherResultat(){
  let nombreChoisie;
  let resultat;

  nombreChoisie = document.getElementById('number').value;
  console.log(nombreChoisie)

  //Attention pour l'instant valeurChoisie est un number
  if (nombreChoisie <= 16) {
    resultat = transformerUniteEnLettre(nombreChoisie);
  } else if (nombreChoisie <= 99) {
    resultat = transformerDizaineEnLettre(nombreChoisie);
  } else {
    resultat = transformerCentaineEnLettre(nombreChoisie);
  }

  document.getElementById('resutlat').innerHTML = resultat; 
}


