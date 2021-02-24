import { useState, React } from 'react'

const TaskF = ({ details }) => {
    const [task, setTask] = useState(details)

    return (
        <div className={task.complete ? 'completed' : ''}>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <button className="button" onClick={() => setTask({
                id: task.id,
                text: task.text,
                day: task.day,
                complete: !task.complete
            })}>Mark Complete</button>
        </div>
    )
}

export default TaskF
