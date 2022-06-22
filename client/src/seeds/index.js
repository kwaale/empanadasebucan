export const products = [
    // Sabores Normales $1.50
    { id: 1, name: "Mechada", price: 1.50, category: "normal", quantity: 0, type: "product" },
    { id: 2, name: "Queso", price: 1.50, category: "normal", quantity: 0, type: "product" },
    { id: 3, name: "Pollo", price: 1.50, category: "normal", quantity: 0, type: "product" },
    { id: 4, name: "Molida", price: 1.50, category: "normal", quantity: 0, type: "product" },
    { id: 5, name: "Cazón", price: 1.50, category: "normal", quantity: 0, type: "product" },
    { id: 6, name: "Vegana", price: 1.50, category: "normal", quantity: 0, type: "product" },
    // Sabores Especiales $2
    { id: 7, name: "Mechada / Queso", price: 2.00, category: "especial", quantity: 0, type: "product" },
    { id: 8, name: "Pollo / Queso", price: 2.00, category: "especial", quantity: 0, type: "product" },
    { id: 9, name: "Tajada / Queso", price: 2.00, category: "especial", quantity: 0, type: "product" },
    { id: 10, name: "Jamón / Queso", price: 2.00, category: "especial", quantity: 0, type: "product" },
    { id: 11, name: "Asado", price: 2.00, category: "especial", quantity: 0, type: "product" },
    { id: 12, name: "Dominó", price: 2.00, category: "especial", quantity: 0, type: "product" },
    // Sabores Gourmet $2,50
    { id: 13, name: "CB Pollo", price: 2.50, category: "gourmet", quantity: 0, type: "product" },
    { id: 14, name: "CB Carne", price: 2.50, category: "gourmet", quantity: 0, type: "product" },
    { id: 15, name: "Pabellón", price: 2.50, category: "gourmet", quantity: 0, type: "product" },
    { id: 16, name: "Pabellón Margariteño", price: 2.50, category: "gourmet", quantity: 0, type: "product" },
    { id: 17, name: "Camarón", price: 2.50, category: "gourmet", quantity: 0, type: "product" },
    { id: 18, name: "Asado / Queso", price: 2.50, category: "gourmet", quantity: 0, type: "product" },
    { id: 19, name: "Chuleta / Queso", price: 2.50, category: "gourmet", quantity: 0, type: "product" },
    // Bebidas $1
    { id: 20, name: "Mango", price: 1.00, category: "bebida", quantity: 0, type: "product" },
    { id: 21, name: "Parchita", price: 1.00, category: "bebida", quantity: 0, type: "product" },
    { id: 22, name: "Fresa", price: 1.00, category: "bebida", quantity: 0, type: "product" },
    { id: 23, name: "Papelón / Limón", price: 1.00, category: "bebida", quantity: 0, type: "product" },
    { id: 24, name: "Durazno", price: 1.00, category: "bebida", quantity: 0, type: "product" },
    { id: 25, name: "Malta", price: 1.00, category: "bebida", quantity: 0, type: "product" },
    // Minis valen la mitad
    // Sabores Normales $0.75
    { id: 26, name: "Mechada Mini", price: 0.75, category: "normal-mini", quantity: 0, type: "product" },
    { id: 27, name: "Queso Mini", price: 0.75, category: "normal-mini", quantity: 0, type: "product" },
    { id: 28, name: "Pollo Mini", price: 0.75, category: "normal-mini", quantity: 0, type: "product" },
    { id: 29, name: "Molida Mini", price: 0.75, category: "normal-mini", quantity: 0, type: "product" },
    { id: 30, name: "Cazón Mini", price: 0.75, category: "normal-mini", quantity: 0, type: "product" },
    { id: 31, name: "Vegana Mini", price: 0.75, category: "normal-mini", quantity: 0, type: "product" },
    // Sabores Especiales $1.00
    { id: 32, name: "Mechada / Queso Mini", price: 1.00, category: "especial-mini", quantity: 0, type: "product" },
    { id: 33, name: "Pollo / Queso Mini", price: 1.00, category: "especial-mini", quantity: 0, type: "product" },
    { id: 34, name: "Tajada / Queso Mini", price: 1.00, category: "especial-mini", quantity: 0, type: "product" },
    { id: 35, name: "Jamón / Queso Mini", price: 1.00, category: "especial-mini", quantity: 0, type: "product" },
    { id: 36, name: "Asado Mini", price: 1.00, category: "especial-mini", quantity: 0, type: "product" },
    { id: 37, name: "Dominó Mini", price: 1.00, category: "especial-mini", quantity: 0, type: "product" },
    // Sabores Gourmet $1.25
    { id: 38, name: "CB Pollo Mini", price: 1.25, category: "gourmet-mini", quantity: 0, type: "product" },
    { id: 39, name: "CB Carne Mini", price: 1.25, category: "gourmet-mini", quantity: 0, type: "product" },
    { id: 40, name: "Pabellón Mini", price: 1.25, category: "gourmet-mini", quantity: 0, type: "product" },
    { id: 41, name: "Pabellón Margariteño Mini", price: 1.25, category: "gourmet-mini", quantity: 0, type: "product" },
    { id: 42, name: "Camarón Mini", price: 1.25, category: "gourmet-mini", quantity: 0, type: "product" },
    { id: 43, name: "Asado / Queso Mini", price: 1.25, category: "gourmet-mini", quantity: 0, type: "product" },
    { id: 44, name: "Chuleta / Queso Mini", price: 1.25, category: "gourmet-mini", quantity: 0, type: "product" },
];
// Sin useParams, hay que usar
export const combos = [
    { id: 1, name: "Family Box", discount: 1, quantity: 0, type: "combo" },
    { id: 2, name: "Gift Box 1", discount: 2, quantity: 0, type: "combo" },
    { id: 3, name: "Gift Box 3", discount: 2.5, quantity: 0, type: "combo" },
    { id: 4, name: "Gift Box 2", discount: 2, quantity: 0, type: "combo" }
]

export const payment_methods = [
    { name: "Pago Movil", active: false, amount: 0, dolar: false },
    { name: "Efectivo USD", active: false, amount: 0, dolar: true },
    { name: "Efectivo Bs", active: false, amount: 0, dolar: false },
    { name: "Zelle", active: false, amount: 0, dolar: true },
    { name: "Banesco", active: false, amount: 0, dolar: false },
    { name: "Mercantil", active: false, amount: 0, dolar: false },
    { name: "BBVA", active: false, amount: 0, dolar: false },
    { name: "Venezuela", active: false, amount: 0, dolar: false },
    { name: "Reserve", active: false, amount: 0, dolar: true },
    { name: "Zinli", active: false, amount: 0, dolar: true },
    { name: "PayPal", active: false, amount: 0, dolar: true },
]

export const zonas = [
    { name: "Zona 1", active: false, amount: 1.00, dolar: true },
    { name: "Zona 2", active: false, amount: 1.50, dolar: true },
    { name: "Zona 3", active: false, amount: 2.00, dolar: true },
    { name: "Zona 4", active: false, amount: 3.00, dolar: true }
];