function factorial(number){
    let result = 1
    for(let count = 1; count <= number; count++){
        result *= count;
    }
    console.log(`Le résultat est : ${result}`);
}

let userChoice = prompt("De quel nombre veux-tu calculer la factorielle ?");
factorial(userChoice);