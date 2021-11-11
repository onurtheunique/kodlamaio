let cart=[
    {id:1,productName:"Telefon",quantity:2,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:1,unitPrice:40},
    {id:3,productName:"Kalem",quantity:3,unitPrice:4},
    {id:4,productName:"Disk",quantity:5,unitPrice:100},
    {id:5,productName:"Babafingo",quantity:1,unitPrice:400}
]
// function addToCart(sepet) {
//     sepet.push({id:7,productName:"Kaput",quantity:1,unitPrice:20}) 
// }

// addToCart(cart)

// console.log(cart)
// cart.map(product=>console.log(product))
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+" : "+(product.quantity*product.unitPrice)+"</li>")
})
console.log("</ul>")

let quantityOverTwo=cart.filter(product=>product.quantity>2)

console.log(quantityOverTwo)

let total=cart.reduce((acc,product)=>acc+product.unitPrice,0)

console.log(total)