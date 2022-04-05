import { addUser, resetUser, updateUser } from 'actions/UserActions';
import UserForm from 'components/UserForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddEditPage(props) {

    const userGlobalState = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (user) => {
        const action = addUser(user);
        dispatch(action);
        history.push('/home');
    }

    const handleUpdate = (user) => {
        const action = updateUser(user);
        dispatch(action);
        history.push('/home');
    }

    const handleResetForm = () => {
        const action = resetUser();
        dispatch(action);
    }

    return (
        <UserForm
            userGlobalState={userGlobalState}
            onSubmit={handleSubmit}
            onUpdate={handleUpdate}
            onResetForm={handleResetForm}
        />
    );
}

export default AddEditPage;