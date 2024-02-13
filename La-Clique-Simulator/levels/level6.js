import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates6 = [

    { //55
      story: "Tu refuses le cruiser et tu te mets en route pour le Chat noir, Seb te rejoint plus tard!",
      options: [{
          text: "Ok",
          nextState: 39
        },
      ],
      image: "./public/Level4/flyer2.jpg",
    },
  
    { //56
      story: "A REMPLIR",
      options: [{
          text: "Ok",
          nextState: 47
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //57
      story: "A REMPLIR",
      options: [{
          text: "Ok",
          nextState: 39
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //58
      story: "A REMPLIR",
      options: [{
          text: "Aller inscrire Seb à la table des juges et se poser regarder les premières descentes",
          nextState: 48
        },
        {
          text: "Conviancre Seb que c'est juste dangeureux, autant aller tranquil boire une bière au Chat noir",
          nextState: 39
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //59
      story: "A REMPLIR",
      options: [{
          text: "lui donner une flasque de rhum pour qu'il en boive un peu",
          nextState: 49
        },
        {
          text: "Lui donner des claque doigts pour dérouter ses adversaires pendant la course",
          nextState: 50
        },
        {
          text: "Lui donner une pièce porte bonheur",
          nextState: 51
        },
        {
          text: "Lui proposer de faire la course avec lui pour le motiver (tu as un coup de folie)",
          nextState: 52
        },
        {
          text: "Conviancre Seb que c'est juste dangeureux, il est encore temps de faire demi tour: autant aller tranquil boire une bière au Chat noir",
          nextState: 39
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //60
      story: "A REMPLIR",
      options: [{
          text: "Ok",
          nextState: 53
        },
      ],
      image:"./public/Level3/menu.png",
    },
  
    { //61
      story: "A REMPLIR",
      options: [{
          text: "Ok",
          nextState: 13
        },
      ],
      image: "./public/street.jpg",
    },
  
    { //62
      story: "A REMPLIR",
      options: [{
          text: "Ok, le rejoindre aux buttes",
          nextState: 41
        },
        {
          text: "Aller direct au Chat noir",
          nextState: 39
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //63
      story: "A REMPLIR",
      options: [{
          text: "Ok",
          nextState: 1
        },
      ],
      image: "./public/gameOver.jpg",
      music: "./music/merde.mp3",
    },
  
    { //64
      story: "A REMPLIR",
      options: [{
          text: "Accepter le skate",
          nextState: 54
        },
        {
          text: "Refuser le skate",
          nextState: 55
        },
      ],
    },
  
    { //65
      story: "A REMPLIR",
      options: [{
          text: "Ok",
          nextState: 44
        },
      ],
    },
  ];
  
  export default gameStates6;