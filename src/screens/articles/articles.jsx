import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

import {Card,Container,Row,Col} from 'react-bootstrap'

import './articles.css'

class Articles extends Component {

    constructor(){
        super()

        this.state={
            articles:[]
        }
    }


    componentDidMount(){
        axios.get('https://siddiknogori.com/sn/api/articles')
        .then(
            response =>{
                this.setState({
                    articles:response.data.data
                })
            }
        )
        .catch(error =>{
            console.log(error)
        })
    }

    render() {

        console.log(this.state.articles)

        return (
            <Container>
                <Row>
                {
                        this.state.articles.map((item,i)=>{
                            return <Col sm={12} md={6} lg={4} xl={3} >
                                <Card className='card-size' key={i}>
                                    <Link to={`/details/${item.title}`}>
                                        <Card.Img className='img-size' variant="top" src={`https://siddiknogori.com/sn/images/upload/${item.image}`} />
                                    </Link>
                                    <Card.Body>
                                        <Link to={`/details/${item.title}`}>
                                            <Card.Title>{item.title}</Card.Title>
                                        </Link>
                                        <Card.Text className='card-text'>
                                            {item.details}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default Articles;