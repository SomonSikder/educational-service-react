import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllCourses from '../Hook/AllCourses';


const AboutUs = () => {
    const [courses] = AllCourses()

    return (
        <div className='my-4'>
            <Container>
                <Row>
                    <Col className='shadow p-3 m-3 bg-body rounded'>
                       <h4>Our Total Courses: <span>{courses.length}</span></h4> 
                    </Col>
                    <Col className='shadow p-3 m-3 bg-body rounded'>
                       <h4>Our Total Teachers: <span>20</span></h4> 
                    </Col>
                    <Col className='shadow p-3 m-3 bg-body rounded'>
                       <h4>Our Total Students: <span>1500</span></h4> 
                    </Col>
                </Row>
                <div>
                    <p>IELTS is the world’s most popular English language test. If you’re looking to work, study or live abroad then taking an IELTS test can help you make that dream come true.</p>
                    <br />
                    <h5>Our work in education</h5>
                    <hr />
                    <img src="https://www.britishcouncil.org.bd/sites/default/files/styles/bc-landscape-800x450/public/microsoftteams-image_1.png?itok=4Q5CzaJ6" alt="" />
                    <p>We connect the UK and Bangladeshi school sectors to enrich education, promote global citizenship and build international trust and understanding. We foster dialogue and international partnerships between higher education institutions and organisations and help students who want to study abroad. We work in vocational education to make education and English training systems better able to respond to labour market demands and learner needs.</p>
                    <br />
                    <h5>Our work in arts</h5>
                    <hr />
                    <img src="https://www.britishcouncil.org.bd/sites/default/files/styles/bc-landscape-630x354/public/romeo_and_juliet_009.jpg?itok=M6fJYa1-" alt="" />
                    
                    <p>Our work in the arts connects with the best of British creative talent to deliver innovative, high-quality events and develop collaborations with artists and cultural institutions in Bangladesh.
                    We secure relationships with creative partners internationally to deliver exciting projects in Bangladesh, from theatre and dance to visual arts and design.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;