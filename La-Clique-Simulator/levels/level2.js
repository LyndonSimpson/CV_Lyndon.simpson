import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates2 = [

  { //11
    story: "Tu promènes Nala avec Omran, mais Nala s'enfuit vers une ruelle sombre, vous croisez un mysterieux inconnu qui vous dit avoir reconnu son vieil ami dans le regard de Nala, il veut vous offrir son harmonica qui appartenait à son ami. Mais pendant qu'il vous parle Nala voit un autre chien et tire sur la laisse!",
    options: [{
        text: "Tu acceptes l'harmonica et ignorer l'autre chien",
        nextState: 12,
        onChoose: () => {
          addItem({ name: "harmonica", icon: "./public/items/harmonica.png", description: "Cet harmonica semblait avoir une énorme valeur sentimentale pour un inconnu dans la rue. si on l'observe de près on peut y lire une inscription gravée : 'MOUSTAFA 4EVER'" });
          updateInventory();
        },
      },
      {
        text: "Suivre Nala vers l'autre chien et ignorer l'inconnu",
        nextState: 90
      },
    ],
    image: "./public/Level1/OmranBiere.png",
  },

  { //12
    story: "Tu reçois un harmonica, tu ne sais pas quoi en faire donc tu le mets dans ton sac. Vous retournez vous poser. Nala ne voit plus l'autre chien",
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
    story: "Tu refuses l'harmonica car cette personne te parraissait trop chelou. Vous retournez vous poser. Nala ne voit plus l'autre chien",
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
    story: "Tu bois une bière, tu prends 10 points d'ivresse",
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
    story: "Tu bois un verre de vin, tu prends 15 points d'ivresse",
    options: [{
        text: "Ok",
        nextState: 19
      },
      {
        text: "Boire un aute verre de vin",
        onChoose: () => {
          player.gainDrunkness(15);
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
    story: "Tu bois un verre de calva, tu prends 20 points d'ivresse",
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
    story: "Tu es posé au bar du Chat noir en train d'attendre la Clique. Le barman te demande ce que la clique va faire ce soir ? (il espère ne pas à avoir à vous virrer du Chat noir encore une fois...)",
    options: [{
        text: "On va être sages ce soir :)",
        nextState: 27
      },
      {
        text: "Boarf, tu vas pas commancer, on a cassé QUE 5 verres la dernière fois!",
        nextState: 27
      },
      {
        text: "... (sourire diabolique :)) )",
        nextState: 27
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