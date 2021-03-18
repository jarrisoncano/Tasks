import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase'
import Form from './Form'
import Table from './Table/Table'

export default function Main() {
  let initialSnapshot = []
  let [snapshot, setSnapshot] = useState([])

  let [handleChanges, setHandleChanges] = useState(false)
  let [handleButtonChange, setHandleButtonChange] = useState(false)

  // let [idItem, setIdItem] = useState(null)

  const initialValues = {
    name: '',
    description: '',
  }
  let [values, setValues] = useState(initialValues)

  const submitTasks = async (token) => {
    if (token) {
      await db.collection('tasks').doc(values.id).update(values)
      setHandleButtonChange(false)
      setHandleChanges(!handleChanges)
    } else {
      await db.collection('tasks').doc().set(values)
      setHandleChanges(!handleChanges)
    }
  }

  const getTasks = async () => {
    await db
      .collection('tasks')
      .get()
      .then((res) => {
        res.forEach((doc) => {
          let d = doc.data()
          initialSnapshot.push({ ...d, id: doc.id })
        })
      })
    setSnapshot(initialSnapshot)
  }

  const deleteTasks = async (id) => {
    await db.collection('tasks').doc(id).delete()
    setHandleChanges(!handleChanges)
  }

  const updateTasks = (v) => {
    setValues(v)
    setHandleButtonChange(true)
  }

  useEffect(() => {
    getTasks()
  }, [handleChanges])

  return (
    <div className='container-xl'>
      <Form
        submitTasks={submitTasks}
        handleButtonChange={handleButtonChange}
        setHandleButtonChange={setHandleButtonChange}
        values={values}
        setValues={setValues}
      />
      <Table
        snapshot={snapshot}
        deleteTasks={deleteTasks}
        updateTasks={updateTasks}
      />
    </div>
  )
}
