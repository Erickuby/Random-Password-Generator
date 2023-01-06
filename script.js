// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const generateBtn = document.querySelector('#generate');
const passwordTextarea = document.querySelector('#password');

generateBtn.addEventListener('click', () => {
  // Set password length to 0 by default
  let passwordLength = 0;

  // Prompt user for password length
  while (passwordLength < 10 || passwordLength > 64) {
    passwordLength = prompt('Enter password length (must be between 10 and 64 characters):');

    // Validate input
    if (passwordLength === null) {
      return; // Exit if user clicks cancel
    } else if (isNaN(passwordLength)) {
      alert('Password length must be a number');
      passwordLength = 0;
    } else {
      passwordLength = parseInt(passwordLength);
      if (passwordLength < 10 || passwordLength > 64) {
        alert('Password length must be between 10 and 64 characters');
      }
    }
  }

  // Set password character sets to empty by default
  let lowercaseChars = '';
  let uppercaseChars = '';
  let numericChars = '';
  let specialChars = '';

  // Prompt user for character types to include in password
  if (confirm('Include lowercase characters in password?')) {
    lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  }
  if (confirm('Include uppercase characters in password?')) {
    uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (confirm('Include numeric characters in password?')) {
    numericChars = '0123456789';
  }
  if (confirm('Include special characters in password?')) {
    specialChars = '$@%&*';
  }


