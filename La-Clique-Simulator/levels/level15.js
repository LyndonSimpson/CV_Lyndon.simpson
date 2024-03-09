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

  ];
  
  export default gameStates15;