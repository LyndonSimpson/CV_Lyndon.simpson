import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates4 = [

    { //33
      story: "Le pigeon parle : 'tremblez pauvres mortels, je ne vous laisserais tranquile dans cette vie que si vous arrivez à répondre à l'énigme suivante. Vous êtes prêt ?'",
      options: [{
          text: "Oui...",
          nextState: 34
        },
        {
          text: "Non...",
          nextState: 34
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //34
      story: "L'énigme est la suivante : 'Je suis un pigeon, mais je ne vole pas et je ne roucoule pas. Que suis-je ?'",
      options: [{
          text: "Un pigeon en statue",
          nextState: 35
        },
        {
          text: "Un pigeon voyageur perdu",
          nextState: 36
        },
        {
          text: "Un pigeon jouant aux échecs",
          nextState: 36
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //35
      story: "'Bravo, vous avez réussi, tenez, prenez cet objet sacré' - Le pigeon avance sa patte et dévoile Un vieux ticket de métro",
      options: [{
          text: "Accepter le ticket de métro sacré du pigeon",
          onChoose: () => {
            addItem("vieux ticket de métro", inventory, () => updateInventory(inventory, inventoryElement));
          },
          nextState: 37
        },
        {
          text: "Refuser son ticket tout pourri",
          nextState: 36
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //36
      story: "'BLASPHÈME - 1 an de maleur de caca de pigeon : mes confrères vous arroseront - dans un an je reviens tester votre âme' Le pigeon dispraît dans un nuage de fumée - *POOF* - Omran rentre chez lui pour le moment, il a besoin de se calmer après avoir encore rencontré son nemesis",
      options: [{
          text: "Aller au chat noir!",
          nextState: 13
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //37
      story: "'il vous portera bonheur dans votre quête à la déglingue ce soir, bon courage!' - Le pigeon disparaît dans un nuage de fumée *POOF* - Omran a besoin d'aller se calmer chez lui après cette rencontre avec son nemesis...",
      options: [{
          text: "Aller au chat noir!",
          nextState: 13
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //38
      story: "que veux tu boire?",
      options: [{
          text: "Bière",
          onChoose: () => {
            player.gainDrunkness(10);
            updateCharacterInfo(healthValueElement, drunknessValueElement);
          },
          nextState: 16
        },
        {
          text: "Vin",
          onChoose: () => {
            player.gainDrunkness(10);
            updateCharacterInfo(healthValueElement, drunknessValueElement);
          },
          nextState: 17
        },
        {
          text: "Calva",
          onChoose: () => {
            player.gainDrunkness(20);
            updateCharacterInfo(healthValueElement, drunknessValueElement);
          },
          nextState: 18
        },
      ],
      image:"./public/Level3/menu.png",
    },
  
    { //39
      story: "LEVEL 2 CONNECTED",
      options: [{
          text: "Oui",
          nextState: 1
        },
        {
          text: "Non",
          nextState: 2
        },
      ],
    },
  
    { //40
      story: "LEVEL 2 CONNECTED",
      options: [{
          text: "Oui",
          nextState: 1
        },
        {
          text: "Non",
          nextState: 2
        },
      ],
    },
  
    { //41
      story: "LEVEL 2 CONNECTED",
      options: [{
          text: "Oui",
          nextState: 1
        },
        {
          text: "Non",
          nextState: 2
        },
      ],
    },
  
    { //42
      story: "LEVEL 2 CONNECTED",
      options: [{
          text: "Oui",
          nextState: 1
        },
        {
          text: "Non",
          nextState: 2
        },
      ],
    },
  
    { //43
      story: "LEVEL 2 CONNECTED",
      options: [{
          text: "Oui",
          nextState: 1
        },
        {
          text: "Non",
          nextState: 2
        },
      ],
    },
  ];
  
  export default gameStates4;