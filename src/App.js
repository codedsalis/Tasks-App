import './App.css';
import Task from "./Task.jsx";
import TaskF from "./TaskF.jsx";
// import Input from './components/Input'
// import Button from './components/Button'


function App() {
  const taskList = [
    {
      id: 1,
      text: "Buy Grosseries",
      day: "Monday, 12:30 pm",
      complete: true,
    },
    {
      id: 2,
      text: "Write Artificial Intelligence Exam",
      day: "Friday, 8:00 am",
      complete: false,
    },
    {
      id: 3,
      text: "Watch Liverpool football match",
      day: "Sunday, 5:30 pm",
      complete: false,
    }
  ]
  return (
    <div>
      <div className="header">My Class Tasks</div>
      <div className="tasks">
        {taskList.map((task) => (
          <Task details={task} key={task.id} />
        )
        )}
      </div>

      <div className="header">My Functional Tasks</div>
      <div className="tasks">
        {taskList.map((task) => (
          <TaskF details={task} key={task.id} />
        )
        )}
      </div>
    </div>
  );
}

export default App;
