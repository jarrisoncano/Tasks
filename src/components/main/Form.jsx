import React from 'react'

export default function Form(props) {
  const handleInputChange = (e) => {
    let { name, value } = e.target
    props.setValues({ ...props.values, [name]: value })
  }

  const handleSubmit = (token) => {
    props.submitTasks(token)
    props.setValues({ name: '', description: '' })
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
            value={props.values.name}
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
            value={props.values.description}
            maxLength='400'
          />
        </div>
        {/* <div className='alert alert-danger' role='alert'>
          Complete the form.
        </div> */}

        {props.handleButtonChange ? (
          <button
            type='button'
            className='btn btn-success'
            onClick={() => handleSubmit(true)}
          >
            Update Task
          </button>
        ) : (
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => handleSubmit(false)}
          >
            Add Task
          </button>
        )}
      </form>
    </div>
  )
}
