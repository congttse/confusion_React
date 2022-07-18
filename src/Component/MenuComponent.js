import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
            <CardImg src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}
// const Menu = (props) => {
//     const menu = props.dishes.map(dish => {
//         return(
//             <div className="col-12 col-md-5 m-1" key={dish.id}>
//                 <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>
//             </div>
//         );
//     })
//     return(
//         <div className="container">
//             <div className="row">
//                 {menu}
//             </div>
//         </div>
//     );
// }
class Menu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <div key={dish.id}>
                        <RenderMenuItem dish={dish}></RenderMenuItem>
                    </div>
                </div>
            );
        });
        return (
            <div className="container" id="menu">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
                {/* <>
                    {
                        this.state.selectedDish != null ?
                            (
                                <div className="row">
                                    <DishDetail dishes={this.state.selectedDish} comments={this.state.selectedDish.comments} ></DishDetail>
                                </div>
                            ) :
                            (
                                <></>
                            )
                    }
                </> */}
            </div>
        );
    }
}


export default Menu;

