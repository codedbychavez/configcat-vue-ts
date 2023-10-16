import type {
  IAutoPollOptions,
  ILazyLoadingOptions,
  IManualPollOptions,
} from "configcat-common";

// Options used to configure the ConfigCat SDK in the case of Auto Polling mode.
export type IVueAutoPollOptions = IAutoPollOptions;

// Options used to configure the ConfigCat SDK in the case of Manual Polling mode.
export type IVueManualPollOptions = IManualPollOptions;

// Options used to configure the ConfigCat SDK in the case of Lazy Loading mode.
export type IVueLazyLoadingOptions = ILazyLoadingOptions;

// These exports should be kept in sync with the exports listed in the section "Public types for end users" of common-js/src/index.ts!

export { PollingMode } from "configcat-common";

export type { IOptions } from "configcat-common";

export type {
  IAutoPollOptions,
  IManualPollOptions,
  ILazyLoadingOptions,
} from "configcat-common";

export { DataGovernance } from "configcat-common";

export type { IConfigCatLogger } from "configcat-common";

export type { LogEventId, LogMessage } from "configcat-common";

export { LogLevel } from "configcat-common";

export { FormattableLogMessage } from "configcat-common";

export type { IConfigCatCache } from "configcat-common";

export type {
  IConfig,
  ISetting,
  ITargetingRule,
  IPercentageOption,
  SettingValue,
  VariationIdValue,
} from "configcat-common";

export { SettingType, Comparator } from "configcat-common";

export type {
  IConfigCatClient,
  IConfigCatClientSnapshot,
} from "configcat-common";

export { SettingKeyValue } from "configcat-common";

export type { IEvaluationDetails, SettingTypeOf } from "configcat-common";

export { User } from "configcat-common";

export type { FlagOverrides } from "configcat-common";

export { OverrideBehaviour } from "configcat-common";

export { RefreshResult } from "configcat-common";

export type { IProvidesHooks, HookEvents } from "configcat-common";

export { ClientReadyState } from "configcat-common";
