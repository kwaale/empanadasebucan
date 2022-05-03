import forma_pagos from '../../seeds/forma_pagos.json';
import './products.css';
const MetodosPago = () => {
    return (
        <div className="input-select">
            <select>
                <option value=''>Forma de Pago</option>
                {forma_pagos.map((p, i) => {
                    return (
                        <option key={i} value={p}>{p}</option>
                    )
                }
                )}
            </select><button>+</button>
        </div>
    );
}
export default MetodosPago;