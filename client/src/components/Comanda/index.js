import { Link } from 'react-router-dom';

const Comanda = () => {
    return (
        <div>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ver</td>
                            <td>ver</td>
                            <td>ver</td>
                            <td>ver</td>
                        </tr>
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
