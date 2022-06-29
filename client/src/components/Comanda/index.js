import './Comanda.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCart, addOrder } from '../../redux/actions/orders';
import { INITIAL_ORDER } from '../../redux/actionsConst';

const Comanda = () => {
    const { order } = useSelector(state => state.orderReducer);
    // const tasa = parseFloat(JSON.parse(localStorage.getItem('tasa')));
    const combosAdded = order.combos.filter(combo => combo.quantity > 0);
    // console.log("Comanda order", order);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Comanda</h1>
            <div className='table-container'>
                {/* colocar id Comanda */}
                <table className='table-id'>
                    {/* <thead> */}
                    <tr>
                        <th>ID Comanda</th>
                        <th>{order.id}</th>
                    </tr>
                    {/* </thead> */}
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Empanada</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Sub-total</th>
                        </tr>
                    </thead>
                    {/* Productos */}
                    {order.cart?.sort((a,b) => {
                        if(a.category < b.category) return 1;
                        if(a.category > b.category) return -1;
                        return 0;
                    }).map(product => (
                        <tr key={product.id}>
                            <td className='table-text'>{product.category[0].toUpperCase().concat(product.category.slice(1,3))}</td>
                            <td className='table-text'>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price.toFixed(2)}</td>
                            <td>{(product.quantity * product.price).toFixed(2)}</td>
                        </tr>
                    ))}
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td className='table-text-neg'>Pedido</td>
                            <td className='table-text'>US$ {order.total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td className='table-text-neg' >Cliente</td>
                            <td className='table-text'>{order.name}</td>
                        </tr>
                        <tr>
                            <td className='table-text-neg'>Observacion</td>
                            <td className='table-text'>{order.observation}</td>
                        </tr>
                        <tr>
                            <td className='table-text-neg'>Medios de Pago</td>
                            <td className='table-text'>{order.payment_methods.map((p, i) => {
                                if (p.active) {
                                    return <td key={i} className='table-text'>{`${p.name} ${p.amount}`}</td>
                                }
                                return null
                            })}</td>
                        </tr>
                        <tr>
                            <td className='table-text-neg'>Referencia</td>
                            <td className='table-text'>{order.reference}</td>
                        </tr>
                        <tr>
                            {order.delivery.active ?

                                <>
                                    <td className='table-text-neg'>Delivery</td>
                                    <td>US$ {order.delivery.zona.amount.toFixed(2)}</td>
                                </>
                                : null}
                        </tr>
                        {combosAdded && combosAdded.map((p) => (
                            <tr key={p.id}>
                                <td key={p.id.toString().concat('a')} className='table-text-neg'>{p.name}</td>
                                <td key={p.id.toString().concat('b')} className='table-text'>{p.quantity}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className='table-text-neg'>Total a Pagar</td>
                            {order.delivery.active ?
                                <td className='table-text'>
                                    US$ {(order.total - order.descuento + order.delivery.zona.amount).toFixed(2)}
                                </td> :
                                order.delivery.active ?
                                    <td>US$ {(order.total + order.delivery.zona.amount - order.descuento).toFixed(2)}</td> :
                                    <td>US$ {(order.total - order.descuento).toFixed(2)}</td>}
                        </tr>
                        <tr>
                            <td className='table-text-neg'>Direcion</td>
                            <td className='table-text'>{order.address}</td>
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
                            // e.preventDefault();
                            dispatch(addOrder())
                            dispatch({ type: INITIAL_ORDER })
                        }}>Guardar</button>
                    </Link>
                    <Link to="/">
                        <button className='btn-new-order' onClick={() => dispatch({ type: INITIAL_ORDER })}>Eliminar</button>
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