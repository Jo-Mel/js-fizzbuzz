// Scrivi un programma che stampi i numeri da 1 a 100
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi Buzz
// per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (var i = 0; i <= 100; i++){
    console.log(i);
    
    if ((i % 3 == 0) && (i % 5 == 0)){ //oppure (i % 15 == 0)
        console.log("FizzBuzz");

       } else if (i % 5 == 0){
         console.log("Buzz");

       } else if (i % 3 == 0){
         console.log("Fizz");
         
       } else {
         console.log(i);
       }
}


