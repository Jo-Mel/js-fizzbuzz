// Scrivi un programma che stampi i numeri da 1 a 100
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi Buzz
// per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (var i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 3 == 0 && i % 5 == 0) { //oppure (i % 15 == 0)
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

//**Variante */

// var n;

// for (i = 1; i <= 100; i++) {
//   console.log(i);
//   n = i;

//   if (i % 3 == 0 && i % 5 == 0) { //oppure (i % 15 == 0)
//     n = "FizzBuzz";
//   } else if (i % 5 == 0) {
//     n = "Buzz";
//   } else if (i % 3 == 0) {
//     n = "Fizz";
//   }

//   console.log(n);
// }

// ** Variante lista

// for (i = 1; i <= 100; i++) {
//   if (i % 15 == 0) { // per i numeri che sono sia multipli di 3 che di 5 stampo 'FizzBuzz'
//     document.getElementById("print").innerHTML += "<li>" + "FizzBuzz" + "</li>";
//   } else if (i % 5 == 0) { // per i multipli di 5 stampo 'Buzz'
//     document.getElementById("print").innerHTML += "<li>" + "Buzz" + "</li>";
//   } else if (i % 3 == 0) { // per i multipli di 3 stampo 'Fizz'
//     document.getElementById("print").innerHTML += "<li>" + "Fizz" + "</li>";
//   } else {
//     document.getElementById("print").innerHTML += "<li>" + i + "</li>";
//   }
// }
