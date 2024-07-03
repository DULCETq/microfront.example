import { Application } from '@mcdis/app';

declare const EMPTY_API_SERVICE_ENDPOINT = "empty-api";
interface IEmptyApi {
    writeToLog(_msg: string): void;
}
declare function useEmptyApi(_app: Application): IEmptyApi;

export { EMPTY_API_SERVICE_ENDPOINT, IEmptyApi, useEmptyApi };
