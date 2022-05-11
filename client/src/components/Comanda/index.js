import './Comanda.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCart, addOrder } from '../../redux/actions/orders';

const Comanda = () => {
    const { order } = useSelector(state => state.orderReducer);
    const tasa = parseFloat(JSON.parse(localStorage.getItem('tasa')));

    console.log("order", order);
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
                        {order.cart?.map(product => (
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
                            <td className='table-text-neg'>Referencia</td>
                            <td className='table-text'>{order.reference}</td>
                        </tr>
                        <tr>
                            <td className='table-text-neg'>Direcion</td>
                            <td className='table-text'>{order.address}</td>
                            <td className='table-text-neg'>Metodos de Pago</td>
                            <td className='table-text'>{order.payment_methods.join(' / ')}</td>
                        </tr>
                        <tr>
                            <td className='table-text-neg'>Observacion</td>
                            <td className='table-text'>{order.reference}</td>
                            <td className='table-text-neg'>Sub-Total</td>
                            <td>US$ {order.total.toFixed(2)} / Bs. {(order.total * tasa).toFixed(2)}</td>
                        </tr>
                        {order.combos && order.combos.map((p, i) => (
                            <tr key={i}>
                                <td className='table-text-neg'>{p.name}</td>
                                <td className='table-text'>{p.quantity}</td>
                                <td className='table-text-neg'>Descuento</td>
                                <td className='table-text'>US$ {p.descuento} / Bs. {(p.descuento * tasa).toFixed(2)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className='table-text-neg'></td>
                            <td className='table-text-neg'></td>
                            <td className='table-text-neg'>Total (descuento)</td>
                            {order.descuento ? (<td className='table-text'>US$ {(order.total - order.descuento).toFixed(2)} / Bs. {((order.total - order.descuento) * tasa).toFixed(2)}</td>
                            ) : (<td>US$ {order.total.toFixed(2)} / Bs. {(order.total * tasa).toFixed(2)}</td>)}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={() => window.print()}>Impirimir</button>
            </div>
            <div>
                <div>
                    <Link to="/">
                        <button className='btn-new-order' onClick={(e) => {
                            e.preventDefault();
                            dispatch(addOrder())
                            dispatch(deleteCart())
                        }}>Guardar</button>
                    </Link>
                    <Link to="/">
                        <button className='btn-new-order' onClick={() => dispatch(deleteCart())}>Eliminar</button>
                    </Link>
                </div>
                <Link to="/">
                    <h1>Modificar</h1>
                </Link>
            </div>
        </div>
    );
}
export default Comanda;