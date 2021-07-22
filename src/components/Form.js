import React, {useState, useEffect } from 'react';
import APIService from '../APIService';

function Form(props) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        setTitle(props.article.title)
        setBody(props.article.body)
    }, [props.article])
    
    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, body})
        .then(response => props.updatedInformation(response))
    }

    const addArticle = () => {
        APIService.AddArticle({title, body})
        .then(response => props.addedInformation(response))
    }

    return (
        <div>
            {props.article ? (
                <div data-testid = "form" className = "mb-3">
                    <label htmlFor = "title" className = "form-label">Title</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        id = "title" 
                        placeholder = "Please enter the title"
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}
                    />
                    <label htmlFor = "body" className = "form-label pt-3">Description </label>
                    <textarea 
                        className = "form-control" 
                        id = "body" 
                        rows = "5"
                        value = {body}
                        onChange = {e => setBody(e.target.value)}
                    ></textarea>
                    <br/>
                    {
                        props.article.id ? 
                            <button 
                                onClick = {updateArticle} 
                                className = "btn btn-success"
                            >Update Article</button>
                        : <button 
                            onClick = {addArticle} 
                            className = "btn btn-success"
                          >Add Article</button>
                    }
                </div>
            ) : null}
        </div>
    )
}

export default Form;