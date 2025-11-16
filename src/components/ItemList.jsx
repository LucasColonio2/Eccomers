import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ItemList({ items }) {
    return (
        <Container className='mt-4 bg-white'>
            <Row>
                {items.map(item => (
                    <Col lg={4}>
                        <Card key={item.id} className='mb-4'>
                            <Card.Img variant="top" src="https://picsum.photos/seed/producto1/400/300" />
                            <Card.Body>
                                <Card.Title>{item.nombre}</Card.Title>
                                <Card.Text>
                                    {item.precio}
                                    {item.descripcion}
                                </Card.Text>
                                <Button variant="primary">Ver mas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
        )
    }