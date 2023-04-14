import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DisplayAuthors = (props) => {
    const navigate = useNavigate()
    const {id} = useParams();
    const {removeFromDom, author, setAuthor} = props;
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/allAuthors/' + authorId)
        .then(res => {
            removeFromDom(authorId)
            navigate('/')
        })
        .catch(err => console.log(err))
    };

    

    useEffect(() => {
        axios.get('http://localhost:8000/api/allAuthors')
            .then((res) => {
                setAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <div className='container'>
            <h1 className='text-dark'>Check out these great Authors!</h1>
            {
                author.map((author, index) => {
                    return (
                        <div className='m-5 border border-dark rounded h-75 d-inline-block shadow p-3 mb-2 bg-secondary text-black w-25 p-3' key={index}>
                            <p>{author.name}</p>
                            <Link className='btn btn-dark' to={`/oneAuthor/${author._id}`}>{author.name}'s Page
                            </Link>
                            <br/><br/>
                            <Link className='btn btn-dark' to={`/updateAuthor/${author._id}`}>{author.name} Edit page</Link>
                            <br/><br/>
                            <button onClick={(e)=>{deleteAuthor(author._id)}} className='btn btn-danger'>Delete</button>
                        </div>
                    )})  
            }
        </div>
    );
}
export default DisplayAuthors;