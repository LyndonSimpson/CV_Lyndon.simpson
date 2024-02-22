import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates9 = [

    { //88
      story: "Le PIGEON t'as déconnecté du jeu - on ne sait même pas comment il a fait pour tout hacker, mais voilà, tu dois tout recommencer. Try again!",
      options: [{
          text: "Ok",
          onChoose: () => {
            addItem({ name: "'I died' T-shirt", icon: "./public/items/shirt1.png", description: "RIP..." });
            updateInventory();
          },
          nextState: 0
        },
      ],
      image: "./public/gameOver.jpg",
    },
  
    { //89 SAVED AGAINST HACKS OF PIGEON STATE
      story: "Tu as réuss! 'Voilà ! Le Contre-PIGEONNet est en place. Grâce à toi, nous avons une chance de repousser cette attaque. Tiens, prends ce Disque Dur Crypté. Il contient des informations cruciales que le PIGEON ne doit pas obtenir'",
      options: [{
          text: "Accepter le disque-dur et aller au Chat noir",
          onChoose: () => {
            addItem({ name: "disque-dur", icon: "./public/items/drive.png", description: "Ce disque-dur contient des données sensibles sur la clique, ne le laisse pas filer entre de mauvaises mains (oui, surtout PIGEON)!" });
            updateInventory();
          },
          nextState: 79
        },
        {
          text: "Refuser le disque-dur et aller au Chat noir",
          nextState: 79
        },
      ],
      image: "./public/Level5/Lyndon5.png",
    },
  
    { //90 Namyria quest here:
      story: "Le chien est un petit French Bulldog, à votre grande surprise à tous les trois il se met à parler : 'Bonjour hoomains, je m'appelle Nymiria! j'ai appeler attiré votre attention car j'ai besoin de votre aide... s'il vous plaît, c'est d'un importance capitale!!!",
      options: [{
      text: "'...de quoi as tu besoin?'",
      nextState: 91
    },
    {
      text: "'euh, un chien qui parle... viens on retourne se poser Omran!' - retourner se poser",
      nextState: 30
    }
    ], // Empty options, as the game ends here
    image: "./public/Level6/frenchie4.png",
    },
  
    { //91 Nymiria state 2
      story: "NYMIRIA STATE 2",
      options: [{
          text: "Mmmh... Ok, qu'est ce qu'on doit faire ?",
          nextState: 39
        },
        {
          text: "'Pas le temps!' - retourner se poser",
          nextState: 30
        }
      ],
      image: "./public/Level6/frenchie6.png",
    },
  
    { //92
      story: "'il vous portera bonheur dans votre quête à la déglingue ce soir, bon courage!' - Le pigeon disparaît dans un nuage de fumée *POOF* - Omran a besoin d'aller se calmer chez lui après cette rencontre avec son nemesis...",
      options: [{
          text: "Aller au chat noir!",
          nextState: 39
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //93
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
  
    { //94
      story: "tu te mets en route pour le chat noir, tranquilement, tu marches rue JPT",
      options: [{
          text: "Ok",
          nextState: 13
        },
      ],
      image: "./public/street.jpg",
    },
  
    { //95
      story: "Seb te propose d'aller se poser aux buttes chaumont ou de le rejoindre plus tard au Chat noir",
      options: [{
          text: "Ok, le rejoindre aux buttes",
          nextState: 41
        },
        {
          text: "Aller direct au Chat noir",
          nextState: 39
        },
        {
          text: "Appeler quelqu'un d'autre",
          nextState: 63
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //96
      story: "Tu arrives ux buttes chaumont où tu captes Seb. Vous vous posez en haut du belvédère et vous admirez la vue",
      options: [{
          text: "Ok",
          nextState: 42
        },
      ],
      image: "./public/Level3/buttes.png",
    },
  
    { //97
      story: "Pendant que vous êtez posés tout en haut de la butte, quelqu'un remarque que Seb a un skate. Cette personne viet lui donner un flyer. 'Eh mec, regarde ça'",
      options: [{
          text: "Prendre le flyer",
          nextState: 43
        },
      ],
      image: "./public/Level4/buttes2.jpg",
    },
  
    { //98
      story: "COMPET DE SKATE AVEC INSCRIPTION LIBRE : descente de la rue de Ménilmontant - Tu vois que Seb hésites à y aller",
      options: [{
          text: "On devrait y aller",
          nextState: 44
        },
        {
          text: "La rue de Ménimontant! bonne chance, ils vont se rétame!",
          nextState: 44
        },
      ],
      image: "./public/Level4/flyer.jpg",
    },
  ];
  
  export default gameStates9;