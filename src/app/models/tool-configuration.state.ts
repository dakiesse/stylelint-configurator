export type UserToolConfigurationState = {
  extend?: string,
  rules: { [key: string]: any }
}

export type PresetToolConfigurationState = UserToolConfigurationState

export type ToolConfigurationState = {
  userSettings: UserToolConfigurationState
  presetSettings: PresetToolConfigurationState
}
