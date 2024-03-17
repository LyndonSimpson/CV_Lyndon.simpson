import { addItem, removeItem, updateInventory, getInventory } from '../inventory.js';
import { player, updateCharacterInfo } from '../character.js';
import { healthValueElement, drunknessValueElement } from '../game.js';

let pass2 = 0;

function pass2check(itemName) {
    const inventory = getInventory(); // Use the getInventory function to access the inventory array

    // Ensure inventory is properly initialized and is an array
    if (Array.isArray(inventory)) {
        // Check if the item is in the inventory
        const itemExists = inventory.some(item => item.name === itemName);
        if (itemExists) {
            pass2 = 144; // Set this to the state number if the item is found
        } else {
            pass2 = 145; // Set this to the state number if the item is not found
        }
    } else {
        // Handle the case where inventory is not available
        console.error("Inventory is undefined or not an array");
        // Optionally set itemCheck to a default value or handle the error as needed
    }
}

const gameStates14 = [

    { //142 SUBWAY TICKET ITEM CHECK HERE
      story: "Vous partez pour prendre le métro sur le ligne 2 à Ménilmontant. ON Y VA!!",
      options: [{
          text: "C'est parti!",
          nextState: 143, 
          onChoose: () => {
            pass2check("vieux ticket de métro"); // subway ticket item check
          },
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //143
      story: "Tu fouilles tes poches pour ton pass nav...",
      options: [{
          text: "Chercher le pass nav",
          nextState: () => pass2, // dynamic state : time travel quest trigger
        }
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //144
      story: "En fouillant pour ton pass nav, tu as décidé d'utiliser le ticket de métro que t'as donné PIGEON pour rigoler et à ta grande surprise, celà a fonctionné!",
      options: [{
          text: "Trop cool, merci pour le trajet gratos Mr. PIGEON!",
          nextState: 146
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //145
      story: "Les festivités battent leur plein dans le métro. Tu bois une petite bière sur le trajet : prends toi encore 5 d'ivress allez",
      options: [{
          text: "On est bient arrivés?",
          nextState: 1, // TODO CONNECT TO SOIREE PPART HERE (add first soirée appart state idnex)
          onChoose: () => {
            player.gainDrunkness(5);
            updateCharacterInfo(healthValueElement, drunknessValueElement);
          },
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //146
      story: "Pendant que vous étiez dans la rame de métro, vous semblez vous êtes endormis... Mais ce n'est pas la partie la plus étrange...",
      options: [{
          text: "Tout à l'air bizarre, qu'est ce qu'il se passe ?",
          nextState: 147
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //147
      story: "Le ticket de métro de PIGEON semble vous avoir transporté dans le passé, on dirait les années 30, autrement appelées les années folles - les autres passagers sont tous vétu comme en début de siècle, la rame elle même est tout à coup ancienne!",
      options: [{
          text: ":0 ... M'enfin!?",
          nextState: 148
        },
        {
          text: "'WESH RÉVEILLEZ VOUS, REGARDEZ OÙ ON EST!!",
          nextState: 148
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //148
      story: "La clique se réveille difficilement... Ils regardent autour d'eux et s'aperçoivent, choqués, qu'ils ne sont plus dans la même époque! - Vous entendez des cris vers le fond de la rame...",
      options: [{
          text: "'Eh, écoutez, quelqu'un cri là bas!",
          nextState: 149
        },
        {
          text: "Ignorer les cris",
          nextState: 1
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //149
      story: "Vous accourez vers la personne en détresse, elle semble être en train de se débattre avec un homme cagoulé qui tient un couteau à la main. Ils sont tous les deux en vieux habits de l'époque. Vous comprenez rien à ce qui se passe, mais il faut agir vite!",
      options: [{
          text: "se jetter entre la victime et l'attaquant! (risqué)",
          nextState: 150
        },
        {
          text: "Crier pour essayer d'arrêter l'attaquant",
          nextState: 1
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //150
      story: "Tu sautes in extremis entre la victime et l'attaquant, le couteau t'éfleures mais tu n'as rien et la victime est sauvée du coup de couteau!",
      options: [{
          text: "Ok",
          nextState: 151
        },
      ],
      image: "./public/Level1/menilmontantMetro.jpg",
    },
  
    { //151
      story: "L'attaquant voit que vous êtes plus nombreux que lui et prend la fuite aussitôt que les portes de la rame s'ouvrent",
      options: [{
          text: "'Euh, on peut parler de ce qui vient de nous arriver?'",
          nextState: 152
        },
        {
          text: "à la victime : 'qui êtes vous ?'",
          nextState: 152
        },
      ],
      image: "./public/Level3/pigeon.png",
    },
  
    { //152
      story: "La victime parle : 'Je m'appelle Laetitia Toureaux, vous venez de me sauver d'une mort certaine... Je suis sur le point de mettre au jour un complot politique d'une grandeur jamais vue encore en France! Merci pour votre aide! Je vous serrait éternnellement reconnaissante' - Tu regardes par terre et tu lis la date sur un vieux journal '16 mai 1937'",
      options: [{
          text: "'Mais attends!! Ce nom me dit quelque chose, je la connais!! c'est un des meurtre non résolus les plus mystérieux de France! C'était une espionne!'",
          nextState: 153
        },
        {
          text: "'Laetitia Toureaux, connais pas...'",
          nextState: 154
        },
      ],
      image: "./public/Level3/omouleVener.png",
    },

    { //153
      story: "'comment savez vous ça ?... vous ne pouvez le dire à personne ou alors m'avoir sauvé sera pour rien",
      options: [{
          text: "'Parce que vous etes... morte. Et on est sensé être en 2024...'",
          nextState: 154
        },
        {
          text: "'J'ai la tête qui tourne je comprend pas ce qui passe, comment c'est possible?!...'",
          nextState: 154
        },
      ],
      image: "./public/Level3/omouleVener.png",
    },

    { //154
      story: "'Je ne sais pas qui vous êtes ou d'où vous venez mais vous ne pouvez répéter ce qui s'est passé ici - je suis sur le point de découvrir un secret politique d'une ampleur exceptionnelle...'",
      options: [{
          text: "'ON A VOYAGÉ DANS LE PASSÉ!!!???'",
          nextState: 155
        },
        {
          text: "'Ce nom me dit quelque chose finalement (si tu n'as toujours pas compris qu'il fallait regarder qui elle était sur google fait le maintenant! XD)'",
          nextState: 155
        },
      ],
      image: "./public/Level3/omouleVener.png",
    },

    { //155
      story: "ERROR - la clique simulator en surchauffe : message d'erreur : 'mauvais espace-temps' - recalibration vers l'année 2024 --- *",
      options: [{
          text: "1",
          nextState: 156
        },
        {
          text: "2",
          nextState: 156
        },
      ],
      image: "./public/Level3/omouleVener.png",
    },

    { //156
      story: "vous semblez être de retour à la station ménilmontant, là où vous étiez partis initialement. quelqu'un trouve un '20 minutes' par terre et check la date : 2024! -  'on est de retour dans le présent!'",
      options: [{
          text: "...comment est ce qu'on peut vérifier qu'on a pas juste trop bu?...",
          nextState: 157
        },
        {
          text: "J'arrive toujours pas à comprendre ce qu'il s'est passé...",
          nextState: 157
        },
      ],
      image: "./public/Level3/omouleVener.png",
    },

    { //157
      story: "quelqu'un sort son portable et vérifie le nom 'Laetitia Toureaux' - Elle est toujours connue pour quelque chose qui s'est passé en 1937...",
      options: [{
          text: "Oh non... On a tout révé ?!",
          nextState: 158
        },

      ],
      image: "./public/Level3/omouleVener.png",
    },

    { //158
      story: "Laetitia Toureaux est devenue connue pour avoir dévoilé le scandale politique français le plus important de l'histoire! Grâce à elle de nombreux politiciens corrompus ont été placés derrière les barreaux. Elle est mort dans les années 80, après une longue vie heureuse!",
      options: [{
          text: "on a vraiment changé le cours de l'histoire!...",
          nextState: 159
        },

      ],
      image: "./public/Level3/omouleVener.png",
    },

    { //159
      story: "Bravo! Tu as découvert une des (NUMBER: will depend on number of secret quests) quêtes secretes et tu as réussi à sauver Laetitia Toureaux, impactant le destin du pays! - Il va faloir remater 'midnight in Paris' et 'retour vers le futur' pour comprendre ce qu'il s'est passé",
      options: [{
          text: "Bon il fait soif maintenant!",
          nextState: 160
        },

      ],
      image: "./public/Level3/omouleVener.png",
    },

    { //160
      story: "Tu te souviens que vous étiez sensés aller quelque part avant toute cette folie! On allait où déjà ??",
      options: [{
          text: "Soirée appart",
          nextState: 1 // this time the states here connect to real soriée appart (unless we add another item check!)
        },
        {
          text: "Faire la tournée des bars - barathon",
          nextState: 1
        },
        {
          text: "Concert jazz manouche",
          nextState: 1
        },
        {
          text: "soirée boite de nuit (batofar)",
          nextState: 1
        },
        {
          text: "COURABALOU et puis ensuite on avisera!",
          nextState: 161
        },
      ],
      image: "./public/items/phone.png",
    }
  ];
  
  export default gameStates14;