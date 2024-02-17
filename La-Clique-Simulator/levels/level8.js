import { addItem, removeItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates8 = [

    { //77 CLEMENT LINK
      story: "tu te mets en route pour le chat noir, tranquilement, tu marches rue JPT",
    options: [{
        text: "Ok",
        nextState: 13
      },
      {
        text: "Appeler quelqu'un d'autre avant d'aller au Chat noir",
        nextState: 70
      },
    ],
    image: "./public/street.jpg",
    },
  
    { //78 TAM LINK
      story: "tu te mets en route pour le chat noir, tranquilement, tu marches rue JPT",
    options: [{
        text: "Ok",
        nextState: 13
      },
      {
        text: "Appeler quelqu'un d'autre avant d'aller au Chat noir",
        nextState: 71
      },
    ],
    image: "./public/street.jpg",
    },
  
    { //79 LYNDON LINK
      story: "tu te mets en route pour le chat noir, tranquilement, tu marches rue JPT",
    options: [{
        text: "Ok",
        nextState: 13
      },
      {
        text: "Appeler quelqu'un d'autre avant d'aller au Chat noir",
        nextState: 72
      },
    ],
    image: "./public/street.jpg",
    },
  
    { //80 NEW - NOT ATTRIBUTED YET
      story: "'T'as intérêt à pas me mito! Si c'est une autre magouille de shake ce sera pas just elui qui sera dans la merde!'",
      options: [{
          text: "'T'inquiètes Shake m'a dit que tout était bon! tu verras' - Rendre le portable et partir au Chat noir",
          nextState: 39
        },
      ],
      image: "./public/Level2/mafiaPic.jpg",
    },
  
    { //81
      story: "Le garde du corps te prends le portable 'T'as intérêt à dire la vérité, ou le patron va être obligé de me demander qui t'es, si tu vois ce que je veux dire'",
      options: [{
          text: "'Promis je sais rien! - partir au Chat noir",
          nextState: 39
        },
      ],
      image: "./public/Level2/mafiaPic.jpg",
    },
  
    { //82
      story: "Soirée boîte de nuit CONNECTED",
      options: [{
          text: "Oui",
          nextState: 1
        },
        {
          text: "Non",
          nextState: 2
        },
      ],
      image: "./public/Level2/nightClub.jpg",
    },
  
    { //83
      story: "Soirée appart CONNECTED",
      options: [{
          text: "Oui",
          nextState: 1
        },
        {
          text: "Non",
          nextState: 2
        },
      ],
      image: "./public/Level2/appartGame.jpg",
    },
  
    { //84
      story: "Concert jazz manouche CONNECTED",
      options: [{
          text: "Oui",
          nextState: 1
        },
        {
          text: "Non",
          nextState: 2
        },
      ],
      image: "./public/Level2/jazzManouche.jpg",
    },
  
    { //85
      story: "Vous êtes de nouveau posey sur les marches devant l'église de Ménilmontant lorsque soudainement...",
      options: [{
          text: "Quoi?! Soudainement quoi ??!!",
          nextState: 31
        },
      ],
      image: "./public/Level1/OmranBiere.png",
    },
  
    { //86
      story: "LE PIGEON QUI A MARTYRISÉ OMRAN (ET DONT GAB A MÊME CRÉÉ OMOULE SIMULATOR, PRÉCURSEUR DE CE JEU!!)",
      options: [{
          text: "Omoule simulator, hein ? bon osef, de toute on va le goumer ce pigeon",
          nextState: 32
        },
        {
          text: "PAS LUI! ON VA LUI FAIRE SA FÊTE À CE BÂTARD!!",
          nextState: 32
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //87
      story: "'MAIS MEC TEUSSERIEU LA IL EST IMBATABLE CE PIGEON!!",
      options: [{
          text: "Mais si t'inquiètes, on va le gérer!",
          nextState: 33
        },
        {
          text: "Bon viens on se casse alors!",
          nextState: 33
        },
      ],
      image: "./public/Level3/omouleVener.png",
    },
  ];
  
  export default gameStates8;