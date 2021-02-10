import React, {useState} from "react"
import Form from './Form'
import Table from './Table/Table'

export default function Main() {

    let items = []
    let [tokenOfSend, setTokenOfSend] = useState(false)

    for (let i = 1; i <= localStorage.length; i++) {
    
        let item = JSON.parse(localStorage.getItem(i))
        items.push(item)
    }

    function deleteTask(id){
        console.log('success')
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
