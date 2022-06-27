let value;

const programmer = {
    name : "Gurkan Altunok",
    age : 20,
    email : "gurkan@altunok.com",
    langs : ["Python","Java","Javascript"],

    address : {
        city : "İstanbul",
        street : "Beşiktaş"
    },

    work : function(){
        console.log("Programmer working...");
    }
}

value = programmer;
value = programmer.email;
value = programmer.langs;

for(lang in programmer.langs){
    console.log(programmer.langs[lang]);
}

value = programmer.address.city;

programmer.work();

const programmers = [
    {
        name: "Gürkan Altunok",age:20
    },
    {
        name: "Oğuz Altunok",age:22
    }
]
value = programmers[0].name;

console.log(value);