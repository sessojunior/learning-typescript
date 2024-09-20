import Task from "./Task";

import { TaskListProps } from "../types";

interface TaskListExtendedProps extends TaskListProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditTaskId: React.Dispatch<React.SetStateAction<number>>;
  setTasks: React.Dispatch<React.SetStateAction<TaskListProps["tasks"]>>
}

export default function TaskList({ tasks, setShowModal, setEditTaskId, setTasks }: TaskListExtendedProps) {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <h2 className="text-2xl font-bold pb-6">Suas tarefas:</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} difficulty={task.difficulty} setShowModal={setShowModal} setEditTaskId={setEditTaskId} tasks={tasks} setTasks={setTasks} />
        ))
      ) : (
        <p>Não há tarefas no momento.</p>
      )}
    </div>
  )
}