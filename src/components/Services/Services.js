import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Course from '../Courses/Course';
import AllCourses from '../Hook/AllCourses';



const Services = () => {
    const [courses] = AllCourses()

    return (
        <div>
            <h2 className='text-center mt-3'>We Provide Our all Sevices in <span> ONLINE COURSES</span></h2>
            <hr />
            <div className='container'>
                <div className='d-flex justify-content-around'>
                    <CardGroup>
                        {
                            courses.map(course => <Course course={course}></Course>)
                        }
                    </CardGroup>
                   
                </div>
            </div>
        </div>
    );
};

export default Services;