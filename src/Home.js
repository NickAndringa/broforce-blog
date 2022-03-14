import './styles/_home.sass';
import { useState} from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum...',author: 'Nick', id: 1},
        {title: 'Welcome party', body: 'Lorem ipsum...',author: 'Mario', id: 2},
        {title: 'Web dev top tips', body: 'Lorem ipsum...',author: 'Yoshi', id: 3}
    ]);
    return(
        <div className= 'Home' >
            <Bloglist blogs={blogs} title={'All blogs'} />
            <Bloglist blogs={blogs.filter((blog) => blog.author === 'Nick' )} title={"Nick's blogs"} />
        </div>

    );

}

export default Home;