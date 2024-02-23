import { addItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';
const roulette = () => {
  const number = Math.floor(Math.random() * 6);
  
  const bullet = 3;
  
  if (number == bullet) {
      const s = 2;
      return s;
  } else {
      const s = 1;
      return s;
  }
  }


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
      story: "Je m'appelle Nymiria! Il faut absolument que je récupère mes snacks, ils me ramèneront à mes parents grâce à leur odeur!",
      options: [{
          text: "Mmmh... Ok, comment est ce qu'on peut les trouver ?",
          nextState: 92
        },
        {
          text: "'Pas le temps!' - retourner se poser",
          nextState: 30
        }
      ],
      image: "./public/Level6/frenchie6.png",
    },
  
    { //92 
      story: "Ils les trouvaient à Bastille, c'est de la tarte à la patate douce. Mais il faut que ce soit la bonne tarte!",
      options: [{
          text: "Ok, en route pour Bastille!",
          nextState: 93
        },
        {
          text: "Regarder sur internet",
          nextState: 94
        }
      ],
      image: "./public/Level6/frenchie2.png",
    },
  
    { //93
      story: "Vous arrivez à Bastille, mais vous ne savez pas où se trouvent les tartes! Que faire...",
      options: [{
          text: "Aller à la boulangerie la plus proche",
          onChoose: () => {
            player.gainDrunkness(10);
            updateCharacterInfo(healthValueElement, drunknessValueElement);
          },
          nextState: 95
        },
        {
          text: "Marcher un peu pour chercher des tartes",
          onChoose: () => {
            player.gainDrunkness(10);
            updateCharacterInfo(healthValueElement, drunknessValueElement);
          },
          nextState: 96
        },
        {
          text: "Aller au Franprix",
          onChoose: () => {
            player.gainDrunkness(20);
            updateCharacterInfo(healthValueElement, drunknessValueElement);
          },
          nextState: 97
        },
      ],
      image:"./public/Level6/frenchie1.png",
    },
  
    { //94
      story: "tu regardes sur internet, il y a 2 boutiques à Bastille qui vendent des tartes à la patate douce selon Gogole maps",
      options: [{
          text: "Ok - en route pour Bastille",
          nextState: 98
        },
      ],
      image: "./public/Level7/frenchie5.png",
    },
  
    { //95
      story: "Le boulanger vous propose sa fameuse tarte à la patate douce et aux noix de pécan!",
      options: [{
          text: "Ok, ça fera l'affaire!",
          nextState: 99
        },
        {
          text: "Faire ecore un ou deux patés de maison à la recherche d'une tarte",
          nextState: 96
        },
        {
          text: "demander si le boulanger ne connaît pas une bonne boutique de tartes",
          nextState: 100
        },
      ],
      image: "./public/Level7/frenchie6.png",
    },
  
    { //96
      story: "Vous tombez sur une boutique de tartes qui s'appelle 'tarte-up nation'!",
      options: [{
          text: "Entrer dans la boutique",
          nextState: 101
        },
      ],
      image: "./public/Level7/frenchie3.png",
    },
  
    { //97
      story: "Le Franprix ne vend pas de tartes...",
      options: [{
          text: "Marcher encore un peu pour trouver une tarte!",
          nextState: 96
        },
      ],
      image: "./public/Level4/buttes2.jpg",
    },
  
    { //98
      story: "Vous arrivez avec Omran, Nala et Nymiria à Bastille, Il y a donc 2 boutiques qui vendent des tartes à la patate douce. Laquelle essayer en premier ?",
      options: [
        {
          text: "Tarte me up",
          nextState: 103
        },
        {
          text: "Tarte-up nation",
          nextState: 101
        },
      ],
      image: "./public/Level7/frenchie4.png",
    },
  ];
  
  export default gameStates9;