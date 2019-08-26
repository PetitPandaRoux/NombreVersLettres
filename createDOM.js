 const $ = selector => document.querySelector(selector);
 const $$ = selector => document.querySelectorAll(selector);

function createDivAvecId(contenuToAdd, idToAppend, id) { 
  var nouvelleDiv = document.createElement("DIV"); 
  var contenu = document.createTextNode(contenuToAdd); 
  nouvelleDiv.id = id ;
  nouvelleDiv.appendChild(contenu);  
  document.getElementById(idToAppend).appendChild(nouvelleDiv);
}

function createNodeWithTexte(nodeType, texte, cible) { 
  var nouveauNode = document.createElement(nodeType); 
  var contenu = document.createTextNode(texte); 
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


function creerDOM(){
  createDivAvecId("Le", 'app','TP01');
  createNodeWithTexte('STRONG','World Wide Web Consortium','TP01');
  createTextNode('abrégé par le sigle','TP01');
  createNodeWithTexte('STRONG','W3C','TP01');
  createTextNode('est un ','TP01');
  createNodeWithTexteAndAttribute('a', 'organisme de standardisation', 'TP01', 'href', 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation" title="Organisme de normalisation');
  createTextNode('à but non-lucratif chargé de promouvoir la compatibilité des technologies du ','TP01');
  createNodeWithTexteAndAttribute('a', 'World Wide Web', 'TP01', 'href', 'http://fr.wikipedia.org/wiki/World_Wide_Web');
  createTextNode('Web ','TP01');
}
