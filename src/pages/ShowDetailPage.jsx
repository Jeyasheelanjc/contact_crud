import React from 'react'
import { useParams ,Link } from 'react-router-dom'

const ShowDetailPage = ({ details }) => {
    const { id } = useParams()


    const detail = details.find(detail => detail.id === parseInt(id));
    console.log(detail);

    return (
        <div>
            <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100  ">
                <div className="row justify-content-center ">
                    <div className="col-lg-4">
                        <table className='table table-striped'>
                            <tbody>
                                <tr>
                                    <th>Name:</th>
                                   <td> {detail.name}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{detail.email}</td>
                                </tr>
                                <tr>
                                    <th>Number:</th>
                                    <td>{detail.number}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3">
                        <img src={detail.img_url} className='img-fluid' alt="" />
                    </div>
                    <div className="text-center py-3">
                      <Link to={'/'}><button className='cacBtn'>Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowDetailPage
