import React, { useEffect, useState } from 'react'
import { FaEye, FaEdit, } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Add from './Add';
import { Link } from 'react-router-dom';

const Table = ({ details }) => {

    details.forEach((detail, i) => {
        detail.id = i + 1
    })

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        setUsers(details)
        setFilter(details)
    }, [details])

    const handleFilter = e => {
        e.preventDefault()
        const searchData = e.target.value.toLowerCase()
        const filters = users.filter((user) => user.name.includes(searchData))
        setFilter(filters)
    }
    const handleDelete = id => {
        const deleData = filter.filter((detail) => detail.id !== id)
        localStorage.setItem("details", JSON.stringify(deleData))
        setUsers(deleData)
        setFilter(deleData)
    }
    return (
        <>
            <div className="bgFull">
                <Add />
                <div className="searchContainer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 move ">
                                <input type="text" onChange={handleFilter} placeholder='search contact here' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bgColor py-4 px-3'>
                    <div className="container-fluid">
                        <div className="row">
                            {filter && filter.map((detail) => (
                                <div className="col-lg-5 cardBgColor d-flex py-4" key={detail.id}>

                                    <div className="img" >
                                        <img src={detail.img_url} className='img-fluid imgSize' alt="" />
                                    </div>
                                    <div className="content ms-3">
                                        <p>Name: <span className='fw-bold'>{detail.name}</span></p>
                                        <p>Phone Number: <span className='fw-bold'>{detail.number}</span></p>
                                        <p>Email: <span className='fw-bold '>{detail.email}</span></p>
                                    </div>
                                    <div className="action">
                                        <Link to={{
                                            pathname: `/show/${detail.id}`,
                                            state: { detail }
                                        }}>
                                            <FaEye />
                                        </Link>
                                        <Link to={{
                                            pathname: `/edit/${detail.id}`,
                                            state: { detail }
                                        }}>
                                            <FaEdit />
                                        </Link>
                                        <AiOutlineDelete onClick={() => handleDelete(detail.id)} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
