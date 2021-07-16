import Button from 'components/GlobalsComponents/Button'

export default function TableTr (props) {
  return (
    <>
      <tr>
        <td>{props.task.name}</td>
        <td>{props.task.description}</td>
        <td>
          <Button
            text='✏'
            className=''
            handler={() => props.updateTask(props.task)}
          />
        </td>
        <td>
          <Button
            text='🗑️'
            className=''
            handler={() => props.deleteTask(props.task.id)}
          />
        </td>
      </tr>
    </>
  )
}
