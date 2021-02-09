import React, { useRef, useState } from 'react'

export default function Form({ setTokenOfSend, tokenOfSend }) {

    let [checkedInputs, setcheckedInputs] = useState(true)

    let inputNameRef = useRef(null)
    let inputDescriptionRef = useRef(null)

    function saveData() {

        let name = inputNameRef.current.value
        let description = inputDescriptionRef.current.value

        if (name === "" || description === "") {
            setcheckedInputs(false)
        }
        else {
            let dataForSave = {
                "id": localStorage.length + 1,
                "name": name,
                "description": description
            }

            localStorage.setItem(dataForSave.id, JSON.stringify(dataForSave))

            setcheckedInputs(true)
            setTokenOfSend(!tokenOfSend)
        }

    }

    return (
        <form className="container w-75 mb-5 needs-validation" noValidate>
            <h1 className="mb-5">Add Task</h1>
            <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">💡</span>
                <input ref={inputNameRef} type="text" className="form-control" placeholder="Task Name" aria-label="name" aria-describedby="basic-addon1" required maxLength="60" />
            </div>
            <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">📝</span>
                <input ref={inputDescriptionRef} type="text" className="form-control" placeholder="Description" aria-label="description" aria-describedby="basic-addon2" required maxLength="200" />
            </div>
            {checkedInputs ? null : <div className="alert alert-danger" role="alert">Complete the form</div>}  
            <button type="button" className="btn btn-primary" onClick={() => saveData()}>Add Task</button>
        </form>
    )
}