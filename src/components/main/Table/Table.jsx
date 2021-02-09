import React from 'react'
import Table_tr from './Table_tr'

export default function Table({ items, setTokenOfSend, tokenOfSend }) {

    function deleteItems (){
        localStorage.clear()
        setTokenOfSend(!tokenOfSend)        
    }

    return (
        <div className="container w-75">
            <table className="table  table-hover mb-5">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(e => <Table_tr key={e.id} id={e.id} name={e.name} description={e.description} />)
                    }
                </tbody>
            </table>
            <div className="container d-flex justify-content-end">
            <button className="btn btn-danger" onClick={()=>deleteItems()}>Delete All</button>
            </div>
        </div>
    )
}