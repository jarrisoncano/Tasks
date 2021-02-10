import React, { useRef, useState } from 'react'

export default function Form({ setTokenOfSend, tokenOfSend }) {

    let [checkedInputs, setcheckedInputs] = useState(true)

    let inputNameRef = useRef(null)
    let inputDescriptionRef = useRef(null)
    let name
    let description

    function checkData() {

        name = inputNameRef.current
        description = inputDescriptionRef.current

        if (name.value === "" || description.value === "") {
            setcheckedInputs(false)
        }
        else{
            let flag = true

            for(let i = 1; i<= localStorage.length; i++){
                let item = JSON.parse(localStorage.getItem(i))
                if(name.value === item.name || description.value === item.description) flag= false
            }   
            
            if(flag === true) sendData()
            else setcheckedInputs(false)
        }
    }

    function sendData(){

        let dataForSave = {
            "id": localStorage.length + 1,
            "name": name.value,
            "description": description.value
        }

        localStorage.setItem(dataForSave.id, JSON.stringify(dataForSave))

        setcheckedInputs(true)
        setTokenOfSend(!tokenOfSend)
    }

    return (
        <div className="container-sm">
            <form className=" mb-5 needs-validation" noValidate>
                <h1 className="mb-5 mt-5">Add Task</h1>
                <div className="input-group mb-4">
                    <span className="input-group-text">💡</span>
                    <input ref={inputNameRef} type="text" className="form-control" placeholder="Task Name" aria-label="name" aria-describedby="basic-addon1" required maxLength="60"/>
                </div>
                <div className="input-group mb-4">
                    <span className="input-group-text">📝</span>
                    <input ref={inputDescriptionRef} type="text" className="form-control" placeholder="Description" aria-label="description" aria-describedby="basic-addon2" required maxLength="200"/>
                </div>
                {checkedInputs ? null : <div className="alert alert-danger" role="alert">Complete the form.</div>}  
                <button type="button" className="btn btn-primary" onClick={() => checkData()}>Add Task</button>
            </form>
        </div>
    )
}