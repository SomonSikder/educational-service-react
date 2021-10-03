import React, { useEffect, useState } from 'react';
import Course from '../Courses/Course';
const Home = () => {
    const [allCourses, setallCourses] = useState()
    useEffect(()=>{
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setallCourses(data))
    },[])
    return (
        <div>
            <h2 className='text-center'>Best Seler Course</h2>
            {
                console.log(allCourses),
                allCourses.map(course => <Course course={course}></Course>)
                
            }
        </div>
    );
};

export default Home;