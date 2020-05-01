import React, { Component } from 'react';
import Posts from "./Posts/Posts";
import {Route, NavLink, Switch} from 'react-router-dom';
import NewPost from "./NewPost/NewPost";
import classes from './Blog.css';
import FullPost from "./FullPost/FullPost";

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
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;