import mongoose from "mongoose"
import config from "config"

// Logger
import { logger } from "../config/logger"

async function connect() {
	const dbUri = config.get<string>("dbUri")

	try {
		await mongoose.connect(dbUri)
		logger.info("Conectado ao MongoDB")
	} catch (e) {
		logger.error(`Não foi possível conectar. Erro: ${e}`)
		process.exit(1)
	}
}

export default connect
