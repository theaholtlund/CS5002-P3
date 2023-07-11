// Module code: CS5002
// Module: Programming Principles and Practice
// Section 2, ISBN Validation

// Add a header for the assignment section to the console
const assignmentDescription2 = "Assignment 2";
console.log(assignmentDescription2);

// This section is concerned with the validaiton of ISBN numbers
// Since the ISBN numbers were formatted in the previous section, the array is copies and renamed so that the unformatted numbers can be used for validation
const books2 = [
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

// Validate the ISBN number by first using the .split() and .map() methods, and converting the the values from strings to ints
function validISBN(isbn) {
  const isbnArray = isbn.split("").map((x) => parseInt(x));

  // Define a variable for the last digit
  const lastDigit = isbnArray.pop();

  // Multiply even numers with 1 and odd numbers with 3, per assignment instructions
  // This can be done based on the index position in the array, as even and odd numbers alternate
  for (let i = 0; i < isbnArray.length; i++) {
    if (i % 2 === 0) {
      // Even numbers are multiplied by 1
      isbnArray[i] *= 1;
    } else {
      // Odd numbers are multiplied by 3
      isbnArray[i] = isbnArray[i] * 3;
    }
  }

  // Go through all the numbers of the array
  // The total will start at 0, and then add every number to the previous number, or the total
  // Make sure the che check digit is 10 minus the product modulo 10, per assignment instrictions
  const sum = isbnArray.reduce((current, total) => current + total, 0);
  const checkDigit = 10 - (sum % 10);

  // Add a special case for when the check digit is 10 and the last digit is 0, as this wraps around
  if (checkDigit === 10 && lastDigit === 0) {
    return true;
  }
  return checkDigit === lastDigit;
}

// Create a function to display the ISBN numbers that are not valid
function validateISBNs(books) {
  const validBooks = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (validISBN(book.isbn)) {
      validBooks.push(book);
    } else {
      console.log("Not valid ISBN: ", book.title);
    }
  }
  return validBooks;
}

// Log the books that are valid to the console, in the form of a table
// Remember to call the "books2" array of objects, as this is what is being used in the function
const validBooks = validateISBNs(books2);
console.table(validBooks);
