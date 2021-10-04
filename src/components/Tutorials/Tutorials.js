// all necessary file imported
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';

const Tutorials = () => {
    // videos width and height fix
    const opts = {
        height: '315',
        width: '250',
        
    }
    return (
        <div className='text-center'>
            <Container>
                <Row>
                    <Col>
                        <h2>Ielts Tutorials</h2>
                        <hr />
                        <div className="d-flex justify-content-around">
                            <YouTube videoId="I_VTQP4UPWE" opts={opts}/>
                            <YouTube videoId="DhgxUk9gWxI" opts={opts}/>
                            <YouTube videoId="-3wsKYQO_ck" opts={opts}/>
                            <YouTube videoId="w_tIn3BGGPM" opts={opts}/>
                        </div>
                        
                    </Col>

                    <Col>
                        <h2 className='mt-4'>Others Tutorials</h2>
                        <hr />
                        <div className="d-flex justify-content-around">
                            <YouTube videoId="AVYfyTvc9KY" opts={opts}/>
                            <YouTube videoId="y9mRTos12Sw" opts={opts}/>
                            <YouTube videoId="ptd9LZfbisA" opts={opts}/>
                            <YouTube videoId="860LtRxP3rw" opts={opts}/>
                            
                        </div>
                        
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Tutorials;