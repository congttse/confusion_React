import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }
    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }
    render() {
        const HomePage = ()=>{
            return(
                <Home dish={this.state.dishes.filter(dish => dish.featured)[0]}
                promotion={this.state.promotions.filter(promo => promo.featured)[0]}
                leader={this.state.leaders.filter(leader => leader.featured)[0]}>
                </Home>
            );
        };
        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route path='/home' component={HomePage}></Route>
                    <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}></Menu>}></Route>
                    <Route exact path='/contactus' component={Contact}></Route>
                    <Redirect to='/home'></Redirect>
                </Switch>
                <Footer></Footer>
            </div>
            // <div>
            //     <Header></Header>
            //     <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}></Menu>
            //     <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}></DishDetail>
            //     <Footer></Footer>
            // </div>
        );
    }
}

export default Main;