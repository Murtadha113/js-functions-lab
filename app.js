const maxOfTwoNumbers = (x, y) => {
  return x >= y ? x : y;
};

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

function isAdult(age) {
  return age >= 18 ? 'Adult' : 'Minor';
}

console.log('Exercise 2 Result:', isAdult(21));

function isCharAVowel(char) {
  if (char >='a' && char <='A'){
    return true
  }else {
    return false
  }
  
}

console.log('Exercise 3 Result:', isCharAVowel("A"));

function generateEmail(name, domain) {
  return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

function greetUser(name, time) {
  return `Good ${time}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser('Sam', 'afternoon'));

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

function calculateTip(Amount, Percentage) {
  return (Amount * Percentage) / 100;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

function convertTemperature(temp, scale) {
  return scale === 'C' ? (temp * 9 / 5) + 32 : (temp - 32) * 5 / 9;
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

function basicCalculator(num1, num2, op) {
  if (op === 'add') {
    return num1 + num2;
  } else if (op === 'subtract') {
    return num1 - num2;
  } else if (op === 'multiply') {
    return num1 * num2;
  } else if (op === 'divide') {
    return num1 / num2;
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

function calculateGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

console.log('Exercise 10 Result:', calculateGrade(85));

function createUsername(firstName, lastName) {
  const firstPart = firstName.slice(0, 3);
  const lastPart = lastName.slice(0, 3);
  const totalLength = firstName.length + lastName.length;
  return `${firstPart}${lastPart}${totalLength}`;
}

console.log('Exercise 11 Result:', createUsername('Samantha', 'Green'));

function numArgs() {
  return arguments.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
