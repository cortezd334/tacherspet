export const removeCard = (card) => {
    return {
        type: "REMOVE_CARD",
        payload: card
    }
}

export const fetchCards = () => {
    return {
        type: "FETCH_CARDS",
        payload: [{front: "1 + 1", back: "2", lesson: 'Math'}, {front: "Science Front", back: "Science Back", lesson: 'Science'}, {front: "History Front", back: "History Back", lesson: 'History'}, {front: "2 + 2", back: "4", lesson: 'Math'}, {front: "Science Front", back: "Science Back", lesson: 'Science'}, {front: "History Front", back: "History Back", lesson: 'History'}, {front: "Science Front", back: "Science Back", lesson: 'Science'}, {front: "3 + 3", back: "6", lesson: 'Math'}, {front: "History Front", back: "History Back", lesson: 'History'}]
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