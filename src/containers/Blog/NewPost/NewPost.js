import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import classes from './NewPost.css';
import axios from "axios";

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount () {
        console.log("componentDidMount", this.props);
    }

    componentDidUpdate () {
        console.log("componentDidUpdate", this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                console.log(response);
                // this.setState({submitted: true});
                this.props.history.push('/');
            });
    }

    render () {
        // console.log("inside NewPost.render()");
        let redirect = null;
        if(this.state.submitted) {
            redirect = <Redirect to={"/"} />;
        }
        return (
            <div className={classes.NewPost}>
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => {
                    console.log("onChange called");
                    this.setState({title: event.target.value});
                }} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;