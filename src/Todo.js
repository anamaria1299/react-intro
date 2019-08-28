import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export class Todo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div class="card text-white bg-info mb-3">
                            <div className="card-header">{this.props.text}</div>
                            <div className="card-body">
                                <p className="card-text">Priority: {this.props.priority}</p>
                                <p className="card-text">Due date: {this.props.dueDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}