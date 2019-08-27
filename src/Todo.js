import React from 'react'

export class Todo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>text: {this.props.text} priority: {this.props.priority} Due date: {this.props.dueDate}</h1>
        )
    }
}