import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

import {Container,Row,Col} from 'react-bootstrap'

import './about.css'

class About extends Component {

    constructor(){
        super()

        this.state={
            abouts:[]
        }
    }


    componentDidMount(){
        axios.get('https://siddiknogori.com/sn/api/abouts')
        .then(
            response =>{
                this.setState({
                    abouts:response.data.data
                })
            }
        )
        .catch(error =>{
            console.log(error)
        })
    }

    render() {

        console.log(this.state.abouts)

        return (
            <Container>
                <Row>
                {
                        this.state.abouts.map((item,i)=>{
                            return <Col sm={12} lg={6}>
                                <div className='cards-size-about' key={i}>
                                    <Link to={`/aboutdetails/${item.title}`}>
                                        <img src={`https://siddiknogori.com/sn/images/upload/${item.image}`} className='img-size-about' alt=''/>
                                    </Link>
                                    <div className='title-about'>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className='overlay'>
                                        <p className='card-text-about'>
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default About;