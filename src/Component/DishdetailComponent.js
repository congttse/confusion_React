import React, { Component } from 'react'
import { CardText, CardTitle } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardBody } from 'reactstrap';

export default class DishDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    renderDishes({ dish }) {
        console.log(dish);
        return (
            <div className="col-12 col-sm-5">
                <Card>
                    <CardImg top src={dish.image} alt={dish.image} ></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    renderComments({ comments }) {
        const comment = comments.map((item) =>
            <div key={item.id}>
                <p>{item.comment}</p>
                <p>{item.author} {item.date}</p>
            </div>

        );
        return (
            <div className="col-12 col-sm-7">
                <h2>comments</h2>
                {comment}
            </div>
        )
    }
    render() {
        if (this.props.dishes != null) {
            return (
                <div className='container'>
                    <div className='row'>
                        <this.renderDishes dish={this.props.dishes}></this.renderDishes>
                        <this.renderComments comments={this.props.dishes.comments}></this.renderComments>
                    </div>
                </div>
            );
        }

        return (
            <div></div>
        )

    }
}


