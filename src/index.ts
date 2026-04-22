import { typedEnv } from "./typedEnv.ts"
import express from "express"
import { calcRouter } from "./routes/calc.route.ts"


const PORT = typedEnv.PORT || 3000

const app = express()

app.use(express.json())

app.use('/calc', calcRouter)

app.listen(PORT, ()=>{
    console.log(`Listen port ${PORT}`)
})