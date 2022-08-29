let joueur = document.getElementById('leftChoice');
let machineC = document.getElementById('rightChoice');
let pierreB = document.getElementById('pierre');
let feuilleB = document.getElementById('feuille');
let ciseauxB = document.getElementById('ciseaux');
let pointeur1 = document.getElementById('pointeur1');
let pointeur2 = document.getElementById('pointeur2');

const choix = ['pierre', 'feuille', 'ciseaux'];

const pierreChoice = () => {

    let choixMachine = Math.floor(Math.random() * 3);

    machineC.textContent = choix[choixMachine];
    joueur.textContent = "Pierre";

    if(machineC.textContent == 'ciseaux') {
        pointeur1.textContent++;
        joueur.textContent = "Pierre  \"too easy !!!\"";
    }else if(machineC.textContent == 'feuille') {
        pointeur2.textContent++;
    }
    
}

const feuilleChoice = () => {
    let choixMachine = Math.floor(Math.random() * 3);

    machineC.textContent = choix[choixMachine];
    joueur.textContent = "Feuille";

    if(machineC.textContent == 'pierre') {
        pointeur1.textContent++;
        joueur.textContent = "Feuille  \"too easy !!!\"";
    }else if(machineC.textContent == 'ciseaux'){
        pointeur2.textContent++;
    }
}

const ciseauxChoice = () => {
    let choixMachine = Math.floor(Math.random() * 3);

    machineC.textContent = choix[choixMachine];
    joueur.textContent = "Ciseaux";

    if(machineC.textContent == 'feuille') {
        pointeur1.textContent++;
        joueur.textContent = "Ciseaux  \"too easy !!!\"";
    }else if(machineC.textContent == 'pierre'){
        pointeur2.textContent++;
    }
}

pierreB.addEventListener('click', pierreChoice);
feuilleB.addEventListener('click', feuilleChoice);
ciseauxB.addEventListener('click', ciseauxChoice);