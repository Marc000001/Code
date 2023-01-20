import React, {useEffect, useState, } from 'react'
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import products from "../components/Product";   

function ProductScreen() {
    const { id } = useParams();
    const [product, setProducts] = useState([]);
    useEffect(() =>{
        async function fetchProducts(){
          const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
          setProducts(data);
        }
        fetchProducts()
    }, [])
  return (
    <div>
        <Link to="/" className="btn btn-light my-3">
            Fuck, Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>{product.description}</ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating}
                        text={`${product.numReviews} reviews`}
                        color={"#f8e825"} />
                        
                        
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: $Php{product.price}
                    </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Price:
                            </Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Availability:
                            </Col>
                            <Col>
                                {product.countInStock > 0 ? 'In Stock' : "Out of Stock"}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Button className="btn-block" disabled={product.countInStock === 0} type="btn">Add to Cart</Button>
                    </Row>
                </ListGroup.Item>
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen