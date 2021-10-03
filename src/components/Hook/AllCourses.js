import { useEffect, useState } from 'react';

const AllCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])
    return [courses, setCourses]
};

export default AllCourses;