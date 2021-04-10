import React from 'react';

import Form from '../components/Form';
import '../assets/styles/AddPosts.scss';

class EditPosts extends React.Component {
    render() {
        return (
            <div className="add-container">
                <h1>Edita este posts</h1>
                <Form />
            </div>
        )
    }
}

export default EditPosts;