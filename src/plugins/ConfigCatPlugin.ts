import * as configcat from "configcat-common";
import { HttpConfigFetcher } from "./ConfigFetcher";
import { LocalStorageCache } from "./LocalStorageCache";
import { PollingMode } from "configcat-common";
import CONFIGCAT_SDK_VERSION from "./Version";
// Types
import type { App } from "vue";
import type { IConfigCatKernel } from "configcat-common";
import type { ConfigCatPluginOptions } from "../Types";

export default {
  install: (app: App, options: ConfigCatPluginOptions): void => {
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

    const client = configcat.getClient(
      sdkKey,
      pollingMode ?? PollingMode.AutoPoll,
      clientOptions,
      configCatKernel
    );

    const configCatClient = client;

    app.provide("configCat", configCatClient);

    const originalAppUnmount = app.unmount;
    app.unmount = function () {
      originalAppUnmount.apply(arguments);
      client.dispose();
    };
  },
};
