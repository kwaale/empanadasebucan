import { Routes, Route } from 'react-router-dom';
import Comanda from '../Comanda';
import ButtonProducts from '../ButtonProducts';
import Orders from '../Orders';

const AppRouter = () => {
    return (
        <div>
            <h1>Empanadas Sebucan</h1>
            <Routes>
                <Route path="/" element={<ButtonProducts />} />
                <Route path="/comanda" element={<Comanda />} />
                <Route path="/ordenes" element={<Orders />} />
            </Routes>
        </div>
    )
}
export default AppRouter;