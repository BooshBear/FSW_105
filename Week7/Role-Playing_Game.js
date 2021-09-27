var readlineSync = require('readline-sync');
// Intro
console.log("Hello, welcome to the world of Zanezfaire");
let name = readlineSync.question("Player please tell us your name.\n");
console.log("Hi " + name + ', enter what you would like to do.');

// Functions needed 
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function roundRandom() {
    return Math.round(Math.random() * 4)
}

// User and enemies
let userHealth = 100;
let userDmg = 0;
let backpack = [];

let items = ["Sword", "Sheild", "Pendant", "Coin"];

let enemies = ["Easy", "Medium", "Hard", "Impossible"];
let enemyDmg = 0;

// switch statement to see if you have items
function BackPack() {
    for (let i = 0; i < backpack.length; i++) {
    switch (backpack[i]) {
        case "Sword":
            userDmg += 5;
            break;
        case "Sheild":
            enemyDmg -= 3;
            break;
        case "Pendant":
            userHealth += 2;
            break;
        default:
            break;
}}
}


// Stuffing it into a function
function game() {
    while (userHealth > 0) {
        let villianHealth = 100;
        let menu = readlineSync.question("[1] Walk \n[2] Print \n[3] Exit\n");
        switch (menu) {
            case "1":
                encounterLess = Math.random() * 1;
                // This is where the main code for encountering enemies begin 
                if (encounterLess < .6) {
                    console.log("You walk deeper into the world")
                } else {
                let encounter = enemies[Math.floor(Math.random() * 4)];
                console.log("A " + encounter + " enemy has come to take your life")
                while (userHealth > 0 && villianHealth > 0) {
                    userDmg = getRandom(23, 27);
                    enemyDmg = getRandom(13, 15);
                    BackPack();
                    let choice = readlineSync.question("What will you do. \n[a] Attack \n[r] Run away \n");
                    switch (choice) {
                        case "a":
                            console.log("You suffer " + enemyDmg + " damage");
                            userHealth -= enemyDmg;
                            console.log("enemy suffers " + userDmg + " damage");
                            villianHealth -= userDmg;
                            break;
                        case "r":
                            let flee = Math.random() * 1;
                            if (flee > .5) {
                                console.log("You successfully flee but suffer " + enemyDmg + " damage.");
                                userHealth -= enemyDmg;
                                game();
                            } else {
                                console.log("You've suffered "+ enemyDmg + " damage and were unable to flee.");
                                userHealth -= enemyDmg;
                            }
                            break;
                        default:
                            console.log("You have to select attack or run.");
                            break;
                    }
                    // this part is here if either win or lose
                    } if (userHealth <= 0) {
                    console.log("You have died");
                    } else if (villianHealth <= 0) {
                    console.log("Congrates you won the fight you gained an item");
                    backpack.push(items[roundRandom()]);
                    userHealth += 25;
                    } 
                }
                break;
                // Finally the second part, print your stats
            case "2":
            console.log("Name: " + name + "\nHealth: " + userHealth + "\nItems: " + backpack);
                break;
                // Lastely the exit
            case "3":
                userHealth = 0;
                break;
            default:
                console.log("You must choose a number from the menu.");
                break;
    }            
}}
game();