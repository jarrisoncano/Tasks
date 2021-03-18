import React from 'react'

export default function Table_tr(props) {
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>
          <button
            className='btn'
            onClick={() => props.updateTasks(props.value)}
          >
            ✏
          </button>
        </td>
        <td>
          <button className='btn' onClick={() => props.deleteTasks(props.id)}>
            🗑️
          </button>
        </td>
      </tr>
    </>
  )
}
