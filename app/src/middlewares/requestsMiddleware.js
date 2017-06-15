import { SERVER_REQUEST_START, SERVER_REQUEST_FINISH } from '../constants/actions';

export default function requestsMiddleware({ dispatch }) {
    return next => (action) => {
        const { promise, type } = action;
        if (!promise) return next(action);

        dispatch({ type: SERVER_REQUEST_START });
        dispatch({ type: `${type}_START` });
        return promise
            .then((data) => {
                console.log(data);
                dispatch({ type: `${type}_SUCCESS`, data });
            })
            .catch((error) => {
                dispatch({ type: `${type}_FAIL`, error });
            })
            .then(() => {
                dispatch({ type: SERVER_REQUEST_FINISH });
            });
    };
}
