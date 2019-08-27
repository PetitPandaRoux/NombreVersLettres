 const $ = selector => document.querySelector(selector);
 const $$ = selector => document.querySelectorAll(selector);


function createDivAvecId(contenuToAdd, idToAppend, id) { 
  var nouvelleDiv = document.createElement("DIV"); 
  var contenu = document.createTextNode(contenuToAdd); 
  nouvelleDiv.id = id ;
  nouvelleDiv.appendChild(contenu);  
  document.getElementById(idToAppend).appendChild(nouvelleDiv);
}

function createNode(nodeType, cible){
  let nouveauNode = document.createElement(nodeType);
  document.getElementById(cible).appendChild(nouveauNode);
}

function createNodeWithTexte(nodeType, texte, cible) { 
  let nouveauNode = document.createElement(nodeType); 
  let contenu = document.createTextNode(texte); 
  nouveauNode.appendChild(contenu);
  document.getElementById(cible).appendChild(nouveauNode);
}

function createDiv(contenuToAdd, idToAppend) { 
  var nouvelleDiv = document.createElement("DIV"); 
  var contenu = document.createTextNode(contenuToAdd); 
  nouvelleDiv.appendChild(contenu);  
  document.getElementById(idToAppend).appendChild(nouvelleDiv);
}

function createNodeWithTexteAndAttribute(nodeType, texte, cible, attribute, attributeContent){
  let nouveauNode = document.createElement(nodeType); 
  let contenu = document.createTextNode(texte); 
  nouveauNode.appendChild(contenu);
  nouveauNode.setAttribute(attribute, attributeContent);
  nouveauNode.setAttribute('title', texte)
  document.getElementById(cible).appendChild(nouveauNode);
}

function createTextNode(texte, idToAppend){
  let monTag = document.getElementById(idToAppend);
  let monTexte = document.createTextNode(texte);
  monTag.appendChild(monTexte); 
}



function createTableOfDefinition(dict, cible){
  let nouveauTag = document.createElement("dl");
  for (let cle in dict) {
    if (dict.hasOwnProperty(cle)) {
      let nouveauDt = document.createElement("dt");
      let nouveauTitre = document.createTextNode(cle);
      nouveauDt.appendChild(nouveauTitre);  
      nouveauTag.appendChild(nouveauDt);
      let nouveauDd = document.createElement("dd");
      let nouvelleDefinition= document.createTextNode(dict[cle]);
      nouveauDd.appendChild(nouvelleDefinition); 
      nouveauTag.appendChild(nouveauDd);
    }
  document.getElementById(cible).appendChild(nouveauTag);
  } 
}

/**
 * 
 * @param {array} array is an array contening all li contents
 * @param {*} cible 
 * @return void ;
 */
function createUlWithLiWithTexte(array, cible){
  let nouveauTag = document.createElement("ul"); 
  for (var element in array){
    let liChild = document.createElement('li');
    let liElement = document.createTextNode(array[element]); 
    liChild.appendChild(liElement);
    nouveauTag.appendChild(liChild);
  }
  document.getElementById(cible).appendChild(nouveauTag);
}

/**
 * 
 * @param {*} nodeType 
 * @param {*} nodeContent 
 * @param {*} dictOfAttributes 
 * @return {nodeType} nouveauTag is a node type
 */
function createTagWithAttributes(nodeType, nodeContent, dictOfAttributes) {
  let nouveauNode = document.createElement(nodeType);
  let contenu = document.createTextNode(nodeContent);
  nouveauNode.appendChild(contenu);
  for (var attribute in dictOfAttributes) {
    nouveauNode.setAttribute(attribute, dictOfAttributes[attribute]);
  }
  return nouveauNode;
}

function creerDOM(){
  createDivAvecId("Le", 'exo1','TP01');
  createNodeWithTexte('STRONG','World Wide Web Consortium','TP01');
  createTextNode('abrégé par le sigle','TP01');
  createNodeWithTexte('STRONG','W3C','TP01');
  createTextNode('est un ','TP01');
  createNodeWithTexteAndAttribute('a', 'organisme de standardisation', 'TP01', 'href', 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation" title="Organisme de normalisation');
  createTextNode('à but non-lucratif chargé de promouvoir la compatibilité des technologies du ','TP01');
  createNodeWithTexteAndAttribute('a', 'World Wide Web ', 'TP01', 'href', 'http://fr.wikipedia.org/wiki/World_Wide_Web');
  createTextNode(' Web ','TP01');

  createDivAvecId("", 'exo2', 'divTP2');
  createNodeWithTexte('p','langages basés sur ECMAScript','divTP2');
  createUlWithLiWithTexte(['Javascript', 'JScript', 'ActionScript', 'EX4'], 'divTP2' );


  var definitionLangage = {
    'Javascript': "Javascript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi côté serveur",
    'JScript': "JScript est le nm générique de plusieurs implémentatoins d'ECMAscript 3 créees par Microsoft",
    'ActionScript': "ActionScript est le langage de programmation au sein d'applications clients (Adobe Flash, Adoble Flex) et serveur (Flash media server, JRun, Macromédia Générator).",
    'EX4': "ECMAScript for XML(E4X) est une extension XML au langage ECMAScript."
  };

  createDivAvecId("", 'exo3', 'divTP3');
  createNodeWithTexte('p', 'Langages basés sur ECMAScript :', 'divTP3');
  createTableOfDefinition(definitionLangage, 'divTP3');

  createDivAvecId("",'exo4', 'divTP4');
  let nouveauTag = createTagWithAttributes('form',"", {'enctype':"multipart/form-data", 'methode':"post", 'action':"upload.php"})
  document.getElementById("divTP4").appendChild(nouveauTag);
}
