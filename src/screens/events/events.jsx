import React, { Component } from 'react';
import axios from 'axios'

import './events.css'

class Event extends Component {
    constructor(){
        super()

        this.state={
            allevent:[]
        }
    }

    componentDidMount(){
        axios.get('https://siddiknogori.com/sn/api/events')
        .then(response =>{
            this.setState({
                allevent:response.data.data,
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        console.log(this.state.allevent)
        const {allevent} = this.state;
        const futureevent = allevent.filter(eventfilter=>eventfilter.event_type.includes('Future'))
        const pastevent = allevent.filter(eventfilter=>eventfilter.event_type.includes('Past'))

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                    <h1>Upcoming Events</h1>
                        {                        
                            futureevent.map(item=>{
                                return <div className="card-event">
                                    <div className="row align-items-center">
                                        <div className="col-sm-4">
                                            <img src={`https://siddiknogori.com/sn/images/upload/${item.cover_photo}`} alt="" className='event-img'/>
                                        </div>
                                        <div className="col-sm-8">
                                            <h3>{item.name}</h3>
                                            <i className="fas fa-calendar-week mr-3"> {item.date}</i>
                                            <i className="far fa-clock ml-auto"> {item.time}</i>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="col-sm-6">
                        <h1>Past Events</h1>
                        {                        
                            pastevent.map(item=>{
                                return <div className='card-event'>
                                    <div className="row align-items-center">
                                        <div className="col-sm-4">
                                            <img src={`https://siddiknogori.com/sn/images/upload/${item.cover_photo}`} alt="" className='event-img'/>
                                        </div>
                                        <div className="col-sm-8">
                                            <h3>{item.name}</h3>
                                            <i className="fas fa-calendar-week mr-3"> {item.date}</i>
                                            <i className="far fa-clock ml-auto"> {item.time}</i>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;