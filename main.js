/*

?   Snack 1 - Filtra e Modifica
    Crea un array (longBooks) con i libri che hanno più di 300 pagine;
    Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
    Stampa in console ogni titolo nella console.
?   Snack 2 - Il primo libro scontato
    Creare un array (availableBooks) che contiene tutti i libri disponibili.
    Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
    Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).
?    Snack 3 - Ordinare gli Autori
    Creare un array (authors) che contiene gli autori dei libri.
    Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
    Ordina l’array authors in base all’età, senza creare un nuovo array.
    (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
 ?   Snack 4 - Calcola l’età media
    Creare un array (ages) che contiene le età degli autori dei libri.
    Calcola la somma delle età (agesSum) usando reduce.
    Stampa in console l’età media degli autori dei libri.


*/

const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//? Snack 1 
const longBooks = books.filter(b => b.pages > 300)

console.log(longBooks)

const longBooksTitles = longBooks.map(b => {
    return b.title
})

console.log(longBooksTitles)

longBooksTitles.forEach(b =>{
    console.log('Titolo:',b)
})

//? Snack 2
const availableBooks = books.filter(b => b.available === true)

console.log('libri disponibili:',availableBooks)

const discountedBooks = availableBooks.map(b => {
    const price = parseFloat(b.price);
    const priceDiscount = (price * .8 ).toFixed(2);
    return{
        ...b,
        price: `${priceDiscount}€`
    }
})

console.log('Libri Scontati:',discountedBooks)

const fullPricedBook = discountedBooks.find(b => {
    const price = parseFloat(b.price)
    return price % 1 === 0

})
console.log(fullPricedBook)


//? Snack 3

const authors = books.map(b => {
    return {
        name: b.author.name,
        age: b.author.age
    }
})
console.log('Autori dei libri:', authors)

const areAuthorsAdults = authors.every(a => a.age >= 18)

console.log('Gli autori sono tutti maggiorenni?', areAuthorsAdults)

authors.sort((a, b) => areAuthorsAdults ? a.age - b.age : b.age - a.age);


//? Snack 4

const ages = authors.map(a => a.age)
console.log('Età degli autori:',ages)

const ageSum = ages.reduce((acc, age) => {
    return acc + age
}, 0)

console.log('Età media degli autori:',ageSum / ages.length)


