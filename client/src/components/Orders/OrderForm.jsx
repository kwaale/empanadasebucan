import forma_pagos from '../../seeds/forma_pagos.json';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/actions/orders";
import { useEffect } from 'react';

const OrderForm = ({ cart, total }) => {
    // console.log("props OrderForm", cart, bolivar, dolar);
    const dispatch = useDispatch();
    const [payment_method, setPayment_method] = useState('');
    const [form, setForm] = useState({
        name: '',
        order_date: new Date(),
        observation: '',
        delivery: false,
        order_status: "Pendiente",
        reference: '',
        payment_methods: [],
        cart,
        address: '',
    });
    
    console.log("form", form);
    const handleChange = (e) => {
        setForm({ ...form,cart});
        const { name, value } = e.target;
        // switch delivery
        if (name === 'delivery') {
            console.log(form);
            return form.delivery ? setForm({ ...form, delivery: false }) : setForm({ ...form, delivery: true });
        }
        if (name === 'payment_method') {
            return setPayment_method(value);
        }
        setForm({
            ...form,
            [name]: value
        });
    }
    
    const addPayMethod = (e) => {
        // controlar que solo agregue un metodo de pago
        e.preventDefault();
        if (form.payment_methods.find(pm => pm === payment_method)) {
            return alert(`Ya agregaste metodo pago ${payment_method}`);
        }
        let aux = form.payment_methods;
        console.log('aux', aux);
        aux.push(payment_method);
        setForm({ ...form, payment_methods: aux });
    }
    const removePayMethod = (e) => {
        e.preventDefault();
        let aux = form.payment_methods;
        aux.splice(e.target.name, 1);
        setForm({ ...form, payment_methods: aux });
    }
    return (
        <div className="container-form">
            <div onSubmit={() => console.log("Submit")}>
                Delivery
                <input onChange={handleChange} name="delivery" type="checkbox" /><br />
                Cliente
                <input onChange={handleChange} name="name" type="text" />
                Observacion
                <input onChange={handleChange} name="observation" type="text" />
                Referencia
                <input onChange={handleChange} name="reference" type="text" />
                {/* switch delivery */}
                {form.delivery ?
                    <div> Direccion
                        <input onChange={handleChange} name="address" type="text" />
                    </div> : null}
                {/* Metodo de pago */}
                <select onChange={handleChange} name="payment_method">
                    <option>Metodo de Pago</option>
                    {forma_pagos.map((p, i) => {
                        return (
                            <option key={i} value={p}>{p}</option>
                        )
                    }
                    )}
                </select><button onClick={addPayMethod}>+</button><br />
                {form.payment_methods.map((p, i) => {
                    return (
                        <button name={p} onClick={(e) => removePayMethod(e)} key={i}>{p}</button>
                    )
                }
                )}
                <div>
                    <Link to="/comanda">
                        <button onClick={()=>dispatch(addOrder(form,form.total = total))}>Cargar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default OrderForm;