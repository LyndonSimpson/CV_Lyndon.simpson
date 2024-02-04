const gameStates = [{
    story: "Are you ready for your neon journey?",
    options: [{
        text: "Yes",
        nextState: 1
      },
      {
        text: "No",
        nextState: 2
      },
    ],
  },
  {
    story: "Your neon journey begins... you find a strange looking device on the ground, it's making a regular beeping noise and is flashing a small green glow matching the sound, you don't remember how you got here pr you are, everything is dark",
    options: [{
        text: "I try to pick up",
        nextState: 3,
        onChoose: () => addItem("Glowing green orb"),
      },
      {
        text: "i try to ignore it and move forward",
        nextState: 4
      },
    ],
    image: "./public/ByYCL2GQEKburP0XZSj7--1--72pb5.jpg",
  },
  {
    story: "Come again another day.",
    options: [], // Empty options, as the game ends here
  },
  {
    story: "The light mooves up your hand, you can now see your hand glowing a neon green blinding color, everything else is still dark",
    options: [{
        text: "I try to move forward to see what happens",
        nextState: 3
      },
      {
        text: "I try to make a fist and move my hand around",
        nextState: 4
      },
    ], // Empty options, as the game ends here
    image: "./public/unnamed (1).jpg",
  },
  // Add more game states here
];



