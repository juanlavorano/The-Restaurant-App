const selectDisplay = (data) => {
    return {
        type: 'TYPE_SELECTED',
        payload: {
            type: data
        }
    }
}
const clearDispaly = () => {
    return {
        type: 'CLEAR_DISPALAY',
        payload: {
            type: ''
        }
    }
}

export { selectDisplay, clearDispaly }