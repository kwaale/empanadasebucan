// import { useParams } from "react-router-dom";

export const products = [
    // Sabores Normales $1
    { id:1, name: "Mechada", price: 1.50, category: "normal", quantity:0, },
    { id:2, name: "Queso", price: 1.50, category: "normal", quantity:0, },
    { id:3, name: "Pollo", price: 1.50, category: "normal", quantity:0, },
    { id:4, name: "Molida", price: 1.50, category: "normal", quantity:0, },
    { id:5, name: "Cazón", price: 1.50, category: "normal", quantity:0, },
    { id:6, name: "Vegana", price: 1.50, category: "normal", quantity:0, },
    // Sabores Especiales $1,5
    { id:7, name: "Mechada / Queso", price: 2.00, category:"especial", quantity:0},
    { id:8, name: "Pollo / Queso", price: 2.00, category:"especial", quantity:0},
    { id:9, name: "Tajada / Queso", price: 2.00, category:"especial", quantity:0},
    { id:10, name: "Jamón / Queso", price: 2.00, category:"especial", quantity:0},
    { id:11, name: "Asado", price: 2.00, category:"especial", quantity:0},
    { id:12, name: "Dominó", price: 2.00, category:"especial", quantity:0},
    // Sabores Gourmet $2
    { id:13, name: "CB Pollo", price: 2.50, category:"gourmet", quantity:0},
    { id:14, name: "CB Carne", price: 2.50, category:"gourmet", quantity:0},
    { id:15, name: "Pabellón", price: 2.50, category:"gourmet", quantity:0},
    { id:16, name: "Pabellón Margariteño", price: 2.50, category:"gourmet", quantity:0},
    { id:17, name: "Camarón", price: 2.50, category:"gourmet", quantity:0},
    { id:18, name: "Asado / Queso", price: 2.50, category:"gourmet", quantity:0},
    { id:19, name: "Chuleta / Queso", price: 2.50, category:"gourmet", quantity:0},
    // Bebidas $1
    { id:20, name: "Mango", price: 1.00, category:"bebida", quantity:0},
    { id:21, name: "Parchita", price: 1.00, category:"bebida", quantity:0},
    { id:22, name: "Fresa", price: 1.00, category:"bebida", quantity:0},
    { id:23, name: "Papelón / Limón", price: 1.00, category:"bebida", quantity:0},
    { id:24, name: "Durazno", price: 1.00, category:"bebida", quantity:0},
    { id:25, name: "Malta", price: 1.00, category:"bebida", quantity:0},
];
// Sin useParams, hay que usar
export const combos = [
    { id:1, name: "Combo S", discount: 1, quantity: 0, products: { normales: 4, bebidas: 2 } },
    { id:2, name: "Combo M", discount: 0.5, quantity: 0, products: { normales: 3, especiales: 3, bebidas: 3} },
    { id:3, name: "Combo L", discount: 1, quantity: 0, products: { normales: 4, especiales: 4, gourmet:2, bebidas: 2} },
    { id:4, name: "Combo XL", discount: 2, quantity: 0, products: { normales: 4, especiales: 4, gourmet:4, bebidas: 4}  }
]

export const payment_methods = [
    { name:"Pago Movil", active:false, amount:0, dolar:false },
    { name:"Efectivo USD", active:false, amount:0, dolar:true },
    { name:"Efectivo Bs", active:false, amount:0, dolar:false },
    { name:"Zelle", active:false, amount:0, dolar:true },
    { name:"Banesco", active:false, amount:0, dolar:false },
    { name:"Mercantil", active:false, amount:0, dolar:false },
    { name:"BBVA", active:false, amount:0, dolar:false },
    { name:"Venezuela", active:false, amount:0, dolar:false },
    { name:"Reserve", active:false, amount:0, dolar:true },
    { name:"Zinli", active:false, amount:0, dolar:true },
    { name:"PayPal", active:false, amount:0, dolar:true },
]

export const zonas = [
    { name: "Zona 1", active: false, amount: 1.00, dolar: true },
    { name: "Zona 2", active: false, amount: 1.50, dolar: true },
    { name: "Zona 3", active: false, amount: 2.00, dolar: true },
    { name: "Zona 4", active: false, amount: 3.00, dolar: true }
];

// Combo S	$5 descuento $1
// 4	Normales
// 2	Jugos

// Combo M	$10 descuento $0.5
// 3	Normales
// 3	Especiales
// 3	Jugos
	
// Combo L	$15 descuento $1
// 4	Normales
// 4	Especiales
// 2	Gourmet
// 2	Jugos
	
// Combo XL	$20 descuento $2
// 4	Nomales
// 4	Especiales
// 4	Gourmet
// 4	Jugos


// Combo Family Box	$15 descuento $x
// 2	Nomales
// 2	Especiales
// 2	Gourmet
// 4	Jugos

// Combo Gift Box 1	$18 descuento $x
// 10	Normales
// 5	Jugos

// Combo Gift Box 2 $18 descuento $x
// 20	Minis
// 5	Jugos

// Combo Gift Box 3	$25 descuento $x
// 15	Normales
// 5	Jugos