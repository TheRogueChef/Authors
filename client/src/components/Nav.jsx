import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import ClassyQuill from '../images/classy-quill.jpg'
import Scribbles from '../images/scribbles.jpg';
import './style.css';


const Nav = (props) => {
    return (
        <div className='navBoxShell'>
        <div className='navBoxTop'>
            <h1>Author, Author!</h1>
        </div>
            <div className='navBoxBottom'>
                <Image className='pic' src={Scribbles} alt='PlaceHolder' />
                <Link className='btn btn-dark m-lg-5' to={'/'}>All Authors</Link>
                <Link className='btn btn-dark mx-lg-5' to={'/newAuthor'}>Add an Author</Link>
                <Image className='pic' src={ClassyQuill} alt='PlaceHolder' />
            </div>
        </div>
    )
}

export default Nav;