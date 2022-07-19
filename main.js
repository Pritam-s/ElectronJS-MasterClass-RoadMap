const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800, // width of the window
    height: 600, // height of the window
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  win.loadFile('index.html')
//   win.webContents.openDevTools() // open dev tools
}

app.on('ready', createWindow) // when the app is ready, create the window

app.on('browser-window-created', () => {console.warn("browser-window-created")})
//when a browser window is created, log a message to the console

app.on('browser-window-focus', () => {console.warn("browser-window-focus")})
//when a browser window is focused, log a message to the console

app.on('before-quit', () => {console.warn("App is about to exit")})
//when the app is about to quit, log a message to the console