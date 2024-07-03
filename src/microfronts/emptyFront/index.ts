import { Application, IAppModule, Log } from '@mcdis/app';
import { AppDesktop, AppI18n, AppIcon, AppIconCircle, AppMainMenu } from '@mcdis/app-ui';
import { RouteRecordRaw } from 'vue-router';
import EmptyFrontPage from './parts/EmptyFrontPage.vue';
import { resources } from './resources';
import { EmptyApi } from './api';

class EmptyFrontModule implements IAppModule {
  public readonly name = 'empty-front';

  configure(_app: Application, _log: Log) {
    _app.container.exportSingletone(EmptyApi);
  }

  routes(_routes: Array<RouteRecordRaw>, _app: Application, _log: Log) {
    _routes.push({
      path: '/empty-front',
      name: 'empty-front',
      component: EmptyFrontPage,
      meta: {
        title: 'Empty Front',
      },
    });
  }

  start(_app: Application) {
    const mainMenu = _app.locate(AppMainMenu);
    const i18n = _app.locate(AppI18n);
    const appDesktop = _app.locate(AppDesktop);
    const identifier = this.name;

    i18n.addResources(identifier, resources);

    mainMenu.addText(
      (_item) =>
        _item.setTitle(i18n.t(`${this.name}:menu-title`)).setLink({
          name: 'empty-front',
        }),
      //.setZ(),
    );

    appDesktop.registerApp({
      identifier,
      name: `${i18n.t(`${this.name}:menu-title`)}`,
      icon: new AppIcon(new AppIcon(AppIconCircle).color('orange')),
      route: `#/${this.name}`,
    });
  }
}

export default new EmptyFrontModule();
