import { PollingMode } from "configcat-common";
import {
  IVueAutoPollOptions,
  IVueLazyLoadingOptions,
  IVueManualPollOptions,
} from ".";

type ConfigCatPluginOptions = {
  sdkKey: string;
  pollingMode?: PollingMode;
  clientOptions:
    | IVueAutoPollOptions
    | IVueManualPollOptions
    | IVueLazyLoadingOptions;
};

export type { ConfigCatPluginOptions };
