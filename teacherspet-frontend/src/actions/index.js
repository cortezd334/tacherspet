export const removeCard = (card) => {
    return {
        type: "REMOVE_CARD",
        payload: card
    }
}

export const fetchCards = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/cards')
        .then(resp => resp.json())
        .then(cards => {
            dispatch({ type: "FETCH_CARDS", payload: cards })
        })
    }
}

export const submitCardForm = (formData) => {
    return {
        type: "CREATE_CARD",
        payload: formData
    }
}

export const addStudent = (formData) => {
    return {
        type: "ADD_STUDENT",
        payload: formData
    }
}

export const addLesson = (formData) => {
    return {
        type: "ADD_LESSON",
        payload: formData
    }
}