// Object

/* let myName = 'Nishant';

document.write('Length = '+ myName.length)


let country = ["India","USA","UK"];

document.write('<br>Country =  '+ country)


let person = {
    "name":'Peter Parker',
    "age" : 34
}

document.write('<br> Name = '+ person.name)
document.write('<br> Age = '+ person.age) */


// Array Of Object
let Employee=[
    {
        "name":'Peter Parker',
        "age" : 34
    },
    {
        "name":'Mike Tyson',
        "age" : 23
    },
    {
        "name":'John Cena',
        "age" : 44
    }
]
for (let emp of Employee) {
    // emp = {"name":'Mike Tyson',"age" : 23},
    // document.write('<br> Name = '+ emp.name)
    // document.write('<br> Age = '+ emp.age)

    document.write(`Name = ${emp.name} , Age= ${emp.age} `)

    document.write('<hr>')
}

