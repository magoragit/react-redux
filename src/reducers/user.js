const initialState = {
    user: {
        auth: false
    }
};

export default function userState(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'LOG_IN':
            newState.user.auth = true;
            return newState;

        case 'LOG_OUT':
            newState.user.auth = false;
            return newState;

        default:
            return newState;
    }
};
