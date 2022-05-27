import ButtonZona from "./ButtonZona";
import './ButtonZonas.css';
const ButtonZonas = ({ zonas_delivery }) => {
    // console.log('zonas_delivery',zonas_delivery)
    // { name: "Zona 1", active: false, amount: 1.00, dolar: false },
    return (
        <div>
            {zonas_delivery?.map(zona => (
                <ButtonZona key={zona.name} zona={zona}/>
            ))}
        </div>
    );
    }
export default ButtonZonas;