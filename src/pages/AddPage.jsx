import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const AddPage = ({details,setDetails}) => {
    const navigate=useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [img_url, setImg] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        if (!name || !email || !number || !img_url) {
            return Swal.fire({
                icon: 'warning', title: "error", text: "Enter all input fields", showConfirmButton: true, timer: 1500
            })
        }
        const id=details.length+1
        const newValue={
            id,
            name,
            email,
            number,
            img_url
        }
        details.push(newValue)
        localStorage.setItem("details",JSON.stringify(details))
        setDetails(details)
        Swal.fire({
            icon:"success",
            title:"Added",
            text:`Your Number: ${number}has been added`,
            showCloseButton:true
        })
        navigate('/')
    }
    const handleCancel = ()=>{
        navigate('/')
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <form onSubmit={handleChange}>
                            <div className="formcontrol">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="formcontrol">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="formcontrol">
                                <label htmlFor="number">Number:</label>
                                <input type="number" name='number' value={number} onChange={e => setNumber(e.target.value)} />
                            </div>
                            <div className="">
                                <label htmlFor="img">Image Url:</label>
                                <input type="text" value={img_url} onChange={e => setImg(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <button type='submit'>Submit</button>
                                <button className='ms-3' onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPage
