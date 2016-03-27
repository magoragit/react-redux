export function open(component) {

    return {
        type: 'OPEN',
        payload: component
    }

}

export function close() {

    return {
        type: 'CLOSE',
        payload: null
    }

}