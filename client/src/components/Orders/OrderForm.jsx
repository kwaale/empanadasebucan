import forma_pagos from '../../seeds/forma_pagos.json';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrder } from "../../redux/actions/orders";

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
        cart:[],
        total:0.00,
        address: '',
    });
    
    // console.log("form", form);
    const handleChange = (e) => {
        if(form.total === 0 || form.cart.length === 0)setForm({ ...form,
                cart,
                total
            });
       
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

    const validaForm = () => {
        if (form.name === '') return false;
        if (form.delivery && form.address === '') return false;
        if (form.payment_methods.length === 0) return false;
        return true;
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
                    {validaForm() ? <>
                        <Link to="/comanda">
                            <button onClick={() => dispatch(addOrder(form))}>Generar</button>
                        </Link>
                    </> : null}
                </div>
            </div>
        </div>
    )
}
export default OrderForm;