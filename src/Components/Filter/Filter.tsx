import React, {useState} from "react";
import "./Filter.scss";

export enum FilterValuesTypes { all = "Все", none = "Без пересадок", one = "1 пересадка", two = "2 пересадки", three = "3 пересадки"}

type PropsType = {
    filterTickets: (value: FilterValuesTypes) => void
}

function Filter(props: PropsType) {
    const [filterActive, setFilterActive] = useState(0);

    const onChangeFilter = (index:number, value:FilterValuesTypes)=> {
        setFilterActive(index);
        props.filterTickets(value)
    }
    return (
        <div className="filter">
            <h5>Количество пересадок</h5>
            <ul>
                {
                    Object.values(FilterValuesTypes).map((i, index) => (
                        <li onClick={ () => onChangeFilter(index, i) }
                            className={ filterActive === index ? "active" : ""} key={index}>
                            {
                                filterActive === index
                                    ? <img src="/img/Checkbox.svg" alt="Checkbox"/>
                                    : <img src="/img/Form.svg" alt="Checkbox"/>
                            }
                            <span>{i}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default Filter;