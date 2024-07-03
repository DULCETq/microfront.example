import { Application } from '@mcdis/app';

export const EMPTY_API_SERVICE_ENDPOINT = 'empty-api';

export interface IEmptyApi {
  writeToLog(_msg: string): void;
}

export function useEmptyApi(_app: Application) {
  return _app.resolve<IEmptyApi>(EMPTY_API_SERVICE_ENDPOINT);
}
