import React from 'react'

export default function Table_tr(props) {

    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td><button className="btn btn-success" onClick={()=>props.deleteTask(props.id)}>✔</button></td>
            </tr>
        </>
    )
}