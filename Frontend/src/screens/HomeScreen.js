import React, {useEffect, useState, } from 'react'
// import products from '../products'
import axios from 'axios'
import { Row, Col, Image, Carousel } from 'react-bootstrap'
import Product from '../components/Product'
import backpic from '../navbar/back.png'
import Form from 'react-bootstrap/Form';



function HomeScreen() {
  const [products, setProducts] = useState([])
  useEffect(() =>{
    async function fetchProducts(){
      const {data} = await axios.get('/api/products')
      setProducts(data);
    }
    fetchProducts()

  }, [])
  return (
    
    <div>
      <Image
                src={backpic}
                width="1350"
                height="410"
                className="justify-content-md-center"
              /> {' '}
          <p style={{fontSize:30}} class="text-center">Click on each tutor's profile to learn more about the tutor's educational background</p> 
          <p style={{fontSize:30}} class="text-center">and experiences.</p>
        
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <p style={{fontSize:20}} class="text-left">Filter by Subject</p>
       
       <Row>
        <Form.Select style={{width:450,}} aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">Mathematics</option>
        <option value="2">Science</option>
        <option value="3">Filipino</option>
        </Form.Select>
      </Row>
       
       <br></br>
       <br></br>
       <br></br>
       <br></br>
          
        
        <Row>
            {products.map(product =>(
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen



