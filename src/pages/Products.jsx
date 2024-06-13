import React, { useEffect, useState } from 'react'
import axiosConfig from '../utils/axiosFetch'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
export default function Products() {
    const [name, setname] = useState('')
    const [color, setColor] = useState('')
    const [capacity, setCapacity] = useState('')
    const [price, setprice] = useState('')
    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState({
        name: '',
        color: '',
        capacity: '',
        price: '',
    })
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = () => {
        axiosConfig.get('/objects').then(res => {
            setProducts(res);
        }).catch((err) => {
            if (err.response.status) {

            }
            // alert(err.message)
            // console.log(err.response.status);
        })
    }
    const addproduct = (e) => {
        e.preventDefault();
        let productdata = {
            name: name,
            data: {
                capacity: capacity,
                price,
                color
            }
        }
        axiosConfig.post('/objects', productdata).then(res => {
            setProducts([...products, res])
        }).catch((err) => {
            console.log(err);
            // alert('err')
        })
    }
    return (
        <div>
            <Form
                onSubmit={addproduct}
            >
                <Row>
                    <Col lg="6">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control type="text" placeholder="Product name" onChange={(e) => setname(e.target.value)} />
                    </Col>
                    <Col lg="6">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" placeholder="Color" onChange={(e) => setColor(e.target.value)} />
                    </Col>
                    <Col lg="6">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control type="text" placeholder="Capacity" onChange={(e) => setCapacity(e.target.value)} />
                    </Col>
                    <Col lg="6">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" onChange={(e) => setprice(e.target.value)} />
                    </Col>
                </Row>
                <Col lg="6">
                    <Button
                        type='submit'
                        // onClick={addproduct}
                        variant="info" className='mt-4' >Add product</Button>
                </Col>



            </Form>

            <Container>
                <Row>
                    {products.map((itm, i) => (
                        <Col lg="3" key={itm.id}>
                            <Card>
                                <Card.Img variant="top" src="https://www.jsonplaceholder.org/jsonplaceholder.webp" />
                                <Card.Body>
                                    <p className='title-product'>{itm.name}</p>
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
