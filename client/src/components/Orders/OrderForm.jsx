import "./Order.css";
import ButtonInput from "../Comanda/ButtonInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderGenerator } from "../../redux/actions/orders";

const OrderForm = () => {
    const { payment_methods, delivery } = useSelector(state => state.orderReducer);
    const dispatch = useDispatch();
    const [tasa, setTasa] = useState(parseFloat(JSON.parse(localStorage.getItem('tasa'))) || 4.65);
    // console.log("Delivery",delivery);
    const [form, setForm] = useState({
        name: '',
        observation: '',
        reference: '',
        address: '',
        precio_delivery: 0,
        payment_methods,
        delivery
    });

    const handleChange = (e) => {
        e.preventDefault();
        // console.log("handleChange", e.target.name, e.target.value);
        const regex = /^[0-9]*\.?[0-9]*$/;
        const { name, value } = e.target;
        //Setea precio al delivery
        if (name === 'delivery') return setForm({
            ...form,
            delivery:{
                ...form.delivery,
                price: value,
                active: true
            }
        });
        //Setea Direccion
        if (name === 'address') return setForm({
            ...form,
            delivery: {
                ...form.delivery,
                address: value
            }
        });
        //Agregamos datos al array de payment_methods
        switch (name) {
            case "Efectivo Bs":
            case "Mercantil":
            case "Pago Movil":
            case "PayPal":
            case "Reserve":
            case "Venezuela":
            case "Zelle":
            case "Zinli":
                return setForm({
                    ...form,
                    payment_methods: payment_methods.map(payment => {
                        if (payment.name === name) {
                            payment.amount = value;
                            payment.active = true;
                            return payment;
                        }else return payment;
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
        //Setea el resto
        setForm({
            ...form,
            [name]: value
        });
        console.log("handleChange",form);
    }
    const validaForm = () => {
        // if (form.name === '') return false;
        // if (form.delivery && form.address === '') return false;
        // if (form.payment_methods.length === 0) return false;
        return true;
    }

    return (
        <div className="container-form">
            <div>
                <div className="tasa">
                    Tasa Bs./US$
                    <input className="input-tasa"
                        onChange={(e) => handleChange(e)}
                        name="tasa"
                        value={tasa}
                        type="number"
                    />
                </div>
                <ButtonInput handleChange={handleChange} element={delivery}/>
                Cliente
                <input onChange={handleChange} name="name" type="text" />
                Observacion
                <input onChange={handleChange} name="observation" type="text" />
                Referencia
                <input onChange={handleChange} name="reference" type="text" />
                {form.delivery ?
                    <div> Direccion
                        <input onChange={handleChange} name="address" type="text" />
                    </div> : null}
                {payment_methods?.map((element, index) => <ButtonInput handleChange={handleChange} element={element} key={index} />)}
                <div>
                    {validaForm() ? <>
                        <Link to="/comanda">
                            <button className="btn-comanda" onClick={() => dispatch(orderGenerator(form))}>Comanda</button>
                        </Link>
                    </> : null}
                </div>
            </div>
        </div>
    )
}
export default OrderForm;