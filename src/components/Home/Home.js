import React from 'react';
import Course from '../Courses/Course';
import AllCourses from '../Hook/AllCourses';
const Home = () => {
    const [courses] = AllCourses()
    return (
        <div>
            <h2 className='text-center'>Best Seler Course</h2>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        {
                            courses.slice(0,4).map(course => <Course course={course}></Course>)
                        }
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Home;