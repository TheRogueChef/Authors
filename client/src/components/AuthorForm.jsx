import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const AuthorForm = (props) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [author, setAuthor] = useState({
        name: ''
    });


    const handleInputChange = (e) => {
        setAuthor({ ...author, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newAuthor', author)
            .then((res) => {
                setAuthor({ name: '' })
                // window.location.reload()
                navigate('/')
            })
            .catch((err) => {
                // console.log(err.response.data.error.errors);
                setErrors(err.response.data.error.errors)
            })
    }



    return (
        <div className='container'>
            <h1>Help us build our Author DB!</h1>
            <div className='details'>

                <form className='w-25' onSubmit={submitHandler}>
                    <h3>Authors Name</h3>
                    <label className='form-label'></label>
                    <input className='form-control' type="text" onChange={handleInputChange} value={author.name} name='name' />
                    {
                        errors.name ?
                            <p className='text-danger'>{errors.name.message}</p> :
                            null
                    }
                    <br />
                    <Link className='btn btn-dark' to={`/`} >Cancel</Link>
                    <br /><br />
                    <button className='btn btn-dark' >Add Author</button>
                </form>
                
            </div>
        </div>
    )
}

export default AuthorForm;