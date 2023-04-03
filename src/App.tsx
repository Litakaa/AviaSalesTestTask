import React, {useState} from 'react';
import Filter, {FilterValuesTypes} from "./Components/Filter/Filter";
import Ticket, {TicketType} from "./Components/Ticket/Ticket";
import Sorter, {SorterValuesType} from "./Components/Sorter/Sorter";


function App() {
    let [tickets, setTickets] = useState<Array<TicketType>>([
        {
            id: 1,
            price: 13400,
            carrier: "/img/logo/S7 Logo.svg",
            segments: [
                {
                    origin: "MOW",
                    destination: "HKT",
                    date: "10:45 - 08:00",
                    stops: [
                        "HKG", "JNB"
                    ],
                    duration: 800
                },
                {
                    origin: "HKT",
                    destination: "MOW",
                    date: "11:00 - 00:30",
                    stops: [
                        "JNB"
                    ],
                    duration: 600
                }
            ]
        },
        {
            id: 2,
            price: 15000,
            carrier: "/img/logo/utair.png",
            segments: [
                {
                    origin: "IEV",
                    destination: "DXB",
                    date: "23:00 - 09:00",
                    stops: [
                        "HKG", "JNB"
                    ],
                    duration: 1200
                },
                {
                    origin: "DXB",
                    destination: "IEV",
                    date: "21:00 - 07:30",
                    stops: [
                        "JNB"
                    ],
                    duration: 400
                }
            ]
        },
        {
            id: 3,
            price: 10000,
            carrier: "/img/logo/belavia.png",
            segments: [
                {
                    origin: "EVN",
                    destination: "DZN",
                    date: "14:00 - 17:00",
                    stops: [
                        "HKG", "JNB"
                    ],
                    duration: 180
                },
                {
                    origin: "DZN",
                    destination: "EVN",
                    date: "21:00 - 23:00",
                    stops: [
                        "JNB"
                    ],
                    duration: 210
                }
            ]
        },
        {
            id: 4,
            price: 20000,
            carrier: "/img/logo/aeroflot.png",
            segments: [
                {
                    origin: "MOW",
                    destination: "VOZ",
                    date: "09:00 - 12:00",
                    stops: [
                    ],
                    duration: 180
                },
                {
                    origin: "VOZ",
                    destination: "MOW",
                    date: "18:00 - 21:00",
                    stops: [
                    ],
                    duration: 180
                }
            ]
        },
        {
            id: 5,
            price: 11000,
            carrier: "/img/logo/utair.png",
            segments: [
                {
                    origin: "IEV",
                    destination: "DXB",
                    date: "23:00 - 09:00",
                    stops: [
                        "HKG", "JNB"
                    ],
                    duration: 560
                },
                {
                    origin: "DXB",
                    destination: "IEV",
                    date: "21:00 - 07:30",
                    stops: [
                        "JNB"
                    ],
                    duration: 560
                }
            ]
        }
    ]);
    let [filter, setFilter] = useState<SorterValuesType>(SorterValuesType.optimal);
    let [sorted, setSorted] = useState<FilterValuesTypes>(FilterValuesTypes.all);


    function changeFilter(value: SorterValuesType) {
        sortTickets(value);
        setFilter(value);
    }

    function sortTickets(value: SorterValuesType) {
        let sortedTickets = tickets;
        if (value === SorterValuesType.cheepest) {
            sortedTickets = tickets.sort((a, b) => a.price > b.price ? 1 : -1)
        }
        if (value === SorterValuesType.fastest) {
            sortedTickets = tickets.sort(SortByDuration)
        }
        if (value === SorterValuesType.optimal) {
            sortedTickets = tickets.sort((a, b) => a.id > b.id ? 1 : -1)
        }
        setTickets(sortedTickets);
    }

    function SortByDuration(a: TicketType, b: TicketType)
    {
        let aValue = a.segments.reduce((sum, segment) => {
            return sum + segment.duration;
        }, 0)
        let bValue =b.segments.reduce((sum, segment) => {
            return sum + segment.duration;
        }, 0)
        return aValue > bValue ? 1 : -1

    }

    function filterTickets(value: FilterValuesTypes) {
        debugger
        let filteredTickets = tickets;
        if (value === FilterValuesTypes.none) {
            filteredTickets = tickets.filter(t => t.segments[0].stops.length === 0 && t.segments[1].stops.length === 0)
        }


        setTickets(filteredTickets)
    }





    return (
        <div className="wrapper">
            <header>
                <img src="/img/Logo.svg" alt="Logo"/>
            </header>
            <div className="main">
                <Filter filterTickets={filterTickets}/>
                <div className="content__block">
                    <Sorter changeFilter={changeFilter}/>
                    <Ticket tickets={tickets}/>
                </div>
            </div>
        </div>
    );
}

export default App;
