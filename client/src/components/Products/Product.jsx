import "./products.css";
const Product = ({product}) => {
    return(
        <div >
            <button className="product">
                <p>{product.name}</p>
                <p>{product.price}</p>
            </button>
        </div>
    )
}
export default Product;