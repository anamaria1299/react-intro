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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="todo-text"
                        onChange={this.setText}
                        value={this.state.text}
                    />
                    <input
                        id="todo-priority"
                        onChange={this.set}
                        value={this.state.items.priority}
                    />
                    <input
                        id="todo-dueDate"
                        onChange={this.handleChange}
                        value={this.state.items.dueDate}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
                <TodoList items={this.state.items} />
            </div>
        );
    }

    setText(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {

        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}
