import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import axios from 'axios';

import classes from './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                this.setState({posts: posts});
            })
    }

    postSelectedHandler = (postId) => {
        this.setState({
            selectedPostId: postId
        })
    };

    render () {

        const posts = this.state.posts
            .map(post => {
                return <Post
                            key={post.id}
                            title={post.title}
                            author="Shan"
                            clicked={() => this.postSelectedHandler(post.id)} />
            });

        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className={classes.Posts}>
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;