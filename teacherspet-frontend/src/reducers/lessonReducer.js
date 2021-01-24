// eslint-disable-next-line import/no-anonymous-default-export
export default (state = ['Math', 'Science', 'History'], action) => {
    switch (action.type) {
        case 'FETCH_LESSONS':
            return state
        case 'ADD_LESSON':
            if (state.find(lesson => lesson === action.payload)) {
                return [...state]
            }
            return [...state, action.payload]
        default:
            return state 
    }
}