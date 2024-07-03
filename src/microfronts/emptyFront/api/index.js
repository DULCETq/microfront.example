var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Application, injectable } from '@mcdis/app';
import { EMPTY_API_SERVICE_ENDPOINT } from './interface';
import { useBackendApi } from '@mcdis/wcc-frontend-hub-interface';
let EmptyApi = class EmptyApi {
    p_app;
    p_backendApi;
    p_client;
    p_log;
    constructor(_container) {
        this.p_app = _container.locate(Application);
        this.p_log = this.p_app.log.child('topology-api');
        this.p_backendApi = useBackendApi(this.p_app);
        this.p_client = this.p_backendApi.client;
    }
    writeToLog(_msg) {
        this.p_log.i('EmptyApi:' + _msg);
    }
};
EmptyApi = __decorate([
    injectable(EMPTY_API_SERVICE_ENDPOINT)
], EmptyApi);
export { EmptyApi };
//# sourceMappingURL=index.js.map