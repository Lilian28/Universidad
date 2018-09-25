import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>Municipalidad de San Juan de Lurigancho</h1>
                <p>
                    Vecino, venga a mirar las noticias más impactantes del distrito. Y no se olvide de dejarnos su opinión o denuncia.
                </p>
            </Jumbotron>
        );
    }
}

export default Home;