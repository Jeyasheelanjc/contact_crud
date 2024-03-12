import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditPage = ({ details, setDetails }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Use the id to find the corresponding detail
    const detail = details.find(detail => detail.id === parseInt(id));

    // Initialize state variables with detail values or empty strings
    const [name, setName] = useState(detail ? detail.name : '');
    const [email, setEmail] = useState(detail ? detail.email : '');
    const [number, setNumber] = useState(detail ? detail.number : '');
    const [img_url, setImg] = useState(detail ? detail.img_url : '');

    useEffect(() => {
        // Check if detail is null (no matching id found)
        if (!detail) {
            // Redirect to the previous page or any other page
            navigate(-1);
        }
    }, [detail, navigate]);

    const handleUpdate = (e) => {
        e.preventDefault();

        // Check if any required fields are empty
        if (!name || !email || !number || !img_url) {
            Swal.fire({
                title: "Error",
                icon: "error",
                text: "Please fill in all fields.",
                showConfirmButton: true
            });
            return;
        }

        // Create a new detail object with updated values
        const updatedDetail = {
            ...detail,
            name,
            email,
            number,
            img_url
        };

        // Perform the update operation, such as updating in the database or state
        const updatedDetails = details.map(item => (item.id === updatedDetail.id ? updatedDetail : item));
        setDetails(updatedDetails);

        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'The item has been updated successfully.',
            showConfirmButton: false,
            timer: 1500
        });

        // Redirect to the previous page or any other page after updating
        navigate('/');
    }

    const handleCancel = () => {
        // Redirect to the previous page or any other page
        navigate(-1);
    }

    return (
        <div className='editPage d-flex align-items-center justify-content-center min-vh-100  '>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 mx-auto ">
                        <form onSubmit={handleUpdate}>
                            <div className="formcontrol">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="formcontrol">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="formcontrol">
                                <label htmlFor="number">Number:</label>
                                <input type="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                            </div>
                            <div className="formcontrol">
                                <label htmlFor="img">Image Url:</label>
                                <input type="text" name="img_url" value={img_url} onChange={(e) => setImg(e.target.value)} />
                            </div>
                            <div className="mt-3 py-2 text-center">
                                <button type="submit" className='subBtn me-2'>Submit</button>
                                <button type="button" className='cacBtn ms-2' onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPage;
