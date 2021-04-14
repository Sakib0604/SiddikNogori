import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios'

class AboutDetails extends Component {
    constructor({match}){
        super()

        this.state={
            title:match.params.title,
            about:[]
        }
    }

    componentDidMount(){
        axios.get('https://siddiknogori.com/sn/api/abouts')
        .then(
            response =>{
                this.setState({
                    about:response.data.data
                })
            }
        )
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        const {about} = this.state;
        const aboutdetails = about.filter(aboutfilter=>aboutfilter.title.includes(this.state.title))


        return (
            <Container>
                {
                    aboutdetails.map((item,i)=>{
                        return <div>
                            <h1>{item.title}</h1>
                            <img src={`https://siddiknogori.com/sn/images/upload/${item.image}`} alt="" className='img-fluid'/>
                            <p>{item.details}</p>
                        </div>
                    })
                }
            </Container>
        );
    }
}

export default AboutDetails;