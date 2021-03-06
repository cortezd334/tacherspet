// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CARDS':
            return [...action.payload]
        case  'CREATE_CARD':
            return [...state, action.payload]
        case 'REMOVE_CARD':
            let filteredCards = state.filter(card => card !== action.payload)
            return [...filteredCards]
        default:
            return state 
    }
}