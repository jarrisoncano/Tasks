import React from 'react'
import Table_tr from './Table_tr'

export default function Table(props) {
  return (
    <div className='container-sm mb-5'>
      <table className='table  table-hover mb-5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <div className='container d-flex justify-content-end'>
        <button className='btn btn-danger mb-5'>Delete All</button>
      </div>
    </div>
  )
}
