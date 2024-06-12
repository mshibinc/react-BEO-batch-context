import React, { useEffect, useState } from 'react'
import axiosConfig from '../utils/axiosFetch'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = () => {
        axiosConfig.get('/objects').then(res => {
            setProducts(res);
        }).catch((err) => {
            alert('err')
        })
    }
    return (
        <div>
            <Container>
                <Row>
                    {products.map((itm, i) => (
                        <Col lg="3" key={itm.id}>
                            <Card>
                                <Card.Img variant="top" src="https://www.jsonplaceholder.org/jsonplaceholder.webp" />
                                <Card.Body>
                                    <Card.Title>{itm.name}</Card.Title>
                                    {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                                    <Link to={`/products/${itm.id}`}>
                                        <Button variant="info">More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* {products.map((itm, i) => (
                <div key={itm.id}>
                    <h4>{itm.name}</h4>
                    <Link to={`/products/${itm.id}`}>
                        Show Details
                    </Link>
                </div>
            ))} */}
        </div>
    )
}