const gameStates1 =  [
  {//4
  story: "Tu appelles les autres pour savoir ce qu'ils font. Samir répond et te dit qu'ils sont à un bar près de la place de la République. Tu décides de les rejoindre.",
  options: [
  {
  text: "Aller au bar",
  nextState: 5
  },
  {
  text: "Changer d'avis et rester avec Omran",
  nextState: 3
  },
  ],
  image: "./public/phoneCall.jpg",
  },
  {//5
  story: "Tu arrives au bar et retrouves Samir, Yasmine et Sarah. Ils te proposent de participer à un quiz. Veux-tu y participer ?",
  options: [
  {
  text: "Oui",
  nextState: 6
  },
  {
  text: "Non",
  nextState: 7
  },
  ],
  image: "./public/bar.jpg",
  },
  {//6
  story: "Vous participez au quiz et vous amusez bien. À la fin du quiz, votre équipe termine en deuxième position et vous gagnez un bon pour des consommations gratuites. Que fais-tu ?",
  options: [
  {
  text: "Boire et fêter avec tes amis",
  nextState: 8
  },
  {
  text: "Récupérer le bon et partir",
  nextState: 9
  },
  ],
  image: "./public/quiz.jpg",
  },
  {//7
  story: "Tu décides de ne pas participer au quiz et de juste passer du temps avec tes amis. Vous discutez et rigolez toute la soirée.",
  options: [
  {
  text: "Rentrer à la maison",
  nextState: 10
  },
  {
  text: "Aller dans un autre bar",
  nextState: 11
  },
  ],
  image: "./public/bar.jpg",
  },
  {//8
  story: "Vous buvez et faites la fête avec vos amis. La soirée est mémorable, mais tu te réveilles le lendemain avec une gueule de bois.",
  options: [
  {
  text: "Prendre un remède",
  nextState: 12
  },
  {
  text: "Dormir toute la journée",
  nextState: 13
  },
  ],
  image: "./public/hangover.jpg",
  },
  {//9
  story: "Tu récupères le bon pour les consommations gratuites et décides de partir. Tes amis sont déçus, mais tu leur promets de revenir plus tard.",
  options: [
  {
  text: "Retourner voir Omran",
  nextState: 3
  },
  {
  text: "Rentrer chez toi",
  nextState: 14
  },
  ],
  image: "./public/leavingBar.jpg",
  },
  {//10
  story: "Tu rentres chez toi et te prépares pour aller te coucher. Tu te sens bien après cette soirée entre amis.",
  options: [
  {
  text: "Dormir",
  nextState: 15
  },
  ],
  image: "./public/home.jpg",
  },
  {//11
  story: "Vous décidez d'aller dans un autre bar pour continuer la soirée. Le nouvel endroit est animé et vous y dansez jusqu'à l'aube.",
  options: [
  {
  text: "Rentrer chez toi",
  nextState: 14
  },
  {
  text: "Prendre un café pour rester éveillé",
  nextState: 16
  },
  ],
  image: "./public/dancing.jpg",
  },
  {//12
  story: "Tu prends un remède contre la gueule de bois et te sens beaucoup mieux. Tu décides d'appeler tes amis pour voir ce qu'ils font aujourd'hui.",
  options: [
  {
  text: "Appeler Samir",
  nextState: 17
  },
  {
  text: "Appeler Yasmine",
  nextState: 18
  },
  ],
  image: "./public/medicine.jpg",
  },
  {//13
  story: "Tu décides de dormir toute la journée pour récupérer de la soirée. Le lendemain, tu te réveilles en pleine forme.",
  options: [
  {
  text: "Appeler tes amis",
  nextState: 19
  },
  {
  text: "Passer la journée seul",
  nextState: 20
  },
  ],
  image: "./public/sleeping.jpg",
  },
  {//14
  story: "Tu rentres chez toi et te prépares pour dormir. Demain est un autre jour.",
  options: [
  {
  text: "Dormir",
  nextState: 15
  },
  ],
  image: "./public/home.jpg",
  },
  {//15
  story: "Tu te réveilles le lendemain, prêt pour une nouvelle journée. Quelle sera ta prochaine aventure ?",
  options: [], // Empty options, as the game ends here
  },
  {//16
  story: "Tu prends un café pour rester éveillé et continuer à profiter de la soirée avec tes amis. Cependant, tu finis par t'épuiser et rentres chez toi.",
  options: [
  {
  text: "Dormir",
  nextState: 15
  },
  ],
  image: "./public/coffee.jpg",
  },
  {//17
  story: "Tu appelles Samir et il te propose de venir jouer au football avec lui et quelques amis au parc.",
  options: [
  {
  text: "Aller jouer au football",
  nextState: 21
  },
  {
  text: "Décliner l'invitation",
  nextState: 22
  },
  ],
  image: "./public/phoneCall.jpg",
  },
  {//18
  story: "Tu appelles Yasmine et elle te propose d'aller voir un film au cinéma avec elle et Sarah.",
  options: [
  {
  text: "Aller au cinéma",
  nextState: 23
  },
  {
  text: "Décliner l'invitation",
  nextState: 22
  },
  ],
  image: "./public/phoneCall.jpg",
  },
  {//19
  story: "Tu appelles tes amis et vous décidez de passer la journée ensemble. Vous allez au parc pour un pique-nique et profitez du beau temps.",
  options: [
  {
  text: "Passer une belle journée",
  nextState: 15
  },
  ],
  image: "./public/picnic.jpg",
  },
  {//20
  story: "Tu décides de passer la journée seul et de te détendre chez toi. Tu regardes des films, lis un livre et te reposes.",
  options: [
    {
    text: "Passer une journée tranquille",
    nextState: 15
    },
    ],
    image: "./public/relaxing.jpg",
    },
    {//21
    story: "Tu rejoins Samir et ses amis au parc pour jouer au football. Vous passez un bon moment, transpirez et rigolez ensemble.",
    options: [
    {
    text: "Prendre une pause",
    nextState: 24
    },
    {
    text: "Continuer à jouer",
    nextState: 25
    },
    ],
    image: "./public/football.jpg",
    },
    {//22
    story: "Tu décides de ne pas rejoindre tes amis aujourd'hui et de profiter de ton temps libre pour faire quelque chose que tu aimes.",
    options: [
    {
    text: "Lire un livre",
    nextState: 26
    },
    {
    text: "Regarder une série",
    nextState: 27
    },
    ],
    image: "./public/freeTime.jpg",
    },
    {//23
    story: "Tu rejoins Yasmine et Sarah au cinéma pour voir un film. Vous prenez du pop-corn et des boissons avant de vous installer dans la salle.",
    options: [
    {
    text: "Apprécier le film",
    nextState: 15
    },
    ],
    image: "./public/cinema.jpg",
    },
    {//24
    story: "Vous faites une pause après avoir joué au football. Vous vous asseyez sur l'herbe et discutez de tout et de rien.",
    options: [
    {
    text: "Reprendre le jeu",
    nextState: 25
    },
    {
    text: "Rentrer chez toi",
    nextState: 14
    },
    ],
    image: "./public/park.jpg",
    },
    {//25
    story: "Vous continuez à jouer au football jusqu'à ce que le soleil se couche. Finalement, vous décidez qu'il est temps de rentrer chez vous.",
    options: [
    {
    text: "Rentrer chez toi",
    nextState: 14
    },
    ],
    image: "./public/football.jpg",
    },
    {//26
    story: "Tu passes ton temps libre à lire un livre passionnant. Tu te perds dans l'histoire et profites de cette évasion littéraire.",
    options: [
    {
    text: "Terminer le livre",
    nextState: 15
    },
    ],
    image: "./public/reading.jpg",
    },
    {//27
    story: "Tu décides de regarder une série que tu aimes. Tu te blottis sur le canapé avec des collations et passes la journée à te détendre.",
    options: [
    {
    text: "Terminer la série",
    nextState: 15
    },
    ],
    image: "./public/watchingSeries.jpg",
    },
    ];

