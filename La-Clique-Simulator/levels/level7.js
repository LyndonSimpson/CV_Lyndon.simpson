import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates7 = [

  { //66 the one for Omran replace 39 links
    story: "Qui d'autre veux tu appeler ?",
      options: [{
        text: "Gabriel",
        nextState: 4
      },
      {
        text: "Pierre",
        nextState: 8
      },
      {
        text: "Tam",
        nextState: 63
      },
      {
        text: "Clement",
        nextState: 56
      },
      {
        text: "Lyndon",
        nextState: 80
      },
      {
        text: "Seb",
        nextState: 40
      },
      ],
      image: "./public/Level1/introScene.jpg",
  },

  { //67 //the one for gabriel 
    story: "Qui d'autre veux tu appeler ?",
      options: [{ // need 3 branching themes here
        text: "Omran",
        nextState: 3, 
      },
      {
        text: "Pierre",
        nextState: 8
      },
      {
        text: "Tam",
        nextState: 63
      },
      {
        text: "Clement",
        nextState: 56
      },
      {
        text: "Lyndon",
        nextState: 80
      },
      {
        text: "Seb",
        nextState: 40
      },
      ],
      image: "./public/Level1/introScene.jpg",
  },

  { //68 the one for Pierre
    story: "Qui d'autre veux tu appeler ?",
      options: [{ // need 3 branching themes here
        text: "Omran",
        nextState: 3, 
      },
      {
        text: "Gabriel",
        nextState: 4
      },
      {
        text: "Tam",
        nextState: 63
      },
      {
        text: "Clement",
        nextState: 56
      },
      {
        text: "Lyndon",
        nextState: 80
      },
      {
        text: "Seb",
        nextState: 40
      },
      ],
      image: "./public/Level1/introScene.jpg",
  },

  { //69 the one for Seb
    story: "Qui d'autre veux tu appeler ?",
      options: [{ // need 3 branching themes here
        text: "Omran",
        nextState: 3, 
      },
      {
        text: "Gabriel",
        nextState: 4
      },
      {
        text: "Pierre",
        nextState: 8
      },
      {
        text: "Tam",
        nextState: 63
      },
      {
        text: "Clement",
        nextState: 56
      },
      {
        text: "Lyndon",
        nextState: 80
      },
      ],
      image: "./public/Level1/introScene.jpg",
  },

  { //70 the one for Clement
    story: "Qui d'autre veux tu appeler ?",
      options: [{ // need 3 branching themes here
        text: "Omran",
        nextState: 3, 
      },
      {
        text: "Gabriel",
        nextState: 4
      },
      {
        text: "Pierre",
        nextState: 8
      },
      {
        text: "Tam",
        nextState: 63
      },
      {
        text: "Lyndon",
        nextState: 80
      },
      {
        text: "Seb",
        nextState: 40
      },
      ],
      image: "./public/Level1/introScene.jpg",
  },

  { //71 the one for Tamara
    story: "Qui d'autre veux tu appeler ?",
      options: [{ // need 3 branching themes here
        text: "Omran",
        nextState: 3, 
      },
      {
        text: "Gabriel",
        nextState: 4
      },
      {
        text: "Pierre",
        nextState: 8
      },
      {
        text: "Clement",
        nextState: 56
      },
      {
        text: "Lyndon",
        nextState: 80
      },
      {
        text: "Seb",
        nextState: 40
      },
      ],
      image: "./public/Level1/introScene.jpg",
  },

  { //72 the one for Lyndon
    story: "Qui d'autre veux tu appeler ?",
      options: [{ // need 3 branching themes here
        text: "Omran",
        nextState: 3, 
      },
      {
        text: "Gabriel",
        nextState: 4
      },
      {
        text: "Pierre",
        nextState: 8
      },
      {
        text: "Tam",
        nextState: 63
      },
      {
        text: "Clement",
        nextState: 56
      },
      {
        text: "Seb",
        nextState: 40
      },
      ],
      image: "./public/Level1/introScene.jpg",
  },

  { //73 OMRAN LINK
    story: "tu te mets en route pour le chat noir, tranquilement, tu marches rue JPT",
    options: [{
        text: "Ok",
        nextState: 13
      },
      {
        text: "Appeler quelqu'un d'autre avant d'aller au Chat noir",
        nextState: 66
      },
    ],
    image: "./public/street.jpg",
  },

  { //74 GAB LINK
    story: "tu te mets en route pour le chat noir, tranquilement, tu marches rue JPT",
    options: [{
        text: "Ok",
        nextState: 13
      },
      {
        text: "Appeler quelqu'un d'autre avant d'aller au Chat noir",
        nextState: 67
      },
    ],
    image: "./public/street.jpg",
  },

  { //75 PIERRE LINK
    story: "tu te mets en route pour le chat noir, tranquilement, tu marches rue JPT",
    options: [{
        text: "Ok",
        nextState: 13
      },
      {
        text: "Appeler quelqu'un d'autre avant d'aller au Chat noir",
        nextState: 68
      },
    ],
    image: "./public/street.jpg",
  },

  { //76 SEB LINK
    story: "tu te mets en route pour le chat noir, tranquilement, tu marches rue JPT",
    options: [{
        text: "Ok",
        nextState: 13
      },
      {
        text: "Appeler quelqu'un d'autre avant d'aller au Chat noir",
        nextState: 69
      },
    ],
    image: "./public/street.jpg",
  },
];

export default gameStates7;