// Module code: CS5002
// Module: Programming Principles and Practice
// Section 3, Sorting Values

// Add a header for the assignment section to the console
const assignmentDescription3 = "Assignment 3";
console.log(assignmentDescription3);

// This section is concerned with the sorting of values, through different sorting methods
// As described in the assignment scenario, we allow the function to sort by price, title or author
function printAllBooksSorted(sortedBy) {
  if (sortedBy.toLowerCase() === "price") {
    const sorted = books.sort((a, b) => a.price - b.price);

    console.log("Sorted by price: ");
    console.table(sorted);
  } else if (sortedBy.toLowerCase() === "title") {
    const sorted = books.sort((a, b) => a.title.localeCompare(b.title));

    console.log("Sorted by title: ");
    console.table(sorted);
  } else if (sortedBy.toLowerCase() === "author") {
    const sorted = books.sort((a, b) => a.author.localeCompare(b.author));

    console.log("Sorted by author: ");
    console.table(sorted);
  } else {
    console.log("Invalid sort option");
  }
}

// Call the function with all inputs
printAllBooksSorted("price");
printAllBooksSorted("title");
printAllBooksSorted("author");

// Try some new sorting function
function selectionSort(integerArray) {
  let n = integerArray.length;
  for (let i = 0; i < integerArray.length; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if ([j] < integerArray[min]) {
        min = j;
      }
    }
    if (min != i) {
      let number1 = integerArray[i];
      integerArray[i] = integerArray[min];
      integerArray[min] = number1;
    }
  }
  return integerArray;
}

// Try to run the function with some real numbers
const integerArray = [3, 0, 2, 5, 100, 4, 1];
console.log(selectionSort(integerArray));

// As instructed in the assignment, a different sorting method is tested, through the Bubble Sort function
function bubbleSort(numbersArray) {
  for (var i = 0; i <= numbersArray.length - 1; i++) {
    for (var j = 0; j < numbersArray.length - i - 1; j++) {
      // This will compare two adjacent numbers, and see if first is greater than second
      if (numbersArray[j] > numbersArray[j + 1]) {
        // This will swap them if the condition is true
        var temp = numbersArray[j];
        numbersArray[j] = numbersArray[j + 1];
        numbersArray[j + 1] = temp;
      }
    }
  }
  console.log(numbersArray);
}

// Try to run the function with some real numbers
const numbersArray = [17, 8, 44, 82, 63];
bubbleSort(numbersArray);
