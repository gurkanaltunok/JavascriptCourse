let value;

const now = new Date();

const date1 = new Date("9-19-1995 09:45:00");
const date2 = new Date("9/19/1995");
const date3 = new Date("November 12 1992");

value = date1;
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();
value = date1.getFullYear();
value = date1.getMinutes();
value = date1.getHours();
value = date1.getSeconds();
value = date1.getMilliseconds();

date1.setMonth(5);
date1.setDate(27);
date1.setFullYear(2022);
date1.setHours(15);
date1.setMinutes(08);

value = date1;

console.log(value);