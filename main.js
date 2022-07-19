const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800, // width of the window
    height: 600, // height of the window
    frame: false, // remove the frame
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  win.loadFile('index.html')
//   win.webContents.openDevTools() // open dev tools
}

app.on('ready', createWindow) // when the app is ready, create the window

