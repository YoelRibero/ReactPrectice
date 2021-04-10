import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import AddPosts from './AddPosts';
import EditPosts from './EditPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {

    return(
        <BrowserRouter>
            <Header />
			<Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts/agregar" component={AddPosts} />
                <Route exact path="/posts/editar" component={EditPosts} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;