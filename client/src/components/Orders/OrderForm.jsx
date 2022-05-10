import "./Order.css";
import forma_pagos from '../../seeds/forma_pagos.json';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderGenerator } from "../../redux/actions/orders";

const OrderForm = ({ cart, total }) => {
    const [tasa, setTasa] = useState(parseFloat(JSON.parse(localStorage.getItem('tasa'))) || 4.65);
    const dispatch = useDispatch();
    const [payment_method, setPayment_method] = useState('');
    const [form, setForm] = useState({
        name: '',
        observation: '',
        delivery: false,
        order_status: "Pendiente",
        reference: '',
        payment_methods: [],
        address: '',
        // order_date: '',
        // cart: [],
        // total: 0.00,
    });

    const handleChange = (e) => {
        const regex = /^[0-9]*\.?[0-9]*$/;
        const { name, value } = e.target;

        if (name === 'payment_method') {
            return setPayment_method(value);
        }
        setForm({
            ...form,
            [name]: value
        });
        // tasa
        if(name === 'tasa'){
            if (regex.test(value)) {
                setTasa(value);
                localStorage.setItem('tasa', JSON.stringify(value));
            }
        }

    }
    const handleClick = () => {
        // switch delivery
        form.delivery ? setForm({ ...form, delivery: false }) : setForm({ ...form, delivery: true });
        // console.log("Delivery", form.delivery)
    }

    const addPayMethod = (e) => {
        // controlar que solo agregue un metodo de pago
        e.preventDefault();
        const { name, value } = e.target;

        if (form.payment_methods.find(pm => pm === name)) {
            return alert(`Ya agregaste metodo pago ${name}`);
        }
        let aux = form.payment_methods;
        console.log('aux', aux);
        aux.push(name);
        setForm({ ...form, payment_methods: aux });
    }
    const removePayMethod = (e) => {
        e.preventDefault();
        let aux = form.payment_methods;
        aux.splice(e.target.name, 1);
        setForm({ ...form, payment_methods: aux });
    }

    const validaForm = () => {
        if (form.name === '') return false;
        if (form.delivery && form.address === '') return false;
        if (form.payment_methods.length === 0) return false;
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
                {form.delivery ?
                    <button className="btn-devliveri-true" onClick={() => handleClick()}>Delivery</button> :
                    <button className="btn-devliveri-false" onClick={() => handleClick()}>Pick UP</button>}
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
                    Metodos de Pago
                    {forma_pagos.map((p, i) => {
                        return (
                            <button className="btn-pay-add" key={i} onClick={addPayMethod} name={p}>{p}</button>
                        )}
                    )}<br/>
                {/* </select><button onClick={addPayMethod}>+</button><br /> */}
                Metodos de Pago Agregados
                {form.payment_methods.map((p, i) => {
                    return (
                        <button className="btn-pay-added" name={p} onClick={(e) => removePayMethod(e)} key={i}>{p}</button>
                    )
                }
                )}
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