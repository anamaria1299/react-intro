import React from 'react'
import {Todo} from "./Todo"

export class TodoList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const todos = this.props.items;
        const listItems = todos.map((t) => {
            return (<Todo text={t.text} priority={t.priority} dueDate={t.dueDate} />)
        });
        return (<ul>{listItems}</ul>)
    }
}