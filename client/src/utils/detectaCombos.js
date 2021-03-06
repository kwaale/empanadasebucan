export const detectaCombos = (order) => {
    // console.log('Order detectaCombos', order)
    debugger;
    if (order.cart.length < 1) return;
    let sumBebida = 0;
    let sumGourmet = 0;
    let sumEspecial = 0;
    let sumNormal = 0;
    let sumMiniGourmet = 0;
    let sumMiniEspecial = 0;
    let sumMiniNormal = 0;

    //detecta cuantas categorias hay en la orden de cada item
    order.cart.forEach(product => {
        if (product.category === "bebida") sumBebida += product.quantity;
        if (product.category === "gourmet") sumGourmet += product.quantity;
        if (product.category === "especial") sumEspecial += product.quantity;
        if (product.category === "normal") sumNormal += product.quantity;
        if (product.category === "normal-mini") sumMiniNormal += product.quantity;
        if (product.category === "especial-mini") sumMiniEspecial += product.quantity;
        if (product.category === "gourmet-mini") sumMiniGourmet += product.quantity;
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
    let denomiMiniNormal = 0;
    let denomiMiniEspecial = 0;
    let denomiMiniGourmet = 0;

    let min = 0;
    // si es Combo Family Box $15 decuento 1$
    if (sumNormal >= 2 && sumEspecial >= 2 && sumGourmet >= 2 && sumBebida >= 4) {
        // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
        // Damos vueltas restando empanadas hasta que ya no pueda.
        denomiNormal = sumNormal / 2;
        denomiEspecial = sumEspecial / 2;
        denomiGourmet = sumGourmet / 2;
        denomiBebida = sumBebida / 4;

        min = Math.min(denomiNormal, denomiEspecial, denomiGourmet, denomiBebida);

        for (let i = 0; i <= min; i++) {
            if (sumNormal >= 2 && sumEspecial >= 2 && sumGourmet >= 2 && sumBebida >= 4) {
                combo.quantity += 1;
                combo.descuento += 1;
                sumNormal -= 2;
                sumEspecial -= 2;
                sumGourmet -= 2;
                sumBebida -= 4;
            }
        }
        if (combo.quantity > 0) {
            order.descuento = combo.descuento + order.descuento;
            combo.name = "Family Box";
            combos.push(combo);
        }

        combo = {
            name: "",
            quantity: 0,
            descuento: 0,
        };
    }
    // Revisamos Combo Gift Box 1 18$ descuento 2$
    // Tiene que ser mayor a 15 empandas normales y menor a 19 empandas normales
    if (sumNormal >= 10 && sumBebida >= 5) {
        // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
        // Damos vueltas restando empanadas hasta que ya no pueda.
        // order.total = order.total - 2;
        denomiNormal = sumNormal / 10;
        denomiBebida = sumBebida / 5;

        min = Math.min(denomiNormal, denomiBebida);

        for (let i = 0; i <= min; i++) {
            //Revisar, tienes que entrar en cuando es mas de 15 empanadas normales 
            if (sumNormal >= 10 &&
                sumBebida >= 5 &&
                sumNormal !== 15 &&
                sumNormal !== 16 &&
                sumNormal !== 17 &&
                sumNormal !== 18 &&
                sumNormal !== 19
            ) {
                combo.quantity += 1;
                combo.descuento += 2;
                sumNormal -= 10;
                sumBebida -= 5;
            }
        }
        if (combo.quantity > 0) {
            order.descuento = combo.descuento + order.descuento;
            combo.name = "Gift Box 1";
            combos.push(combo);
        }

        combo = {
            name: "",
            quantity: 0,
            descuento: 0,
        };
    }
    // si es Gift Box 3 25$ descuento 2.5$
    if (sumNormal >= 15 && sumBebida >= 5) {
        // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
        // Damos vueltas restando empanadas hasta que ya no pueda.
        denomiNormal = sumNormal / 15;
        denomiBebida = sumBebida / 5;

        min = Math.min(denomiNormal, denomiBebida);

        for (let i = 0; i <= min; i++) {
            if (sumNormal >= 15 && sumBebida >= 5) {
                combo.quantity += 1;
                combo.descuento += 2.5;
                sumNormal -= 15;
                sumBebida -= 5;
            }
        }
        if (combo.quantity > 0) {
            order.descuento = combo.descuento + order.descuento;
            combo.name = "Gift Box 3";
            combos.push(combo);
        }
        combo = {
            name: "",
            quantity: 0,
            descuento: 0,
        };
    }
    //Verificar lo siguiente
    // si es Gift Box 3 25$ descuento 2.5$
    if (sumMiniNormal >= 20 && sumBebida >= 5) {
        // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
        // Damos vueltas restando empanadas hasta que ya no pueda.
        denomiNormal = sumNormal / 20;
        denomiBebida = sumBebida / 5;

        min = Math.min(denomiNormal, denomiBebida);

        for (let i = 0; i <= min; i++) {
            if (sumNormal >= 15 && sumBebida >= 5) {
                combo.quantity += 1;
                combo.descuento += 2.5;
                sumNormal -= 15;
                sumBebida -= 5;
            }
        }
        if (combo.quantity > 0) {
            order.descuento = combo.descuento + order.descuento;
            combo.name = "Gift Box 3";
            combos.push(combo);
        }
        combo = {
            name: "",
            quantity: 0,
            descuento: 0,
        };
    }
    order.combos = combos;
    // console.log('Order detectaCombos fin', order)

    return order;
}