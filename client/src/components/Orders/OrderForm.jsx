import "./Order.css";
import ButtonInput from "../ButtonInput";
import ButtonZonas from "../ButtonZonas";
import CartProducts from "../CartProducts";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderGenerator } from "../../redux/actions/orders";

const OrderForm = () => {
    const { payment_methods, cart, zonas_delivery, total_cart, order } = useSelector(state => state.orderReducer);
    const [tasa, setTasa] = useState(parseFloat(JSON.parse(localStorage.getItem('tasa'))) || 4.65);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: '',
        observation: '',
        reference: '',
        payment_methods,
        address: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        // console.log("handleChange",form);
        const regex = /^[0-9]*\.?[0-9]*$/;
        const { name, value } = e.target;
        //Setea Direccion
        if (name === 'address') return setForm({
            ...form,
            address: value
        });
        //Agregamos datos al array de payment_methods
        if (
            name === "Pago Movil" ||
            name === "Efectivo USD" ||
            name === "Efectivo Bs" ||
            name === "Zelle" ||
            name === "Banesco" ||
            name === "Mercantil" ||
            name === "BBVA" ||
            name === "Venezuela" ||
            name === "Reserve" ||
            name === "Zinli" ||
            name === "PayPal"
        ) {
            return setForm({
                ...form,
                payment_methods: payment_methods.map(payment => {
                    if (payment.name === name) {
                        payment.amount = value;
                        payment.active = true;
                        return payment;
                    } else return payment;
                })
            });
        }
        //Setea la tasa
        if (name === 'tasa') {
            if (regex.test(value)) {
                setTasa(value);
                localStorage.setItem('tasa', JSON.stringify(value));
                return
            }
        }
        //Precio del Delivery
        if (name === 'delivery') {
            // console.log("regex.test(value)", regex.test(value));
            if (regex.test(value)) {
                return setForm({
                    ...form,
                    delivery: {
                        ...form.delivery,
                        price: value
                    }
                });
            }
            return
        }
        //Setea el resto del form
        setForm({
            ...form,
            [name]: value
        });
    }
    console.log('Corregir validaForm')
    const validaForm = () => {
        // console.log("cart.lenght ñññ", !cart);
        if (form.name === '') return false;
        // if (cart.length === 0 || cart.length === undefined) return false;
        if (form.delivery && form.address === '') return false;
        // if (!form.payment_methods.find(p => p.active)) return false;
        return true;
    }

    return (
        <div className="container-form">
            <div>
                <CartProducts
                    cart={cart}
                    total_cart={total_cart}
                    tasa={tasa}
                    zonas_delivery={zonas_delivery}
                    combos={order.combos} />
                <div className="tasa">
                    Tasa Bs./US$
                    <input className="input-tasa"
                        onChange={(e) => handleChange(e)}
                        name="tasa"
                        value={tasa}
                        type="number"
                    />
                </div>
                Delivery
                <ButtonZonas zonas_delivery={zonas_delivery} />
                Cliente
                <input onChange={handleChange} name="name" type="text" />
                Observacion
                <input onChange={handleChange} name="observation" type="text" />
                Referencia
                <input onChange={handleChange} name="reference" type="text" />
                {zonas_delivery?.find(d => d.active) ?
                    <div> Direccion
                        <input onChange={handleChange} name="address" type="text" value={form.address} />
                    </div> : null}
                {payment_methods?.map((element, index) => <ButtonInput handleChange={handleChange} element={element} key={index} />)}
            </div>
            <div >
                {validaForm() ? <>
                    <Link to="/comanda" >
                        <button className="btn-comanda" onClick={() => dispatch(orderGenerator(form))}>Comanda</button>
                    </Link>
                </> : null}
            </div>
        </div>
    )
}
export default OrderForm;