export default gameStates1;



onChoose: () => {
  addItem("Glowing green orb", inventory, () => updateInventory(inventory, inventoryElement));
  player.loseHealth(10);
  updateCharacterInfo(healthValueElement, drunknessValueElement);
},





/// differents copiés collés ici



import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';


const gameStates1 =  [
  {//4
  story: "Tu appelles les autres pour savoir ce qu'ils font. Samir répond et te dit qu'ils sont à un bar près de la place de la République. Tu décides de les rejoindre.",
  options: [
  {
  text: "Aller au bar",
  onChoose: () => {
    addItem("Glowing green orb", inventory, () => updateInventory(inventory, inventoryElement));
    player.loseHealth(10);
    updateCharacterInfo(healthValueElement, drunknessValueElement);
  },
  nextState: 5
  },
  {
  text: "Changer d'avis et rester avec Omran",
  nextState: 3
  },
  ],
  image: "./public/HomeScreen.jpg",
  },
  {//5
  story: "Tu arrives au bar et retrouves Samir, Yasmine et Sarah. Ils te proposent de participer à un quiz. Veux-tu y participer ?",
  options: [
  {
  text: "Oui",
  nextState: 6
  },
  {
  text: "Non",
  nextState: 7
  },
  ],
  image: "./public/ByYCL2GQEKburP0XZSj7--1--72pb5.jpg",
  },
  {//6
  story: "Vous participez au quiz et vous amusez bien. À la fin du quiz, votre équipe termine en deuxième position et vous gagnez un bon pour des consommations gratuites. Que fais-tu ?",
  options: [
  {
  text: "Boire et fêter avec tes amis",
  nextState: 8
  },
  {
  text: "Récupérer le bon et partir",
  nextState: 9
  },
  ],
  },
  {//7
  story: "Tu décides de ne pas participer au quiz et de juste passer du temps avec tes amis. Vous discutez et rigolez toute la soirée.",
  options: [
  {
  text: "Rentrer à la maison",
  nextState: 10
  },
  {
  text: "Aller dans un autre bar",
  nextState: 11
  },
  ],
  },
  {//8
  story: "Vous buvez et faites la fête avec vos amis. La soirée est mémorable, mais tu te réveilles le lendemain avec une gueule de bois.",
  options: [
  {
  text: "Prendre un remède",
  nextState: 12
  },
  {
  text: "Dormir toute la journée",
  nextState: 13
  },
  ],
  },
  {//9
  story: "Tu récupères le bon pour les consommations gratuites et décides de partir. Tes amis sont déçus, mais tu leur promets de revenir plus tard.",
  options: [
  {
  text: "Retourner voir Omran",
  nextState: 3
  },
  {
  text: "Rentrer chez toi",
  nextState: 14
  },
  ],
  },
  {//10
  story: "Tu rentres chez toi et te prépares pour aller te coucher. Tu te sens bien après cette soirée entre amis.",
  options: [
  {
  text: "Dormir",
  nextState: 15
  },
  ],
  },
  {//11
  story: "Vous décidez d'aller dans un autre bar pour continuer la soirée. Le nouvel endroit est animé et vous y dansez jusqu'à l'aube.",
  options: [
  {
  text: "Rentrer chez toi",
  nextState: 14
  },
  {
  text: "Prendre un café pour rester éveillé",
  nextState: 16
  },
  ],
  },
  {//12
  story: "Tu prends un remède contre la gueule de bois et te sens beaucoup mieux. Tu décides d'appeler tes amis pour voir ce qu'ils font aujourd'hui.",
  options: [
  {
  text: "Appeler Samir",
  nextState: 17
  },
  {
  text: "Appeler Yasmine",
  nextState: 18
  },
  ],
  },
  {//13
  story: "Tu décides de dormir toute la journée pour récupérer de la soirée. Le lendemain, tu te réveilles en pleine forme.",
  options: [
  {
  text: "Appeler tes amis",
  nextState: 19
  },
  {
  text: "Passer la journée seul",
  nextState: 20
  },
  ],
  },
  {//14
  story: "Tu rentres chez toi et te prépares pour dormir. Demain est un autre jour.",
  options: [
  {
  text: "Dormir",
  nextState: 15
  },
  ],
  },
  {//15
  story: "Tu te réveilles le lendemain, prêt pour une nouvelle journée. Quelle sera ta prochaine aventure ?",
  options: [], // Empty options, as the game ends here
  },
  {//16
  story: "Tu prends un café pour rester éveillé et continuer à profiter de la soirée avec tes amis. Cependant, tu finis par t'épuiser et rentres chez toi.",
  options: [
  {
  text: "Dormir",
  nextState: 15
  },
  ],
  },
  {//17
  story: "Tu appelles Samir et il te propose de venir jouer au football avec lui et quelques amis au parc.",
  options: [
  {
  text: "Aller jouer au football",
  nextState: 21
  },
  {
  text: "Décliner l'invitation",
  nextState: 22
  },
  ],
  },
  {//18
  story: "Tu appelles Yasmine et elle te propose d'aller voir un film au cinéma avec elle et Sarah.",
  options: [
  {
  text: "Aller au cinéma",
  nextState: 23
  },
  {
  text: "Décliner l'invitation",
  nextState: 22
  },
  ],
  },
  {//19
  story: "Tu appelles tes amis et vous décidez de passer la journée ensemble. Vous allez au parc pour un pique-nique et profitez du beau temps.",
  options: [
  {
  text: "Passer une belle journée",
  nextState: 15
  },
  ],
  },
  {//20
  story: "Tu décides de passer la journée seul et de te détendre chez toi. Tu regardes des films, lis un livre et te reposes.",
  options: [
    {
    text: "Passer une journée tranquille",
    nextState: 15
    },
    ],
    },
    {//21
    story: "Tu rejoins Samir et ses amis au parc pour jouer au football. Vous passez un bon moment, transpirez et rigolez ensemble.",
    options: [
    {
    text: "Prendre une pause",
    nextState: 24
    },
    {
    text: "Continuer à jouer",
    nextState: 25
    },
    ],
    },
    {//22
    story: "Tu décides de ne pas rejoindre tes amis aujourd'hui et de profiter de ton temps libre pour faire quelque chose que tu aimes.",
    options: [
    {
    text: "Lire un livre",
    nextState: 26
    },
    {
    text: "Regarder une série",
    nextState: 27
    },
    ],
    },
    {//23
    story: "Tu rejoins Yasmine et Sarah au cinéma pour voir un film. Vous prenez du pop-corn et des boissons avant de vous installer dans la salle.",
    options: [
    {
    text: "Apprécier le film",
    nextState: 15
    },
    ],
    },
    {//24
    story: "Vous faites une pause après avoir joué au football. Vous vous asseyez sur l'herbe et discutez de tout et de rien.",
    options: [
    {
    text: "Reprendre le jeu",
    nextState: 25
    },
    {
    text: "Rentrer chez toi",
    nextState: 14
    },
    ],
    },
    {//25
    story: "Vous continuez à jouer au football jusqu'à ce que le soleil se couche. Finalement, vous décidez qu'il est temps de rentrer chez vous.",
    options: [
    {
    text: "Rentrer chez toi",
    nextState: 14
    },
    ],
    },
    {//26
    story: "Tu passes ton temps libre à lire un livre passionnant. Tu te perds dans l'histoire et profites de cette évasion littéraire.",
    options: [
    {
    text: "Terminer le livre",
    nextState: 15
    },
    ],
    },
    {//27
    story: "Tu décides de regarder une série que tu aimes. Tu te blottis sur le canapé avec des collations et passes la journée à te détendre.",
    options: [
    {
    text: "Terminer la série",
    nextState: 15
    },
    ],
    },
    ];

export default gameStates1;