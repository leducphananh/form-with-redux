const initialState = {
    listUsers: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
    user: {
        id: null,
        name: '',
        gender: 'Male',
        dob: '',
        phone: '',
        email: '',
        address: '',
        description: '',
        courses: [],
    },
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'ADD_USER':
            const newAddUsers = [...state.listUsers];
            action.payload.id = Math.floor(Math.random() * 1000) + new Date().getTime().toString();
            newAddUsers.push(action.payload);
            localStorage.setItem('users', JSON.stringify(newAddUsers));
            return {
                ...state,
                listUsers: [...newAddUsers]
            }
        case 'DELETE_USER':
            const newDeleteUsers = [...state.listUsers].filter(user => user.id !== action.payload);
            localStorage.setItem('users', JSON.stringify(newDeleteUsers));
            return {
                ...state,
                listUsers: [...newDeleteUsers]
            }
        case 'UPDATE_USER':
            const newUpdateUsers = state.listUsers.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...action.payload
                    }
                }
                return user;
            })
            localStorage.setItem('users', JSON.stringify(newUpdateUsers));
            return {
                ...state,
                listUsers: [...newUpdateUsers],
            }
        case 'RESET_USER':
            return {
                ...state,
                user: {
                    id: null,
                    name: '',
                    gender: 'Male',
                    dob: '',
                    phone: '',
                    email: '',
                    address: '',
                    description: '',
                    courses: [],
                },
            }
        case 'CHANGE_SEARCH':
            let newSearchUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
            newSearchUsers = newSearchUsers.filter(user => user.name.toLowerCase().includes(action.payload.toLowerCase()));
            return {
                ...state,
                listUsers: [...newSearchUsers],
            }
        default:
            return state;
    }
}

export default UserReducer;
