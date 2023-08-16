import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const param = useParams()

    return (
        <div>
            <h1>Product Details!</h1>
            <h2>{param.id}</h2>
            <h2>{param.title}</h2>
        </div>
    )
}

export default ProductDetails;