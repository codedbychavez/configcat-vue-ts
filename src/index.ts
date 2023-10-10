import type { IAutoPollOptions, ILazyLoadingOptions, IManualPollOptions } from "configcat-common";

// Options used to configure the ConfigCat SDK in the case of Auto Polling mode.
export type IVueAutoPollOptions = IAutoPollOptions;

// Options used to configure the ConfigCat SDK in the case of Manual Polling mode.
export type IVueManualPollOptions = IManualPollOptions;

// Options used to configure the ConfigCat SDK in the case of Lazy Loading mode.
export type IVueLazyLoadingOptions = ILazyLoadingOptions;