import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const OneAuthor = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [author, setAuthor] = useState({})
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/oneAuthor/"+id)
            .then((res) => {
                setAuthor(res.data)
            })
            .catch((err) => {  
                console.log(err);
            })
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/allAuthors/' + authorId)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err))
    };


    return (
        <div className='m-5 border border-dark rounded w-50 h-100 d-inline-block p-3 mb-2 bg-primary text-white w-25'>
            <h2>Authors Name: {author.name}</h2>
            <button onClick={(e)=>{deleteAuthor(author._id)}} className='btn btn-danger'>Delete</button>
        </div>
    )}

export default OneAuthor;