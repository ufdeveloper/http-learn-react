import React, { Component } from 'react';
import axios from 'axios';

import classes from './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        console.log("inside componentDidMount");
        this.loadData();
    }

    componentDidUpdate() {
        console.log("inside componentDidUpdate");
        this.loadData()
    }

    loadData() {
        if(this.props.match.params.id) {
            if(!this.state.loadedPost ||
                (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                    .then(res => {
                        this.setState({
                            loadedPost: res.data
                        })
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        console.log("inside FullPost.render()");
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading....</p>;
        }
        if(this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button onClick={this.deletePostHandler} className={classes.Delete}>Delete</button>
                    </div>
                </div>

            );
        }

        return post;
    }
}

export default FullPost;