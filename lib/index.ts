'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const EMPTY_API_SERVICE_ENDPOINT = 'empty-api';
function useEmptyApi(_app) {
    return _app.resolve(EMPTY_API_SERVICE_ENDPOINT);
}

exports.EMPTY_API_SERVICE_ENDPOINT = EMPTY_API_SERVICE_ENDPOINT;
exports.useEmptyApi = useEmptyApi;
