import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Course = (props) => {
    // console.log(props)
    const {name, price, img} = props.course
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <hr />
                <h3>Price: $<span>{price}</span></h3>
                <Button variant="dark">Buy Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Course;