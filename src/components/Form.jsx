import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Form.scss';

class Form extends React.Component {
    render() {
        return(
            <div className="form-container">
                <form action="">
                    <div className="form-control title">
                        <label>Título del posts</label>
                        <input />
                    </div>
                    <div className="form-control description">
                        <label>Descripción del posts</label>
                        <textarea cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-actions">
                        <a href="#" className="btn primary">Guardar</a>
                        <Link to='/' className="btn danger">Cancelar</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;