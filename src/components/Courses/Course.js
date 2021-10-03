import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Course = (props) => {
    const {name, price, img} = props.course
    return (
        <div className='m-3 shadow p-3 mb-5 bg-body rounded'>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={img} height='100px'/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <hr />
                    <h3>Price: $<span>{price}</span></h3>
                    <Button variant="dark">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
       
    );
};

export default Course;