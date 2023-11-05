import * as configcat from "configcat-common";
import { HttpConfigFetcher } from "./ConfigFetcher";
import { LocalStorageCache } from "./LocalStorageCache";
import { PollingMode } from "configcat-common";
import CONFIGCAT_SDK_VERSION from "./Version";
// Types
import type { App } from "vue";
import type { IConfigCatKernel } from "configcat-common";
import type { OptionsForPollingMode } from "configcat-common/lib/ConfigCatClientOptions";

export type PluginOptions<TMode extends PollingMode = PollingMode.AutoPoll> = {
  sdkKey: string;
  clientOptions?: OptionsForPollingMode<TMode>
} & (TMode extends PollingMode.AutoPoll ? { pollingMode?: TMode } : { pollingMode: TMode });

export default {
  // Vue's `App.prototype.use` does not play nicely with a generic `install` function, so we resort to using a discriminated union.
  install: (app: App, options: PluginOptions<PollingMode.AutoPoll> | PluginOptions<PollingMode.LazyLoad> | PluginOptions<PollingMode.ManualPoll>): void => {
    const { sdkKey, pollingMode, clientOptions } = options;
    const configCatKernel: IConfigCatKernel = {
      sdkType: "ConfigCat-Vue",
      sdkVersion: CONFIGCAT_SDK_VERSION,
      configFetcher: new HttpConfigFetcher(),
      defaultCacheFactory: (options) =>
        new configcat.ExternalConfigCache(
          new LocalStorageCache(),
          options.logger
        ),
    };

    const configCatClient = configcat.getClient(
      sdkKey,
      pollingMode ?? PollingMode.AutoPoll,
      clientOptions,
      configCatKernel
    );

    app.provide("configCatClient", configCatClient);

    // The acquired `configCatClient` object should be active as long as the Vue app is alive (but no longer than that).
    // However, Vue doesn't expose an API currently which would allow us to hook into the lifecycle of the app component.
    // The recommended workaround is to wrap its `unmount` method
    // (see https://github.com/vuejs/core/issues/4516#issuecomment-913231053).

    const originalAppUnmount = app.unmount;
    app.unmount = function () {
      originalAppUnmount.apply(arguments);
      configCatClient.dispose();
    };
  },
};
