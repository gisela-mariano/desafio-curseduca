import express from "express"
import cors from "cors"
import userRouter from "./routes/users.routes";
import postRouter from "./routes/posts.roues";

const app = express();
app.use(cors())
app.use(express.json());

app.use("/users", userRouter)
app.use("/posts", postRouter)

app.listen(3000, () => console.log('App rodando na porta 3000'))
