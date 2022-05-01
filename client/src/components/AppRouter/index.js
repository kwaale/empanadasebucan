import { Routes, Route, Link } from 'react-router-dom';
import Comanda from '../Comanda';
import Products from '../Products';

const AppRouter = () => {
    return(
        <div>
            <h1>Empanadas Sebucan</h1>
            <Routes>
                <Route path="/" element={<Products/>} />
                <Route path="/comanda" element={<Comanda/>} />
            </Routes>
        </div>
    )
}
export default AppRouter;