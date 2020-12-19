import React from 'react';
import user from '../../image/user-male.png';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


toast.configure();
const Todo = ({ post }) => {

    const handleDelete = (id) => {
        fetch(`https://secure-dusk-32331.herokuapp.com/deleteAction/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    return (
        <div className="col-md-4 ml-4 mb-4 mr-4">
            <div key={post._id} className="card" style={{ width: "18rem" }}>
                <div className="d-flex p-1">
                    <div>
                        <img src={user} height="65px" weight="65px" alt="" />
                    </div>
                    <div>
                        <h2 className="card-title ml-2">{post.name}</h2>
                        <span className="text-muted ml-3">{post.time}</span>
                    </div>
                </div>
                <div style={{ height: "175px", width: "285px", overflow: "hidden" }}>
                    <img src={`data:image/png;base64,${post.image.img}`} className="card-img-top p-2" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/updateTodo/${post._id}`}>
                            <button
                                className="btn btn-warning">
                                Update
                            </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(post._id)}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;