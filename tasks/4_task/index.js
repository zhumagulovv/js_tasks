import express from "express"

import router from "./src/routes/routes.js"


async function index() {
    try {
        const app = express()

        app.use(express.json())

        
        app.get("/", (req, res) => {
            res.send("Hello World")
        })

        
        app.use(router)

        app.listen(3000, () => {
            console.log("Server started in port 3000")
        })
    } catch (error) {
        console.log(error)
    }

}

index()