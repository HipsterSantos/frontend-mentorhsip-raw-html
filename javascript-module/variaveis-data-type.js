let insdieScop = 343;
//undefined
var insideScop = 44444;
//undefined 
const insideScop = 5555;
{
    let something
}

{
    var something
}

//undefined
const carColor = 'red' 
un//defined
carColor = 'black'

{
"desse jeito "
'desse jeito '
'desse jeito'
'desse jeito'
` desse jeito `
' desse jeito '
}
let desseJeito = 'desse jeito '
//undefined 
{
`Desse jeito ${deseeJeito}`
}

{    
`Desse jeito ${desseJeito}`
'Desse jeito desse jeito '
typeof(`Desse jeito ${desseJeito}`)
'string'
}
let isGenius = true || false
isGenius
isGenius = (1+1 == 2)
let myIsSellable = false
let modalIsOpened = false
modalIsOpened = true
let rentPrice = 12.3000
let housePrice;
housePrice = 200.0000
let id_code  = undefined
id_code == false
let bar_code = null
let calculateCPI = new Function()
typeof(calculateCPI)
let symbol = Symbol()
typeof(symbol)
let students = ['student-1','student-2','student-3', 'student-4','student-5']
/*
students[0]
'student-1'
students[0]
'student-1'
let firstStudent = 1
undefined
students[firstStudent]
'student-2'
students[firstStudent+1]
'student-3'
*/
let secondStudent = firstStudent + 1
undefined
let products = [  {},"" ,82882,true,false,undefined, ()=>{
    console.log('log me ')
}]

/*
undefined
products[2]
82882
*/

products = {
    "8278": "Amazon Alexa",
    "3873": "Google Dictionary",
    "38383": "Kindle",
    "899229": "Book"
},
{3873: 'Google Dictionary', 8278: 'Amazon Alexa', 38383: 'Kindle', 899229: 'Book'}3873: "Google Dictionary"8278: "Amazon Alexa"38383: "Kindle"899229: "Book"[[Prototype]]: Object
products['3873']
'Google Dictionary'
products = {
    names_: ['first','deborah','Silva','Methew'],
    "8278":"Amazon Alexa",
    "3873": "Google Dictionary",
    "38383": "Kindle",
    "899229": "Book"
}
/*I{3873: 'Google Dictionary', 8278: 'Amazon Alexa', 38383: 'Kindle', 899229: 'Book', names_: Array(4)}
products.names_
(4) ['first', 'deborah', 'Silva', 'Methew']
products["names_"]
(4) ['first', 'deborah', 'Silva', 'Methew']*/
products = {
    "houses listed today": {
        12:true,
    },
    names_: ['first','deborah','Silva','Methew'],
    "8278":"Amazon Alexa",
    "3873": "Google Dictionary",
    "38383": "Kindle",
    "899229": "Book"
}
//{3873: 'Google Dictionary', 8278: 'Amazon Alexa', 38383: 'Kindle', 899229: 'Book', houses listed today: {…}, names_: Array(4)}
products = {
    "houses listed today": {
        12:true,
        13: false,
    },
    names_: ['first','deborah','Silva','Methew'],
    "8278":"Amazon Alexa",
    "3873": "Google Dictionary",
    "38383": "Kindle",
    "899229": "Book"
}
/* {3873: 'Google Dictionary', 8278: 'Amazon Alexa', 38383: 'Kindle', 899229: 'Book', houses listed today: {…}, names_: Array(4)}
products["houses listed today"]
{12: true, 13: false}12: true13: false[[Prototype]]: Object
products["houses listed today"]
{12: true, 13: false}*/
// executado depois de carregar o conteudo 