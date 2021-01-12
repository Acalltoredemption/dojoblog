import React, {useState, useEffect} from 'react';
import BlogList from './BlogList';


const  Home = () => {

const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'blah blah blah', author: 'mario', id: 1},
    {title: 'My better website', body: 'blah blah blah', author: 'mario', id: 2},
    {title: 'Welcome Party!', body: 'blah blah blah', author: 'yoshi', id: 3}
]);

const [name, setName] = useState('mario');

const handleDelete = (id) => {
 const newBlogs = blogs.filter(blog => blog.id !== id);
 setBlogs(newBlogs);
}

useEffect(() => {
    console.log('use effect ran');
    console.log(name);
}, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>Change Name</button>
            {name}
            
        </div>
     );
}
 
export default Home;