var request = require('superagent');

export function getAll() {

    return function(dispatch) {
        request
            .get('http://localhost:4000/api/movieDetails?filter=%7B%22limit%22%3A%2010%7D')
            .end(function (err, res) {
                dispatch({
                    type: 'GET_ALL',
                    payload: res.body
                })
            });
    }

}

export function getOne(id) {

    return function(dispatch) {
        request
            .get('http://localhost:4000/api/movieDetails/' + id)
            .end(function (err, res) {
                dispatch({
                    type: 'GET_BY_ID',
                    payload: res.body
                })
            });
    }

}
