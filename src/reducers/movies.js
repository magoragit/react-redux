const initialState = {
    content: [],
    movie: {
        id: null
    }
};

export default function moviesState(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'GET_ALL':
            newState.content = action.payload;
            return newState;

        case 'GET_BY_ID':
            newState.movie = action.payload;
            return newState;

        default:
            return newState;
    }
};
