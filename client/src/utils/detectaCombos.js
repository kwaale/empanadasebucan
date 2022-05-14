export const detectaCombos = (order) => {
    console.log('Order detectaCombos',order.total)
    if (order.cart.length <= 1) return;
    let sumBebida = 0;
    let sumGourmet = 0;
    let sumEspecial = 0;
    let sumNormal = 0;

    //detecta cuantas categorias hay en la orden de cada item
    order.cart.forEach(product => {
        if (product.category === "bebida") sumBebida += product.quantity;
        if (product.category === "gourmet") sumGourmet += product.quantity;
        if (product.category === "especial") sumEspecial += product.quantity;
        if (product.category === "normal") sumNormal += product.quantity;
    });

    let combo = {
        name: "",
        quantity: 0,
        descuento: 0,
    };
    let combos = [];
    let denomiNormal = 0;
    let denomiEspecial = 0;
    let denomiGourmet = 0;
    let denomiBebida = 0;

    let min = 0;
    // si es combo XL 20$ decuento 2
    if (sumNormal >= 4 && sumEspecial >= 4 && sumGourmet >= 4 && sumBebida >= 4) {
        // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
        // Damos vueltas restando empanadas hasta que ya no pueda.
        denomiNormal = sumNormal / 4;
        denomiEspecial = sumEspecial / 4;
        denomiGourmet = sumGourmet / 4;
        denomiBebida = sumBebida / 4;

        min = Math.min(denomiNormal, denomiEspecial, denomiGourmet, denomiBebida);
        
        for (let i = 0; i <= min; i++) {
            if (sumNormal >= 4 && sumEspecial >= 4 && sumGourmet >= 4 && sumBebida >= 4) {
                combo.quantity += 1;
                combo.descuento += 2;
                sumNormal -= 4;
                sumEspecial -= 4;
                sumGourmet -= 4;
                sumBebida -= 4;
            }
        }
        if (combo.quantity > 0){
            order.descuento = combo.descuento;
            combo.name = "Combo XL";
            combos.push(combo);
        }

        combo = {};
    }
    // Revisamos por si quedan combo L 20$ descuento
    if (sumNormal >= 4 && sumEspecial >= 4 && sumGourmet >= 2 && sumBebida >= 2) {
        // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
        // Damos vueltas restando empanadas hasta que ya no pueda.
        order.total = order.total - 2;
        denomiNormal = sumNormal / 4;
        denomiEspecial = sumEspecial / 4;
        denomiGourmet = sumGourmet / 2;
        denomiBebida = sumBebida / 2;

        min = Math.min(denomiNormal, denomiEspecial, denomiGourmet, denomiBebida);

        for (let i = 0; i <= min; i++) {
            if (sumNormal >= 4 && sumEspecial >= 4 && sumGourmet >= 2 && sumBebida >= 2) {
                combo.quantity += 1;
                combo.descuento += 1;
                sumNormal -= 4;
                sumEspecial -= 4;
                sumGourmet -= 2;
                sumBebida -= 2;
            }
        }
        if (combo.quantity > 0){
            order.descuento = combo.descuento;
            combo.name = "Combo L";
            combos.push(combo);
        }

        combo = {};
    }
    // si es combo M 10$
    if (sumNormal >= 3 && sumEspecial >= 3 && sumBebida >= 3) {
        // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
        // Damos vueltas restando empanadas hasta que ya no pueda.
        denomiNormal = sumNormal / 3;
        denomiEspecial = sumEspecial / 3;
        denomiBebida = sumBebida / 3;

        min = Math.min(denomiNormal, denomiEspecial, denomiBebida);

        for (let i = 0; i <= min; i++) {
            if (sumNormal >= 3 && sumEspecial >= 3 && sumBebida >= 3) {
                combo.quantity += 1;
                combo.descuento += 0.5;
                sumNormal -= 3;
                sumEspecial -= 3;
                sumBebida -= 3;
            }
        }
        if (combo.quantity > 0){
            order.descuento = combo.descuento;
            combo.name = "Combo M";
            combos.push(combo);
        }
        combo = {};
    }
    // si es combo S 5$
    if (sumNormal >= 4 && sumBebida >= 2) {
        // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
        // Damos vueltas restando empanadas hasta que ya no pueda.
        denomiNormal = sumNormal / 4;
        denomiBebida = sumBebida / 2;

        min = Math.min(denomiNormal, denomiBebida);

        for (let i = 0; i <= min; i++) {
            if (sumNormal >= 4 && sumBebida >= 2) {
                combo.descuento += 1;
                combo.quantity += 1;
                sumNormal -= 4;
                sumBebida -= 2;
            }
        }
        if (combo.quantity > 0){
            order.descuento = combo.descuento;
            combo.name = "Combo S";
            combos.push(combo);
        }
        combo = {};
    }
    order.combos = combos;
    console.log("Detecta Combos fin", order)
    return order;
}