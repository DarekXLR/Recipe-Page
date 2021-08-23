import React from 'react';
import '../style/ProductList.css'

class ProductList extends React.Component {

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }


    render() {
        const newlist = this.props.list
        const list = this.props.list.map((item) => (
            <li key={item.id}> {this.capitalize(item.name)} - {item.qty} {item.qtyType}
                <button onClick={this.props.removeItem.bind(this, item.id)} className="remove">-</button></li>
        ))

        return (
            <>
                {this.props.list.length > 0 ? "U siebie mam" : ""}
                <ul className="productlist">
                    {list}
                </ul>
            </>
        );
    }
}
export default ProductList;