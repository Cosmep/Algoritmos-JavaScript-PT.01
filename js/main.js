
// Algoritmo para calcular la distancia recorrida por un carro que mantenía movimiento constante.

const velocity = document.getElementById("velocity");
const time = document.getElementById("time");
const distanceSpan = document.getElementById("distance");


const calculateDistance = () => {
    const distance = velocity.value * time.value;
    distanceSpan.innerHTML = `<b>${distance} km</b>`;
    console.log(distance);

}

// Algoritmo para calcular el tiempo transcurrido por un carro que mantenía movimiento constante desplazandose a un lugar.

const velocity2 = document.getElementById("velocity2");
const distance2 = document.getElementById("distance2");
const time2Span = document.getElementById("time2");

const calculateTime = () => {
    const time2 = distance2.value / velocity2.value;
    time2Span.innerHTML =  `<b>${time2} h</b>`;
    console.log(time2);

}

// Algoritmo para calcular la velocidad a la recorria un  carro que mantenía movimiento constante a cierta distancia a través del tiempo.

const time3 = document.getElementById("time3");
const distance3 = document.getElementById("distance3");
const velocity3Span = document.getElementById("velocity3");

const calculateVelocity = () => {
    const velocity3 = distance3.value / time3.value;
    velocity3Span.innerHTML =  `<b>${velocity3} KxH</b>`;
    console.log(velocity3);

}
   
//Algoritmo para transformar texto en Código Morse.

function codeMorseConvert(text) {
    const morseTable = {
      'a': '.-',    'b': '-...',  'c': '-.-.',  'd': '-..',
      'e': '.',     'f': '..-.',  'g': '--.',   'h': '....',
      'i': '..',    'j': '.---',  'k': '-.-',   'l': '.-..',
      'm': '--',    'n': '-.',    'o': '---',   'p': '.--.',
      'q': '--.-',  'r': '.-.',   's': '...',   't': '-',
      'u': '..-',   'v': '...-',  'w': '.--',   'x': '-..-',
      'y': '-.--',  'z': '--..',  '0': '-----', '1': '.----',
      '2': '..---', '3': '...--', '4': '....-', '5': '.....',
      '6': '-....', '7': '--...', '8': '---..', '9': '----.',
      '.': '.-.-.-', ',': '--..--', '?': '..--..',  '\'': '.----.',
      '!': '-.-.--', '/': '-..-.',  '(': '-.--.',  ')': '-.--.-',
      '&': '.-...',  ':': '---...', ';': '-.-.-.', '=': '-...-',
      '+': '.-.-.',  '-': '-....-', '_': '..--.-', '"': '.-..-.',
      '$': '...-..-', '@': '.--.-.'
    };
  
    return text.toLowerCase().split('').map(char => morseTable[char] || ' ').join(' ');
  }
  

  console.log(codeMorseConvert('Cosme, Perez'));  
  
// Algoritmo para transformar Código Morse en texto.

  function  morseCodetoTex(morse) {
    const morseTable = {
      '.-': 'a',   '-...': 'b',  '-.-.': 'c', '-..': 'd',
      '.': 'e',    '..-.': 'f',  '--.': 'g',  '....': 'h',
      '..': 'i',   '.---': 'j',  '-.-': 'k',  '.-..': 'l',
      '--': 'm',   '-.': 'n',    '---': 'o',  '.--.': 'p',
      '--.-': 'q', '.-.': 'r',   '...': 's',  '-': 't',
      '..-': 'u',  '...-': 'v',  '.--': 'w',  '-..-': 'x',
      '-.--': 'y', '--..': 'z',  '-----': '0', '.----': '1',
      '..---': '2','...--': '3', '....-': '4','.....': '5',
      '-....': '6','--...': '7', '---..': '8','----.': '9',
      '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': '\'',
      '-.-.--': '!', '-..-.':  '/',  '-.--.': '(', '-.--.-': ')',
      '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=',
      '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"',
      '...-..-': '$', '.--.-.': '@'
    };
  
    return morse.split('   ')
      .map(word => word.split(' ')
        .map(char => morseTable[char] || '')
        .join('')
      ).join(' ');
  }
  
  console.log( morseCodetoTex('-.-. --- ... -- . / .--. . .-. . --.. .-.-')); 


// Algoritmo visualizar la cantidad de dígitos que se le indique de la sucesión de fibonacci.

function fibonacci(n) {
    let a = 0, b = 1;
  
    if (n === 1) {
      return [0];
    }
    else if (n === 2) {
      return [0, 1];
    }
    else {
      const sequenceFibonacci = [0, 1];
      for (let i = 2; i < n; i++) {
        const c = a + b;
        sequenceFibonacci.push(c);
        a = b;
        b = c;
      }
      return sequenceFibonacci;
    }
  }
  
  console.log(fibonacci(10)); 
  
  
