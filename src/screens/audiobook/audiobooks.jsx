import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import axios from 'axios'
import './audiobooks.css'


class AudioBook extends Component {
    constructor(){
        super()

        this.state={
            audio:[]
        }
    }


    componentDidMount(){
        axios.get('http://siddiknogori.com/sn/api/audio-books')
        .then(
            response =>{
                this.setState({
                    audio:response.data.data
                })
            }
        )
        .catch(error =>{
            console.log(error)
        })
    }
    
    render() {
        console.log(this.state.audio)
        return (
            <Container>
                <Row>
                {
                    this.state.audio.map((item,i)=>{
                            return <Col sm={12} lg={6}>
                                <div className='cards-size-audio' key={i}>
                                    
                                    <img className='img-size-audio' src="https://lh3.googleusercontent.com/proxy/QncvymRHkhGrWkaBvmsuZwuLHrC0dRmGNO3p0zOc_AaVD5NxPGmhnWctR6AYZhaJbbilpjjrb4aZCjazHtnH-lj5IDSP-iRf3lIWygmKQHzaK8hq1TFAwHvKYSxNBzYCMDijJdsnQMh0Y2G-kr7dOSvambunpqmk5HAnpuhjuxF6UGaMco_XjGnNaU4L5hJKSBEG8etFNOwWtFE9SP0mDr2sitWRHiuX9MiJqmFdxWRgC6Wl0BVO9FeNJtZEM6xF1XAg-LyGibc7zpNrNE-V1mfuyV5huf7tWRO1ezaEKnMSxF2XaARU5J0vl30snTdX-0ULX9IGiNqFmUDsqikcpp0ZC3QviVX1ax9G9OfCfOrQP0HwrAGhIkIzvWBqTkRbO40SYyFz9kJ4noqjRAgOUAh2ZdEgXQ0Gn755inhc0oz2cW9ohgYPZDJ1Cp3oZlW1WqKf5jJYi_1UnuJdlk67bwf2yqYj5w" alt=""/>
                                    
                                    <div className='title-audio'>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className='audio-div'>
                                        <audio controls>
                                            <source 
                                            src={`http://siddiknogori.com/sn/audio/${item.audio_orginal}`} 
                                            type="audio/mp3"/>
                                        </audio>
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

export default AudioBook;

