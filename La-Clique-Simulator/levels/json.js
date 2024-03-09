// Example of hashtable different data targetting (this is 
// what our states, inventory ETC need to be converted to for easier retrievals
const testVar = "hello world!"

const hashTable = {
    "key":"value",
    "age": 10,
    "property": {"hair":"brown",
                 "eyes": {"number": 2,
                          "color": "blue"},
                 "attack": () => {
                    console.log(testVar);
                },
                },
    "method": () => {
        console.log(testVar);
    },
}

console.log(hashTable["key"]);
console.log(hashTable["age"]);
console.log(hashTable["property"]["eyes"]["color"]);
console.log(hashTable["property"]["eyes"]["number"]);
console.log(hashTable["property"]["eyes"]);
hashTable["property"]["attack"]();
hashTable["method"]();

// try to create a python script that translates my current state of things to the more modern method proposed by Zed

// returns : 
//10
//blue
//2
//{ number: 2, color: 'blue' }
//hello world!
//hello world!

// So this system can be used to store all the logic for one component
// for example in the context of a game we would have the player hasshtable with (ATTACK, TAKE, RUN, SAY...)
// actions all stored in the hashtable ready to use

// need to use classes to create plaers for example : so each player has the same keys (name, age) and function (attack)

// ZED : the hashtable would be the data store for the object, and the instance methods interact with the data
// ZED : USUALLY... you don't interact with a class' data directly from outside.. you write methods in the class to allow people to access the data from outside
// ZED : So instead of accessing Person.age directly, you would use Person.age() to get the data
// TODO : Things to look into: Class methods, instance methods to understand how to handle this


// TODO understand chatGPT explanation below :
class Player {
    // Constructor to initialize new Player instances
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.inventory = [];
    }

    // Instance method to display the player's attack action
    attack() {
        console.log(`${this.name} attacks with a default strength.`);
    }

    // Getter method to access the player's age safely
    getAge() {
        return this.age;
    }

    // Setter method to safely update the player's age
    setAge(newAge) {
        this.age = newAge;
    }

    // Class method (static) to demonstrate actions common to all players
    static commonAction() {
        console.log('All players can perform this action.');
    }
}

// Creating instances of the Player class
const player1 = new Player('Alice', 24);
const player2 = new Player('Bob', 30);

// Using instance methods
player1.attack();  // Output: Alice attacks with a default strength.
player2.attack();  // Output: Bob attacks with a default strength.

// Accessing and updating player's age using getter and setter
console.log(player1.getAge());  // Output: 24
player1.setAge(25);
console.log(player1.getAge());  // Output: 25

// Using a class method
Player.commonAction();  // Output: All players can perform this action.
