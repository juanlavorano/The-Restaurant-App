const addOrder = (data) => {
    return {
        type: 'ITEM_ADDED',
        payload: {
            food: data,
            price: Math.floor((Math.random() * 100) + 1)
        }
    }
}

const deleteOrder = (index) => {
    return {
        type: 'ITEM_DELETED',
        payload: index
    }
}

export { addOrder, deleteOrder }