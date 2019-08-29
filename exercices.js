/**
 * 
 * @param {Array} tableau est le tableau attendu que l'on souhaite filtrer
 * @param {Array} elementAFiltrer est le tableau contenant les éléments que l'on souhaite retirer
 * @returns {Array} retourne un tableau d'éléments filtrer
 */
function filtreElementsArray(tableau, elementsAFiltrer) {
  return tableau.filter(function(element){
    return elementsAFiltrer.indexOf(element) === -1;
  })
}

/**
 * 
 * @param {Array} array d integer
 */
function triParOrdreCroissant(array){
  return array.sort( (a, b) => {
    if (a > b) {
      return 1;
    } else if ( a < b){
      return -1;
    } else {
      return 0;
    }
  })
}

tableauInteger = [ 40, 2, 50, 60, 4, 22];


tableauAFiltrer = [1,2,5,9, "", 0, null, 67,89, true, false] ; // Ceci sert à changer
Filtre = [null, false, 0, ""]

console.log(filtreElementsArray(tableauAFiltrer, Filtre));
console.log(triParOrdreCroissant(tableauInteger));

filtreElementsArray()

"sakada".indexOf('s')