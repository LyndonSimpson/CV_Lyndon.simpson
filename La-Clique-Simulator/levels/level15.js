import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates15 = [

    { //161 NEW STORYLINE QUEST START HERE -- COURABALOU -- harmonica - ghost of moustafa
      story: "NEW STORYLINE QUEST STARTING  -- COURABALOU -- harmonica - ghost of moustafa",
      options: [{
          text: "Oui...courabalou",
          nextState: 1
        },
        {
          text: "Non...courabalou",
          nextState: 1
        },
      ],
      image: "./public/Level3/pigeon.png",
    },

    { //162 
      story: "EMPTY",
      options: [{
          text: "option 1",
          nextState: 1
        },
        {
          text: "option 2",
          nextState: 1
        },
      ],
      image: "./public/Level3/pigeon.png",
    },

    { //163
      story: "EMPTY state again here",
      options: [{
          text: "option 1",
          nextState: 1
        },
        {
          text: "option 2",
          nextState: 1
        },
      ],
      image: "./public/Level3/pigeon.png",
    },

    { //164
      story: "EMPTY state 3",
      options: [{
          text: "option 1",
          nextState: 1
        },
        {
          text: "option 2",
          nextState: 1
        },
      ],
      image: "./public/Level3/pigeon.png",
    },

  ];
  
  export default gameStates15;