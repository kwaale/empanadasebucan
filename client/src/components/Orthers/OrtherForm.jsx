import forma_pagos from '../../seeds/forma_pagos.json';
import { useState } from "react";
import { Link } from "react-router-dom";


const OrtherForm = ({ cart }) => {
    const [payment_method, setPayment_method] = useState('');
    const [form, setForm] = useState({
        name: '',
        observation: '',
        delivery: false,
        reference: '',
        payment_methods: [],
        cart: cart
    });

    const handleChange = (e) => {
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
        console.log(form);
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
                <input onChange={handleChange} name="obsevation" type="text" />
                Referencia
                <input onChange={handleChange} name="reference" type="text" />
                {/* switch delivery */}
                {form.delivery ?
                    <div> Direccion
                        <input onChange={handleChange} name="address" type="text" />
                    </div> : null}
                {/* Metodo de pago */}
                <select onChange={handleChange} name="payment_method">
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
                        <button onClick={(e) => addPayMethod(e)}>Comanda</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default OrtherForm;