
export const reducer = (state, action) => {
    switch (action.type) {
        case 'getUsers':
            return action.payload
        case 'createUser':
            return [...state, action.user]
        case 'deleteUser':
            return state.filter((obj) => {
                return obj.pk !== action.pk
            })
        case 'updateUser':
            state = state.filter((obj) => {
                return obj.pk !== action.user.pk
            })
            return [...state, action.user]
        default:
            return state
    }
}