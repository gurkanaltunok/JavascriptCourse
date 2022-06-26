let value

// Convert to string

value = 123;
value = String(123);
value = String(true);
value = String(function() {console.log});
value = String([1,2,3,4]);

value = (10).toString();

// Convert to number

value = Number("123");
value = Number(null);
value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("3");
// value = Number(undefined);
// value = Number("Hello World");
// value = Number(function() {console.log});
// value = Number([1,2,3,4]);

const a = Number("34") + 19;

console.log(a);
console.log(typeof a);

console.log(value);
console.log(typeof value);