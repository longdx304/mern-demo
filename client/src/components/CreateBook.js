import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function CreateBook() {
    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [publisher, setPublisher] = useState('');

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
                        <form noValidate /* onSubmit={this.handleSubmit} */>
                            <div className="form-group">
                                <input type="text" placeholder="Title of the Book" name="title" className="form-control" value={title} /* onChange={this.handleChange} */ />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="text" placeholder="ISBN" name="isbn" className="form-control" value={isbn} /* onChange={this.handleChange} */ />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Author" name="author" className="form-control" value={author} /* onChange={this.handleChange} */ />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Describe this book" name="description" className="form-control" value={description} /* onChange={this.handleChange} */ />
                            </div>
                            <div className="form-group">
                                <input type="date" placeholder="Published date" name="publishedDate" className="form-control" value={publishedDate} /* onChange={this.handleChange} */ />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Publisher of this Book" name="publisher" className="form-control" value={publisher} /* onChange={this.handleChange} */ />
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