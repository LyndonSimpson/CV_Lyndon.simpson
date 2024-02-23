import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';


const gameStates10 = [{ //99
  story: "Vous achetez la tarte à la patate douce et aux noix de pécan. Mais Namyria à l'air un peu triste, elle n'arrive pas à reconnaître l'odeur de la tarte : 'j'ai mentis, je voulais juste mon snack préféré une foi de plus aujourd'hui! Mais cette tarte fera aussi l'affaire!' - Vous étiez bien tombé dans le piège! Nymiria s'en va en courant, tarte au bec",
  options: [{
      text: "Retourner se poser...",
      nextState: 30
    },
  ],
  image: "./public/Level7/frenchie7.png",
},
{//100
  story: "'QOUI!!?? JE VOUS PROPOSE MA FAMEUSE TARTE DONT LA RECETTE EST UNE TRADITION FAMILIALE ET VOUS VOULEZ VOIR DES TARTES AILLEURS!!?? SORTEZ!",
  options: [{ // need 3 branching themes here
      text: "sortir...",
      nextState: 104 //
      //onChoose: () => {
        //addItem("Glowing green orb", inventory, () => updateInventory(inventory, inventoryElement));
        //player.loseHealth(10);
        //updateCharacterInfo(healthValueElement, drunknessValueElement);
     // },
    }
  ],
  image: "./public/Level7/frenchie3.png",
},
{//101
  story: "La boutique rayonne de milles tartes! Nymiria semble reconnaître l'odeur distinctive des tartes à la patate douce! Mission accomplie - vous lui payez sa tarte favorite",
  options: [
    {
      text: "'On a trouvé tes tartes! es tu contente ??'",
      nextState: 102
    }
  ], // Empty options, as the game ends here
  image: "./public/Level7/frenchie2.jpg",
},
{//102
  story: "'Bande d'humains imbéciles, vous êtes tombés dans le piège, je n'avais pas besoin des tartes pour retrouver mes parents, je voulais juste m'offrir mon snack préféré une fois de plus!!' - Nymiria part en courant la tarte au bec... Vous vous êtes fait complètement avoir",
  options: [{
      text: "retourner se poser...",
      nextState: 30
    },
  ], // Empty options, as the game ends here
  image: "./public/Level7/frenchie7.png",
},
// Add more game states here

{//103 NESxT EMPTY STATE AFTER NYMIRIA QUEST - FOR TAM first state
  story: "Tamara décroche, elle te dit 'j'ai une urgence chez le fleuriste, quelqu'un nous a volé nos roses et c'est la fête des mères demain!... Tiens, tu pourrais aller récupérer des roses chez notre distributeur, il est à Montreuil, tu pourrais nous dépanner ? Tu nous sauverais la vie!'",
  options: [{
      text: "Accepter d'aller chercher les roses",
      onChoose: () => {
        player.gainDrunkness(40);
        updateCharacterInfo(healthValueElement, drunknessValueElement);
      },
      nextState: 105
    },
    {
      text: "Aller direct au Chat noir",
      nextState: 78
    },
    {
      text: "Appeler quelqu'un d'autre",
      nextState: 63
    },
  ],
  image: "./public/Level1/menilmontantMetro.jpg",
},

{//104
  story: "Un autre client vous a entendu et connaît la meilleur boutique de tartes, dehors ils vous donne son nom: 'tarte-up nation'!",
  options: [{
      text: "Aller à tarte-up nation",
      nextState: 101
      },
  ],
  image: "./public/Level7/frenchie6.png",
},

{// TAM quest state 2 - go get the roses
  story: "Tu arrives à l'adresse envoyée. ROSES RECUP QUEST",
  options: [{
      text: "1",
      nextState: 106
    },
    {
      text: "2",
      nextState: 107
    },
    {
      text: "3",
      nextState: 108
    }
  ],
  image: "./public/Level1/guitarPick.jpg",
},

{//106
  story: "TAM STATE 2",
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

{//107
  story: "TAM STATE 3",
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

{//108
  story: "TAM STATE 4",
  options: [{
      text: "Je le prends pour voir si je peux retrouver trouver à qui il appartien après la pièce",
      nextState: 10,
      onChoose: () => {
        addItem({ name: "portable inconnu", icon: "./public/items/phone.png" });
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

{//109
  story: "Tu ranges le téléphone dans ton sac, tu verras plus tard",
  options: [{
      text: "Ok",
      nextState: 20
    },
  ],
  image: "./public/Level1/theatre.jpg",
},

];

export default gameStates10;