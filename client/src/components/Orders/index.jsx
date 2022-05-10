import { Link } from "react-router-dom";
import { detectaCombos } from "../../utils/detectaCombos";

const Orders = () => {
    const compra = [
        { id: 3, name: "Pollo", price: 1.00, quantity: 3, category: "normal" },
        
        { id: 9, name: "Tajada / Queso", price: 1.50, quantity: 3, category: "especial" },
        
        // { id: 17, name: "Camarón", price: 2.00, quantity: 8, category: "gourmet" },
        
        { id: 21, name: "Parchita", price: 1.00, quantity: 3, category: "bebida" },
        
    ]
    const order = {
        address: "1",
        cart: compra,
        delivery: true,
        id: 0,
        name: "1",
        observation: "1",
        order_date: "Mon May 09 2022 19:19:42 GMT-0300 (hora estándar de Argentina)",
        order_status: "Pendiente",
        payment_methods:['Venezuela', 'BBVA'],
        reference: "1",
        total: 44
    }
    // Eliminar funcion
    const countCategorieElminar = (cart) => {
        let sumBebida = 0;
        let sumGourmet = 0;
        let sumEspecial = 0;
        let sumNormal = 0;
        // suma todas las categorias
        cart.forEach(product => {
            if (product.category === "bebida") sumBebida += product.quantity;
            if (product.category === "gourmet") sumGourmet += product.quantity;
            if (product.category === "especial") sumEspecial += product.quantity;
            if (product.category === "normal") sumNormal += product.quantity;
        });
        return {
            sumNormal,
            sumEspecial,
            sumGourmet,
            sumBebida
        }
    }
    const newOrder = detectaCombos(order);
    console.log("newOrder",newOrder);
    return (
        <div>
            <h1>Ordenes</h1>
            {/* <h3>Bebida {detectaCombos(cart).sumBebida}</h3>
            <h3>Gourmet {detectaCombos(cart).sumGourmet}</h3>
            <h3>Especial {detectaCombos(cart).sumEspecial}</h3>
            <h3>Normal {detectaCombos(cart).sumNormal}</h3> 
            <h3>combo_s  =  {detectaCombos(cart).combo_s}</h3>
            <h3>combo_m  =  {detectaCombos(cart).combo_m}</h3>
            <h3>combo_l  =  {detectaCombos(cart).combo_l}</h3>
            <h3>combo_xl =  {detectaCombos(cart).combo_xl}</h3>
            ------------------------------------------------
            <h3>Precio {detectaCombos(cart).price}</h3>
            <h3>normal {detectaCombos(cart).sumNormal}</h3>
            <h3>especial {detectaCombos(cart).sumEspecial}</h3>
            <h3>gourmet {detectaCombos(cart).sumGourmet}</h3>
            <h3>bebida {detectaCombos(cart).sumBebida}</h3>
            ------------------------------------------------
            <h3>sumNormal {countCategorieElminar(cart).sumNormal}</h3>
            <h3>sumEspecial {countCategorieElminar(cart).sumEspecial}</h3>
            <h3>sumGourmet {countCategorieElminar(cart).sumGourmet}</h3>
            <h3>sumBebida {countCategorieElminar(cart).sumBebida}</h3>*/}
            

            <Link to="/">
                <h1>Inicio</h1>
            </Link>
        </div>
    );
};

export default Orders;