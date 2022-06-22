import ButtonCombo from "./ButtonCombo";

const CardProduct = ({ objeto }) => {

    return (
        <div className="card-product">
            <ButtonCombo combo={objeto}/>
        </div>
    )
}
export default CardProduct;