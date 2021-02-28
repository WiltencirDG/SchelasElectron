const electron = require("electron")
const { blockWindowAds, adBlocker } = require('electron-ad-blocker');

const app = electron.app
const BrowserWindow = electron.BrowserWindow
let win

let winWidth = 300;
let winHeight = 100;

const options = {
  verbose: true,
  logger: console,
};

function createWindow() {
    let display = electron.screen.getPrimaryDisplay();
    let width = display.bounds.width;
    let height = display.bounds.height;
  win = new BrowserWindow({ width: winWidth, height: winHeight, frame: false, resizable: true, parent: 'right', x: width-winWidth, y:height-winHeight-(winHeight/2), webPreferences:{webviewTag:true, devTools: true}, movable: true})
  win.loadURL(`file://${__dirname}/index.html`)
  win.setAlwaysOnTop(true)
  win.on("closed", () => {
    win = null
  })
  blockWindowAds(mainWindow, options);
}

app.on("ready", createWindow)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

