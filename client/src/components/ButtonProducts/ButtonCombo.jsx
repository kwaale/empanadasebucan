import ButtonMasMenos from "./ButtonMasMenos";

const ButtonCombo = ({ combo }) => {
    return (
        <div className="card-product">
            <h3 className="card-title">{combo.name}</h3>
            <div className="container-btns-mas-menos">
                <ButtonMasMenos simbol={"+"} id={combo.id} />
                <ButtonMasMenos simbol={"-"} id={combo.id} />
            </div>
        </div>
    );
}
export default ButtonCombo;