const EMPTY_API_SERVICE_ENDPOINT = 'empty-api';
function useEmptyApi(_app) {
    return _app.resolve(EMPTY_API_SERVICE_ENDPOINT);
}

export { EMPTY_API_SERVICE_ENDPOINT, useEmptyApi };
