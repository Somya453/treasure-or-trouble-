let playAgain = "yes";

while (playAgain === "yes") {
    alert("You wake up in a dark forest.");

    let userChoice = prompt("Do you want to go left or right? (left/right)");

    if (userChoice === "left") {
        alert("You see a mysterious cave.");
        userChoice = prompt("Do you want to enter the cave or go back? (enter/go back)");
        if (userChoice === "enter") {
            alert("You found a treasure chest!");
        } else {
            alert("You safely return to the forest.");
        }
    } else if (userChoice === "right") {
        alert("You encounter a wild beast!");
        userChoice = prompt("Do you want to fight the beast or run away? (fight/run)");
        if (userChoice === "fight") {
            alert("You bravely fight the beast and win!");
        } else if (userChoice === "run") {
            alert("You run away safely.");
        } else {
            alert("Dead, game is over! Please restart.");
        }

    } else {
        alert("Invalid choice! Please restart the game.");
    }
    playAgain = confirm("Do you want to play again?");
    userChoice = prompt("Do you want to play again? (yes/no)");

    if (userChoice.toLowerCase() === "no") {
        playAgain = "no";
        alert("Thanks for playing!");
    }
}
