import React from 'react';
import { Link } from 'react-router-dom';

import iconPosts from '../assets/static/icon-posts.png';
import iconEdit from '../assets/static/plus-icon.png';
import iconDelete from '../assets/static/icon-delete.png';
import '../assets/styles/components/PostsItem.scss';

const PostsItem = ({ title, body, props }) => {
    return(
        <div className="posts-item">
            <div className="posts-image">
                <img src={iconPosts} />
            </div>
            <div className="posts-info">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <div className="buttons-action">
                <Link to="/posts/editar">
                    <img src={iconEdit} alt="edit" title="Editar Posts" />
                </Link>
                <div>
                    <img src={iconDelete} alt="edit" title="Eliminar Posts" />
                </div>
            </div>
        </div>
    )
}

export default PostsItem; 