import React from 'react';
import { Table } from 'react-bootstrap';

class Denuncias extends React.Component {

    state = {
        denuncias: []
    }

    async componentDidMount() {
        this.getDenuncias();
        this.timer = setInterval(() => this.getDenuncias(), 5000);
    }

    componentWillUnmount() {
        this.timer = null;
    }

    //Este llama al servicio web y trae las denuncias
    getDenuncias = () => {
        fetch('denuncias')
            .then(res => res.json().then(res => this.setState({ denuncias: res })))
    }

    render() {
        return (
            <div>
                <h1>Denuncias</h1>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>C&oacute;digo</th>
                            <th>Tipo</th>
                            <th>Descripci&oacute;n</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.denuncias.map((denuncia, key) =>
                            <tr key={key}>
                                <td>{denuncia.codigo}</td>
                                <td>{denuncia.tipo}</td>
                                <td>{denuncia.descripcion}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default Denuncias;