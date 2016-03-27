const initialState = {
    open: false,
    content: null
};

export default function popupState(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'OPEN':
            newState.content = action.payload;
            newState.open = true;
            return newState;

        case 'CLOSE':
            newState.content = null;
            newState.open = false;
            return newState;

        default:
            return newState;
    }
};
