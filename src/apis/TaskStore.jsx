import React, { createContext, useEffect, useState } from 'react'
const Tasks = createContext(["No Tasks"])
const TaskStore = (props) => {
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        console.log(data);
    }, [data])

    const handleCreate = (e) => {
        e.preventDefault()
        let time = new Date()
        time = time.toTimeString().split(" ")[0].split(":")
        if (e.target[0].value.length !== 0)
            setData([...data, { task: e.target[0].value, id: Math.random() * 1000000000, timestamp: ` ${time[0]} hr ${time[1]} min ${time[2]} sec ` }])
        e.target[0].value = "";
    }
    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this permanently?"))
            setData(data.filter((value) => value.id !== id))
    }


    const handleSave = () => {
        setEdit(false)
        setData(data)

    }

    const handleEdit = (id, ref) => {
        setEdit(true)

        ref.current.value = data.filter(value => value.id === id)[0].task;

        setData(data.map(value => {
            if (value.id === id) {
                value.task = ref.current.value;
            }
            return value;
        }))

    }

    return (
        <Tasks.Provider value={{ data, handleCreate, handleDelete, handleEdit, setData, edit, handleSave }}>
            {props.children}
        </Tasks.Provider>
    )
}

export default TaskStore
export { Tasks }