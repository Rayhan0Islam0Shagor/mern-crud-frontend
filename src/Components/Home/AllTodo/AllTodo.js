import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import Todo from '../Todo/Todo';


const AllTodo = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const base_url = 'https://secure-dusk-32331.herokuapp.com/allActions';
            const res = await fetch(base_url)
            const data = await res.json()
            setPosts(data);
        }
        loadData();
    }, [posts]);

    return (
        <div>
            {
                posts.length === 0 &&
                <Spinner />
            }
            <div className="row">
                {
                    posts.map(post => <Todo key={post._id} post={post} />)
                }
            </div>
        </div>
    );
};

export default AllTodo;