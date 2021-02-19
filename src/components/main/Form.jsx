import React, { useRef, useState } from 'react'

export default function Form(props) {

    let [checkedInputs, setcheckedInputs] = useState(true)
    let inputNameRef = useRef(null), inputDescriptionRef = useRef(null)
    let name, description

    function checkData() {

        name = inputNameRef.current
        description = inputDescriptionRef.current

        if (name.value === "") setcheckedInputs(false)
        else sendData()
    }

    function sendData(){

        let keyf= 0,keyid = 0

        for(let i= 0; i < localStorage.length; i++){

            keyid = parseInt(localStorage.key(i))
            if(keyid > keyf) keyf = keyid
        }

        let dataForSave = {
            "id": keyf+1,
            "name": name.value,
            "description": description.value
        }
        
        localStorage.setItem(keyf+1, JSON.stringify(dataForSave))
        name.value="" 
        description.value=""
        
        setcheckedInputs(true)
        props.setTokenOfSend(!props.tokenOfSend)
    }
    
    return (
        <div className="container-sm">
            <form className=" mb-5 needs-validation" noValidate>
                <h1 className="mb-5 mt-5">Add Task</h1>
                <div className="input-group mb-4">
                    <span className="input-group-text">💡</span>
                    <input ref={inputNameRef} type="text" className="form-control" placeholder="Task Name" aria-label="name" aria-describedby="basic-addon1" required maxLength="80"/>
                </div>
                <div className="input-group mb-4">
                    <span className="input-group-text">📝</span>
                    <input ref={inputDescriptionRef} type="text" className="form-control" placeholder="Description" aria-label="description" aria-describedby="basic-addon2" required maxLength="400"/>
                </div>
                {checkedInputs ? null : <div className="alert alert-danger" role="alert">Complete the form.</div>}  
                <button type="button" className="btn btn-primary" onClick={() => checkData()} >Add Task</button>
            </form>
        </div>
    )
}