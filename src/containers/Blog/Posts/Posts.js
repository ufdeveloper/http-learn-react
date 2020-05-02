import React, {Component} from 'react';
import Post from "../../../components/Post/Post";
import axios from "axios";
import classes from './Posts.css';
import {Link, Route} from "react-router-dom";
import FullPost from "../FullPost/FullPost";

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
        console.log("inside postSelectedHandler, postId=", postId);
        this.props.history.push('/' + postId);
        console.log(this.props.history);
    };

    render() {

        const posts = this.state.posts
            .map(post => {
                return (
                    // <Link to={'/' + post.id} key={post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author="Shan"
                            clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                );
            });

        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + ':id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;