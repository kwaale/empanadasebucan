import {activeDesactive} from '../../redux/actions/orders.js';
import { useDispatch } from 'react-redux';

const ButtonZona = ({zona}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button className={zona.active ? 'btn-active' : 'btn-desactive'} onClick={()=>dispatch(activeDesactive(zona.name))}>{zona.name} ${zona.amount.toFixed(2)}</button>
        </div>
    );
}
export default ButtonZona;