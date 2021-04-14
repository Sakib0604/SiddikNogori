import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import axios from 'axios'

class DetailsPage extends Component {

    constructor({match}){
        super()

        this.state={
            title:match.params.title,
            article:[]
        }
    }

    componentDidMount(){
        axios.get('https://siddiknogori.com/sn/api/articles')
        .then(
            response =>{
                this.setState({
                    article:response.data.data
                })
            }
        )
        .catch(error =>{
            console.log(error)
        })
    }


    render() {

        console.log(this.state.title);
        console.log(this.state.article);
        const {article} = this.state;
        const articledetails = article.filter(detailsfilter=>detailsfilter.title.includes(this.state.title))
        console.log(articledetails)


        return (
            <Container>
                {
                    articledetails.map((item,i)=>{
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

export default DetailsPage;
