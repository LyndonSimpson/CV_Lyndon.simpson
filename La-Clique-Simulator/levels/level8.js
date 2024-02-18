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
  
    { //80 Lyndon first quest state
      story: "Lyndon te dit qu'il a un grave problème... un enemi de la clique s'est mis à hacker tous leurs portables et commence à foutre la merde. Il a besoin de ton aide! Tu peux aller l'aider ou aller au Chat noir pour le rejoindre plus tard",
      options: [{
        text: "Rejoindre Lyndon dans son CyberBunker",
        nextState: 81
      },
      {
        text: "Aller direct au Chat noir",
        nextState: 79
      },
      {
        text: "Appeler quelqu'un d'autre",
        nextState: 63
      },
    ],
    image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //81 
      story: "tu arrives au CyberBunker de Lyndon : 'Ah, te voilà enfin ! Notre réseau est sous attaque. Le PIGEON a réussi à infiltrer notre système. On a besoin de toi pour reprendre le contrôle'",
      options: [{
        text: "'Comment puis-je aider ?'",
        nextState: 82
      },
      {
        text: "'OMG ça a l'air beaucoup trop compliqué pour moi ça, je vais au Chat noir, on se rejoint plus tard!'",
        nextState: 79
      },
    ],
    image: "./public/Level5/lyndon4.png",
    },
  
    { //82
      story: "'On doit d'abord localiser le point d'entrée du hack. J'ai isolé trois serveurs suspects. Lequel veux-tu examiner en premier ?'",
      options: [{
          text: "Serveur Alpha",
          nextState: 83
        },
        {
          text: "Serveur Beta",
          nextState: 84
        },
        {
          text: "Serveur Gamma",
          nextState: 85
        },
      ],
      image: "./public/Level5/lyndon2.png",
    },
  
    { //83
      story: "Tu examines le Serveur Alpha, mais ne trouve rien de suspect. - 'Bien tenté, mais il semble que ce ne soit pas le bon serveur. Essayons autre chose'",
      options: [{
          text: "Serveur Beta",
          nextState: 84
        },
        {
          text: "Serveur Gamma",
          nextState: 86
        },
      ],
      image: "./public/Level5/lyndon2.png",
    },
  
    { //84
      story: "Tu examines le Serveur Beta et découvre une faille de sécurité. - 'Excellent ! Tu as trouvé la faille. Maintenant, utilisons-la à notre avantage pour tracer le PIGEON'",
      options: [{
          text: "Montrer la faille à Lyndon",
          nextState: 89
        },
      ],
      image: "./public/Level5/lyndon2.png",
    },
  
    { //85
      story: "Tu examines le Serveur Gamma, mais ne trouve rien de suspect. - 'Bien tenté, mais il semble que ce ne soit pas le bon serveur. Essayons autre chose'",
      options: [{
          text: "Serveur Alpha",
          nextState: 86
        },
        {
          text: "Serveur Beta",
          nextState: 84
        },
      ],
      image: "./public/Level5/lyndon2.png",
    },
  
    { //86
      story: "Tu testes l'autre, mais après deux essais ratés, le  système se bloque par sécurité, PIGEON a donc réussi à nous couper l'accès au serveur",
      options: [{
          text: "Tenter un contre hack",
          nextState: 87
        },
        {
          text: "Euh ok, OSEF. Je veux aller au Chat noir!",
          nextState: 79
        },
      ],
      image: "./public/Level5/lyndon3.png",
    },
  
    { //87
      story: "Tu tentes un hack contre le PIGEON mais ça échoue - le PIGEON arrive à hack la réalité de ce jeu auquel tu es en train de jouer et décide de te tuer",
      options: [{
          text: "Quoi?!...",
          nextState: 88
        },
      ],
      image: "./public/Level5/Lyndon1.png",
    },
  ];
  
  export default gameStates8;