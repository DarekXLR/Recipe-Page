import React from 'react';
import '../style/MaterialMenu.css'
import '../style/Burger.css'
import ProductList from './ProductList'



class MaterialMenu extends React.Component {
    state = {
        productValue: "",
        productQty: "",
        productQtyType: "ml",
        ownProductList: [
            {
                id: 0,
                name: "jajko",
                qty: "2",
                qtyType: "szt.",
            },
            {
                id: 1,
                name: "jajko",
                qty: "2",
                qtyType: "szt.",
            }, {
                id: 2,
                name: "jajko",
                qty: "2",
                qtyType: "szt.",
            },
        ]
    }


    componentDidMount() {

        const line1 = document.querySelector('.pos1')
        const line2 = document.querySelector('.pos2')
        const line3 = document.querySelector('.pos3')
        const line4 = document.querySelector('.pos4')
        const list = document.querySelector('section.list')
        const listOwn = document.querySelector('.hidelist')
        const burger = document.querySelector('.burger')

        const turn = () => {
            burger.classList.toggle('active');
            line1.classList.toggle('active');
            line4.classList.toggle('active');
            line2.classList.toggle('active');
            line3.classList.toggle('active');
            list.classList.toggle('active');
            listOwn.classList.toggle('active');
        }
        burger.addEventListener("click", turn)

    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newList = this.state.ownProductList
        const newProduct = {
            id: this.state.ownProductList.length,
            name: this.state.productValue,
            qty: this.state.productQty,
            qtyType: this.state.productQtyType,
        }
        newList.push(newProduct)
        this.setState({
            productValue: "",
            productQty: "",
            ownProductList: newList,

        })
    }
    handleProductChange = (e) => {
        this.setState({
            productValue: e.target.value,

        })
    }
    handleQtyChange = (e) => {
        this.setState({
            productQty: e.target.value,
        })
    }
    removeItem = (id) => {
        const list = this.state.ownProductList
        let number = 0;
        list.forEach((item, index) => {
            if (item.id === id) { number = index }
        })
        list.splice(number, 1)
        this.setState({
            ownProductList: list,
        })
    }
    handleOptionChange = (e) => {
        this.setState({
            productQtyType: e.target.value,
        })
    }
    render() {
        const { productQty, productValue, productQtyType } = this.state

        return (
            <div className="materialmenu">
                <div className="burger" >
                    <div className="pos1"></div>
                    <div className="pos2"></div>
                    <div className="pos3"></div>
                    <div className="pos4"></div>
                </div>

                <h1>Podaj jakie masz produkty w domu a pokażemy, które z naszych przepisów możesz zrobić na "JUŻ"!!!</h1>
                <div className="hidelist">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Produkt</h2>
                        <input
                            type="text"
                            value={productValue}
                            onChange={this.handleProductChange} />
                        <input
                            type="number"
                            value={productQty}
                            onChange={this.handleQtyChange} />
                        <label htmlFor="qty"></label>
                        <select id="qty" name="qty" value={productQtyType} onChange={this.handleOptionChange}>
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                            <option value="g">g</option>
                            <option value="kg">kg</option>
                            <option value="szt.">szt.</option>
                            <option value="szt.">łyżka</option>
                            <option value="szt.">szklanka</option>
                        </select>
                        <input type="submit" value="+"></input>


                    </form>
                    <ProductList list={this.state.ownProductList} removeItem={this.removeItem} />
                </div>
            </div>
        );
    }
}

export default MaterialMenu;