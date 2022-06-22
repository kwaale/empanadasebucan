import "./products.css";

const ButtonMinis = ({ validaMinis, minis, colorButton }) => {
    return (
        <div className="card-product">
            <button className={colorButton("mini")} onClick={validaMinis}>
                <div className="card-body">
                    <h3 className="card-title">{minis ? "Minis" : "Normales"}</h3>
                </div>
            </button>
        </div>
    )
}
export default ButtonMinis;