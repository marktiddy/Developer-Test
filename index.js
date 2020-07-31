//Task 1 - Repeat
const repeat = (arr) => {
  const newArr = [];

  //A function to iterate over our array and push the result
  const repeatFunc = () => {
    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
  };
  //Call it as many times as we need.
  //Set up as a while so in the future we can easily change repeats
  var count = 0;
  while (count < 3) {
    repeatFunc();
    count++;
  }

  return newArr;
};

//Task 2 - Reformat
const reformat = (word) => {
  //Split and check the string for vowels
  let newString = word
    .toLowerCase()
    .split('')
    .filter((f) => {
      if (!/[aeiou]/.test(f)) {
        return f;
      }
    });
  //Make the first item a capital letter
  newString[0] = newString[0].toUpperCase();
  return newString.join('');
};

//Test 3 - Binary Number
const next_binary_number = (number) => {
  //Convert it to an int
  let int = parseInt((number.join('') + '').replace(/[^01]/gi, ''), 2);
  int++;
  return parseInt(int, 10).toString(2).split('');
};

//Console logs to test functions
//console.log(repeat([1, 2, 3])); //[1,2,3,1,2,3,1,2,3]
//console.log(reformat('liMeSHArp DeveLoper TEST'));
// console.log(next_binary_number([1, 0])); //Expects [1,1]
// console.log(next_binary_number([1, 1])); //Expects [1,0,0]
console.log(next_binary_number([1, 0, 0, 0, 0, 0, 0, 0, 0, 1])); // expects [1,0,0,0,0,0,0,0,1,0]
