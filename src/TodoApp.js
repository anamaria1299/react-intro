import React from 'react'
import './App.css'
import {TodoList} from "./TodoList"

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <form onSubmit={this.handleSubmit} id="form">
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <br/>
                    <label htmlFor="new-todo">
                        Text:
                    </label>
                    <input
                        id="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <br/>
                    <label htmlFor="new-todo">
                        Priority:
                    </label>
                    <input id="priority"/>
                    <br/>
                    <label htmlFor="date">
                        Write the due date (year/month/day) in the following boxes:
                    </label>
                    <input id="year" size={5}/>
                    <input id="month" size={3}/>
                    <input id="day" size={3}/>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                    <TodoList items={this.state.items} />
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        let year, month, day;
        year = parseInt(document.getElementById("year").value)
        month = parseInt(document.getElementById("month").value)
        day = parseInt(document.getElementById("day").value)
        const newItem = {
            text: this.state.text,
            priority: document.getElementById("priority").value,
            dueDate: (new Date(year, month-1, day)).toDateString(),
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
        document.getElementById("form").reset()
    }
}