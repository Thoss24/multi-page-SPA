import { Link } from "react-router-dom";

const Products = () => {

    const PRODUCTS = [
        {id: 1, title: 'Product 1'},
        {id: 2, title: 'Product 2'},
        {id: 3, title: 'Product 3'}
    ]

    return (
        <div>
            <h1>Products Page</h1>
            {PRODUCTS.map(item => (
                <li key={item.id}><Link to={`/products/${item.id}`}>{item.title}</Link></li>
            ))}
        </div>

    )
};

export default Products