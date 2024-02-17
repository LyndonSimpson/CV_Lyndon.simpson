import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates2 = [

  { //11
    story: "Tu promènes Nala avec Omran, mais Nala s'enfuit vers une ruelle sombre, vous croisez un mysterieux inconnu qui vous donne un armonica en vous disant 'ne le perdez surtout pas, il vous sera utile pour rentrer'",
    options: [{
        text: "Tu acceptes l'armonica",
        nextState: 12,
        onChoose: () => {
          addItem({ name: "harmonica", icon: "./public/items/harmonica.png" });
          updateInventory();
        },

      },
      {
        text: "tu refuses l'armonica",
        nextState: 14
      },
    ],
    image: "./public/Level1/OmranBiere.png",
  },

  { //12
    story: "Tu reçois un armonica, tu ne sais pas quoi en faire donc tu le mets dans ton sac. Vous retournez vous poser",
    options: [{
        text: "OK",
        nextState: 30
      },
    ],
    image: "./public/Level1/Nala.png",
  },

  { //13
    story: "Tu arrives au Chat Noir! tu as soif! quel est ton poison ?",
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
    story: "Tu refuses l'armonica car cette personne te parraissait trop chelou. Vous retournez vous poser",
    options: [{
        text: "Ok",
        nextState: 30
      },
    ],
    image: "./public/Level1/Nala.png",
  },

  { //15
    story: "Tu refuses l'objet. Vous partez au chat noir mais sur el chemin Pierre doit faire un détour, alors tu y vas tout seul",
    options: [{
        text: "Ok",
        nextState: 75
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
      {
        text: "Boire une autre bière",
        onChoose: () => {
          player.gainDrunkness(10);
          updateCharacterInfo(healthValueElement, drunknessValueElement);
        },
        nextState: 16
      },
      {
        text: "Boire autre chose",
        nextState: 38
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
      {
        text: "Boire un aute verre de vin",
        onChoose: () => {
          player.gainDrunkness(10);
          updateCharacterInfo(healthValueElement, drunknessValueElement);
        },
        nextState: 17
      },
      {
        text: "Boire autre chose",
        nextState: 38
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
      {
        text: "Boire un autre verre de calva",
        onChoose: () => {
          player.gainDrunkness(20);
          updateCharacterInfo(healthValueElement, drunknessValueElement);
        },
        nextState: 18
      },
      {
        text: "Boire autre chose",
        nextState: 38
      },
    ],
    image: "./public/Level1/Calva.png",
  },

  { //19
    story: "Tu es posé au bar du Chat noir en train d'attendre la Clique. PROPOSITION PERSONNAGE MYSTéRIEUX",
    options: [{
        text: "nightclub party",
        nextState: 27
      },
      {
        text: "soirée appart",
        nextState: 28
      },
      {
        text: "concert jazz manouche",
        nextState: 29
      },
    ],
    image: "./public/Level1/ChatInterieur.png",
    music: "./music/merde.mp3",
  },

  { //20
    story: "Lorsque tu sors de la pièce de théâtre, Pierre te dit qu'il te rejoins un peu plus tard au chat noir avec les autres. Le téléphone que tu as accepté sonne, est ce que tu décroches?",
    options: [{
        text: "Décrocher",
        nextState: 21
      },
      {
        text: "Non, l'éteindre et s'en occuper demain",
        nextState: 75
      },
    ],
    image: "./public/Level2/phoneCall.jpg",
  },

  { //21
    story: "'ALLO??! Shake, c'est toi shake? tout le monde te cherche, t'es où?... ALLO?!... Bon, écoute on va va procéder san toi, mais saches que le patron est furax, il a envoyé quelqu'un sur le ping du portable : si j'étais toi, je me planquerais. Ne t'attends plus à avoir de contacts avec moi après cet appel'",
    options: [{
        text: "Je suis sur les grands boulevards, mais je ne connais pas Shake, j'ai trouvé ce Portable au théâtre!",
        nextState: 22
      },
      {
        text: "Raccrocher et aller au Chat noir, osef de ce Shake XD",
        nextState: 75
      },
    ],
    image: "./public/Level2/phoneCall.jpg",
  },
];

export default gameStates2;