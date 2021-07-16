import { useEffect, useState } from 'react'
import { db } from 'services/firebase'
import Form from './Form'
import Table from './Table/Table'

export default function Main () {
  const initialInputsValues = {
    name: '',
    description: ''
  }
  const [inputsValues, setInputsValues] = useState(initialInputsValues)
  const [snapshot, setSnapshot] = useState([])
  const [buttonType, setButtonType] = useState(false)

  const submitTask = () => {
    db.collection('tasks')
      .doc()
      .set(inputsValues)
      .then(() => {
        setInputsValues(initialInputsValues)
        getTasks()
      })
  }

  const getTasks = () => {
    const initialSnapshot = []

    db.collection('tasks')
      .get()
      .then((res) => {
        res.forEach((doc) =>
          initialSnapshot.push({ ...doc.data(), id: doc.id })
        )
      })
      .then(() => setSnapshot(initialSnapshot))
  }

  const deleteTask = (id) => {
    db.collection('tasks')
      .doc(id)
      .delete()
      .then(() => getTasks())
  }

  const updateTask = () => {
    db.collection('tasks')
      .doc(inputsValues.id)
      .update(inputsValues)
      .then(() => {
        setInputsValues(initialInputsValues)
        getTasks()
      })
    setButtonType(false)
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className='container-xl'>
      <Form
        buttonType={buttonType}
        submitTask={submitTask}
        updateTask={updateTask}
        inputsValues={inputsValues}
        setInputsValues={setInputsValues}
      />
      <Table
        snapshot={snapshot}
        setButtonType={setButtonType}
        setInputsValues={setInputsValues}
        deleteTask={deleteTask}
      />
    </div>
  )
}
