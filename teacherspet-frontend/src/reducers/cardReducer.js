// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [{front: "Card Front One", back: "Card Back One"}, {front: "Card Front Two", back: "Card Back Two"}], action) => {
    switch (action.type) {
        case  'CREATE_CARD':
            return [...state, action.payload]
        case 'REMOVE_CARD':
            let filteredCards = state.filter(card => card !== action.payload)
            return [...filteredCards]
        default:
            return state 
    }
}