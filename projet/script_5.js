const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

///////////////////////////////////////////////////////

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");


let noRented = 0;

books.forEach(book =>{
    if(book.rented === 0){noRented++}
});

if(noRented === 0){console.log("Oui au moins une fois")
} else if(noRented === 1){console.log("Seulement un n'a jamais été emprunté.")
} else { console.log(`Il y a ${noRented} livres qui n'ont jamais été empruntés.`)};


//////////////////////////////////////////////////////

console.log();
console.log("Le livre le plus emprunté ?");


let mostRendedBook = books[0]

books.forEach(book =>{ if(book.rented > mostRendedBook.rented){ mostRendedBook = book}});

console.log(`Le livre le plus emprunté est "${mostRendedBook.title}". Il a été empunté ${mostRendedBook.rented} fois.`);

//////////////////////////////////////////////////////

console.log();
console.log("Livre le moins emprunté ?");


let lessRendedBook = books[0]

books.forEach(book =>{ if(book.rented < lessRendedBook.rented){ lessRendedBook = book}});

console.log(`Le livre le moins emprunté est "${lessRendedBook.title}". Il a été empunté ${lessRendedBook.rented} fois.`);
////////////////////////////////////////////////////////

console.log();
console.log("Trouve le livre avec l'ID: 873495 ;");
let idToFind = 873495

books.forEach(book =>{ if(book.id === idToFind){ console.log(`C'est "${book.title}".`)}});
////////////////////////////////////////

console.log();
console.log("Supprime le livre avec l'ID: 133712 ;");


function deleteBook(listBooks, idToDelete){
    let indexToDelete = -1

    for(let index in listBooks){
        if(listBooks[index].id === idToDelete){
            console.log(`Supprimer le livre avec l'ID ${idToDelete} dont son titre est "${listBooks[index].title}".`);
            indexToDelete = index;
        }
    }

    if(indexToDelete === -1){
        console.log("Je ne l'ai pas trouvé");
    }else{
        listBooks.splice(indexToDelete,1);
        console.log("OK ! Livre supprimé.");
        console.log(listBooks);
    }

};

 
deleteBook(books,133712);

///////////////////////////////////////////////////////

console.log();  
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");


function sortAlphabetically(listBooks){
    console.log("Voici les livres par ordre alphabétique");
    let titles = []

    listBooks.forEach(book =>{titles.push(book.title)});
    
    for(let index in titles.sort()){
        console.log(`${Number(index)+1} - ${titles[index]}`);
    }

};


sortAlphabetically(books)