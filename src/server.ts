import express, {Request, Response} from "express";
import connectDataBase from './db'
import cors from "cors"
import userRoutes from "./routes/user.routes";
import categoryRoutes from "./routes/category.routes";
import taskRoutes from "./routes/task.routes";

const application = express()

application.use(express.json())
application.use(cors())

const PORT = 1337

connectDataBase()

application.get("/ping", (request: Request, response: Response) => {
  response.send("Pong")
})

application.use("/users", userRoutes)
application.use("/categories", categoryRoutes)
application.use("/tasks", taskRoutes)

application.listen(PORT, () => {
  console.log("Server up and running")
})
