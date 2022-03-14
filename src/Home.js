import './styles/_home.sass';
import {useEffect, useState} from "react";
import Bloglist from "./Bloglist";
import {data} from "autoprefixer";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data =>{
               setBlogs(data)
            });
    }, []);


    return(
        <div className= 'Home' >
            {blogs && <Bloglist blogs={blogs} title={'All blogs'}/>}
        </div>

    );

}

export default Home;