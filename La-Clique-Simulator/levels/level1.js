import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';


const gameStates1 = [{ //0
  story: "es-tu prêt pour ta soirée virtuelle dans La clique Simulator ?",
  options: [{
      text: "Oui",
      nextState: 1
    },
    {
      text: "Non",
      nextState: 2,
      onChoose: () => {
        addItem("'I gave up' T-shirt", inventory, () => updateInventory(inventory, inventoryElement));
        player.loseHealth(100);
        updateCharacterInfo(healthValueElement, drunknessValueElement);
      },
    },
  ],
  image: "./public/Level1/HomeScreen.jpg",
},
{//1 -
  story: "C'est vendredi, après une semaine de taff bien dur, t'as envie de sortir faire la fête. qui veux tu appeler?",
  options: [{ // need 3 branching themes here
      text: "Omran",
      nextState: 3, //
      //onChoose: () => {
        //addItem("Glowing green orb", inventory, () => updateInventory(inventory, inventoryElement));
        //player.loseHealth(10);
        //updateCharacterInfo(healthValueElement, drunknessValueElement);
     // },
    },
    {
      text: "Gabriel",
      nextState: 4
    },
    {
      text: "Pierre",
      nextState: 8
    },
  ],
  image: "./public/Level1/introScene.jpg",
  music: "./music/captain.mp3",
},
{//2
  story: "GAME OVER!",
  options: [
    {
      text: "OK",
      nextState: 0
    }
  ], // Empty options, as the game ends here
  image: "./public/gameOver.jpg",
  music: "./music/merde.mp3",
},
{//3
  story: "tu appelles Omran, il te propose de le rejoindre chez lui pour ballader Nala",
  options: [{
      text: "'vazy j'arrive, je suis dans le coin'",
      nextState: 11
    },
    {
      text: "'viens on va plutôt direct au chat noir pour boire une bière ?'",
      nextState: 39
    },
  ], // Empty options, as the game ends here
  image: "./public/Level1/menilmontantMetro.jpg",
},
// Add more game states here

{//4
  story: "Gabriel décroche, il te dit 'j'ai une jam à l'Atla vers Pigalle, viens stuve! Sinon on se rejoint au Chat noir un peu après!'",
  options: [{
      text: "Aller à la jam à Pigalle",
      onChoose: () => {
        player.gainDrunkness(40);
        updateCharacterInfo(healthValueElement, drunknessValueElement);
      },
      nextState: 5,
    },
    {
      text: "Aller direct au Chat noir",
      nextState: 39
    },
  ],
  image: "./public/Level1/menilmontantMetro.jpg",
},

{//5
  story: "Tu arrives à l'Atla pour la jam, la musique est tellement buen que tu t'enjailles un petit peu trop en buvant du rhum (tu bois 4 verres de rhum et prends 40 d'ivresse directù! po po po! bourré, tu trouves un médiator de gratte vraiment unique par terre, il appartient peut être à quelqu'un, est ce que tu le gardes ou demande autour de toi à quel musicien il appartient ?",
  options: [{
      text: "Je décide de le garder pour moi, il est ebaucoup trop beau!",
      nextState: 6,
      onChoose: () => {
        addItem("Médiator multicolor psychadélique", inventory, () => updateInventory(inventory, inventoryElement));
      },
    },
    {
      text: "Je vois un guitariste qui cherche un truc par terre, alors je lui montre le médiator",
      nextState: 7
    },
  ],
  image: "./public/Level1/jamArrival.jpg",
},

{//6
  story: "tu gardes le joli médiator et tu pars pour le Chat noir avec Gabriel, mais il doit faire un détour avant de te rejoindre au Chat noir donc tu y vas tout seul!",
  options: [{
      text: "Ok",

      nextState: 39
    },
  ],
  image: "./public/Level1/guitarPick.jpg",
},

{//7
  story: "'Mec cimer, ce médiator m'a été offert par mon père'. Le guitariste t'invite à boire encore du rhum avec lui pour te remercier (tu te manges 20 d'ivresse en plus)",
  options: [{
      text: "KO",
      onChoose: () => {
        player.gainDrunkness(20);
        updateCharacterInfo(healthValueElement, drunknessValueElement);
      },
      nextState: 39
    },
  ],
  image: "./public/Level1/happyNPC.jpg",
},

{//8
  story: "Pierre te propose de le rejoindre voir une pièce de théâtre sur les Grands boulevards ou de le rejoindre un peu plus tard au Chat noir",
  options: [{
      text: "Tu décides d'aller voir la pièce de théâtre avec Pierre",
      nextState: 9
    },
    {
      text: "tu décides de rejoindre directement Pierre au Chat noir",
      nextState: 39
    },
  ],
  image: "./public/Level1/egliseMenilmontant.jpg",
},

{//9
  story: "Le spectateur à ta gauche te dit que tu as fait tomber ton téléphone, ce n'est pas le tien, et personne semble en être le propriétaire autour de toi, est ce que tu le prends ?",
  options: [{
      text: "Je le prends pour voir si je peux retrouver trouver à qui il appartien après la pièce",
      nextState: 10,
      onChoose: () => {
        addItem("Téléphone portable inconnu", inventory, () => updateInventory(inventory, inventoryElement));
      },
    },
    {
      text: "Non, j'insiste que ce n'est pas le mien, pas mon roblème",
      nextState: 15
    },
  ],
  image: "./public/Level1/theatre.jpg",
},

{//10
  story: "Tu ranges le téléphone dans ton sac, tu verras plus tard",
  options: [{
      text: "Ok",
      nextState: 20
    },
  ],
  image: "./public/Level1/theatre.jpg",
},

];

export default gameStates1;