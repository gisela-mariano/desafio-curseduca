import express from "express"
import cors from "cors"
import userRouter from "./routes/users.routes";

const app = express();
app.use(cors())
app.use(express.json());

app.use("/users", userRouter)

app.listen(3000, () => console.log('App rodando na porta 3000'))
