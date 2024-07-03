import { AppDesktop, AppI18n, AppIcon, AppIconCircle, AppMainMenu } from '@mcdis/app-ui';
import EmptyFrontPage from './parts/EmptyFrontPage.vue';
import { resources } from './resources';
import { EmptyApi } from './api';
class EmptyFrontModule {
    name = 'empty-front';
    configure(_app, _log) {
        _app.container.exportSingletone(EmptyApi);
    }
    routes(_routes, _app, _log) {
        _routes.push({
            path: '/empty-front',
            name: 'empty-front',
            component: EmptyFrontPage,
            meta: {
                title: 'Empty Front',
            },
        });
    }
    start(_app) {
        const mainMenu = _app.locate(AppMainMenu);
        const i18n = _app.locate(AppI18n);
        const appDesktop = _app.locate(AppDesktop);
        const identifier = this.name;
        i18n.addResources(identifier, resources);
        mainMenu.addText((_item) => _item.setTitle(i18n.t(`${this.name}:menu-title`)).setLink({
            name: 'empty-front',
        }));
        appDesktop.registerApp({
            identifier,
            name: `${i18n.t(`${this.name}:menu-title`)}`,
            icon: new AppIcon(new AppIcon(AppIconCircle).color('orange')),
            route: `#/${this.name}`,
        });
    }
}
export default new EmptyFrontModule();
//# sourceMappingURL=index.js.map