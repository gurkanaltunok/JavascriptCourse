let value;

const firstName = "Neil";
const lastName = "Armstrong";

const langs = "Java,Python,C+";

const title = "Mr. "
value = title + firstName + " " + lastName;
value = firstName.length;

value = firstName.concat(" ",lastName," ","Buz");
value = firstName.toLocaleLowerCase();
value = firstName.toUpperCase();

value = firstName[2];
value = firstName[3];
value = firstName[firstName.length-1];

// Index Of

value = firstName.indexOf("l");
value = firstName.indexOf("e");
value = firstName.indexOf("L");

// Chart At

value = firstName.charAt(0);
value = firstName.charAt(firstName.length-1);

// Split

value = langs.split(",");

// Replace

value = langs.replace("Python","CSS");

// Includes

value = langs.includes("Java");
value = langs.includes("Ruby");

console.log(value);