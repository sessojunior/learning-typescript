import express from "express"
import config from "config"

const app = express()

// Json middleware
app.use(express.json())

// DB
import db from "../config/db"

// Routes
import router from "./router"

// Logger
import { logger } from "../config/logger"

// Middlewares
import { morganMiddleware } from "./middleware/morganMiddleware"
app.use(morganMiddleware)

// Prefixo /api/
app.use("/api", router)

// app port
const port = config.get<number>("port")

app.listen(port, async () => {
	await db()
	logger.info(`Aplicação rodando na porta ${port}`)
})
