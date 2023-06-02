let result_player = 0, result_computer = 0;
let game = () => {
    let a = () => 
    { 
        return Math.floor(Math.random() * (3) + 1); 
    }
    let ans, user_input;
    ans = a();
    user_input = prompt("enter your choice");
    let user_choice = user_input.toUpperCase();
    if (ans == 1 && user_choice == 'ROCK') {
        console.log('Computer:Rock You:Rock');
        console.log('Its a Tie');
    }
    if (ans == 1 && user_choice == 'SCISSOR') {
        console.log('Computer-Rock You:Scissor');
        console.log('You Loose');
        result_computer++;
    }
    if (ans == 1 && user_choice == 'PAPER') {
        console.log('Computer:Rock You:Paper');
        console.log('You Win');
        result_player++;
    }
    if (ans == 2 && user_choice == 'ROCK') {
        console.log('Computer:Paper You:Rock');
        console.log('You Loose');
        result_computer++;
    }
    if (ans == 2 && user_choice == 'SCISSOR') {
        console.log('Computer-Paper You:Scissor');
        console.log('You Win');
        result_player++;
    }
    if (ans == 2 && user_choice == 'PAPER') {
        console.log('Computer:Paper You:Paper');
        console.log('Its a Tie');
    }
    if (ans == 3 && user_choice == 'ROCK') {
        console.log('Computer:Scissor You:Rock');
        console.log('You Win');
        result_player++;
    }
    if (ans == 3 && user_choice == 'SCISSOR') {
        console.log('Computer-Scissor You:Scissor');
        console.log('Its a Tie');
    }
    if (ans == 3 && user_choice == 'PAPER') {
        console.log('Computer:Scissor You:Paper');
        console.log('You Loose');
        result_computer++;
    }
}
for (let i = 1; i <= 5; i++) { 
    game();
}
console.log(`Computer Score:${result_computer} 
Your Score:${result_player} `);

if (result_computer > result_player) {
console.log("Computer Wins The Series");
}
else if (result_computer < result_player) {
console.log("You Win The Series");
}
else {
console.log("Its a tie In this series");
}



