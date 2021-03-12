import React, { useState } from 'react'

export default function Form(props) {
  const initialValues = {
    name: '',
    description: '',
  }

  let [values, setValues] = useState(initialValues)

  const handleInputChange = (e) => {
    let { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const submit = () => {
    props.submit(values)
    setValues(initialValues)
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
            aria-label='name'
            aria-describedby='basic-addon1'
            name='name'
            onBlur={handleInputChange}
            maxLength='80'
          />
        </div>
        <div className='input-group mb-4'>
          <span className='input-group-text'>📝</span>
          <input
            type='text'
            className='form-control'
            placeholder='Description'
            aria-label='description'
            aria-describedby='basic-addon2'
            name='description'
            onBlur={handleInputChange}
            maxLength='400'
          />
        </div>
        {/* <div className='alert alert-danger' role='alert'>
          Complete the form.
        </div> */}
        <button type='button' className='btn btn-primary' onClick={submit}>
          Add Task
        </button>
      </form>
    </div>
  )
}
