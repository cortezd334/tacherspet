export const removeCard = (card) => {
    return {
        type: "REMOVE_CARD",
        payload: card
    }
}

export const fetchCards = () => {
    return {
        type: "FETCH_CARDS",
        payload: [{front: "Card Front One", back: "Card Back One"}, {front: "Card Front Two", back: "Card Back Two"}]
    }
}

export const submitCardForm = (formData) => {
    return {
        type: "CREATE_CARD",
        payload: formData
    }
}