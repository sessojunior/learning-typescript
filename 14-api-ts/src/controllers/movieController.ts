import { Request, Response } from "express"

// Model
import { movieModel } from "../models/movie"

// Logger
import { logger } from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
	try {
		const data = req.body
		const movie = await movieModel.create(data)
		return res.status(201).json(movie)
	} catch (error: any) {
		logger.error(`Erro: ${error.message}`)
		return res.status(500).send(error)
	}
}

export async function findMovieById(req: Request, res: Response) {
	try {
		const id = req.params.id
		const movie = await movieModel.findById(id)
		if (!movie) {
			return res.status(404).json({ error: "O filme não existe" })
			// throw new Error("O filme não existe")
		}
		return res.status(200).json(movie)
	} catch (error: any) {
		logger.error(`Erro: ${error.message}`)
		return res.status(500).send(error)
	}
}

export async function getAllMovies(req: Request, res: Response) {
	try {
		const movies = await movieModel.find()
		return res.status(200).json(movies)
	} catch (error: any) {
		logger.error(`Erro: ${error.message}`)
		return res.status(500).send(error)
	}
}

export async function updateMovie(req: Request, res: Response) {
	try {
		const id = req.params.id
		const data = req.body
		const movie = await movieModel.findByIdAndUpdate(id, data)
		if (!movie) {
			return res.status(404).json({ error: "O filme não existe" })
		}
		return res.status(200).json(movie)
	} catch (error: any) {
		logger.error(`Erro: ${error.message}`)
		return res.status(500).send(error)
	}
}

export async function deleteMovie(req: Request, res: Response) {
	try {
		const id = req.params.id
		const movie = await movieModel.findByIdAndDelete(id)
		if (!movie) {
			return res.status(404).json({ error: "O filme não existe" })
		}
		return res.status(200).json("Filme excluído com sucesso")
	} catch (error: any) {
		logger.error(`Erro: ${error.message}`)
		return res.status(500).send(error)
	}
}
