import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Course from '../Courses/Course';
import AllCourses from '../Hook/AllCourses';
import ControlledCarousel from '../SliderImg/Slider';

const Home = () => {
    const [courses] = AllCourses()
    return (
        <div>
            <div className="shadow-sm p-3 mb-5 bg-body rounded container d-flex justify-content-center">
                <div className="d-flex justify-content-between">
                    <div className='w-100'>
                        {ControlledCarousel()}
                    </div>
                    <div className="w-75 p-3 rounded">
                        <h2>Learn More</h2>
                        <hr />
                        <p>Latest $ Best IELTS Preparation Tips $ Tricks.</p>
                        <ul>
                            <li>IELTS Preparation Tips for Listening</li>
                            <li>IELTS Preparation Tips for Reading</li>
                            <li>IELTS Preparation Tips for Writing</li>
                            <li>IELTS Preparation Tips for Speaking</li>
                        </ul>
                    </div> 
                </div>   
            </div>
            
            <h2 className='text-center'>Best Seller Course</h2>
            <hr />
            <div className='container'>
                <div className='d-flex justify-content-around'>
                    <CardGroup>
                        {
                            courses.slice(0,4).map(course => <Course course={course}></Course>)
                        }
                    </CardGroup>
                   
                </div>
            </div>
        </div>
    );
};

export default Home;