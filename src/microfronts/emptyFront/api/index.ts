import { Application, IContainer, Log, injectable } from '@mcdis/app';
import { EMPTY_API_SERVICE_ENDPOINT, IEmptyApi } from './interface';
import { IBackendApi, IBackendClient, useBackendApi } from '@mcdis/wcc-frontend-hub-interface';

@injectable(EMPTY_API_SERVICE_ENDPOINT)
export class EmptyApi implements IEmptyApi {
  private readonly p_app: Application;
  private readonly p_backendApi: IBackendApi;
  private readonly p_client: IBackendClient;
  private readonly p_log: Log;

  constructor(_container: IContainer) {
    this.p_app = _container.locate(Application);
    this.p_log = this.p_app.log.child('topology-api');
    this.p_backendApi = useBackendApi(this.p_app);
    this.p_client = this.p_backendApi.client;
  }
  writeToLog(_msg: string): void {
    this.p_log.i('EmptyApi:' + _msg);
  }
}
