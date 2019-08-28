import React from 'react'
import './App.css'
import {TodoList} from "./TodoList"

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline" onSubmit={this.handleSubmit} id="form">
                        text: <input className="form-control mr-sm-2" id="text" />
                        priority: <input className="form-control mr-sm-2" id="priority" />
                        year: <input className="form-control mr-sm-2" id="year" size={4}/>
                        month: <input className="form-control mr-sm-2" id="month" size={3}/>
                        day: <input className="form-control mr-sm-2" id="day" size={3}/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Add #{this.state.items.length + 1}
                        </button>
                    </form>
                </nav>
                <div>
                    <TodoList items={this.state.items} />
                </div>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        let year, month, day;
        year = parseInt(document.getElementById("year").value)
        month = parseInt(document.getElementById("month").value)
        day = parseInt(document.getElementById("day").value)
        const newItem = {
            text: document.getElementById("text").value,
            priority: document.getElementById("priority").value,
            dueDate: (new Date(year, month-1, day)).toDateString(),
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
        }));
        document.getElementById("form").reset()
    }
}