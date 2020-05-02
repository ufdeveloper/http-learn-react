import React, { Component } from 'react';
import Posts from "./Posts/Posts";
import {Route, NavLink, Switch} from 'react-router-dom';
import NewPost from "./NewPost/NewPost";
import classes from './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeStyle={{color: 'salmon'}}>Home</NavLink></li>
                            <li><NavLink to="/new-post" activeStyle={{color: 'salmon'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;