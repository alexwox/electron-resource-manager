import { IpcRendererEvent } from "electron";

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => {
    electron.ipcRenderer.on(
      "statistics",
      (_: IpcRendererEvent, stats: Statistics) => {
        callback(stats);
      }
    );
    callback({} as Statistics);
  },
  getStaticData: () => electron.ipcRenderer.invoke("getStaticData"),
} satisfies Window["electron"]);
