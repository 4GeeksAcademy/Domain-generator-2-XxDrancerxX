import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extentions = ['.com', '.net', '.ve'];
  let combinations  = [];


  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        for (let l of extentions) {
          combinations.push(`${i}${j}${k}${l}`);
           console.log(`${i}${j}${k}${l}`);
           
        }
      }
    }
  }
  let domainList = document.getElementById("domain-list"); 
combinations.forEach(domain => {
  let p = document.createElement("p"); 
  p.textContent = domain;              
  domainList.appendChild(p);           
});

};

