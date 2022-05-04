import { Routes, Route } from 'react-router-dom';
import Comanda from '../Comanda';
import Products from '../Products';
import Orders from '../Orders';

const AppRouter = () => {
    return(
        <div>
            <h1>Empanadas Sebucan</h1>
            <Routes>
                <Route path="/" element={<Products/>} />
                <Route path="/comanda" element={<Comanda/>} />
                <Route path="/ordenes" element={<Orders/>} />
            </Routes>
        </div>
    )
}
export default AppRouter;