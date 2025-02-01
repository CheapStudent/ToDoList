import { Dice1 } from "lucide-react";
import { useState , useEffect } from "react";

const ListTasks = ({tasks , setTasks}) =>{
    const [todos , setTodos] = useEffect([]) 
    const [inProgress , setInProgress] = useState([])
    const [closed , setClosed] = useState([])

    useEffect (( ) => {
        const ftodos = tasks.filter((task) => task.status == "Todo")
        const fInprogress = tasks.filter((task) => task.status == "inProgress")
        const fClosed = tasks.filter((task) => task.status == "closed")

        setTodos(ftodos)
        setInProgress(fInprogress)
        setClosed(fClosed)
    } , [tasks])

    const statuses = ["todo" , "inProgress" , "closed"] 
     return (
        <div className="flex gap-10">
            {statuses.map((status , index) => (
                <Section key={index} status={status} />
            ))}
        </div>
     )


}

export default ListTasks

const Section = ({status}) =>{
    return(
        <>
        <h2>{status}</h2>
        </>
    )
}