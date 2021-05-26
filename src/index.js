import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            < CommentDetail author="Sam" timeAgo="Today at 4:45PM" text="Nice blog post." avatar={faker.image.avatar()} />
            < CommentDetail author="Jane" timeAgo="Today at 2:00AM" text="I like it." avatar={faker.image.avatar()} />
            < CommentDetail author="Alex" timeAgo="Yesterday at 5:00PM" text="Great blog!!" avatar={faker.image.avatar()} />
            < CommentDetail author="John" timeAgo="Yesterday at 3:00PM" text="Love it <3" avatar={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))