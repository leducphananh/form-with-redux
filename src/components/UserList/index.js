import PropTypes from 'prop-types';
import React from 'react';

UserList.propTypes = {
    listUsers: PropTypes.array,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func,
};

UserList.defaultProps = {
    listUsers: [],
    onEditClick: null,
    onDeleteClick: null,
}

function UserList(props) {

    const { listUsers, onEditClick, onDeleteClick } = props;

    const handleEditClick = (user) => {
        if (!onEditClick) return;
        onEditClick(user);
    }

    const handleDeleteClick = (id) => {
        if (!onDeleteClick) return;
        onDeleteClick(id);
    }

    return (
        <div className="data">
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
        </div >
    );
}

export default UserList;