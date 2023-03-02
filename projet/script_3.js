let userChoice = prompt("Salut, encore une pyramide qui prend la tête ! tu veux combien d'étage le gueu ?");
let line = [] // Array qui stocke les espaces et les # pour chaque ligne

for( let countline = 1; countline <= userChoice; countline++){// boucle pour le nombre choisi 
    line = [] // line pour chaque boucle
    for(let countSpace = 1; countSpace <= userChoice-countline; countSpace++){//boucle pour les espaces
        line.push(" ")
    };
    for(let countHashtag = 1; countHashtag <= countline; countHashtag++){// boucle pour #
        line.push("#")
    }
    console.log(line.join(""))// line sur un ligne avec la fonction join 
}