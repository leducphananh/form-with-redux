export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user,
    }
}

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user,
    }
}

export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user,
    }
}

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id,
    }
}

export const resetUser = () => {
    return {
        type: 'RESET_USER',
    }
}

export const changeSearchTerm = (searchTerm) => {
    return {
        type: 'CHANGE_SEARCH',
        payload: searchTerm,
    }
}
