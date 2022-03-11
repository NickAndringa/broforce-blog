import './styles/_home.sass';
import { useState} from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum...',author: 'Nick', id: 1},
        {title: 'Welcome party', body: 'Lorem ipsum...',author: 'Mario', id: 2},
        {title: 'Web dev top tips', body: 'Lorem ipsum...',author: 'Yoshi', id: 3}

    ]);
    return(
        <div className= 'Home' >
            {blogs.map((blog) => (
                <div className="blog-preview bg-stone-300 p-5 m-2 rounded-bl-3xl rounded-tr-3xl hover:bg-stone-400 transition-all hover:py-10" key={blog.id}>
                    <h2 className= "text-2xl">{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>

    );

}

export default Home;