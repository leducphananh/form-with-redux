import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUser, setUser } from 'redux/actions/UserActions';

function UserList() {

    const listUsers = useSelector(state => state.user.listUsers);
    const dispatch = useDispatch();

    const history = useHistory();

    const handleEditClick = (user) => {
        const action = setUser(user);
        dispatch(action);
        history.push(`/edit/${user.id}`);
    }

    const handleDeleteClick = (id) => {
        const action = deleteUser(id);
        dispatch(action);
    }

    return (
        <>
            <h2>List Users</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Description</th>
                        <th>Courses</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.gender}</td>
                            <td>{user.dob}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.description}</td>
                            <td>{user.courses.join(', ')}</td>
                            <td>
                                <button
                                    onClick={() => handleEditClick(user)}
                                    className="btn-control btn-control--edit"
                                >
                                    Edit
                                </button>
                                &nbsp;&nbsp;
                                <button
                                    onClick={() => handleDeleteClick(user.id)}
                                    className="btn-control btn-control--delete"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UserList;