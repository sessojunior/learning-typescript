import { body } from "express-validator"

export const movieCreateValidation = () => {
	return [
		body("title").notEmpty().withMessage("O campo 'title' deve ser informado").isString().withMessage("O campo 'title' deve ser uma string").isLength({ min: 5 }).withMessage("O campo 'title' deve ter pelo menos 5 caracteres"),

		body("rating")
			.notEmpty()
			.withMessage("O campo 'rating' deve ser informado")
			.isNumeric()
			.withMessage("O campo 'rating' deve ser um número")
			.custom((value: number) => {
				if (value < 0 || value > 10) {
					throw new Error("O campo 'rating' deve estar entre 0 e 10")
				}
				return true
			}),

		body("description").notEmpty().withMessage("O campo 'description' deve ser informado").isString().withMessage("O campo 'description' deve ser uma string").isLength({ min: 20 }).withMessage("O campo 'description' deve ter pelo menos 20 caracteres"),

		body("director").notEmpty().withMessage("O campo 'director' deve ser informado").isString().withMessage("O campo 'director' deve ser uma string").isLength({ min: 5 }).withMessage("O campo 'director' deve ter pelo menos 5 caracteres"),

		body("stars").notEmpty().withMessage("O campo 'stars' deve ser informado").isArray(),

		body("poster").notEmpty().withMessage("O campo 'poster' deve ser informado").isURL().withMessage("O campo 'poster' deve ser uma URL válida"),
	]
}
