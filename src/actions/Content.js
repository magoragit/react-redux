export function DeletePost(id) {

    return {
        type: 'DELETE_POST',
        payload: id
    }

}

export function AddPost(item) {

    return {
        type: 'ADD_POST',
        payload: item
    }

}

export function GetPost(id) {

    return {
        type: 'GET_POST',
        payload: id
    }

}

export function GetPosts() {

    return {
        type: 'ADD_POST',
        payload: null
    }

}