import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Todo = () => {
    const { register, handleSubmit } = useForm();
    const [tasks, setTasks] = useState([])
    const [user] = useAuthState(auth)
    const { selected } = tasks

    useEffect(() => {
        const email = user.email
        const url = `https://enigmatic-hamlet-53392.herokuapp.com/alltask?email=${ email }`
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))

    }, [tasks])


    const onSubmit = data => {
        const url = `https://enigmatic-hamlet-53392.herokuapp.com/addtask`
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast(`${ result.name } Added`)
            })
    };


    const handleComplete = id => {

        const newSelected = !selected
        const newSelectedObj = { newSelected };
        fetch(`https://enigmatic-hamlet-53392.herokuapp.com/tasks/${ id }`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSelectedObj)
        })
            .then(res => res.json())
            .then(data => {

                toast.success('todo updated')
            })
    }

    const handleDelete = (id) => {
        console.log(id)
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            const url = `https://enigmatic-hamlet-53392.herokuapp.com/delete/${ id }`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast('Item deleted')
                })
        }
    }


    return (
        <div className='ml-20 mr-20'>
            <form className='flex flex-col mb-4' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='mb-3 text-3xl text-success text-center'>Add Your ToDo List</h2>

                <input value={user.email} className='border p-2 mb-2 ' readOnly  {...register("email")} />
                <input placeholder='Task Name' className='border p-2 mb-2 ' {...register("name", { required: true })} />

                <textarea placeholder='Description' className='border p-2 mb-2' {...register("description")} />

                <input className='border p-2 mb-2 btn btn-warning' type="submit" value='ADD' />
            </form>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((a, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>{a.description}</td>
                                <td><button className='text-danger font-bold' onClick={() => handleDelete(`${ a._id }`)} >X</button></td>
                                <td><button className='btn btn-success' onClick={() => handleComplete(`${ a._id }`)} >UPDATE</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Todo;