// Algoritmo para codificar mensajes utilizando Cifrado de César.

function cipherEncoder_1(str, shift) {
  let encoded = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + shift) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + shift) % 26) + 97;
    }

    encoded += String.fromCharCode(charCode);
  }

  return encoded;
  
 }

const message = "Cosme Perez";
const encoded = cipherEncoder_1(message, 3);
console.log(encoded);  

// Algoritmo para decodificar mensajes utilizando Cifrado de César.

function cipherDecode(str, shift) {
  let decoded = "";

  for (let i = 0; i < str.length; i++) {
    let decodeChard= str.charCodeAt(i);

    if (decodeChard>= 65 && decodeChard<= 90) {
      decodeChard= ((decodeChard- 65 - shift + 26) % 26) + 65;
    } else if (decodeChard>= 97 && decodeChard<= 122) {
      decodeChard= ((decodeChard- 97 - shift + 26) % 26) + 97;
    }

    decoded += String.fromCharCode(decodeChard);
  }

  return decoded;
}

const encoded_1 = "Frvph Shuhc";
const decoded = cipherDecode(encoded_1, 3);
console.log(decoded); 


// Algoritmo para encontrar "La Mediana" en un arreglo de números.

function searchMedian(arr) {
  arr.sort((a, b) => a - b);
  const len = arr.length;
  const middleNumber = Math.floor(len / 2);

  if (len % 2 === 0) {
    return (arr[middleNumber - 1] + arr[middleNumber]) / 2;
  }

  return arr[middleNumber];
}

const arr = [1, 5, 3, 8, 2, 9, 4];
const median = searchMedian(arr);
console.log(median); 


// Algoritmo para encontrar "El Promedio" en un arreglo de números.

function averageNumber(arr_1) {
  const sum = arr_1.reduce((acc, curr) => acc + curr, 0);
  return sum / arr_1.length;
}
const arr_1 = [1, 5, 3, 8, 2, 9, 4];
const average = averageNumber(arr_1);
console.log(average); 


// Algoritmo para encontrar "La Moda" en un arreglo.

function searchMode(arr) {
  const modeAverage = {};

  arr.forEach((elem) => {
    if (modeAverage[elem]) {
      modeAverage[elem]++;
    } else {
      modeAverage[elem] = 1;
    }
  });

  let modes = [];
  let maxmodeAverage = 0;
  for (const elem in modeAverage) {
    const freq = modeAverage[elem];
    if (freq > maxmodeAverage) {
      modes = [elem];
      maxmodeAverage = freq;
    } else if (freq === maxmodeAverage) {
      modes.push(elem);
    }
  }

  return modes.map(Number);
}

const arr_3 = [1, 5, 3, 8, 2, 9, 4, 5];
const mode = searchMode(arr_3);
console.log(mode); 

// Algoritmo que me genere un OTP de seis dígitos.

function OTP_generate() {
  let digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

let otp = OTP_generate();
console.log(otp); 

// Algoritmo que retorne el elemento diferente dentro de un arreglo.

function differentElementsGets(arr_4) {
  let result = [];
  for (let i = 0; i < arr_4.length; i++) {
    if (!result.includes(arr_4[i])) {
      result.push(arr_4[i]);
    }
  }
  return result;
}

let arr_4 = [1, 2, 3, 4, 5, 2, 4, 6];
let differentElements = differentElementsGets(arr_4);
console.log(differentElements);  

// Algoritmo para reversar un arreglo (invertirlo de atrás hacia adelante).

function reverseArray(arr54) {
  let reversedArray = [];
  for (let i = arr_5.length - 1; i >= 0; i--) {
    reversedArray.push(arr_5[i]);
  }
  return reversedArray;
}


let arr_5 = [1, 2, 3, 4, 5];
arr_5.reverse();
console.log(arr_5); 

// Algoritmo para validar si dentro de una lista de palabras existe algún palíndromo.

const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');
const results = document.getElementById('results');


searchButton.addEventListener('click', function() {
  const text = searchBox.value.toLowerCase();
  const words = text.split(' ');
  const wordsP = words.map(word => word.replace(/[^a-z]/g, ''));
  const palindromes = wordsP.filter(word => isPalindrome(word));

  results.innerHTML = palindromes.length > 0
    ? `Palindromo encontrado: ${palindromes.join(', ')}`
    : 'No es un palindromo.';
});

function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

// Cosme Perez