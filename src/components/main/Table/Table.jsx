import React from 'react'
import Table_tr from './Table_tr'

export default function Table(props) {

    return (
        <div className="container-sm mb-5">
            <table className="table  table-hover mb-5">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map(e => <Table_tr key={e.id} id={e.id} name={e.name} description={e.description} deleteTask={props.deleteTask}/>)
                    }
                </tbody>
            </table>
            <div className="container d-flex justify-content-end">
            <button className="btn btn-danger mb-5" onClick={()=>props.deleteAll()}>Delete All</button>
            </div>
        </div>
    )
}