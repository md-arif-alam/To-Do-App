import React, { useContext, useRef, useState } from 'react'
import { Tasks } from '../apis/TaskStore'
import { GrAdd } from "react-icons/gr"
import { MdDeleteForever } from "react-icons/md"
import { BiSolidEdit } from "react-icons/bi"
const TaskGen = () => {
    const textref = useRef()
    const { data, handleCreate, handleDelete, handleEdit, edit, handleSave } = useContext(Tasks);


    return (
        <section className='h-[100vh] overflow-hidden bg-neutral-900 flex flex-col gap-8 p-8'>
            <article className='flex justify-center items-center flex-col gap-4'>
                <form className='w-[50%] flex flex-col gap-4 ' onSubmit={handleCreate}>
                    <textarea name="" id="" className='h-24 bg-rose-600 resize-none border-2 border-slate-300 outline-none b p-2 font-semibold text-2xl text-black' placeholder='create task' ref={textref}></textarea>
                    <button className='py-2  flex justify-center bg-violet-500 border-2  hover:bg-sky-600'><GrAdd className='text-3xl' /></button>
                </form>
            </article>
            <article className='flex flex-wrap justify-center gap-2 overflow-scroll'>
                {

                    data.length != 0 ? data.map(value => {
                        return <div className='flex flex-col justify-between py-2 px-6 h-52 w-[30%] bg-rose-400 border-2 border-slate-200 card rounded-lg' key={Math.random() * 1000}>
                            <h2 className='text-xl'>{value.task}</h2>
                            <div className='flex justify-between px-6 card-child'>
                                <button className='text-3xl bg-rose-900 text-white p-2 rounded-lg hover:bg-red-700'  onClick={() => handleDelete(value.id)} ><MdDeleteForever /></button>
                                <button className='text-3xl bg-sky-500 hover:bg-sky-700 text-white p-2 rounded-lg ml-5' onClick={() => handleEdit(value.id, textref)} ><BiSolidEdit /></button>
                            </div>
                            <div className='card-child text-sm  w-full '>{value.timestamp}</div>
                        </div>
                    }) : <h4 className='text-2xl text-white font-bold'>your task appear here </h4>


                }
            </article>
        </section >
    )
}

export default TaskGen