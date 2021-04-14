import React, { Component } from 'react';
import axios from 'axios'
import './group.css'

class Group extends Component {
    constructor({match}){
        super()
        this.state={
            groupid:match.params.id,
            id:match.params.id,
            groupname:[]
        }
    }
    componentDidMount(){
        axios.get(`https://siddiknogori.com/sn/api/group-with-members/${this.state.id}`)
        .then(response=>{
            this.setState({
                groupname:response.data.data,
                
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        
        return (
            <div className='container'>

                {
                    this.state.groupname.map((item,i)=>{
                        
                        return <ul className='ul'>
                                <li className='listhead'><h2>{item.name}</h2></li>
                                                                {
                                    item.member.map((t,i)=>{
                                        return <div>
                                            <ol className='sublist'>
                                                <div>
                                                    <h4>{t.name}</h4>
                                                    <h4>{t.mobile}</h4>
                                                    <h4>{t.email}</h4>
                                                </div>
                                            </ol>
                                        </div>
                                    })}
                            </ul>

                    })
                }
                
            </div>
        );
    }
}

export default Group;