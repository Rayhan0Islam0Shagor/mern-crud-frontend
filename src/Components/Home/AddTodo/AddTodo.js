import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


toast.configure();
const AddTodo = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const image = data.file[0];
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('time', data.time);
        formData.append('email', data.email);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('image', image);

        fetch('https://secure-dusk-32331.herokuapp.com/addAction', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    toast.success('POST ADDED SUCCESSFULLY')
                }
            })
            .catch(error => {
                toast.error('FAILED TO ADD POST')
            })
    }

    return (
        <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "10px" }}>
            <h3 className="text-center">write a post</h3>
            <form className="w-100 p-1" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-1" required name="name" placeholder="Your Name" ref={register()} />

                <input style={{ display: "none" }} name="time" defaultValue={new Date().toDateString()} ref={register()} />

                <input className="form-control mb-1" required name="email" placeholder="Your email address" ref={register()} />

                <input className="form-control mb-1" required name="title" placeholder="Write the title" ref={register()} />

                <textarea required className="form-control mb-1" name="description" placeholder="Write your post here" rows="5" ref={register()} />

                <label required style={{
                    backgroundColor: "#b9fffc",
                    color: "#132743",
                    border: "1px solid #0f3057",
                    borderRadius: "5px"
                }}
                    className="custom-file-upload w-100 p-2 text-center">

                    <input name="file" style={{ display: "none" }} ref={register({ required: true })} type="file" />
                    <FontAwesomeIcon icon={faCloudUploadAlt} /> upload image
                        </label>
                <br />

                <input className="btn btn-primary w-100" value="post" type="submit" />
            </form>
        </div>
    );
};

export default AddTodo;