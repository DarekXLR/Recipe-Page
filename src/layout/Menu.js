import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "../style/Menu.css"


const list = [
    { name: "Strona główna", path: "/", iconClass: "fas fa-home", exact: true },
    { name: "Przepisy", path: "/recipes", iconClass: "fas fa-utensils" },
    { name: "Jeszcze coś", path: "/additional", iconClass: "far fa-question-circle" },
    { name: "Przepisy dla nas", path: "/your-recipes", iconClass: "fas fa-share" },
    { name: "O mnie", path: "/about-me", iconClass: "fas fa-info-circle" },
    { name: "Kontakt", path: "/contact", iconClass: 'far fa-address-book' },
]
const category = [
    { name: "Śniadanie", path: "/recipes/breakfast", iconClass: "fas fa-utensils" },
    { name: "Obiad", path: "/recipes/lunch", iconClass: "fas fa-utensils" },
    { name: "Kolacja", path: "/recipes/dinner", iconClass: "fas fa-utensils" },
    { name: "Sałatka", path: "/recipes/salad", iconClass: "fas fa-utensils" },
    { name: "Desery", path: "/recipes/desert", iconClass: "fas fa-utensils" },

]


const Menu = () => {
    const recipeMenu = category.map(item => (
        <li className="recipemenu" key={item.name}>
            <NavLink to={item.path}>
                <i className={item.iconClass}></i> {item.name}
            </NavLink>

        </li>
    ))

    const menu = list.map(item => (

        <li className={item.name === "Przepisy" ? "przepisy main" : "main"} key={item.name}>
            <NavLink exact={item.exact ? item.exact : false} to={item.path}>
                <i className={item.iconClass} activeclassname="active">
                </i> {item.name}
            </NavLink>
            {item.name === "Przepisy" ? <ul className="popmenu">
                {recipeMenu}
            </ul> : null}
        </li>
    ))


    return (
        < >
            <ul className="mainmenu">
                {menu}
            </ul>

        </>
    );

}

export default Menu;