import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import ContactPage from '../pages/ContactPage'
import RecipesPage from '../pages/RecipesPage'
import AboutPage from '../pages/AboutPage'
import AdditionalPage from '../pages/AdditionalPage'
import ErrorPage from '../pages/ErrorPage'
import SendRecipesPage from '../pages/SendRecipesPage'
import Dinner from '../components/Dinner'
import Lunch from '../components/Lunch'
import Breakfast from '../components/Breakfast'
import Desert from '../components/Desert'
import Salad from '../components/Salad'
import "../style/Main.css"

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/recipes" exact component={RecipesPage} />
                <Route path="/recipes/dinner" exact component={Dinner} />
                <Route path="/recipes/luch" exact component={Lunch} />
                <Route path="/recipes/breakfast" exact component={Breakfast} />
                <Route path="/recipes/desert" exact component={Desert} />
                <Route path="/recipes/salad" exact component={Salad} />
                <Route path="/about-me" exact component={AboutPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/additional" exact component={AdditionalPage} />
                <Route path="/your-recipes" exact component={SendRecipesPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Main;