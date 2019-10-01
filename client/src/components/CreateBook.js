import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const initialState = {
    title: '',
    isbn:'',
    author:'',
    description:'',
    published_date:'',
    publisher:''
};

function CreateBook(props) {
    const [inputs, setInputs] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8082/api/books', inputs)
            .then(res => {
                setInputs({...initialState});
                props.history.push('/');
            })
            .catch(err => console.log("Error in CreateBook!"));
    }

    const handleInputChange = (e) => {
        e.persist();
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show Book List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">
                            Create New Book
                        </p>
                        <form noValidate onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Title of the Book" name="title" className="form-control" value={inputs.title} onChange={handleInputChange} />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="text" placeholder="ISBN" name="isbn" className="form-control" value={inputs.isbn} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Author" name="author" className="form-control" value={inputs.author} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Describe this book" name="description" className="form-control" value={inputs.description} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <input type="date" placeholder="Published date" name="publishedDate" className="form-control" value={inputs.publishedDate} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Publisher of this Book" name="publisher" className="form-control" value={inputs.publisher} onChange={handleInputChange} />
                            </div>
                            <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBook;