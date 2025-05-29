import { IpcRendererEvent } from "electron";

const electron = require("electron");

interface Statistics {
  cpuUsage: number;
  ramUsage: number;
  storageUsage: number;
}

electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback: (statistics: Statistics) => void) => {
    electron.ipcRenderer.on(
      "statistics",
      (_: IpcRendererEvent, stats: Statistics) => {
        callback(stats);
      }
    );
    callback({} as Statistics);
  },
  getStaticData: () => electron.ipcRenderer.invoke("getStaticData"),
});
