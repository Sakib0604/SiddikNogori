import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

import {Container,Row,Col} from 'react-bootstrap'

import './ebooks.css'

class EBook extends Component {
    constructor(){
        super()

        this.state={
            ebooks:[]
        }
    }


    componentDidMount(){
        axios.get('http://siddiknogori.com/sn/api/ebooks')
        .then(
            response =>{
                this.setState({
                    ebooks:response.data.data
                })
            }
        )
        .catch(error =>{
            console.log(error)
        })
    }

    render() {

        console.log(this.state.ebooks)

        return (
            <Container>
                <Row>
                {
                        this.state.ebooks.map((item,i)=>{
                            return <Col sm={12} lg={6}>
                                <div className="row cards-size-ebook">
                                    <div className="col-sm-6">
                                        <div key={i}>
                                            <img src={`https://siddiknogori.com/sn/images/upload/${item.cover_photo}`} className='img-size-ebook' alt=''/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>{item.title}</h4>
                                        <h6>{item.author}</h6>
                                        <p className='card-text-ebook'>
                                            {item.description}
                                        </p>
                                        <h6 className='d-inline mr-3'>Price:&#2547;{item.price}</h6>
                                        <a className='d-inline' href={`http://siddiknogori.com/sn/ebook_upload/${item.file}`} download>
                                            <i class="fas fa-file-download fa-2x"></i>
                                        </a>
                                        
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

export default EBook;