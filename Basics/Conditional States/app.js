// Comparison Operators

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

console.log(2==2);
console.log("js"=="java");
console.log("2"==2);
console.log("2"===2);

console.log(4 > 2);
console.log(4 < 2);
console.log("4" > 2);
console.log("4" < 2);

console.log(2 != 2);
console.log(2 <= 2);
console.log(2 >= 3);
console.log(2 <= 1);

// Not Operator
console.log(!(2 ==2));

// And Operator
console.log((2==2)&&(3==5));
console.log((2==2)&&(5==5));

// Or Operator
console.log((2==2)||(3==5));
console.log((2==2)||(5==5));


// If Operator
const error = false;

if(error == true){
    console.log("Hata oluştu");
}else{
    console.log("Hata oluşmadı")
}

const user = "oga";

if(user == "oga"){
    console.log("Kullanıcı bulundu");
}else[
    console.log("Kullanıcı bulunamadı")
]

const process = "3";

if(process === "1"){
    console.log("İşlem 1")
}
else if (process === "2"){
    console.log("İşlem 2")
}
else if (process === "3") {
    console.log("İşlem 3")
}else {
    console.log("Geçersiz işlem")
}

const number = 100;

if (number == 100){
    console.log("Sayı 100'e eşit")
}else {
    console.log("Sayı 100'e eşit değil")
}

// Ternary Operator
console.log(number === 100 ? "Sayı 100" : "Sayı 100 değil")

if(number === 100) console.log("Sayı 100");
else console.log("Sayı 100 değil");