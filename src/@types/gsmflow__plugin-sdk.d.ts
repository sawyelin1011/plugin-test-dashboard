declare module '@gsmflow/plugin-sdk' {
  export interface PluginContext {
    pluginId: string;
    version: string;
    config: Record<string, unknown>;
    registerHook: (hookName: string, data: unknown) => void;
    unregisterHook: (hookName: string) => void;
    emit: (eventName: string, data?: unknown) => void;
    on: (eventName: string, handler: (data: unknown) => void) => void;
  }

  export interface PluginDefinition {
    id: string;
    name: string;
    version: string;
    onLoad?: (context: PluginContext) => Promise<void> | void;
    onUnload?: (context: PluginContext) => Promise<void> | void;
    onEnable?: (context: PluginContext) => Promise<void> | void;
    onDisable?: (context: PluginContext) => Promise<void> | void;
  }

  export function definePlugin(definition: PluginDefinition): PluginDefinition;
}
