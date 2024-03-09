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

{//103 FOR TAM first state
  story: "Tamara décroche, elle te dit 'j'ai une urgence chez le fleuriste, quelqu'un nous a volé nos roses et c'est la fête des mères demain!... Tiens, tu pourrais aller récupérer des roses chez notre distributeur, il est à Montreuil, tu pourrais nous dépanner ? Tu nous sauverais la vie!'",
  options: [{
      text: "Accepter d'aller chercher les roses",
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
  image: "./public/Level1/egliseMenilmontant.jpg",
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
  story: "Tu arrives à l'adresse envoyée. Mais on te dit qu'elles sont dans un autre entrepot...",
  options: [{
      text: "Aller à la nouvelle adrèsse",
      nextState: 106
    },
    {
      text: "Aller à la boutique de roses d'en face",
      nextState: 107
    },
    {
      text: "dire à Tam qu'on a pas réussi et aller au Chat noir",
      nextState: 108
    }
  ],
  image: "./public/Level1/guitarPick.jpg",
},

{//106
  story: "tu arrives à la nouvelle adrèsse, RECUP ROSES END QUEST",
  options: [{
      text: "Go to next state",
      nextState: 107
    },
  ],
  image: "./public/Level1/happyNPC.jpg",
},

{//107
  story: "RECUP ROSES END QUEST",
  options: [{
      text: "Wrong option",
      nextState: 108
    },
    {
      text: "Right option",
      nextState: 75
    },
    {
      text: "Joker",
      nextState: 63
    },
  ],
  image: "./public/Level1/egliseMenilmontant.jpg",
},

{//108
  story: "Right option state TAM QUEST",
  options: [{
      text: "1",
      nextState: 1
    },
    {
      text: "2",
      nextState: 1
    },
  ],
  image: "./public/Level1/theatre.jpg",
},

{//109
  story: "Tarte me up n'a pas de tartes à la patate douce comme Nymiria les aime, mais ils ont patate douce noix de pécan...",
  options: [{
      text: "Acheter cette tarte, ça fera l'affaire!",
      nextState: 99
    },
    {
      text: "Essayer tarte-up nation!",
      nextState: 101
    },
  ],
  image: "./public/Level7/frenchie6.png",
},

];

export default gameStates10;