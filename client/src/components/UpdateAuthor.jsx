import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/oneAuthor/'+ id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err=> console.log(err))
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateAuthor/'+ id, {
            name
        })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err))
    }
    return(
        <div className='m-5 border border-dark rounded w-50 h-100 d-inline-block p-3 mb-2 bg-primary text-white w-25'>
            <h1>Update Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type='text'
                    name='title'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input className='btn btn-success' type='submit'/>
            </form>
        </div>
    )

}

export default Update;
