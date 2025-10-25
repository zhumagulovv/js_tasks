import { Router } from "express";

import { Tasks } from "../controllers/tasks.js";

const router = Router()

const tasks = new Tasks()

router.get("/", async (req, res) => {
    try {
        const request = await tasks.getAllTasks()
        res.json(request)
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const task = await tasks.getByTask(Number(req.params.id))

        if (!task) {
            return res.status(404).json({ error: "Задача не найдена" })
        }

        res.json(task)
    } catch (error) {
        console.log(error)
    }
})

router.post("/", async (req, res) => {
    try {
        const { name, task } = req.body

        if (!name || !task) {
            return res.status(400).json({ error: "Поля name и task обязательны" })
        }

        const creatTask = await tasks.createTask({ name, task })
        res.status(201).json(creatTask)
    }
    catch (error) {
        console.log(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deleted = await tasks.deleteTask(Number(req.params.id))

        if (!deleted) {
            return res.status(404).json({ error: "Задача не найдена" });
        }

        res.json({ message: "успешно удалена" })
    } catch (error) {
        console.log(error)
    }
})

export const tasksRouter = router