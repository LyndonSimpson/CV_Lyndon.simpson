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
      story: "Clement phone call - accept or decline activité Clement (music related ?)",
      options: [{
          text: "Rejoindre activité Clement",
          nextState: 57
        },
        {
          text: "Aller direct au Chat noir",
          nextState: 39
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //57
      story: "Activité Clement accept object state",
      options: [{
          text: "accept",
          onChoose: () => {
            addItem("Clement quest item", inventory, () => updateInventory(inventory, inventoryElement));
         },
          nextState: 58
        },
        {
          text: "decline",
          nextState: 59
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //58
      story: "YOU ACCEPTED CLEMENT QUEST ITEM TEXT",
      options: [{
          text: "Ok",
          nextState: 60
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //59
      story: "YOU DECLINED CLEMENT QUEST ITEM TEXT",
      options: [{
          text: "Ok",
          nextState: 60
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //60
      story: "EXTRA CLEMENT QUEST STEP",
      options: [{
          text: "Oui",
          nextState: 61
        },
        {
          text: "Non",
          nextState: 62
        },
      ],
      image:"./public/Level3/menu.png",
    },
  
    { //61
      story: "A REMPLIR -clement reserved state",
      options: [{
          text: "Ok",
          nextState: 39
        },
      ],
      image: "./public/street.jpg",
    },
  
    { //62
      story: "A REMPLIR -clement reserved state",
      options: [{
          text: "Ok, le rejoindre aux buttes",
          nextState: 39
        },
        {
          text: "Aller direct au Chat noir",
          nextState: 39
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //63
      story: "A REMPLIR - first tamara state",
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