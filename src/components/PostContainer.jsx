import React from 'react';
import { Link } from 'react-router-dom';

import PostsItem from './PostsItem';
import iconAdd from '../assets/static/plus-icon.png';
import '../assets/styles/components/PostContainer.scss';

const api = 'https://jsonplaceholder.typicode.com/posts';

class PostContainer extends React.Component {

    state = {
        data: {},
    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = async () => {
        const response = await fetch(api);
        const data = await response.json();

        this.setState({
            data: data,
        })

        console.log(data);
    }

    render() {
        return(
            <div className="posts-container">
                <h1>Posts destacados de la semana</h1>
                <div className="add-posts">
                    <Link to="/posts/agregar" className="btn btn-primary">
                        <img src={iconAdd} alt="add" title="Agregar Posts" />
                        Agregar Posts
                    </Link>
                </div>
                <div className="posts">
                    {/* {this.state.data.map(posts =>  */}
                        <PostsItem 
                            // key={posts.id} 
                            // {...posts}
                        />
                    {/* )} */}
                    
                </div>
            </div>
        )
    }
}

// const PostContainer = () => {

//     const [ posts, setPosts ] = useState([]);

//     useEffect( () => {
//         fetch(api)
//             .then(response => response.json())
//             .then(data => setPosts(data));
//     }, [] );

    // handleDeletePosts = e => {
    //     alert('Oh me clickeaste!')
    // }

//     return(
//         <div className="posts-container">
//             <h1>Posts destacados de la semana</h1>
//             <div className="add-posts">
//                 <Link to="/posts/agregar" className="btn btn-primary">
//                     <img src={iconAdd} alt="add" title="Agregar Posts" />
//                     Agregar Posts
//                 </Link>
//             </div>
//             <div className="posts">
//                 {posts.map(element => 
//                     <PostsItem 
//                         key={element.id} 
//                         {...element}
//                     />
//                 )}
                
//             </div>
//         </div>
//     )
// }

export default PostContainer;