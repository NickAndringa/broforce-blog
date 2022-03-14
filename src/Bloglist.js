import {useState} from "react";

const Bloglist = ({blogs, title, handleDelete}) => {

    return(
        <div className="blog-list">
            <h2 className="ml-2">{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview bg-stone-300 p-5 m-2 rounded-bl-3xl rounded-tr-3xl hover:bg-stone-400 transition-all hover:py-10" key={blog.id}>
                    <h2 className= "text-2xl">{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>


    )
}
export default Bloglist