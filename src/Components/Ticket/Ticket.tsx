import React from "react";
import "./Ticket.scss";

export type SegmentType = {
    origin: string,
    destination: string,
    date: string,
    stops: Array<string>,
    duration: number
}

export type TicketType = {
    id: number
    price: number,
    carrier: string,
    segments: Array<SegmentType>
}
type PropsType = {
    tickets: Array<TicketType>
}

function Ticket(props: PropsType) {
    return (
        <div>
            { props.tickets.map((t) => (
                <div className="content__ticket" key={t.id}>
                    <div className="ticket__header">
                        <div className="ticket__price">
                            <h3>{(t.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} р</h3>
                        </div>
                        <div className="ticket__logo">
                            <img src={t.carrier} alt="S7"/>
                        </div>
                    </div>

                    {
                        t.segments.map((s,index) => (
                            <div className="ticket__there" key={index}>
                                <div className="ticket__city">
                                    <span>{s.origin} - {s.destination} </span>
                                    <p> {s.date} </p>
                                </div>
                                <div className="ticket__way">
                                    <span>В пути</span>
                                    <p>{s.duration}</p>
                                </div>
                                <div className="ticket__transfer">
                                    <span>{s.stops.length + (s.stops.length > 1 ? " пересадки" : " пересадка")}</span>
                                    <p>{s.stops.join(", ")}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ))
            }
        </div>
);
}



export default Ticket;