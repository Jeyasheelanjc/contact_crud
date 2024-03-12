import React from 'react'

import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Add = () => {
const navigate=useNavigate()
  const handleAdd = () => {
    navigate('/adddetail')
  }

  return (
    <>
      <div className='conbg'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <span>
              <FaPhoneAlt className='fs-3 me-2' />
              <a href='#' className="navbar-brand">CONTACT</a>
            </span>
          </div>
        </nav>
      </div>
      <div className='bgColor pb-4 pt-4'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div className="d-flex">
                <h3 className='me-3'>Phone Directory</h3>
                <button className='addBtn' onClick={handleAdd} >Add</button>
              </div>
              <p className='fst-italic '>Click the Add button to add new contact details.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add
