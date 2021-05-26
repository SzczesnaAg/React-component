import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <p>Are you sure you want to do this?</p>
                </div>
            </ApprovalCard>

            < ApprovalCard>
                < CommentDetail author="Sam" timeAgo="Today at 4:45PM" text="Nice blog post." avatar={faker.image.avatar()} />
            </ApprovalCard>
            < ApprovalCard>
                < CommentDetail author="Jane" timeAgo="Today at 2:00AM" text="I like it." avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetail author="Alex" timeAgo="Yesterday at 5:00PM" text="Great blog!!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetail author="John" timeAgo="Yesterday at 3:00PM" text="Love it <3" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))