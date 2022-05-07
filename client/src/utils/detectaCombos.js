export const detectaCombos = (cart) => {
    console.log("cart",cart)
    if (cart.length <= 1) return;
    let sumBebida = 0;
    let sumGourmet = 0;
    let sumEspecial = 0;
    let sumNormal = 0;
    //detecta cuantas categorias hay en la orden de cada item
    cart.forEach(product => {
        if (product.category === "bebida") sumBebida += product.quantity;
        if (product.category === "gourmet") sumGourmet += product.quantity;
        if (product.category === "especial") sumEspecial += product.quantity;
        if (product.category === "normal") sumNormal += product.quantity;
    });
    
    let combo_s = 0;
    let combo_m = 0;
    let combo_l = 0;
    let combo_xl = 0;

        let denomiNormal = 0;
        let denomiEspecial = 0;
        let denomiGourmet = 0;
        let denomiBebida = 0;

        let min = 0;
        // si es combo XL 20$
        if (sumNormal >= 4 && sumEspecial >= 4 && sumGourmet >= 4 && sumBebida >= 4) {
            // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
            // Damos vueltas restando empanadas hasta que ya no pueda.
            denomiNormal = sumNormal/4;
            denomiEspecial = sumEspecial/4;
            denomiGourmet = sumGourmet/4;
            denomiBebida = sumBebida/4;

            min = Math.min(denomiNormal, denomiEspecial, denomiGourmet, denomiBebida);

            for (let i = 0; i <= min; i++) {
                if (sumNormal >= 4 && sumEspecial >= 4 && sumGourmet >= 4 && sumBebida >= 4) {
                    combo_xl += 1;
                    sumNormal -= 4;
                    sumEspecial -= 4;
                    sumGourmet -= 4;
                    sumBebida -= 4;
                }
            }
        }
        // Revisamos por si quedan combo L 20$
        if (sumNormal >= 4 && sumEspecial >= 4 && sumGourmet >= 2 && sumBebida >= 2) {
            // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
            // Damos vueltas restando empanadas hasta que ya no pueda.
            denomiNormal = sumNormal/4;
            denomiEspecial = sumEspecial/4;
            denomiGourmet = sumGourmet/2;
            denomiBebida = sumBebida/2;

            min = Math.min(denomiNormal, denomiEspecial, denomiGourmet, denomiBebida);

            for (let i = 0; i <= min; i++) {
                if (sumNormal >= 4 && sumEspecial >= 4 && sumGourmet >= 2 && sumBebida >= 2) {
                    combo_l += 1;
                    sumNormal -= 4;
                    sumEspecial -= 4;
                    sumGourmet -= 2;
                    sumBebida -= 2;
                }
            }
        }
        // si es combo M 10$
        if (sumNormal >= 3 && sumEspecial >= 3 && sumBebida >= 3) {
            // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
            // Damos vueltas restando empanadas hasta que ya no pueda.
            denomiNormal = sumNormal/3;
            denomiEspecial = sumEspecial/3;
            denomiBebida = sumBebida/3;

            min = Math.min(denomiNormal, denomiEspecial, denomiBebida);

            for (let i = 0; i <= min; i++) {
                if (sumNormal >= 3 && sumEspecial >= 3 && sumBebida >= 3) {
                    combo_m += 1;
                    sumNormal -= 3;
                    sumEspecial -= 3;
                    sumBebida -= 3;
                }
            }
        }
        // si es combo S 5$
        if (sumNormal >= 4 && sumBebida >= 2) {
            // si paso, tratamos de detectar cuantas vueltas da con la divicion de los elementos
            // Damos vueltas restando empanadas hasta que ya no pueda.
            denomiNormal = sumNormal/4;
            denomiBebida = sumBebida/2;

            min = Math.min(denomiNormal, denomiBebida);

            for (let i = 0; i <= min; i++) {
                if (sumNormal >= 4 && sumBebida >= 2) {
                    combo_s =+ 1;
                    sumNormal -= 4;
                    sumBebida -= 2;
                }
            }
        }

        return {
            combo_s,
            combo_m,
            combo_l,
            combo_xl
        }
    
}