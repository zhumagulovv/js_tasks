import { v4 as uuidv4 } from "uuid"

export class Tasks {
    constructor() {
        this.tasks = []
    }
    getAllTasks() {
        return this.tasks
    }

    getByTask(id) {
        return this.tasks.find(task => task.id === id)
    }

    createTask({ name, task }) {
        const newTask = {
            id: uuidv4(),
            name,
            task
        }
        this.tasks.push(newTask)
        return newTask
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id)
        if (index !== -1) {
            return this.tasks.splice(index, 1)[0]
        }
        return null
    }
}