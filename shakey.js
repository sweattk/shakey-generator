window.alert('WELCOME TO MY GENERATED PASSWORD');
window.addEventListener('load', function() {
  var plength = prompt("How many characters would you like your password to be?");

  while (plength < 8 || plength > 128) {
    plength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }

  mixedNumbers = confirm("would you like to use some numbers CHUMP?");
  mixedSigns = confirm("What about some special characters?");
  mixedUpperCase = confirm("You better use uppercase letters. But would you like to");
  mixedLowerCase = confirm("Would you like to try to use lowercase letters?");
  

  while (!(mixedUpperCase || mixedLowerCase || mixedNumbers || mixedSigns)) {
    alert("You must select at least one character type!");

    mixedNumbers = confirm("would you like to use some numbers CHUMP?");
    mixedSigns = confirm("What about some special characters?");
    mixedUpperCase = confirm("You better use uppercase letters,but would you like to");
    mixedLowerCase = confirm("Would you like to try to use lowercase letters?");
    
  }

  
  const resultEl = document.getElementById('password');

  document.getElementById('generate').addEventListener('click', () => {
    resultEl.value = generatePassword(mixedLowerCase, mixedUpperCase, mixedNumbers, mixedSigns, plength);
  });
    textarea.select();

    document.body.appendChild(textarea);
    document.execCommand('copy');
    textarea.remove();
        textarea.value = password;

  });



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(item => Object.values(item)[0]);


  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}




function getRandomSymbol() {
  return rando('!@#$%^&*(){}[]=<>/,.');
}


function getRandomUpper() {
  return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
}

function getRandomNumber() {
  return rando(9);
}

function getRandomLower() {
  return rando("qwertyuiopasdfghjklzxcvbnm")
}


