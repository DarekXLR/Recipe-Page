import React from 'react';
import { Link } from 'react-router-dom';


const products = ["car", "bike", "motorcycle"]

const RecipesPage = () => {
    const list = products.map(product => (

        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return (
        <div className="products">
            <h2>Lista przepisów</h2>

        </div>
    );
}

export default RecipesPage;