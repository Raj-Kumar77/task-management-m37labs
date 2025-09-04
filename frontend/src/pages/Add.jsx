import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { backendUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({ token }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("medium")
    const [dueDate, setDueDate] = useState("")

    const onSubmitHandler = async (e) => {

        e.preventDefault()

        try {

            const response = await axios.post(backendUrl + '/api/tasks', { title, description, dueDate, priority }, {
                headers: {
                    Authorization: `${token}`
                }
            })

            if (response.data.success) {
                toast.success(response.data.message)
                setTitle('')
                setDescription('')
                setDueDate('')
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>

            <div className='w-full'>
                <p className='mb-2'>Title</p>
                <input onChange={(e) => setTitle(e.target.value)} value={title} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Description</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' placeholder='Write content here' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

                <div>
                    <p className='mb-2'>Priority</p>
                    <select onChange={(e) => setPriority(e.target.value)} className='w-full px-3 py-2'>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Due Date</p>
                    <input onChange={(e) => setDueDate(e.target.value)} value={dueDate} className='w-full px-3 py-2 sm:w-[120px]' type="date" placeholder='25' />
                </div>

            </div>


            <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

        </form>
    );
}

export default Add;
