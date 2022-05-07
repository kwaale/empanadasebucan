export const products = [
    // Sabores Normales $1
    { id:1, name: "Mechada", price: 1.00, category: "normal" },
    { id:2, name: "Queso", price: 1.00, category: "normal" },
    { id:3, name: "Pollo", price: 1.00, category: "normal" },
    { id:4, name: "Molida", price: 1.00, category: "normal" },
    { id:5, name: "Cazón", price: 1.00, category: "normal" },
    { id:6, name: "Vegana", price: 1.00, category: "normal" },
    // Sabores Especiales $1,5
    { id:7, name: "Mechada / Queso", price: 1.50, category:"especial"  },
    { id:8, name: "Pollo / Queso", price: 1.50, category:"especial"  },
    { id:9, name: "Tajada / Queso", price: 1.50, category:"especial"  },
    { id:10, name: "Jamón / Queso", price: 1.50, category:"especial"  },
    { id:11, name: "Asado", price: 1.50, category:"especial"  },
    { id:12, name: "Dominó", price: 1.50, category:"especial"  },
    // Sabores Gourmet $2
    { id:13, name: "CB Pollo", price: 2.00, category:"gourmet"  },
    { id:14, name: "CB Carne", price: 2.00, category:"gourmet"  },
    { id:15, name: "Pabellón", price: 2.00, category:"gourmet"  },
    { id:16, name: "Pabellón Margariteño", price: 2.00, category:"gourmet"  },
    { id:17, name: "Camarón", price: 2.00, category:"gourmet"  },
    { id:18, name: "Asado / Queso", price: 2.00, category:"gourmet"  },
    { id:19, name: "Chuleta / Queso", price: 2.00, category:"gourmet"  },
    // Bebidas $1
    { id:20, name: "Mango", price: 1.00, category:"bebida"  },
    { id:21, name: "Parchita", price: 1.00, category:"bebida"  },
    { id:22, name: "Fresa", price: 1.00, category:"bebida"  },
    { id:23, name: "Papelón / Limón", price: 1.00, category:"bebida"  },
    { id:24, name: "Durazno", price: 1.00, category:"bebida"  },
    { id:25, name: "Malta", price: 1.00, category:"bebida"  },
];

const combos = [
    { id:1, name: "Combo S", price: 5.00, products: { normales: 4, bebidas: 2 } },
    { id:2, name: "Combo M", price: 10.00, products: { normales: 3, especiales: 3, bebidas: 3} },
    { id:3, name: "Combo L", price: 15.00, products: { normales: 4, especiales: 4, gourmet:2, bebidas: 2} },
    { id:4, name: "Combo XL", price: 20.00, products: { normales: 4, especiales: 4, gourmet:4, bebidas: 4}  }
]

// Combo S	$5
// 4	Normales
// 2	Jugos
	
// Combo M	$10
// 3	Normales
// 3	Especiales
// 3	Jugos
	
// Combo L	$15
// 4	Normales
// 4	Especiales
// 2	Gourmet
// 2	Jugos
	
// Combo XL	$20
// 4	Nomales
// 4	Especiales
// 4	Gourmet
// 4	Jugos