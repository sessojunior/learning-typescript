// Para ler o arquivo .env
import "dotenv/config"

export default {
	port: 3000,
	dbUri: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.mzyyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
	env: process.env.NODE_ENV,
}
