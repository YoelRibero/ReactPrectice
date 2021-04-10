import React from 'react';

import Form from '../components/Form';
import '../assets/styles/AddPosts.scss';

class AddPosts extends React.Component {
    render() {
        return(
            <div className="add-container">
                <h1>Agrega un posts</h1>
                <Form />
            </div>
        );
    }
}

export default AddPosts;