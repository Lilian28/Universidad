import React from 'react';
import { Table } from 'react-bootstrap';

class Noticias extends React.Component {

    state = {
        noticias: []
    }

    async componentDidMount() {
        this.getNoticias();
        this.timer = setInterval(() => this.getNoticias(), 5000);
    }

    componentWillUnmount() {
        this.timer = null;
    }

    getNoticias() {
        fetch('noticias')
            .then(res => res.json().then(res => this.setState({ noticias: res })))
    }

    render() {
        return (
            <div>
                <h1>Noticias</h1>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>C&oacute;digo</th>
                            <th>T&iacute;tulo</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.noticias.map((noticia, key) =>
                            <tr key={key}>
                                <td>{noticia.codigo}</td>
                                <td>{noticia.titulo}</td>
                                <td>{noticia.detalle}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Noticias;