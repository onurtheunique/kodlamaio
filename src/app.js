console.log("Merhaba kodlama.io")
//JS TYPE SAFE DEĞİLDİR
// var dolardun=9.20

let dolardun=9.20
// var dolarbugun=9.30 
let dolarbugun=9.30 

{
    //bu veri sadece parantez içinde geçerli
    let dolardun=9.25
}
console.log(dolardun)
// sabit örneği --
const eurodun=11.2
// eurodun=11
console.log(eurodun)
//--

// birden fazla veri için array

//camelCasing
//PascalCasing
let konutkredileri=["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi"]
let konutkredileriextened=[12,"Emlak konut kredisi",["a","b","c","d"]]
console.log(konutkredileri)
console.log(konutkredileriextened)

//https://jsonplaceholder.typicode.com/

console.log("<ul>")
// for (let i=0 ; i<3 ;i++) 
for (let i=0 ; i<konutkredileri.length ;i++) 
{
//   console.log("<li>"+i+"</li>")  
  console.log("<li>"+konutkredileri[i]+"</li>")  
}
console.log("</ul>")
