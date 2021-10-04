// all necessary file imported
import { useEffect, useState } from 'react';

// fatching data from local json file
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