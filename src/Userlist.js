import React, {useEffect, useState} from 'react'
import {Link } from 'react-router-dom';

const Userlist = () => {
    const [users, setUsers] = useState([]);
    useEffect(async() => {
        try {
           let users = await fetch("https://61c1954e9dbcca0017c81fbb.mockapi.io/api/users");
           let userData = await users.json()
           setUsers(userData)
        } catch (err) {
            console.log(err);
        }
        
    }, [])
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User List</h1>
                <Link to="/user-create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i>Create User</Link>
            </div>

            <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">User Table</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {
                                            users.map((user, index) => {
                                                return <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.position}</td>
                                                <td>{user.office}</td>
                                                <td>{user.age}</td>
                                                <td>{user.startDate}</td>
                                                <td>{user.salary}</td>
                                                <td>
                                                    <Link to={`/user-edit/${user.id}`}>
                                                           <button className="btn btn-primary btn-sm">Edit</button>
                                                    </Link>
                                                    <Link to={`/user-delete/${user.id}`}>
                                                           <button className="btn btn-danger btn-sm">Delete</button>
                                                    </Link>
                                                </td>
                                            </tr>
                                            })
                                        }
                                        {/* <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr> */}
                                        
                        
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                
        </>
    )
}

export default Userlist
