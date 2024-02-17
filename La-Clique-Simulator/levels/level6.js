import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates6 = [

    { //55
      story: "Tu refuses le cruiser et tu te mets en route pour le Chat noir, Seb te rejoint plus tard!",
      options: [{
          text: "Ok",
          nextState: 76
        },
      ],
      image: "./public/Level4/flyer2.jpg",
    },
  
    { //56
      story: "Clément t'invite à une soirée unique dans son studio d'enregistrement. Le studio, connu sous le nom de 'The Crunchy Sound', est célèbre non seulement pour sa qualité acoustique mais aussi pour être le berceau du groupe de musique le plus décalé de la ville : Toaster",
      options: [{
          text: "Aller au studio d'enregistrement",
          nextState: 57
        },
        {
          text: "Aller direct au Chat noir",
          nextState: 77
        },
        {
          text: "Appeler quelqu'un d'autre",
          nextState: 63
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //57
      story: "À peine la porte du studio franchie, tu es accueilli par une mélodie chaotique mais étrangement accrocheuse. Clément, le sourire aux lèvres, te fait signe de s'approcher. 'Tu arrives juste à temps pour l'enregistrement de notre dernier tube, 'Grilled Cheese Symphony'! Prêt à mettre la main à la pâte? Clément te propose trois instruments insolites : une guitare en forme de baguette, un synthétiseur qui produit des sons de grille-pain",
      options: [{
          text: "Choisir la guitare en forme de baguette",
          onChoose: () => {
            addItem("vieille baguette", inventory, () => updateInventory(inventory, inventoryElement));
          },
          nextState: 58
        },
        {
          text: "Choisir le synthé grille-pain",
          onChoose: () => {
            addItem("funky toaster", inventory, () => updateInventory(inventory, inventoryElement));
          },
          nextState: 59
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //58
      story: "Tu as choisi la vieille baguette : Le son produit est si atroce qu'il déclenche l'alarme incendie, arrosant le studio et ses occupants. la guitare baguette fond avec l'eau, Clement te dit qu'il te rejoins plus tard au Chat noir",
      options: [{
          text: "Ok",
          nextState: 60
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //59
      story: "Tu as choisi le funky toaster : des sons croustillants qui manquaient à la chanson!! reconnaissant que tu es un prodige du grille-pain, le groupe te l'offre. Tu as trouvé ta passion. Clement te dit qu'il te rejoindra plus tard au Chat noir",
      options: [{
          text: "Ok",
          nextState: 60
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //60
      story: "avant de partir Clement te retient et te demande 'Attends, est ce que tu sais - ADD SMTG FUNNY HERE",
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
      story: "A REMPLIR -clement reserved state - go chat noir",
      options: [{
          text: "Ok",
          nextState: 77
        },
      ],
      image: "./public/street.jpg",
    },
  
    { //62
      story: "A REMPLIR -clement reserved state - go chat noir",
      options: [{
          text: "Ok",
          nextState: 77
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //63
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
        nextState: 8
      },
      {
        text: "Seb",
        nextState: 40
      },
      ],
      image: "./public/Level1/introScene.jpg",
    },
  
    { //64
      story: "Qui d'autre veux tu appeler ?",
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