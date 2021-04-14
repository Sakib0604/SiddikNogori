import React, { Component } from 'react';
import './groupsmember.css'
import {Link} from 'react-router-dom'

class GroupsMember extends Component {
    constructor(){
        super()

        this.state={
            center:[
                {'id':1,'name':'Dhaka'},
                {'id':2,'name':'Chittagong'},
                {'id':3,'name':'Barishal'},
                {'id':4,'name':'Khulna'},
                {'id':5,'name':'Mymensingh'},
                {'id':6,'name':'Rajshahi'},
                {'id':7,'name':'Rangpur'},
                {'id':8,'name':'Sylhet'},
                {'id':9,'name':'India'},
            ]
        }
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                {
                    this.state.center.map(item=>{
                        return <div className="col-sm-3">
                            <div className='center-card'>
                                <Link to={`/group-name/${item.id}`}>
                                    <i class="fas fa-door-open fa-2x"></i>
                                    <h4>{item.name}</h4>
                                </Link>
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
        );
    }
}

export default GroupsMember;