// selectors
let input = document.getElementById("input");
const button = document.getElementById("checkButton");

// event listeners
button.addEventListener('click', showAlert);

// functions 
function showAlert(){
    let inputValue = input.value;
    let vowelsCount = 0;
    // turn the input into a string
    let string = inputValue.toString();

    // loop through the string
    for(let i = 0; i <= string.length;i++){

        // if a vowel, add to vowel count
        if(string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u" || string.charAt(i)== "y"){
            vowelsCount += 1;
        }

        // alternative code for above
        //function getVowels(str) {
        //var m = str.match(/[aeiou]/gi);
        //return m === null ? 0 : m.length;
        //}
    }
    alert(`There are ${vowelsCount} vowels!`);
}
