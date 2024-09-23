import express, { NextFunction, Request, Response } from "express"

const app = express()

// Habilita o uso de JSON
app.use(express.json())

// Rotas

// GET
app.get("/", (req, res) => {
	return res.send("Olá mundo!")
})

// POST
app.post("/api/produtos", (req, res) => {
	return res.send(req.body)
})

// ROTA PARA QUALQUER VERBO (ALL)
app.all("/api/check", (req, res) => {
	// req.method = GET, POST, PUT, PATCH, DELETE
	if (req.method === "GET") {
		return res.send("Leu algum registro")
	} else if (req.method === "POST") {
		return res.send("Inseriu algum registro")
	} else {
		return res.send("Não podemos realizar esta operação")
	}
})

// Interfaces do Express
app.get("/api/interfaces", (req: Request, res: Response) => {
	return res.send("Utilizando as interfaces")
})

// Enviando JSON
app.post("/api/json", (req: Request, res: Response) => {
	return res.send({
		name: "Blusa",
		price: 89.98,
		size: "P",
	})
})

// Router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
	return res.send(req.params)
})

// Rotas complexas
app.get("/api/product/:productId/review/:reviewId", (req: Request, res: Response) => {
	const { productId, reviewId } = req.params
	return res.send(req.params)
})

// Router handler
app.get("/api/user/:id", getUser)
function getUser(req: Request, res: Response) {
	const { id } = req.params
	return res.send({ id })
}

// Middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
	if (req.params.id === "1") {
		console.log("Acesso liberado")
		next()
	} else {
		console.log("Acesso negado")
		return res.json({ message: "Acesso negado!" })
	}
}
app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
	return res.json({ message: "Bem-vindo a àrea administrativa!" })
})

// Middleware global (para todas as rotas)
// Utilização do app.use
function showPath(req: Request, res: Response, next: NextFunction) {
	console.log("Middleware global")
	console.log(req.path)
	next()
}
app.use(showPath)

// Req e res com generics
app.get("/api/user/:id/details/:name", (req: Request<{ id: string; name: string }>, res: Response<{ status: boolean }>) => {
	console.log(`ID e nome: ${req.params.id}`)
	console.log(`Nome: ${req.params.name}`)
	return res.send({ status: true })
})

// Tratamento de erros
app.get("/api/error", (req: Request, res: Response) => {
	try {
		throw new Error("Erro interno")
	} catch (error: any) {
		res.status(500).json({ message: error.message })
	}
})

const port = 3000
app.listen(port, () => {
	console.log(`Aplicação rodando na porta ${port}`)
})
