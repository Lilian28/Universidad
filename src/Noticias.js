import React from 'react';
import { Card, Button, Modal, Form, Container, Row } from 'react-bootstrap';

class Noticias extends React.Component {

    state = {
        noticias: [],
        show: false,
        validated: false
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

    handleOpen = () => {
        this.setState({ noticia: { titulo: null, detalle: null } })
        this.setState({ show: true });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleSave = (noticia) => {
        console.log(noticia);
        let formData = new FormData();
        formData.append('titulo', noticia.titulo);
        formData.append('detalle', noticia.detalle);
        fetch('noticias', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json()
                .then(data => console.log(data))
            )

        this.handleClose();
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            this.setState({ validated: true });
        } else
            this.handleSave(
                {
                    titulo: e.target.titulo.value,
                    detalle: e.target.detalle.value
                }
            );
    }

    render() {
        const { validated } = this.state;
        return (
            <div>
                <h1>Noticias</h1>
                <Button onClick={this.handleOpen}>Nuevo</Button>
                <hr />
                {this.state.noticias.map((noticia, key) =>
                    <div key={key}>
                        <Card className="text-center"  >
                            <Card.Body>
                                <Card.Title>{noticia.titulo}</Card.Title>
                                <Card.Text>{noticia.detalle}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">{noticia.fechacreacion}</Card.Footer>
                        </Card>
                        <hr />
                    </div>
                )}
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Form
                        action="/noticias"
                        noValidate
                        onSubmit={e => this.handleSubmit(e)}
                        validated={validated} > <Modal.Header closeButton>
                            <Modal.Title>Nueva noticia</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>

                                <Form.Group controlId="titulo" as={Row}>
                                    <Form.Label>T&iacute;tulo</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="T&iacute;tulo"
                                    />
                                </Form.Group>
                                <Form.Group controlId="detalle" as={Row}>
                                    <Form.Label>Detalle</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        as="textarea"
                                        placeholder="Detalle"
                                    />
                                </Form.Group>

                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Cancelar</Button>
                            <Button variant="primary" type="submit">Guardar</Button>
                        </Modal.Footer></Form>
                </Modal>
            </div>
        );
    }
}

export default Noticias;