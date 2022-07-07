import React, { Component } from "react";
import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderMenuItem({dish, onClick}){
    return(
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
const Menu = (props) => {
    const menu = props.dishes.map(dish => {
        return(
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>
            </div>
        );
    })
    return(
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}
// class Menu extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const menu = this.props.dishes.map(dish => {
//             return (
//                 <div  key={dish.id} className="col-12 col-md-5 m-1">
//                     <Card onClick={()=>this.props.onClick(dish.id)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });
//         return (
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//                 <>
//                     {
//                         this.state.selectedDish != null ?
//                             (
//                                 <div className="row">
//                                     <DishDetail dishes={this.state.selectedDish} comments={this.state.selectedDish.comments} ></DishDetail>
//                                 </div>
//                             ):
//                             (
//                                 <></>
//                             )
//                 }
//                 </>
//             </div>
//         );
//     }
// }


export default Menu;

