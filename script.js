// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;



let guess = prompt("Enter the random number between 1 and 100");
let chances = 0;
let noofchance = 0;

while(guess!=randomNumber)
{
    if(guess>randomNumber)
    {
      
        console.log("The guess is greater than the random number");
    }
    else if(guess<randomNumber){
        console.log("The guess is smaller than the random number");
    }
    else if(guess==randomNumber)
    {
        console.log("The guess is equal to the random number");
    }
    chances++;
    guess=prompt("Enter the correct guess");

}

noofchance = 100-chances;

console.log("The  no of chaneces taken is ",noofchance);

console.log("The number is guessed correctly");