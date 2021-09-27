const readline = require("readline-sync");

function escapeRoom() {
    const name = readline.question("What is your name? ");
    let hasKey = false;
    let alive = true;
    console.log("Hello " + name + ", you seem to be stuck in this room. \n\
But do not worry I'll give you 3 options to choose from. \n\
Choose the number corresponding your choice: ");

while (alive === true) {
    const options = readline.question(
"1 - Put your hand in this random hole \n\
2 - Find the key, or \n\
3 - Open the door \n");

        switch (options) {
            case "1":
                console.log("A shame like they always say curiosity killed the cat. (you died!)")
                alive = false;
                break;
            case "2":
                console.log("Well done, your scrounging around actually found you the key. I wonder what it goes too? \n\
What would you like to do next: ");
                hasKey = true;
                break;
            case "3":
                if (hasKey === true) {
                    console.log("Congratulations you have escaped!!!")
                    alive = false;
                } else {
                    console.log("Seems like the door is locked to me seems like your going to have to find a key or something. \n\
What would you like to do next: ");
                }
                break;     

            default:
                console.log("Sorry you must choose a number between (1-3)");
                break;
            }            
    }
}

console.log(escapeRoom());