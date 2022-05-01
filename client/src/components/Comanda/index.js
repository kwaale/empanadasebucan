import './Comanda.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Comanda = () => {
    const { cart } = useSelector(state => state.productsReducer);
    console.log("cart", cart);
    return (
        <div>
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map((cart, i) => {
                            return (
                                <tr key={i}>
                                    <td className='products-comanda'>{cart.name}</td>
                                    <td className='cantidad-comanda'>{cart.quantity}</td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
            <Link to="/">
                <h1>Volver</h1>
            </Link>
        </div>
    );
}
export default Comanda;
