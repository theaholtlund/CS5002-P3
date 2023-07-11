// Module code: CS5002
// Module: Programming Principles and Practice
// Section 1, Book Store Database

// Add a header for the assignment section to the console
const assignmentDescription = "Assignment 1 ";
console.log(assignmentDescription);

// Write a program which acts as a database to store information on ISBN, title, author, format, price and stock for a book store
// Define the books as an array of objects
const books = [
  {
    isbn: "9780744016697",
    title: "The Lord of the Rings",
    author: "Prima Games",
    format: "Hardcover",
    price: 14.99,
    stock: 3,
  },
  {
    isbn: "9780099549482",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    format: "Paperback",
    price: 4.99,
    stock: 3,
  },
  {
    isbn: "9780744016680",
    title: "The Legend of Zelda: Tri Force Heroes",
    author: "Prima Games",
    format: "Paperback",
    price: 9.99,
    stock: 1,
  },
  {
    isbn: "9780062409904",
    title: "Go Set A Watchman",
    author: "Harper Lee",
    format: "Audio Book CD",
    price: 10.89,
    stock: 2,
  },
  {
    isbn: "9780099529125",
    title: "Catch-22",
    author: "Joseph Heller",
    format: "Paperback",
    price: 6.29,
    stock: 4,
  },
  {
    isbn: "9781785150289",
    title: "Go Set A Watchman",
    author: "Harper Lee",
    format: "Hardcover",
    price: 9.89,
    stock: 0,
  },
  {
    isbn: "9780554579901",
    title: "A Clash of Kings",
    author: "George R. R. Martin",
    format: "Paperback",
    price: 9.89,
    stock: 0,
  },
  {
    isbn: "9781853260001",
    title: "Pride and Prejudice",
    author: "Jane Austin",
    format: "Paperback",
    price: 0.99,
    stock: 4,
  },

  {
    isbn: "9781784871894",
    title: "Casino Royale",
    author: "Ian Fleming",
    format: "Hardcover",
    price: 6.79,
    stock: 1,
  },

  {
    isbn: "9781913494217",
    title: "Guinness World Records 2023",
    author: "Guinness World Records",
    format: "Hardcover",
    price: 10.99,
    stock: 0,
  },
];

// Create a function to print the whole database of books to the console
// First need to make sure the IBAN numbers are formatted correctly, using the .slice() method
function formatIsbn(isbn) {
  const formattedIsbn =
    isbn.slice(0, 3) +
    "-" +
    isbn.slice(3, 4) +
    "-" +
    isbn.slice(4, 7) +
    "-" +
    isbn.slice(7, 12) +
    "-" +
    isbn.slice(12, 13);
  return formattedIsbn;
}

// Instruct the new array of objects to consist of formatted books, with the correctly formatted ISBN numbers
const formattedBooks = formatBooks(books);
function formatBooks(books) {
  const formattedBooks = books.map((book) => {
    let formattedBook = book;
    formattedBook.isbn = formatIsbn(book.isbn);
    return formattedBook;
  });
  return formattedBooks;
}

// Function to log a table with all correctly formatted books to our console
function printAllBooks() {
  console.log("All books: ");
  console.table(formattedBooks);
}

// Call the function to print all books, with correctly formatted ISBN numbers
printAllBooks();

// Prints all books that are in stock
function printInStock() {
  const inStockBooks = [];
  for (let i = 0; i < formattedBooks.length; i++) {
    const book = formattedBooks[i];
    if (book.stock > 0) {
      inStockBooks.push(book);
    }
  }

  console.log("Books in stock: ");
  console.table(inStockBooks);
}

// Call the function to print all books that are currently in stock
printInStock();

// Create a function to remove one item from stock based on its ISBN number
// However, if there are no copies in stock, the function will display an alert
function sell(isbn) {
  for (let i = 0; i < formattedBooks.length; i++) {
    const book = formattedBooks[i];
    if (book.isbn === isbn) {
      if (book.stock === 0) {
        alert("This book is currently not in stock");
        console.log("This book is currently not in stock");
      } else {
        book.stock -= 1;
        console.log("One of the selected book has been removed from stock.");
        console.table(formattedBooks);
      }
    }
  }
}

// Call the function with a formatted ISBN that has multiple copies to test
sell("978-0-062-40990-4");

// Create a function that will only print books with a specific title, and notify the user if the specified title is not found
function printByTitle(title) {
  const booksByTitle = formattedBooks.filter(
    (book) => book.title.toLowerCase() == title.toLowerCase()
  );
  if (booksByTitle.length === 0) {
    alert("There is no book with this title. Try another one!:");
    console.log("There is no book with this title. Try another one!:");
  } else {
    console.log("Books with the specified title:");
    console.table(booksByTitle);
  }
}

// Call the function with a title from the scenario to test
printByTitle("Go Set A Watchman");

// Create a function that will only print books written by a specified author
function printByAuthor(author) {
  const booksByAuthor = formattedBooks.filter(
    (book) => book.author.toLowerCase() === author.toLowerCase()
  );
  if (booksByAuthor.length === 0) {
    console.log("There is no book with this author. Try another one!:");
  } else {
    console.log("Books by the specified author:");
    console.table(booksByAuthor);
  }
}

// Call the function with an author from the scenario to test
printByAuthor("HaRpEr LEE");

// Create a function that will only print books that are below a specific price
function printUnderPrice(price) {
  const booksUnderPrice = formattedBooks.filter((book) => book.price < price);
  if (booksUnderPrice.length === 0) {
    console.log(
      "There is no books under the specified price. Try another one!:"
    );
  } else {
    console.log("Books under the specified price:");
    console.table(booksUnderPrice);
  }
}

// Call the function with a price known to be lower than the one for any of the books in the scenario, for testing
printUnderPrice(0.5);

// Create a function to print the all books which include somne text as part of either the title or author
function search(text) {
  const booksBySearch = formattedBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(text.toLowerCase()) ||
      book.author.toLowerCase().includes(text.toLowerCase())
  );
  console.log("Books including the specified text:");
  console.table(booksBySearch);
}

// Call the function with some text from the scenario to test
search("Pride");
