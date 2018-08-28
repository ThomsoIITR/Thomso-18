import React from 'react';
import EventDetail from './EventDetails';
import { EventDetails } from './events.js';
import './src/css/EventsModals.css';

export default class EventsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: this.props.id,
            subEventId: `${this.props.id}_1`,
        };
        this.nextCat = this.nextCat.bind(this);
        this.prevCat = this.prevCat.bind(this);
    }
    componentWillMount() {
        let filteredData = EventDetails.filter(e => e.id === this.state.eventId);
        this.setState({ data: filteredData[0] });

        window.addEventListener('keyup', this.handleKeys, false);
    }

    handleKeys = e => {
        if (e.keyCode === 27) {
            this.props.modalClose()
        }
        if (e.keyCode === 39) {
            this.nextCat(this.state.eventId)
        }
        if (e.keyCode === 37) {
            this.prevCat(this.state.eventId)
        }
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeys)
    }
    nextCat = (id) => {
        if (id === 13) {
            this.setState({ eventId: 1 }, () => {
                let filteredData = EventDetails.filter(e => e.id === this.state.eventId);
                this.setState(
                    {
                        data: filteredData[0],
                        subEventId: `${this.state.eventId}_1`,
                    });
            })
        } else {
            this.setState({ eventId: id + 1 }, () => {
                let filteredData = EventDetails.filter(e => e.id === this.state.eventId);
                this.setState(
                    {
                        data: filteredData[0],
                        subEventId: `${this.state.eventId}_1`,
                    });
            })
        }
    }
    prevCat = (id) => {
        if (id === 1) {
            this.setState({ eventId: 13 }, () => {
                let filteredData = EventDetails.filter(e => e.id === this.state.eventId);
                this.setState(
                    {
                        data: filteredData[0],
                        subEventId: `${this.state.eventId}_1`,
                    });
            })
        } else {
            this.setState({ eventId: id - 1 }, () => {
                let filteredData = EventDetails.filter(e => e.id === this.state.eventId);
                this.setState(
                    {
                        data: filteredData[0],
                        subEventId: `${this.state.eventId}_1`,
                    });
            })
        }
    }
    render() {
        return (
            <div className="events-modala">
                <div className="events-modala-main-child">
                    <div style={{ height: "10%", display: "flex", justifyContent: "space-between", borderBottom: "white 1px solid" }}>
                        <p className="events-modala-p" >
                            {this.state.data && this.state.data.name}
                        </p>
                        <span href="" className="events-modal-close" onClick={() => this.props.modalClose()}>
                            &times;
                    </span>
                    </div>
                    <div className="events-modala-second-child">
                        <div className="events-list-child">
                            <ul>
                                {this.state.data && this.state.data.subevents.map(e =>
                                    <li key={e.id} onClick={() => {
                                        this.setState({ subEventId: e.id })
                                    }}>
                                        <p className="events-custom-selection">{e.name}</p>
                                    </li>
                                )}
                            </ul>
                        </div>
                        {this.state.data ? <EventDetail history={this.props.history} id={this.state.subEventId} detail={this.state.data} eventsId={this.state.eventId} subevents={this.state.data.subevents} data={this.props.data} /> : null}
                    </div>
                    <div className="events-modals-last-arrow" style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                        <p href="" className="arrow-button-events" onClick={() => this.prevCat(this.state.eventId)}>
                            <img src="/img/main/events/leftarrow.png" alt="left-arrow" width="15px" />
                        </p>
                        <p href="" className="arrow-button-events">
                            <img src="/img/main/events/rightarrow.png" alt="right-arrow" width="15px" onClick={() => this.nextCat(this.state.eventId)} />
                        </p>
                    </div>
                    <hr className="events-horizontal" />
                </div>
            </div>
        )
    }
}
