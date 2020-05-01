import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "axios";
import classes from './Posts.css';
import {Link} from "react-router-dom";

class Posts extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                this.setState({posts: posts});
            })
            .catch(error => {
                console.log(error);
            })
    }

    postSelectedHandler = (postId) => {
        this.setState({
            selectedPostId: postId
        })
    };

    render() {

        const posts = this.state.posts
            .map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author="Shan"
                            clicked={() => this.postSelectedHandler(post.id)} />
                    </Link>
                );
            });

        return (
            <section className={classes.Posts}>
                {posts}
            </section>
        )
    }
}

export default Posts;