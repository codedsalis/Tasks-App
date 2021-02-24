import React from 'react'

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.details
        }
    }

    render() {
        return (
           <div className={this.state.task.complete ? 'completed' : ''}>
            <h3>{this.state.task.text}</h3>
            <p>{this.state.task.day}</p>
            <button className="button" onClick={() => this.setState({
                task: {
                    id: this.state.task.id,
                    text: this.state.task.text,
                    day: this.state.task.day,
                    complete: !this.state.task.complete
                }
            })}>Mark Complete</button>
          </div>
        );
    }
}


export default Task
