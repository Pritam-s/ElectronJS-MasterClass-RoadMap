const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 200, // width of the window
    height: 500, // height of the window
    backgroundColor: "#C4C4C4", // background color of the window
    alwaysOnTop: true, // make the window always on top
    title:"Electron MasterClass", // title of the window
    resizable: false, // disable resizing of the window
    frame: false, // remove the window frame
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
//   win.webContents.openDevTools() // open dev tools
}

app.whenReady().then(createWindow)