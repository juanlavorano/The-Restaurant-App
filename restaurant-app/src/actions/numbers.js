const addAmount = (data) => {
    return {
        type: 'AMOUNT_ADDED',
        payload: {
            number: data
        }
    }
}

const resetAmount = () => {
    return {
        type: 'AMOUNT_RESET'
    }
}

export { addAmount, resetAmount }