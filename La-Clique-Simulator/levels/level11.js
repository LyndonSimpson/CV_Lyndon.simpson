import { addItem, updateInventory, getInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';


// this whole level is an empty slate that we can repurpose
// later to save memory usage. - see how we can manage a better memory usage ? 
// Maybe write a script that can transfer all our existing states (levels) 
// and have that automated with a python script for example. Into a Json file 
// as proposed by Zed. 

//TODO : 4 todos below that explain and show each step of adding a item check pass (or fail) depending on item presence

//TODO 1) Will have to use pass2 for next item check!
let pass1 = 0;

//TODO 2) this method will have to be ADDED and adapted (pass1 variable to pass2 and correct nextState indexes depending on item presence) in each state file where a check like this happens.
function pass1check(itemName) {
    const inventory = getInventory(); // Use the getInventory function to access the inventory array

    // Ensure inventory is properly initialized and is an array
    if (Array.isArray(inventory)) {
        // Check if the item is in the inventory
        const itemExists = inventory.some(item => item.name === itemName);
        if (itemExists) {
            pass1 = 112; // Set this to the state number if the item is found
        } else {
            pass1 = 113; // Set this to the state number if the item is not found
        }
    } else {
        // Handle the case where inventory is not available
        console.error("Inventory is undefined or not an array");
        // Optionally set itemCheck to a default value or handle the error as needed
    }
}

const gameStates11 = [{ //110 USED AS EXAMPLE FOR ITEM CHECK
    story: "GRAB TEST ITEM",
    options: [{
        text: "NO",
        nextState: 111,
        onChoose: () => {
          pass1check("TEST"); //TODO 3) THIS TEST NEEDS TO BE ADDED TO EACH OPTION THAT LEAD TO AN ITEM CHECK OPTION SO THAT THE DECLARED VAR IN THE SAME FILE UPDATES CORRECTLY
        },
      },
      {
        text: "TAKE TEST ITEM",
        nextState: 111,
        onChoose: () => {
          addItem({ name: "TEST", icon: "./public/items/shirt.png", description: "Tu n'as même pas essayé... Mais tu as au moins gagné ce T-shirt!" });
          updateInventory();
          pass1check("TEST");
        },
      },
    ],
    image: "./public/Level1/HomeScreen.jpg",
  },
  {//111 USED AS EXAMPLE FOR ITEM CHECK
    story: "DO YOU HAVE THE ITEM ?",
    options: [{ // need 3 branching themes here
        text: "--->",
        nextState: () => pass1, //TODO 4) ADD THE DYNAMIC NEXT STATE BASED ON ITEM PRESENCE
      },
    ],
    image: "./public/Level1/introScene.jpg",
    music: "./music/captain.mp3",
  },
  {//112 USED AS EXAMPLE FOR ITEM CHECK
    story: "YOU DO!!!!!",
    options: [
      {
        text: "OK",
        nextState: 0
      }
    ], // Empty options, as the game ends here
    image: "./public/gameOver.jpg",
  },
  {//113 USED AS EXAMPLE FOR ITEM CHECK
    story: "YOU DO NOT",
    options: [{
        text: "OK",
        nextState: 0
      },
    ], // Empty options, as the game ends here
    image: "./public/Level1/menilmontantMetro.jpg",
  },
// Add more game states here

{//114 not used FREE STATE
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
      nextState: 74
    },
    {
      text: "Appeler quelqu'un d'autre",
      nextState: 63
    },
  ],
  image: "./public/Level1/menilmontantMetro.jpg",
},

{//115
  story: "Tu arrives à l'Atla pour la jam, la musique est tellement buen que tu t'enjailles un petit peu trop en buvant du rhum (tu bois 4 verres de rhum et prends 40 d'ivresse directù! po po po! bourré, tu trouves un médiator de gratte vraiment unique par terre, il appartient peut être à quelqu'un, est ce que tu le gardes ou demande autour de toi à quel musicien il appartient ?",
  options: [{
      text: "Je décide de le garder pour moi, il est ebaucoup trop beau!",
      nextState: 6,
      onChoose: () => {
        addItem({ name: "funky médiator", icon: "./public/items/pick.png", description: "Ce médiator psychedélique est vraiment très joli à regarder... On pourrait presque s'y perdre..." });
        updateInventory();
      },
    },
    {
      text: "Je vois un guitariste qui cherche un truc par terre, alors je lui montre le médiator",
      nextState: 7
    },
  ],
  image: "./public/Level1/jamArrival.jpg",
},

{//116
  story: "tu gardes le joli médiator et tu pars pour le Chat noir avec Gabriel, mais il doit faire un détour avant de te rejoindre au Chat noir donc tu y vas tout seul!",
  options: [{
      text: "Ok",

      nextState: 74
    },
  ],
  image: "./public/Level1/guitarPick.jpg",
},

{//117
  story: "'Mec cimer, ce médiator m'a été offert par mon père'. Le guitariste t'invite à boire encore du rhum avec lui pour te remercier (tu te manges 20 d'ivresse en plus)",
  options: [{
      text: "KO",
      onChoose: () => {
        player.gainDrunkness(20);
        updateCharacterInfo(healthValueElement, drunknessValueElement);
      },
      nextState: 74
    },
  ],
  image: "./public/Level1/happyNPC.jpg",
},

{//118
  story: "Pierre te propose de le rejoindre voir une pièce de théâtre sur les Grands boulevards ou de le rejoindre un peu plus tard au Chat noir",
  options: [{
      text: "Tu décides d'aller voir la pièce de théâtre avec Pierre",
      nextState: 9
    },
    {
      text: "tu décides de rejoindre directement Pierre au Chat noir",
      nextState: 75
    },
    {
      text: "Appeler quelqu'un d'autre",
      nextState: 63
    },
  ],
  image: "./public/Level1/egliseMenilmontant.jpg",
},

{//119
  story: "Le spectateur à ta gauche te dit que tu as fait tomber ton téléphone, ce n'est pas le tien, et personne semble en être le propriétaire autour de toi, est ce que tu le prends ?",
  options: [{
      text: "Je le prends pour voir si je peux retrouver trouver à qui il appartien après la pièce",
      nextState: 10,
      onChoose: () => {
        addItem({ name: "portable inconnu", icon: "./public/items/phone.png", description: "Mmmmh... Je me demande à qui appartient ce téléphone!" });
        updateInventory();
      },
    },
    {
      text: "Non, j'insiste que ce n'est pas le mien, pas mon roblème",
      nextState: 15
    },
  ],
  image: "./public/Level1/theatre.jpg",
},

{//120
  story: "Tu ranges le téléphone dans ton sac, tu verras plus tard",
  options: [{
      text: "Ok",
      nextState: 20
    },
  ],
  image: "./public/Level1/theatre.jpg",
},

];

export default gameStates11;