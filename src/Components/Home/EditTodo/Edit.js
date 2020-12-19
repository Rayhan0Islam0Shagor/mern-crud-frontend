import React, { useEffect, useState } from 'react';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Header/Header';
import { useHistory, useParams } from 'react-router-dom';


toast.configure();
const Edit = () => {
    const [todoInfo, setTodoInfo] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const loadInfoData = async () => {
            const base_url = `https://secure-dusk-32331.herokuapp.com/allActions/${id}`
            const res = await fetch(base_url)
            const data = await res.json()
            setTodoInfo(data)
        }
        loadInfoData();
    }, [])


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('time', data.time);
        formData.append('email', data.email);
        formData.append('title', data.title);
        formData.append('description', data.description);

        fetch(`https://secure-dusk-32331.herokuapp.com/updateAction/${id}`, {
            method: 'PATCH',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    history.push('/')
                    toast.success('POST UPDATE SUCCESSFULLY')
                }
            })
            .catch(error => {
                toast.error('FAILED TO UPDATE POST')
            })
    }

    return (
        <div style={{ backgroundColor: "#bce6eb", minHeight: "100vh" }} className="container-fluid">
            <Header />
            <div className="w-75 ml-auto mr-auto pt-5">
                <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "10px" }}>
                    <h3 className="text-center">Update your post</h3>
                    <form className="w-100 p-1" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-1" defaultValue={todoInfo.name} required name="name" placeholder="Your Name" ref={register()} />

                        <input style={{ display: "none" }} name="time" defaultValue={new Date().toDateString()} ref={register()} />

                        <input className="form-control mb-1" required defaultValue={todoInfo.email} name="email" placeholder="Your email address" ref={register()} />

                        <input className="form-control mb-1" required defaultValue={todoInfo.title} name="title" placeholder="Write the title" ref={register()} />

                        <textarea required className="form-control mb-1" defaultValue={todoInfo.description} name="description" placeholder="Write your post here" rows="5" ref={register()} />

                        <input className="btn btn-primary w-100" value="update" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;