import React, { Component }from "react";
import "../styles/OverviewStyles.css"

export class Overview extends Component {
    render() {
        const { tasks, id } = this.props;

        return (
            <ul>
            {tasks.map((task) => {
                return (
                <div>
                    <li key={task.id}>
                        {task.number}. {task.text}
                        <button onClick={this.props.delTask.bind(this, id)}>x</button>
                    </li>
                </div>
                )
            })}
            </ul>
        )
    }
};

export default Overview;
