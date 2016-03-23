const initialState = {
    language: {
        current: "en",
        languages: {
            eng: "en",
            rus: "ru"
        }
    }
};

export default function languageState(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'CHANGE':
            newState.current = action.payload;
            return newState;

        default:
            return newState;
    }
};
