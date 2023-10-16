import * as configcatcommon from "configcat-common";
import FeatureWrapper from './components/FeatureWrapper.vue';
import ConfigCatPlugin from './plugins/ConfigCatPlugin';

import type {
  IAutoPollOptions,
  IConfigCatLogger,
  ILazyLoadingOptions,
  IManualPollOptions,
  LogLevel,
} from "configcat-common";

// Options used to configure the ConfigCat SDK in the case of Auto Polling mode.
export type IVueAutoPollOptions = IAutoPollOptions;

// Options used to configure the ConfigCat SDK in the case of Manual Polling mode.
export type IVueManualPollOptions = IManualPollOptions;

// Options used to configure the ConfigCat SDK in the case of Lazy Loading mode.
export type IVueLazyLoadingOptions = ILazyLoadingOptions;

// These exports should be kept in sync with the exports listed in the section "Public types for end users" of common-js/src/index.ts!


export type {
  IOptions,
  IAutoPollOptions,
  IManualPollOptions,
  ILazyLoadingOptions,
  IConfigCatLogger,
  LogEventId,
  LogMessage,
  IConfigCatCache,
  IConfig,
  ISetting,
  ITargetingRule,
  IPercentageOption,
  SettingValue,
  VariationIdValue,
  IConfigCatClient,
  IConfigCatClientSnapshot,
  IEvaluationDetails,
  SettingTypeOf,
  FlagOverrides,
  IProvidesHooks,
  HookEvents,
} from "configcat-common";

export { 
  PollingMode,
  DataGovernance,
  LogLevel,
  FormattableLogMessage,
  SettingType,
  Comparator,
  SettingKeyValue,
  User,
  OverrideBehaviour,
  RefreshResult,
  ClientReadyState,
 } from "configcat-common";

 export function createConsoleLogger(logLevel: LogLevel): IConfigCatLogger {
  return configcatcommon.createConsoleLogger(logLevel);
 }

 export function createFlagOverridesFromMap(map: { [name: string]: NonNullable<configcatcommon.SettingValue>; }, behaviour: configcatcommon.OverrideBehaviour) {
  return new configcatcommon.FlagOverrides(new configcatcommon.MapOverrideDataSource(map), behaviour);
}

export { FeatureWrapper, ConfigCatPlugin };
