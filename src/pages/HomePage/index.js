import { deleteUser, setUser } from 'actions/UserActions';
import UserList from 'components/UserList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function HomePage() {

    const listUsers = useSelector(state => state.user.listUsers);
    const dispatch = useDispatch();

    const history = useHistory();

    const handleEdit = (user) => {
        const action = setUser(user);
        dispatch(action);
        history.push(`/edit/${user.id}`);
    };

    const handleDelete = (id) => {
        const action = deleteUser(id);
        dispatch(action);
    }

    return (
        <>
            <UserList
                listUsers={listUsers}
                onEditClick={handleEdit}
                onDeleteClick={handleDelete}
            />
        </>
    );
}

export default HomePage;