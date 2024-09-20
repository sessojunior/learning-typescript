import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import ModalForm from "./components/ModalForm";

import { TaskProps } from "./types";

export default function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [showModal, setShowModal] = useState(false)
  const [editTaskId, setEditTaskId] = useState(0)

  return (
    <>
      <Header />
      <Main>
        <Form setTasks={setTasks} />
        <hr />
        <TaskList tasks={tasks} setShowModal={setShowModal} setEditTaskId={setEditTaskId} setTasks={setTasks} />
      </Main>
      <Footer />
      <ModalForm showModal={showModal} tasks={tasks} setTasks={setTasks} setShowModal={setShowModal} editTaskId={editTaskId} />
    </>
  )
}
