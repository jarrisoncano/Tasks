import React, { useEffect } from 'react'
import { db } from '../../Firebase'
import Form from './Form'
import Table from './Table/Table'

export default function Main() {
  const submit = async (value) => {
    await db.collection('tasks').doc().set(value)
  }

  //   const viee = async () => {
  //     const querySnapshot = await db.collection('tasks').get()

  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.data())
  //     })
  //   }

  //   useEffect(() => {
  //     viee()
  //   }, [])

  return (
    <div className='container-xl'>
      <Form submit={submit} />
      <Table />
    </div>
  )
}
