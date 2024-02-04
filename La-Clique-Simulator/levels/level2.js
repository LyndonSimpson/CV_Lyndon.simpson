import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates2 = [

  { //11
    story: "Tu promènes Nala avec Omran, mais Nala s'enfuit vers une ruelle sombre, vous croisez un mysterieux inconnu qui vous donne un (generic objet) en vous disant 'ne le perdez surtout pas, il vous sera utile pour rentrer'",
    options: [{
        text: "Tu acceptes (generic object)",
        nextState: 12,
        onChoose: () => {
        addItem("Generic object", inventory, () => updateInventory(inventory, inventoryElement));
        },

      },
      {
        text: "tu refuses (generic object)",
        nextState: 14
      },
    ],
    image: "./public/Level1/OmranBiere.png",
  },

  { //12
    story: "Tu reçois un (generic object), tu ne sais pas quoi en faire donc tu le mets dans ton sac. La nuit tombe alors vous décidez d'aller au bar avec Omran, mais il reçoit un appel sur le chemin et doit te laisser y aller tout seul",
    options: [{
        text: "OK",
        nextState: 13
      },
    ],
    image: "./public/Level1/Nala.png",
  },

  { //13
    story: "Vous arrivez au Chat Noir! tu as soif! quel est ton poison ?",
    options: [{
        text: "bière",
        nextState: 16,
        onChoose: () => {
          player.gainDrunkness(10);
          updateCharacterInfo(healthValueElement, drunknessValueElement);
        },
      },
      {
        text: "Vin",
        nextState: 17,
        onChoose: () => {
          player.gainDrunkness(10);
          updateCharacterInfo(healthValueElement, drunknessValueElement);
        },
      },
      {
        text: "Liqueur",
        nextState: 18,
        onChoose: () => {
          player.gainDrunkness(20);
          updateCharacterInfo(healthValueElement, drunknessValueElement);
        },
      },
    ],
    image: "./public/Level1/ChatNoir.png",
  },

  { //14
    story: "Tu refuses (generic object) car cette personne te parraissait trop chelou. Vous vous mettez ensuite en route pour le Chat noir mais Omran doit te laisser en chemin suite à un appel mystérieux qu'il reçoit",
    options: [{
        text: "Ok",
        nextState: 13
      },
    ],
    image: "./public/Level1/Nala.png",
  },

  { //15
    story: "Tu refuses l'objet. Vous partez au chat noir mais sur el chemin Pierre doit faire un détour, alors tu y vas tout seul",
    options: [{
        text: "Ok",
        nextState: 13
      },
    ],
    image: "./public/Level1/egliseMenilmontant.jpg",
  },

  { //16
    story: "BEER STATE - you gain 10 drunkness",
    options: [{
        text: "Ok",
        nextState: 19
      },
    ],
    image: "./public/Level1/Beer.png",
  },

  { //17
    story: "Wine State - you gain 10 drunkness",
    options: [{
        text: "Ok",
        nextState: 19
      },
    ],
    image: "./public/Level1/Wine.png",
  },

  { //18
    story: "LIQOR STATE - you gain 20 drunkness",
    options: [{
        text: "Ok",
        nextState: 19
      },
    ],
    image: "./public/Level1/Calva.png",
  },

  { //19
    story: "Rencontre avec un inconnu qui nous propose 3 trucs différents",
    options: [{
        text: "option 1",
        nextState: 20
      },
      {
        text: "option 2",
        nextState: 2
      },
      {
        text: "option 3",
        nextState: 2
      },
    ],
    image: "./public/Level1/ChatInterieur.png",
  },

  { //20
    story: "LEVEL 2 CONNECTED",
    options: [{
        text: "Oui",
        nextState: 1
      },
      {
        text: "Non",
        nextState: 2
      },
    ],
    image: "./public/Level2/StrangerQuest.png",
  },

  { //21
    story: "LEVEL 2 CONNECTED",
    options: [{
        text: "Oui",
        nextState: 1
      },
      {
        text: "Non",
        nextState: 2
      },
    ],
  },
];

export default gameStates2;