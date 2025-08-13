console.log("JS Practice");
/*Problem 1:
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World"*/
let result1 = (str) => {
  const newArray = str.split("").map((currItem, index, array) => {
    if (index === 0) {
      currItem = currItem.toUpperCase();
    }

    if (currItem === " " && array[index + 1]) {
      array[index + 1] = array[index + 1].toUpperCase();
    }
    return currItem;
  });
  console.log(newArray.join(""));
};
console.log(result1("hellooPpdk dkm fd dwko world "));

/*Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"*/
//convert to array
//reverse the array
// save to string

let result2 = (str) => {
  let string1 = str.split("").reverse().join("");
  return string1;
};

/*Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }*/
