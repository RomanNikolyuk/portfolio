const initialState = {
    loading: false,
    work: null,
    newWorkAlias: null,
    works: null
};

function daddyReducer(state = initialState, action) {
    switch (action.type) {
        case 'work-requested':
            return {...state, loading: true};
        case 'work-received':
            return {...state, loading: false, work: action.payload};
        case 'work-change':
            return {...state, newWorkAlias: action.payload};
        case 'work-alias-change':
            return {...state, newWorkAlias: action.payload};
        case 'works-requested':
            return {...state, loading: true};
        case 'works-received':
            return {...state, loading: false, works: action.payload};
        default:
            return state;
    }
}

export default daddyReducer;