import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates12 = [

  { //121
    story: "Vous décalez pour le petit garage",
    options: [{
        text: "Ok",
        nextState: 122
      },
    ],
    image: "./public/Level8/photoscliquerpg/ChatNoir.png",
  },

  { //122
    story: "vous arrivez devant le petit garage. Une fois passé la porte du bar le patron vous reconnaît et ne vous ayant pas vu depuis longtemps : il vous offre une tournée de shots",
    options: [{
        text: "Wouhou!",
        nextState: 123,
        onChoose: () => {
          player.gainDrunkness(20);
          updateCharacterInfo(healthValueElement, drunknessValueElement);
        },
      },
    ],
    image: "./public/Level1/Nala.png",
  },

  { //123
    story: "Le patron vous en offre un deuxième! Reboire un shot ?",
    options: [{
        text: "YEEEHEEEEE",
        nextState: 124,
        onChoose: () => {
          player.gainDrunkness(20);
          updateCharacterInfo(healthValueElement, drunknessValueElement);
        },
      },
      {
        text: "Euh..; Non, ça va là :)",
        nextState: 124
      },
    ],
    image: "./public/Level1/ChatNoir.png",
  },

  { //124 
    story: "ERROR - 'la clique simlator en surchauffe - code erreur 500 - raison : niveaux d'ivresse trop élevés'",
    options: [{
        text: "Kézako?",
        nextState: 125
      },
    ],
    image: "./public/Level3/MouleSeb.png",
  },

  { //125 
    story: "Vous êtes tous au petit garage en train de fêter... Fêter quoi d'ailleurs?... En train de feter lorsque soudainement...",
    options: [{
        text: "Oh non... Pas encore...",
        nextState: 126
      },
    ],
    image: "./public/Level3/MouleSeb.png",
  },

  { //126
    story: "PIGEON EST DE RETOUR",
    options: [{
        text: "...JPP de ce pigeon...",
        nextState: 127
      },
    ],
    image: "./public/Level3/pigeon.png",
  },

  { //127
    story: "PIGEON voulait juste boire un verre avec vous! Toute la clique l'accepte malgré Moule qui reste dans son coin à marmoner 'je pensais que les pigeons ça chiait que le matin moi...'",
    options: [{
        text: "Pfiou... Soulagement! il est pas si mal ce pigeon!",
        onChoose: () => {
          player.gainDrunkness(20);
          updateCharacterInfo(healthValueElement, drunknessValueElement);
        },
        nextState: 128
      },
    ],
    image: "./public/Level3/pigeon.png",
  },

  { //128
    story: "Par contre il vous a sorti son alcool maison et vous vous mangez tous 20 d'ivresse (avec un peu de chances vous avez pas trop bu avant :) )",
    options: [
      {
        text: ":)",
        nextState: 129
      },
    ],
    image: "./public/Level8/photoscliquerpg/TamDrunk.png",
  },

  { //129
    story: "'Vous êtes des bons le clan la clique! Je m'envole pour de nouvelles aventures, nous nous recroiseront peut être ce soir ou un autre jour!' PIGEON s'envole, vous sortez dehors pour admirer son départ",
    options: [{
        text: "...euh c'est que moi qui a vu un pigeon qui parlait?...",
        nextState: 130
      },
      {
        text: "un pigeon qui parle, ahah, on est bien à Paris!",
        nextState: 130
      }
    ],
    image: "./public/Level8/photoscliquerpg/wat.png",
  },

  { //130
    story: "Vous retournez vous poser dans le petit garage. La clique commence à mijoter un plan pour le reste de la soriée",
    options: [{
        text: "Ok",
        nextState: 131
      }
    ],
    image: "./public/Level3/MouleSeb.png",
  },

  {  //131
    story: "Bon maintenant il est temps de choisir où la clique va faire la fête! Plusieurs options sont proposées par le group - les principales sont :",
    options: [{
        text: "Soirée appart",
        nextState: 142
      },
      {
        text: "Faire la tournée des bars - barathon",
        nextState: 142
      },
      {
        text: "Concert jazz manouche",
        nextState: 142
      },
      {
        text: "soirée boe de nuit (batofar)",
        nextState: 142
      },
      {
        text: "JOKER",
        nextState: 142
      },
    ],
    image: "./public/items/phone.png",
    music: "./music/merde.mp3",
  }
];

export default gameStates12;