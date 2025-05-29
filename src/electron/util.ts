import { ipcMain } from "electron";

export function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

function ipcHandle<Key extends keyof EventPayloadMapping>(
  //Use this wrapper and never ipcMain.handle() directly.
  key: Key,
  handler: () => EventPayloadMapping[Key]
) {
  ipcMain.handle(key, () => handler());
}
