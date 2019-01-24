const electron = require('electron');
const {
  autoUpdater
} = require('electron-updater');
const isDev = require('electron-is-dev');
const path = require('path');

autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';

autoUpdater.on('checking-for-update', () => {
  console.log("Checking for updates....");
});

autoUpdater.on('update-available', (info) => {
  console.log("Update available");
  console.log("Version: ", info.version);
  console.log("Release date: ", info.releaseDate);
});

autoUpdater.on('update-not-available', () => {
  console.log("Update not available");
});

autoUpdater.on('download-progress', (progress) => {
  console.log(`Progress: ${Math.floor(progress.percent)}`);
});

autoUpdater.on('update-downloaded', () => {
  console.log("Update Downloaded");
  autoUpdater.quitAndInstall();
});

autoUpdater.on('error', (error) => {
  console.log(error);
});

const windows = {};

electron.app.on('ready', () => {
  if (!isDev) {
    autoUpdater.chekForUpdate();
  }
  windows.main = new electron.BrowserWindow({
    width: 800,
    height: 600
  });
  windows.main.loadURL(url.format({
    pathname: path.join(__dirname, 'fighter-jet.html'),
    protocol: 'file:',
    slashes: true
  }));

  windows.main.on('closed', () => {
    win = null
  });
});