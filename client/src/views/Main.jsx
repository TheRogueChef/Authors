import React, { useState } from 'react'
import DisplayAuthors from '../components/DisplayAuthors';

const Main = (props) => {

    const [author, setAuthor] = useState([]);
    const removeFromDom = authorId => {
        setAuthor(author.filter(author=>author._id !== authorId));
    }
    return (
        <div>
            <DisplayAuthors author={author} setAuthor={setAuthor} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;