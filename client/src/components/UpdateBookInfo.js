import React, {useState, useEffect} from 'react';
import BookForm from './BookForm';
import '../App.css';
import axios from 'axios';

function UpdateBookInfo(props) {
    let initialState = {
        title: '',
        isbn:'',
        author:'',
        description:'',
        published_date:'',
        publisher:''
    };
    const [inputs, setInputs] = useState(initialState);

    useEffect(() => {
        axios.get(`http://localhost:8082/api/books/${props.match.params.id}`)
            .then(res => {
                setInputs({...res.data});
            })
            .catch(err => {
                console.log("Error from UpdateBookInfo");
            })
    }, []);

    const redirectURI = `/show-book/${props.match.params.id}`;
    
    return(
        <BookForm props={props} inputs={inputs} setInputs={setInputs} initialState={initialState} redirectURI={redirectURI} />
    );
}

export default UpdateBookInfo;