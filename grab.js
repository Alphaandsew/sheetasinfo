const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1cCsFF63sUbjakyPsdwheUWKIQynCsHeoaHq15uUxZhk/edit?usp=sharing';

const techOpps = document.querySelector('#tech');
const bdmOpps = document.querySelector('#bdm');
const inspectorOpps = document.querySelector('#inspector');
const repairOpps = document.querySelector('#t-repair');
const tTreatOpps = document.querySelector('#t-treat');
const csrOpps = document.querySelector('#csr');

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
      callback: showInfo,
    simpleSheet: true } )
}

function appendtoAppropriateListing(opportunity,element){
  switch(opportunity.position){
    case "tech":
      techOpps.appendChild(element);
    break;
    case "bdm":
      bdmOpps.appendChild(element);
    break;
    case "inspector":
      inspectorOpps.appendChild(element);
    break;
    case "t-repair":
      repairOpps.appendChild(element);
    break;
    case "t-treat":
      tTreatOpps.appendChild(element);
    break;
    case "csr":
      csr.appendChild(element);
    break;
  }
}

function showInfo(data, tabletop) {

  data.forEach(p =>{
    let newOpp =document.createElement('li');
    newOpp.textContent = p.branch+": "+p.address;
    appendtoAppropriateListing(p,newOpp);
  })
}



window.addEventListener('DOMContentLoaded', init)

console.log("loaded");