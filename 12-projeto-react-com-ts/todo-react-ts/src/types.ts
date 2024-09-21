export interface TaskProps {
	id: number
	title: string
	difficulty: number
}

export interface TaskListProps {
	tasks: TaskProps[]
}
