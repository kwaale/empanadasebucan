import './Comanda.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../redux/actions/productsActions';

const Comanda = () => {
    // Extraemos la ultima orden de todas
    const order = useSelector(state => state.orderReducer.orders[state.orderReducer.orders.length - 1]);
    const { cart } = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Comanda</h1>
            <div className='table-container'>
                {/* colocar id Comanda */}
                <table className='table-id'>
                    <thead>
                        <tr>
                            <th>ID Comanda</th>
                            <th>{order.id}</th>
                        </tr>
                    </thead>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Empanada</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Sub-total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Productos */}
                        {order.cart.map(product => (
                            <tr key={product.id}>
                                <td className='table-text'>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity * product.price}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className='table-text-neg' >Cliente</td>
                            <td className='table-text'>{order.name}</td>
                            <td className='table-text-neg'>Total</td>
                            <td>US$ {order.total.dolar} / Bs. {order.total.bolivar}</td>
                        </tr>
                        <tr>
                            <td className='table-text-neg'>Direcion</td>
                            <td className='table-text'>{order.address}</td>
                            <td className='table-text-neg'>Metodos de Pago</td>
                            <td className='table-text'>{order.payment_methods.join(' / ')}</td>
                            {/* <td className='table-text'>{order.payment_methods.map((m, i) => {
                                return (
                                    <p key={i}>{m}</p>
                                )
                            })}</td> */}
                        </tr>
                        <tr>
                            <td className='table-text-neg'>Observacion</td>
                            <td className='table-text'>{order.reference}</td>
                            <td className='table-text-neg'>Referencia</td>
                            <td className='table-text'>{order.reference}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={() => window.print()}>Impirimir</button>
            </div>
            <div>
                <Link to="/">
                    <button className='btn-new-order' onClick={() => dispatch(deleteCart())}>Generar Nueva Orden</button>                                        
                </Link>
                <Link to="/ordenes">
                    <h1>Ordenes</h1>
                </Link>
            </div>
        </div>
    );
}
export default Comanda;
// let arr = ["hola", "mundo", "como", "estas"];
/**
 * address: "Lujan de Cuyo, Mendoza, Aregentina"
cart: (3) [{…}, {…}, {…}]
delivery: true
id: 1
name: "Clie"
observation: "prueba"
order_date: Wed May 04 2022 15:57:34 GMT-0300 (hora estándar de Argentina) {}
order_status: "Pendiente"
payment_methods: ['Pago Movil']
reference: "Referencia"
total: {bolivar: '10.20', dolar: '3.00'}
 */