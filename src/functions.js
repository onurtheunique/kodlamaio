// function addToCart(productName) 
// function addToCart(productName="Elma") //default değer eklenmesi
// function addToCart(productName="Elma",quantity) //buna fonsiyonun izi deniyor
function addToCart(quantity,productName="Elma") //default değerleri sona almak en doğrusu
{
    console.log("Sepete Eklendi:"+ productName+" adet:" +quantity)
}

// addToCart("Elma")
// addToCart("Armut",15)
addToCart(15,"Armut")

// addToCart(15)
// addToCart() //undefined null demek değildir  burada fonksiyonda default değer olduğundan unidentified olmuyor

let sayHello=()=>{ //fonksiyonu değişkene atamak
console.log("Hello world!")
}

sayHello()

let sayHello2=function () {
    
    console.log("hello world 2")
}

sayHello2()

function addToCart2(quantity=1,productName,unitPrice) 
{
    console.log((unitPrice * quantity)  +" tutarındaki "+quantity+" adet "+productName+" sepete eklendi")
}

addToCart2(2,"dildo",325)

function addToCart3(prod) 
    {
        console.log((prod.unitPrice *prod.quantity)  +" tutarındaki "+prod.quantity+" adet "+prod.productName+" sepete eklendi")
    }
let product1= //encapsulation budur
{
productName:"elma",
unitPrice:10,
quantity:5
}

addToCart3(product1)


let product2= {productName:"elma2",unitPrice:10,quantity:5
}
let product3= {productName:"elma3",unitPrice:10,quantity:5
}

product2=product3;
console.log(product2.productName);
product2.productName="karpuz";
console.log(product3.productName);

//primatif tipler değer tiptir. nesneler ise referans tiptir aralarındaki fark bellekte tutulma şekilleridir


function addToCart4(prods) // çoklu ürünler
{
    // console.log(products); //böyle bırakırsam scope yüzünden aynı değeri alır
    console.log(prods);
}
let products=[
{productName:"elma",unitPrice:10,quantity:5},
{productName:"armut",unitPrice:10,quantity:5},
{productName:"karpuz",unitPrice:10,quantity:5}
]
addToCart4(products);

function add(...numbers)  // buradaki... REST operatörü
{
    console.log(numbers);   
    for (let i =0; i< numbers.length; i++)
    {
        console.log(numbers[i]);
    }

}

add(10,20,30,40,50,60)

/*REST operatörü kullanılırken başka bir operatör varsa başa yazılmalı 
function add(...numbers,islem) DEĞİL
function add(islem,...numbers) 
*/
let numbers=[10,20,50,600,120]
console.log(numbers); //Array(5) [ 10, 20, 50, 600, 120 ]
console.log(...numbers); //10 20 50 600 120
console.log(Math.max(...numbers));


/*NESNELERİ TEKER TEKER BAŞKA CLASSLARA ÇEVİRMEK YERİNE TOPLU HALDE ÇEVİRİM*/

// let regions=["iç anadolu","karadeniz","marmara"]
// console.log(regions )
// let [anadolu,kuzey]=[
//     "iç anadolu","karadeniz","marmara"]
// console.log(anadolu )
// console.log(kuzey )

let [anadolu,kuzey,marmara,[icanadolusehirleri]]=[
   {name:"iç anadolu",population:"20M"},
   {name:"karadeniz",population:"10M"},
   {name:"Marmara ",population:"30M"},
   [
       ["ankara","konya"],
       ["sinop","samsun"],
       ["istanbul","bursa"]
]
]

console.log(anadolu )
console.log(kuzey )
console.log(marmara)
console.log(icanadolusehirleri )