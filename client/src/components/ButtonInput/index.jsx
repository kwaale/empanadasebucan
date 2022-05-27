import "./ButtonInput.css";
import { activeDesactive } from "../../redux/actions/orders";
import { useDispatch } from "react-redux";

const ButtonInput = ({handleChange, element}) => {
    const dispatch = useDispatch();
    
    return (
        <div>
            <div className="container-btn-input-pay">
                <button className={element.active ? "btn-true" : "btn-false"}
                    onClick={() => dispatch(activeDesactive(element.name))} >{element.name.charAt(0).toUpperCase() + element.name.slice(1)}</button>
                {element.active ? <input onChange={handleChange} className="inputs" name={element.name}/> : null}
            </div>
        </div>
    )
}
export default ButtonInput;