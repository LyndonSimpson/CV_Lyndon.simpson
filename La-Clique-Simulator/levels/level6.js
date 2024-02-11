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
      image: "./public/Level3/pigeon.png",
    },
  
    { //56
      story: "'Vazy, on y va, je t'accompagne! tu vas tout défoncer, tu descends ces rues depuis des années maintenant, quoi qu'il arrive ça sera marrant!' - Vous vous mettez en route pour le haut de la rue de belleville",
      options: [{
          text: "Ok",
          nextState: 47
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //57
      story: "Seb se décourage, mais au moins il reste en sécurité. Il ne peut pas t'accompagner au Chat noir directement Il doit diner avec sa famille et te rejoint plus tard",
      options: [{
          text: "Ok",
          nextState: 39
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //58
      story: "Vous arrivez tout en haut de la descente, il y beaucoup de monde, c'est tout un event! Il y a de la musique, des skateurs et une foule qui a hâte de voir de la descente!",
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
      story: "Les premiers skateurs se tapent la descente et ça à l'air énervé! Seb va se mettre en place. Tu peux l'aider en faisant une des choses suivantes :",
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
      story: "Se boit quelques gorgées de la flasque et se prépare à descendre la rue pour la course. Tu te choppes une bonne place pour regarder l'action",
      options: [{
          text: "Ok",
          nextState: 53
        },
      ],
      image:"./public/Level3/menu.png",
    },
  
    { //61
      story: "tu te mets en route pour le chat noir, tranquilement, tu marches rue JPT",
      options: [{
          text: "Ok",
          nextState: 13
        },
      ],
      image: "./public/street.jpg",
    },
  
    { //62
      story: "Seb te propose d'aller se poser aux buttes chaumont ou de le rejoindre plus tard au Chat noir",
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
      story: "Bah non, ça c'était vraiment pas une bonne idée, tu t'es éclaté par terre et maintenant t'es mort. Tu ne savais même pas faire du skate! Try again!",
      options: [{
          text: "Ok",
          nextState: 1
        },
      ],
      image: "./public/gameOver.jpg",
      music: "./music/merde.mp3",
    },
  
    { //64
      story: "Quelle descente incroyable!! Seb dégome tous ses adversaires, il remporte la première place - il Gagne un trophé et une planche de skate - mais il n'aime pas la planche de skate, il veut te l'offrir pour te remercier de l'avoir motivé",
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
      story: "Tu ranges le cruiser dans ton sac et te met en route pour le chat noir, Seb te rejoint plus tard!",
      options: [{
          text: "Ok",
          nextState: 44
        },
      ],
    },
  ];
  
  export default gameStates6;