import React, {useState} from "react"
import Form from './Form'
import Table from './Table/Table'

export default function Main() {

    let items = []
    let [tokenOfSend, setTokenOfSend] = useState(false)

    for (let i = 0; i < localStorage.length; i++) {
    
        let key = localStorage.key(i)
        let item = JSON.parse(localStorage.getItem(key))
        if(item.id) items.push(item)
    }

    items = items.sort((a,b)=>a.id > b.id ? 1 : -1)

    function deleteTask(id){
        localStorage.removeItem(id)
        setTokenOfSend(!tokenOfSend)
    }
    
    function deleteAll (){
        localStorage.clear()
        setTokenOfSend(!tokenOfSend)        
    }

    return (
        <div className="container-xl">
            <Form setTokenOfSend={setTokenOfSend} tokenOfSend={tokenOfSend}/>
            <Table items={items} deleteAll={deleteAll} deleteTask={deleteTask}/>
        </div>
    )
}
