import React from 'react';
import "../style/Header.css"
import img1 from "../images/header/salad-2756467_1280.jpg"
import img2 from "../images/header/silesian-791329_1280.jpg"
import img3 from "../images/header/soup-1429793_1280.jpg"
import img4 from "../images/header/vegetables-2977891_1280.jpg"



const Header = () => {

    return (
        <div >
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <p>Przepisy ze smakiem</p>
        </div>
    );

}

export default Header;