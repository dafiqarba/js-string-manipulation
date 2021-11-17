"use strict";

/* 
1. Hitung jumlah huruf
2. Hitung jumlah kata
3. Hitung jumlah huruf vokal
4. Ganti huruf vokal dengan angka berurutan
5. Ganti huruf di tengah kata dengan (*)
6. Ganti huruf vokal dengan Fibonacci
 */

let button = document.querySelector(".input-button");
let output1 = document.querySelector(".output-total1");
let output2 = document.querySelector(".output-total2");
let output3 = document.querySelector(".output-total3");
let output4 = document.querySelector(".first-output");
let output5 = document.querySelector(".second-output");
let output6 = document.querySelector(".third-output");

button.addEventListener("click", () => {
  let userInput = document.querySelector(".input-text").value;

  output1.textContent = checkChar(userInput);
  output2.textContent = checkTotalWord(userInput);
  output3.textContent = checkTotalVowels(userInput);
  output4.textContent = convertVowelsToNumber(userInput);
  output5.textContent = convertToStar(userInput);
  output6.textContent = convertVowelsToFibonacci(userInput);

  function checkChar(string) {
    return string.trim().split(" ").join("").length;
  }

  function checkTotalWord(string) {
    return string.split(" ").length;
  }

  function checkTotalVowels(string) {
    let vowels = "aiueoAIUEO";
    let count = 0;

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        count++;
      }
    }
    return count;
  }

  function convertVowelsToNumber(string) {
    let vowels = "aiueoAIUEO";
    let arrayOfString = string.split("");
    let count = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
      if (vowels.includes(arrayOfString[i])) {
        count++;
        arrayOfString[i] = count;
      }
    }

    return arrayOfString.join("");
  }

  function convertVowelsToFibonacci(string) {
    let vowels = "aiueoAIUEO";
    let arrayOfString = string.split("");
    let fibonacciNum = [0];
    let previousNumber = 1;
    let presentNumber = 0;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
      sum = previousNumber + presentNumber;
      previousNumber = presentNumber;
      presentNumber = sum;
      fibonacciNum.push(sum);

      if (vowels.includes(arrayOfString[i])) {
        arrayOfString[i] = fibonacciNum[count];
        count += 1;
      }
    }
    return arrayOfString.join("");
  }

  function convertToStar(string) {
    // Store words
    let arrayOfString = string.split(" ");
    let middleWord = [];
    let result = [];

    for (let i = 0; i < arrayOfString.length; i++) {
      middleWord = arrayOfString[i].slice(1, arrayOfString[i].length - 1).split("");

      for (let j = 0; j < middleWord.length; j++) {
        middleWord[j] = "*";
      }

      result.push(
        arrayOfString[i].slice(0, 1) +
          middleWord.join("") +
          arrayOfString[i].slice(arrayOfString[i].length - 1)
      );
    }
    return result.join(" ");
  }

  /* 
  Print ke Console

  console.log("Jumlah Karakter = " + checkChar(userInput));
  console.log("Jumlah Kata = " + checkTotalWord(userInput));
  console.log("Jumlah Huruf Vokal = " + checkTotalVowels(userInput)); 
  console.log(convertVowelsToNumber(userInput));
  console.log(convertToStar(userInput));
  console.log(convertVowelsToFibonacci(userInput));
*/
});
