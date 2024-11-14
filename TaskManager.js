import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 1, name: 'Complete React project', completed: false },
                { id: 2, name: 'Go grocery shopping', completed: false },
            ],
            nextId: 3
        };
    }

    addTask = (taskName) => {
        const newTask = {
            id: this.state.nextId,
            name: taskName,
            completed: false
        };
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask],
            nextId: prevState.nextId + 1
        }));
    }

    toggleTaskCompletion = (taskId) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        }));
    }

    deleteTask = (taskId) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== taskId)
        }));
    }

    render() {
        return (
            <div className="task-manager">
                <h1>Task Management</h1>
                <TaskForm addTask={this.addTask} />
                <TaskList
                    tasks={this.state.tasks}
                    toggleTaskCompletion={this.toggleTaskCompletion}
                    deleteTask={this.deleteTask}
                />
            </div>
        );
    }
}

export default TaskManager;
