import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates5 = [

    { //44
      story: "'Ouai en vrai je l'ai déjà fait tout seul mais j'essayais pas de gagner une compet, ça se fait mais c'est juste dangeureux'",
      options: [{
          text: "Convaincre Seb d'y aller",
          nextState: 45
        },
        {
          text: "Conviancre Seb que c'est juste dangeureux, autant aller tranquil boire une bière au Chat noir",
          nextState: 46
        },
      ],
      image: "./public/Level4/buttes.jpg",
    },
  
    { //45
      story: "'Vazy, on y va, je t'accompagne! tu vas tout défoncer, tu descends ces rues depuis des années maintenant, quoi qu'il arrive ça sera marrant!' - Vous vous mettez en route pour le haut de la rue de belleville",
      options: [{
          text: "Ok",
          nextState: 47
        },
      ],
      image: "./public/Level4/buttes.jpg",
    },
  
    { //46
      story: "Seb se décourage, mais au moins il reste en sécurité. Il ne peut pas t'accompagner au Chat noir directement Il doit diner avec sa famille et te rejoint plus tard",
      options: [{
          text: "Ok",
          nextState: 76
        },
      ],
      image: "./public/Level4/thinking2.jpg",
    },
  
    { //47
      story: "Vous arrivez tout en haut de la descente, il y beaucoup de monde, c'est tout un event! Il y a de la musique, des skateurs et une foule qui a hâte de voir de la descente!",
      options: [{
          text: "Aller inscrire Seb à la table des juges et se poser regarder les premières descentes",
          nextState: 48
        },
        {
          text: "Conviancre Seb que c'est juste dangeureux, autant aller tranquil boire une bière au Chat noir",
          nextState: 76
        },
      ],
      image: "./public/Level4/race2.jpg",
    },
  
    { //48
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
          onChoose: () => {
            addItem({ name: "'I died' T-shirt", icon: "./public/items/shirt1.png" });
            updateInventory();
          },
          nextState: 52
        },
        {
          text: "Conviancre Seb que c'est juste dangeureux, il est encore temps de faire demi tour: autant aller tranquil boire une bière au Chat noir",
          nextState: 76
        },
      ],
      image: "./public/Level4/thinking2.jpg",
    },
  
    { //49
      story: "Seb boit quelques gorgées de la flasque et se prépare à descendre la rue pour la course. Tu te choppes une bonne place pour regarder l'action",
      options: [{
          text: "Ok",
          nextState: 53
        },
      ],
      image:"./public/Level4/thinking2.jpg",
    },
  
    { //50
      story: "Quelle idée, il se fait cramer à essayer de jeter des claques doigts sur les autres participants et se fait éliminer! Il a besoin de se poser chez lui après cette défaite et te rejoint plus tard au Chat noir",
      options: [{
          text: "Ok",
          nextState: 76
        },
      ],
      image: "./public/Level4/flyer2.jpg",
    },
  
    { //51
      story: "Eh bah la pièce porte bonheur a pas changé grand chose, c'était un peu une idée toute nulle finalement! Seb a besoin de se poser chez lui après cette défaite et te rejoint plus tard au Chat noir",
      options: [{
          text: "Ok",
          nextState: 76
        },
      ],
      image: "./public/Level4/flyer2.jpg",
    },
  
    { //52
      story: "Bah non, ça c'était vraiment pas une bonne idée, tu t'es éclaté par terre et maintenant t'es mort. Tu ne savais même pas faire du skate! Try again!",
      options: [{
          text: "Ok",
          nextState: 0
        },
      ],
      image: "./public/gameOver.jpg",
      music: "./music/merde.mp3",
    },
  
    { //53
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
      image: "./public/Level4/win2.jpg",
    },
  
    { //54
      story: "Tu ranges le cruiser dans ton sac et te met en route pour le chat noir, Seb te rejoint plus tard!",
      options: [{
          text: "Ok",
          onChoose : () => {
            addItem({ name: "cruiser", icon: "./public/items/cruiser.png", description: "Cruiser de la marque GLOBE noir avec des rayures jaunes et bleues. Il sent le neuf!" });
            updateInventory();
          },
          nextState: 76
        },
      ],
      image: "./public/Level4/flyer2.jpg",
    },
  ];
  
  export default gameStates5;