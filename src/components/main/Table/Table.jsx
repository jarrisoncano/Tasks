import TableTr from './TableTr'

export default function Table (props) {
  const updateTask = (task) => {
    props.setButtonType(true)
    props.setInputsValues(task)
  }
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
          {props.snapshot.map((task) => (
            <TableTr
              key={task.id}
              task={task}
              deleteTask={props.deleteTask}
              updateTask={updateTask}
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
