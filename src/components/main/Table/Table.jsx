import React from 'react'
import TableTr from './TableTr'

export default function Table (props) {
  return (
    <div className='container-sm mb-5'>
      <table className='table  table-hover mb-5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.snapshot.map((e) => (
            <TableTr
              key={e.id}
              id={e.id}
              value={e}
              name={e.name}
              description={e.description}
              deleteTasks={props.deleteTasks}
              updateTasks={props.updateTasks}
            />
          ))}
        </tbody>
      </table>
      <div className='container d-flex justify-content-end'>
        <button className='btn btn-danger mb-5'>Delete All</button>
      </div>
    </div>
  )
}
