import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router';



export default function ItemList({ items }) {
    return (
        <Container className='mt-4 bg-white'>
            <Row>
                {items.map(item => (
                    <Col lg={4}>
                        <Card key={item.id} className='mb-4'>
                            <Card.Img variant="top" src={item.thumbnail} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.price}
                                    {item.description}
                                </Card.Text>
                                <Link to={`/detail/${item.id}`}> Ver mas</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}