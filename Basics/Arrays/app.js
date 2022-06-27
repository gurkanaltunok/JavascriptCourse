let value;

const numbers = [32,43,67,7,13,394,78];

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Hello",22,null,undefined,3.14];

value = numbers.length;
value = numbers[0];
value = numbers[numbers.length-1];

numbers[2] = 1000;
value = numbers;

value = numbers.indexOf(1000);

numbers.push(900);
numbers.unshift(300);
numbers.pop();
numbers.shift();
numbers.splice(0,2);
value = numbers;

// Reverse

numbers.reverse();
numbers.sort();

value = numbers.sort(function(x,y){
    return x-y;
});

value = numbers.sort(function(x,y){
    return y-x;
});

console.log(value);