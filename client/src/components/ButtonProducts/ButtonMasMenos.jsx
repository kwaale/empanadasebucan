import { useDispatch } from "react-redux";
import { COMBOS_DISCONT } from "../../redux/actionsConst";

const ButtonMasMenos = ({ simbol, id }) => {
    const dispatch = useDispatch();
    return(
        <div className="container-btn-mas-menos">
             <button className="btn-mas-menos" onClick={()=>dispatch(({
                 type: COMBOS_DISCONT,
                 payload: {
                     id,
                     simbol
                     }}))}>
                {simbol}
             </button>
        </div>
    )
}
export default ButtonMasMenos;