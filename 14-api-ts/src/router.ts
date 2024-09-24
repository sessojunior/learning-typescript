import { movieCreateValidation } from "./middleware/movieValidation"
import { Router, Request, Response } from "express"
import { createMovie, deleteMovie, findMovieById, getAllMovies, updateMovie } from "./controllers/movieController"

// validations
import { validate } from "./middleware/handleValidation"

const router = Router()

export default router
	.get("/teste", (req: Request, res: Response) => {
		res.status(200).send("API funcionando")
	})
	.post("/movie", movieCreateValidation(), validate, createMovie)
	.get("/movie/:id", findMovieById)
	.get("/movie", getAllMovies)
	.put("/movie/:id", updateMovie)
	.delete("/movie/:id", deleteMovie)
