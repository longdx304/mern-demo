import React, {useState} from 'react';
import '../App.css';
import BookForm from './BookForm';

function CreateBook(props) {
    const initialState = {
        title: '',
        isbn:'',
        author:'',
        description:'',
        published_date:'',
        publisher:''
    };

    const redirectURI = '/';
    
    const [inputs, setInputs] = useState(initialState);

    return (
        <BookForm props={props} inputs={inputs} setInputs={setInputs} initialState={initialState} redirectURI={redirectURI} />
    );
}

export default CreateBook;