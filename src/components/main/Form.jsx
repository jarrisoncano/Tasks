import Button from 'components/GlobalsComponents/Button'

export default function Form (props) {
  const handleInputChange = (e) => {
    const { name, value } = e.target
    props.setInputsValues({ ...props.inputsValues, [name]: value })
  }

  return (
    <div className='container-sm'>
      <form className=' mb-5 needs-validation' noValidate>
        <h1 className='mb-5 mt-5'>Add Task</h1>
        <div className='input-group mb-4'>
          <span className='input-group-text'>💡</span>
          <input
            type='text'
            className='form-control'
            placeholder='Task Name'
            name='name'
            onChange={handleInputChange}
            value={props.inputsValues.name}
            maxLength='80'
          />
        </div>
        <div className='input-group mb-4'>
          <span className='input-group-text'>📝</span>
          <input
            type='text'
            className='form-control'
            placeholder='Description'
            name='description'
            onChange={handleInputChange}
            value={props.inputsValues.description}
            maxLength='400'
          />
        </div>
        {props.buttonType && (
          <Button
            text='Update Task'
            handler={() => props.updateTask()}
            className='btn-success'
          />
        )}
        {!props.buttonType && (
          <Button
            text='Add Task'
            handler={() => props.submitTask()}
            className=' btn-primary'
          />
        )}
      </form>
    </div>
  )
}
