import { addItem, removeItem, updateInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

const gameStates3 = [

    { //22
      story: "'Attends mais c'est quoi cette magouille?!... On a ping ton addresse alors ne bouge pas! On arrive' BIP* BIP*",
      options: [{
          text: "Attendre le gentil monsieur",
          nextState: 23
        },
        {
          text: "Osef, je vais au Chat noir, il fait soif!",
          nextState: 75
        },
      ],
      image: "./public/Level2/phoneCall.jpg",
    },
  
    { //23
      story: "Tu vois sortir d'une voiture de Luxe un type qui fait un peu mafieux. Ton instinct te dit qu'il y a danger, que fais tu ?",
      options: [{
          text: "Je prends la fuite et je cours pour le Chat noir, la peur donne des aîles!",
          nextState: 75
        },
        {
          text: "Je n'écoute pas mon instinct de survie et reste planté la avec le Tel dans la main, sourire aux lèvres :)",
          nextState: 24
        },
      ],
      image: "./public/Level2/mafiaCar.jpg",
    },
  
    { //24
      story: "'Alors écoute moi bien, je sais pas qui tu es, et vat pour toi et Shake que je ne sache pas... Alors tu vas gentillement me rendr ele portable et me dire où se trouve Shake' - Un garde du corps te brusque et arrive à te prendre ton portefeuille et y jettes un coup d'oeil <br> 'Moi j'aime bien savoir qui est qui' <br> il te la jette dessus",
      options: [{
          text: "'Je connais pas Shake je vous jure, on m'a donné ce portable au théâtre!' - rendre portable",
          onChoose : () => {
            removeItem({ name: "portable inconnu", icon: "./public/items/phone.png", description: "Mmmmh... Je me demande à qui appartient ce téléphone!" });
            updateInventory();
          },
          nextState: 25
        },
        {
          text: "MENTIR 'Ok, Shake m'a donné son portable et m'a dit qu'il partai se cacher chez ses parents, je veux pas d'emmerdes, volà le portable' - rendre portable",
          onChoose : () => {
            removeItem({ name: "portable inconnu", icon: "./public/items/phone.png", description: "Mmmmh... Je me demande à qui appartient ce téléphone!" });
            updateInventory();
          },
          nextState: 26
        },
      ],
      image: "./public/Level2/mafiaPic.jpg",
    },
  
    { //25
      story: "'T'as intérêt à pas me mito! Si c'est une autre magouille de shake ce sera pas just elui qui sera dans la merde!'",
      options: [{
          text: "'T'inquiètes Shake m'a dit que tout était bon! tu verras' - Rendre le portable et partir au Chat noir",
          nextState: 75
        },
      ],
      image: "./public/Level2/mafiaPic.jpg",
    },
  
    { //26
      story: "Le garde du corps te prends le portable 'T'as intérêt à dire la vérité, ou le patron va être obligé de me demander qui t'es, si tu vois ce que je veux dire'",
      options: [{
          text: "'Promis je sais rien! - partir au Chat noir",
          nextState: 75
        },
      ],
      image: "./public/Level2/mafiaPic.jpg",
    },
  
    { //27
      story: "Oui oui, on vous connaît la clique!... Une connerie et ça dégage direct ce soir, je suis pas d'humeur!",
      options: [{
          text: "ça va, ça va, on va être sages :)",
          nextState: 28
        },
        {
          text: "NOUS?! jamais m'enfin!!",
          nextState: 28
        },
      ],
      image: "./public/Level1/Bar.png",
    },
  
    { //28
      story: "Mouais, je vous ai a l'oeil toi et tes potos. un jour les portes vous seront fermées",
      options: [{
          text: "Ok",
          nextState: 29
        },
        {
          text: "Tu sais quoi... OSEF - dire à la clique qu'on se rejoint en fait tous au petit garage!",
          nextState: 121
        },
      ],
      image: "./public/Level1/ChatInterieur.png",
    },
  
    { //29
      story: "La clique arrive au chat noir! La soirée peut commencer. Tout le monde se met à boire et rire à gorge déployée! Les festivités battent leur plein!",
      options: [{
          text: "Wouhouuu!",
          nextState: 132
        },
      ],
      image: "./public/Level1/ChatInterieur.png",
    },
  
    { //30
      story: "Vous êtes de nouveau posey sur les marches devant l'église de Ménilmontant lorsque soudainement...",
      options: [{
          text: "Quoi?! Soudainement quoi ??!!",
          nextState: 31
        },
      ],
      image: "./public/Level1/OmranBiere.png",
    },
  
    { //31
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
  
    { //32
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
  
  export default gameStates3;